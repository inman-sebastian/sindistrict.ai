import { cn } from "@packages/utils";
import { useRouter, usePathname } from "next/navigation";
import { Avatar, type AvatarProps } from "../avatar";
import { Badge, type BadgeProps } from "../badge";
import { Icon, type IconProps } from "../icon";
import { useState } from "react";
import "./sidebar-item.css";

type SidebarItemWithIcon = {
    icon?: IconProps;
}

type SidebarItemWithAvatar = {
    avatar?: AvatarProps;
}

type SidebarItemWithBadge = {
    badge?: BadgeProps;
}

type SidebarItemLink = {
    href: string;
    children?: React.ReactNode;
}

type SidebarItemButton = {
    onClick: () => void;
    children?: React.ReactNode;
}

type SidebarItemNested = {
    open?: boolean;
    children: React.ReactElement<SidebarItemProps> | React.ReactElement<SidebarItemProps>[];
}

export type SidebarItemProps = (SidebarItemLink | SidebarItemButton | SidebarItemNested) & (SidebarItemWithIcon | SidebarItemWithAvatar) & SidebarItemWithBadge & {
    title: string;
    subtitle?: string;
    className?: string;
};

export function SidebarItem(props: SidebarItemProps) {
    const { children, className, title, subtitle, ...restProps } = props;
    const router = useRouter();
    const pathname = usePathname();

    const isActive = "href" in restProps ? pathname === restProps.href : false;
    const isOpen = "open" in restProps ? restProps.open : false;

    const [openState, setOpenState] = useState(isOpen);

    return "href" in restProps ? (
        <li className="sidebar-item sidebar-item-link">
            <a href={restProps.href} className={cn("sidebar-item-content", isActive && "active", className)}>
                {"avatar" in restProps && <Avatar {...restProps.avatar as AvatarProps} />}
                {"icon" in restProps && <Icon {...(restProps.icon as IconProps)} />}
                <span className="sidebar-item-text">
                    <span className="sidebar-item-title truncate">{title}</span>
                    {subtitle && <span className="sidebar-item-subtitle truncate">{subtitle}</span>}
                </span>
                {"badge" in restProps && <Badge {...(restProps.badge as BadgeProps)} />}
            </a>
        </li>
    ) : "onClick" in restProps ? (
        <li className="sidebar-item sidebar-item-button">
            <button className={cn("sidebar-item-content", className)} onClick={restProps.onClick}>
                {"avatar" in restProps && <Avatar {...restProps.avatar as AvatarProps} />}
                {"icon" in restProps && <Icon {...(restProps.icon as IconProps)} />}
                <span className="sidebar-item-text">
                    <span className="sidebar-item-title truncate">{title}</span>
                    {subtitle && <span className="sidebar-item-subtitle truncate">{subtitle}</span>}
                </span>
                {"badge" in restProps && <Badge {...(restProps.badge as BadgeProps)} />}
            </button>
        </li>
    ) : (
        <li className={cn("sidebar-item sidebar-item-nested", openState && "sidebar-item-open")}>
            <button className={cn("sidebar-item-content", className)} onClick={() => setOpenState(!openState)}>
                {"avatar" in restProps && <Avatar {...restProps.avatar as AvatarProps} />}
                {"icon" in restProps && <Icon {...(restProps.icon as IconProps)} />}
                <span className="sidebar-item-text">
                    <span className="sidebar-item-title truncate">{title}</span>
                    {subtitle && <span className="sidebar-item-subtitle truncate">{subtitle}</span>}
                </span>
                {"badge" in restProps && <Badge {...(restProps.badge as BadgeProps)} />}
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="sidebar-item-indicator">
                    <path d="m6 9 6 6 6-6" />
                </svg>
            </button>
            <div className="sidebar-item-children-container">
                <ul className="sidebar-item-children">
                    {children}
                </ul>
            </div>
        </li>
    );
}