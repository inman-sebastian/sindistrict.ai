import { cn } from "@packages/utils";
import "./button.css";

export type ButtonProps = {
    style?: "solid" | "outline" | "ghost" | "link";
    variant?: "primary" | "secondary";
    children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ style="solid", variant = "primary", children, ...props }: ButtonProps) => {
    return (
        <button className={cn("button", `button-${style}`, `button-${variant}`)} {...props}>
            <span className="button-inner">{children}</span>
        </button>
    );
}

Button.displayName = "Button";
