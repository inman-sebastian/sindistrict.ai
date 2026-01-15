import type { SidebarItemProps } from "../sidebar-item";
import { useLocalStorage } from "@packages/hooks";
import { cn } from "@packages/utils";
import "./sidebar.css";

export type SidebarProps = {
    position?: "left" | "right";
    children?: 
    | React.ReactElement<SidebarItemProps>
    | React.ReactElement<SidebarItemProps>[]
    | React.ReactElement<SidebarItemsProps>
    | React.ReactElement<SidebarItemsProps>[];
}

export function Sidebar({ position = "left", children }: SidebarProps) {
    const [isOpen, setIsOpen] = useLocalStorage(`sidebar-${position}-open`, true);

    return (
        <aside className={`sidebar sidebar-${position}`} aria-expanded={isOpen}>
            <div className="sidebar-content">
                {children}
            </div>
        </aside>
    );
}

export function SidebarHeader({ children }: { children: React.ReactNode }) {
    return (
        <div className="sidebar-header">
            {children}
        </div>
    );
}

export type SidebarItemsProps = {
    title?: string;
    className?: string;
    children: React.ReactNode;
}

export function SidebarItems({ title, className, children }: SidebarItemsProps) {
    return (
        <nav className={cn("sidebar-items", className)}>
            {title && <span className="sidebar-items-title">{title}</span>}
            <ul className="sidebar-items-list">
                {children}
            </ul>
        </nav>
    );
}

export function SidebarFooter({ children }: { children: React.ReactNode }) {
    return (
        <div className="sidebar-footer">
            {children}
        </div>
    );
}