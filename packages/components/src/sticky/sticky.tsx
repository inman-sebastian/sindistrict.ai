import "./sticky.css";

export type StickyProps = {
    children?: React.ReactNode;
}

export function Sticky({ children }: StickyProps) {
    return (
        <div className="sticky">
            {children}
        </div>
    );
}