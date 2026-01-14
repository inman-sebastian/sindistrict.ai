import "./button.css";

export type ButtonProps = {
    children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...props }: ButtonProps) => {
    return (
        <button className="button" {...props}>
            <span className="button-inner">{children}</span>
        </button>
    );
}

Button.displayName = "Button";
