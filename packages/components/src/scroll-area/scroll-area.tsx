import { cn } from "@packages/utils";
import "./scroll-area.css";

export type ScrollAreaProps = {
    direction?: "horizontal" | "vertical" | "both";
    children: React.ReactNode;
}

export const ScrollArea = ({ direction = "vertical", children }: ScrollAreaProps) => {
    return (
        <div className={cn("scroll-area", `scroll-area-${direction}`)}>
            <div className="scroll-area-content">
                {children}
            </div>
        </div>
    );
}