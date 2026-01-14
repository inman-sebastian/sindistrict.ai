import { useRef, useEffect } from "react";
import "./static.css";

export type StaticProps = {
    seed?: number; // initial RNG seed
    noiseScale?: number; // relative resolution for noise (0..1)
    color?: [number, number, number]; // RGB tint 0-255
    alpha?: number; // 0..1 alpha for noise pixels
    burstChance?: number; // 0..1 probability of bright pixel
    enabled?: boolean; // whether animation runs
    scanline?: boolean; // enable faint scanline
    scanAlpha?: number; // scanline alpha 0..1
    scanSpeed?: number; // scanline speed multiplier
}

export function Static(props: StaticProps) {
    const ref = useRef<HTMLCanvasElement>(null);
    const {
        seed: propSeed,
        noiseScale: propNoiseScale = 0.5,
        color: propColor = [255, 255, 255],
        alpha: propAlpha = 0.0375,
        burstChance: propBurstChance = 0.002,
        enabled: propEnabled = true,
        scanline: propScanline = false,
        scanAlpha: propScanAlpha = 0.015,
        scanSpeed: propScanSpeed = 0.5,
    } = props;

    useEffect(() => {
        const canvas = ref.current;
        if (!canvas) return;

        const canvasEl = canvas as HTMLCanvasElement;
        const ctx = canvasEl.getContext("2d");
        if (!ctx) return;

        const ctxEl = ctx as CanvasRenderingContext2D;

        let rafId: number | null = null;

        const dpr = Math.max(1, window.devicePixelRatio || 1);

        // If disabled, clear the canvas and don't start animation
        if (!propEnabled) {
            const cc = canvas.getContext("2d");
            if (cc) {
                cc.clearRect(0, 0, canvas.width, canvas.height);
            }
            return;
        }

        // Respect user's reduced motion preference: render a single static frame
        const prefersReducedMotion = typeof window !== "undefined" &&
            typeof window.matchMedia === "function" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        // Render noise into a smaller offscreen buffer, then scale up to main canvas.
        const noiseScale = Math.max(0.05, Math.min(1, propNoiseScale));
        const offCanvas = document.createElement("canvas");
        const offCtx = offCanvas.getContext("2d") as CanvasRenderingContext2D;

        function resize() {
            const rect = canvasEl.getBoundingClientRect();
            // If the element rect is 0 (or unchanged due to CSS/layout issues),
            // fall back to viewport size so the canvas fills the screen.
            const rectWidth = Math.floor(rect.width);
            const rectHeight = Math.floor(rect.height);
            const width = Math.max(1, rectWidth || Math.floor(window.innerWidth));
            const height = Math.max(1, rectHeight || Math.floor(window.innerHeight));

            // Main canvas backing size in device pixels
            canvasEl.width = Math.floor(width * dpr);
            canvasEl.height = Math.floor(height * dpr);

            // Offscreen canvas is smaller (noise buffer)
            offCanvas.width = Math.max(1, Math.floor(width * noiseScale * dpr));
            offCanvas.height = Math.max(1, Math.floor(height * noiseScale * dpr));
        }

        resize();

        // ImageData buffer on offscreen canvas
        let imageData = offCtx.createImageData(offCanvas.width, offCanvas.height);

        // Fast xorshift RNG
        let seed = typeof propSeed === "number" ? (propSeed >>> 0) : 123456789;

        // prepare tint and alpha
        const tintR = Math.max(0, Math.min(255, Math.floor(propColor[0] ?? 255)));
        const tintG = Math.max(0, Math.min(255, Math.floor(propColor[1] ?? 255)));
        const tintB = Math.max(0, Math.min(255, Math.floor(propColor[2] ?? 255)));
        const pxAlpha = Math.max(0, Math.min(1, propAlpha));
        const alphaByte = Math.floor(pxAlpha * 255);
        const burstThreshold = Math.max(0, Math.min(255, Math.floor(propBurstChance * 256)));

        function fillNoiseFast(frame: number) {
            const data = imageData.data;
            const len = data.length;
            // use local refs for speed
            let s = seed + frame;
            for (let i = 0; i < len; i += 4) {
                // RNG based on bit ops
                s ^= s << 13;
                s ^= s >>> 17;
                s ^= s << 5;
                const rnd = (s >>> 0) & 255;
                // occasional bright pixel driven by burstChance
                const bright = rnd < burstThreshold;
                let v = bright ? 255 : rnd;

                // bias for CRT-ish look
                v = (v * 0.9) | 0;

                // apply tint
                const r = (v * (tintR / 255)) | 0;
                const g = (v * (tintG / 255)) | 0;
                const b = (v * (tintB / 255)) | 0;

                data[i] = r;
                data[i + 1] = g;
                data[i + 2] = b;

                // Set per-pixel alpha proportional to luminance so darker pixels
                // are more transparent and the canvas background remains visible.
                // This makes the canvas visually "transparent" except where
                // static pixels are present.
                const pixelAlpha = Math.floor(pxAlpha * (v / 255) * 255);
                data[i + 3] = Math.max(0, Math.min(255, pixelAlpha));
            }

            // update global seed
            seed = s;
        }

        let frame = 0;
        let resizeObserver: ResizeObserver | null = null;

        function renderFrame(nowFrame: number) {
            // Recreate imageData if offscreen size changed
            if (imageData.width !== offCanvas.width || imageData.height !== offCanvas.height) {
                imageData = offCtx.createImageData(offCanvas.width, offCanvas.height);
            }

            fillNoiseFast(nowFrame);

            // Put into offscreen then scale up to main canvas
            offCtx.putImageData(imageData, 0, 0);

            // ensure main canvas background is transparent
            try { canvasEl.style.backgroundColor = "transparent"; } catch (e) {}

            // Draw scaled to main canvas (canvasEl.width/height are device pixels)
            ctxEl.imageSmoothingEnabled = false;
            ctxEl.clearRect(0, 0, canvasEl.width, canvasEl.height);
            ctxEl.drawImage(offCanvas, 0, 0, canvasEl.width, canvasEl.height);

            // faint scanning line for realism (use device pixels)
            if (propScanline) {
                const scanY = Math.floor((nowFrame * propScanSpeed) % canvasEl.height);
                const rgba = `rgba(255,255,255,${Math.max(0, Math.min(1, propScanAlpha))})`;
                ctxEl.fillStyle = rgba;
                ctxEl.fillRect(0, scanY, canvasEl.width, Math.max(1, Math.floor(dpr)));
            }
        }

        function draw() {
            frame++;
            renderFrame(frame);
            rafId = requestAnimationFrame(draw);
        }

        if (prefersReducedMotion) {
            // Draw once immediately for reduced-motion, otherwise start RAF loop.
            frame++;
            renderFrame(frame);
            rafId = null;
        } else {
            rafId = requestAnimationFrame(draw);
        }

        // Prefer ResizeObserver for more accurate sizing (handles layout changes), fallback to window resize.
        if (typeof ResizeObserver !== "undefined") {
            resizeObserver = new ResizeObserver(() => {
                resize();
                imageData = offCtx.createImageData(offCanvas.width, offCanvas.height);
                if (prefersReducedMotion) {
                    frame++;
                    renderFrame(frame);
                }
            });
            resizeObserver.observe(canvasEl);
        } else {
            const onWinResize = () => {
                resize();
                imageData = offCtx.createImageData(offCanvas.width, offCanvas.height);
                if (prefersReducedMotion) {
                    frame++;
                    renderFrame(frame);
                }
            };
            window.addEventListener("resize", onWinResize);
            // keep reference for cleanup
            resizeObserver = null as any;
            (resizeObserver as any).__onWinResize = onWinResize;
        }

        return () => {
            if (rafId) cancelAnimationFrame(rafId);
            if (resizeObserver) {
                try { resizeObserver.disconnect(); } catch (e) {}
            } else {
                // fallback cleanup for window resize
                const onWin = (resizeObserver as any).__onWinResize;
                if (typeof onWin === "function") window.removeEventListener("resize", onWin);
            }
        };
    }, [ref, propEnabled, propNoiseScale, propSeed, propColor, propAlpha, propBurstChance, propScanline, propScanAlpha, propScanSpeed]);

    return <canvas ref={ref} aria-hidden="true" className="static" />
}