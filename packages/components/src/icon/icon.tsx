import { icons as LucideIcons } from "lucide-react";
import * as UntitledUiIcons from "@untitledui/icons";
import { cn } from "@packages/utils";

import "./icon.css";

export type LucideIconName = keyof typeof LucideIcons;
export type UntitledUiIconName = keyof typeof UntitledUiIcons;

type LucideIconProps = {
    type: "lucide";
    name: LucideIconName;
};

type UntitledUiIconProps = {
    type: "untitledui";
    name: UntitledUiIconName;
};

export type IconProps = (LucideIconProps | UntitledUiIconProps) & {
    inline?: boolean;
    size?: "sm" | "md" | "lg" | "xl";
    className?: string;
};

export function Icon({ type, name, size = "md", inline = false, className, ...props }: IconProps) {
    type DerivedIconComponent = LucideIconProps["type"] extends "lucide" 
        ? (typeof LucideIcons)[LucideIconName] 
        : (typeof UntitledUiIcons)[UntitledUiIconName];

    type DerivedIconProps = LucideIconProps["type"] extends "lucide" 
        ? Omit<React.ComponentProps<(typeof LucideIcons)[LucideIconName]>, "className"> 
        : Omit<React.ComponentProps<(typeof UntitledUiIcons)[UntitledUiIconName]>, "className">;

    const { ...restProps } = props as DerivedIconProps;

    switch (type) {
        case "lucide": {
            const LucideIconComponent = LucideIcons[name] as DerivedIconComponent;
            return (
                <span className="icon-wrapper">
                    <LucideIconComponent className={cn("icon", inline ? "icon-inline" : "", `icon-${size}`, className)} {...restProps} />
                </span>
            );
        }
        case "untitledui": {
            const UntitledUiIconComponent = UntitledUiIcons[name] as DerivedIconComponent;
            return (
                <span className="icon-wrapper">
                    <UntitledUiIconComponent className={cn("icon", inline ? "icon-inline" : "", `icon-${size}`, className)} {...restProps} />
                </span>
            );
        }
    }
}
