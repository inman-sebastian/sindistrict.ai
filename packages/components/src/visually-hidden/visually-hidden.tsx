import "./visually-hidden.css";

export type VisuallyHiddenProps<T extends React.ElementType> = {
    as?: T;
    focusable?: boolean;
    children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function VisuallyHidden<T extends React.ElementType = "span">(props: VisuallyHiddenProps<T>) {
    const { as: Component = "span", focusable = ["a", "button"].includes(Component as string), children, ...restProps } = props;

    return (
        <Component className={focusable ? "visually-hidden-focusable" : "visually-hidden"} {...restProps}>
            {children}
        </Component>
    );
}

VisuallyHidden.displayName = "VisuallyHidden";
