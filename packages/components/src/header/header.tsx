import { Logo } from "../logo";
import { useUser, UserButton } from "@services/clerk";
import { useEffect, useRef } from "react";
import "./header.css";

export type HeaderProps = {
    children?: React.ReactNode;
}

export function Header({ children }: HeaderProps) {
    const { user } = useUser();
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!ref.current) return;
        const observer = new ResizeObserver(([entry]) => {
            const height = entry.target.getBoundingClientRect().height;
            document.documentElement.style.setProperty("--header-height", `${height}px`);
        });
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [ref.current]);

    return (
        <header ref={ref} className="header">
            <div className="header-content">
                <Logo />
                {children}
                <UserButton />
            </div>
        </header>
    );
}