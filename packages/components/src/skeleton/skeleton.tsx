import { cn } from "@packages/utils";
import "./skeleton.css";

export type SkeletonProps = {
    className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
    return <div className={cn("skeleton", className)} />;
}

Skeleton.displayName = "Skeleton";