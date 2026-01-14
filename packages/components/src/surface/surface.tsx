import { cn } from "@packages/utils";
import "./surface.css";

export type SurfaceProps = React.HTMLAttributes<HTMLDivElement> & {
    className?: string;
    children?: React.ReactNode;
}

export function Surface({ className, children }: SurfaceProps) {
    return (
        <div className={cn("surface", className)}>
            <div className="surface-content">
                {children}
            </div>
        </div>
    );
}