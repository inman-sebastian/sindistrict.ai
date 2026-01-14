import "./grid.css";

export function Grid({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid">
            {children}
            {children}
        </div>
    );
}

export function GridItem({ children }: { children: React.ReactNode }) {
    return <div className="grid-item">{children}</div>;
}
