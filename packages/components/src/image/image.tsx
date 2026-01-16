import "./image.css";
import { cn } from "@packages/utils";
import { Skeleton } from "../skeleton";
import { useState, useEffect, useRef } from "react";

export type ImageProps = {
    src?: string;
    alt?: string;
    loading?: "eager" | "lazy";
    className?: string;
    onLoad?: () => void;
    onError?: () => void;
}

function ImageElement({ src, alt = "", loading = "lazy", className, onLoad, onError }: ImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [shouldShowSkeleton, setShouldShowSkeleton] = useState(true);
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        imageRef.current && imageRef.current.complete && handleLoad()
    }, [src])

    useEffect(() => {
        if (!isLoaded) return
        const timeout = setTimeout(() => setShouldShowSkeleton(false), 1000);
        return () => clearTimeout(timeout);
    }, [isLoaded])

    function handleLoad() {
        setIsLoaded(true);
        onLoad?.();
    }

    function handleError() {
        setIsLoaded(false);
        onError?.();
    }

    return (
        <picture className={cn("image", className)} data-loading={!isLoaded}>
            <img ref={imageRef} src={src} alt={alt} loading={loading} draggable="false" onDragStart={(e) => e.preventDefault()} onLoad={handleLoad} onError={handleError} />
            {shouldShowSkeleton && <Skeleton />}
        </picture>
    )

}

ImageElement.displayName = "Image";
export { ImageElement as Image };