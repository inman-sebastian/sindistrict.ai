import { useMemo } from "react";
import { cn } from "@packages/utils";
import "./radial-progress-bar.css";

export type RadialProgressBarProps = {
    value: number;
    max: number;
    className?: string;
}

export function RadialProgressBar({ value = 50, max = 100, className }: RadialProgressBarProps) {
    const progress = useMemo(() => Math.min(Math.max((value / max) * 100, 0), 100), [value, max]);

    return (
        <div className={cn("radial-progress-bar", className)} style={{ "--progress": progress } as React.CSSProperties}>
            <svg className="radial-progress-bar-svg" viewBox="0 0 120 120">
                <circle className="radial-progress-bar-svg-bg" cx="60" cy="60" r="54" pathLength="100" />
                <circle className="radial-progress-bar-svg-fg" cx="60" cy="60" r="54" pathLength="100" />
            </svg>
        </div>
    );
}