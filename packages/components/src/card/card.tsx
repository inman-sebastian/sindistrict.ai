import { Surface } from "../surface";
import { cn } from "@packages/utils";

import "./card.css";

export type CardProps = {
    className?: string;
    children?: React.ReactNode;
}

export function Card({ className, children }: CardProps) {
    return (
        <Surface className={cn("card", className)}>
            {children}
        </Surface>
    );
}
