import { cn } from "@packages/utils";
import "./container.css";

export type ContainerProps = {
    children: React.ReactNode;
    fluid?: boolean;
}

export const Container = ({ children, fluid }: ContainerProps) => {
    return (
        <div className={cn("container", fluid && "container-fluid", "mx-auto")}>
            {children}
        </div>
    );
};

Container.displayName = "Container";
