import { icons as LucideIcons } from "lucide-react";
import * as UntitledUIIcons from "@untitledui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from '@fortawesome/fontawesome-svg-core'
import * as FontAwesomeSolidIcons from "@fortawesome/free-solid-svg-icons";
import * as FontAwesomeRegularIcons from "@fortawesome/free-regular-svg-icons";
import * as FontAwesomeBrandsIcons from "@fortawesome/free-brands-svg-icons";
import { cn } from "@packages/utils";
import { useMemo } from "react";
import "./icon.css";

config.autoAddCss = false;

type LucideIconProps = {
    library: "lucide";
    style?: React.CSSProperties;
    name: keyof typeof LucideIcons;
};

type UntitledUiIconProps = {
    library: "untitledui";
    style?: React.CSSProperties;
    name: keyof typeof UntitledUIIcons;
};

type FontAwesomeSolidIconProps = {
    library: "fontawesome";
    style?: "solid";
    name: RemovePrefix<keyof typeof FontAwesomeSolidIcons, "fa">;
};

type FontAwesomeRegularIconProps = {
    library: "fontawesome";
    style?: "regular";
    name: RemovePrefix<keyof typeof FontAwesomeRegularIcons, "fa">;
};

type FontAwesomeBrandsIconProps = {
    library: "fontawesome";
    style?: "brand";
    name: RemovePrefix<keyof typeof FontAwesomeBrandsIcons, "fa">;
};

type FontAwesomeIconProps = FontAwesomeSolidIconProps | FontAwesomeRegularIconProps | FontAwesomeBrandsIconProps;

export type IconProps = (LucideIconProps | UntitledUiIconProps | FontAwesomeIconProps) & {
    inline?: boolean;
    size?: "sm" | "md" | "lg" | "xl";
} & Omit<React.SVGProps<SVGSVGElement>, "style">;

export function Icon({ library, name, inline = false, size = "md", className, ...props }: IconProps) {
    const classes = useMemo(() => {
        return cn("icon", `icon-${library}`, `icon-${size}`, inline && "icon-inline", className);
    }, [inline, size, className]);

    let IconComponent: React.ReactNode | null = null;
    
    if (library === "lucide" && !("style" in props)) {
        const LucideIcon = LucideIcons[name];
        const { style, ...rest } = props;
        IconComponent = <LucideIcon className={classes} {...rest} />;
    }
    if (library === "untitledui" && !("style" in props)) {
        const UntitledUIIcon = UntitledUIIcons[name];
        const { style, ...rest } = props;
        IconComponent = <UntitledUIIcon className={classes} {...rest} />;
    }
    if (library === "fontawesome" && "style" in props) {
        const { style: iconStyle = "regular", ...rest } = props;
        const faIconName = `fa${name}`;

        const icon = iconStyle === "solid" ? 
            FontAwesomeSolidIcons[faIconName] : iconStyle === "regular" ? 
            FontAwesomeRegularIcons[faIconName] : 
            FontAwesomeBrandsIcons[faIconName];
        
        if (!icon) {
            console.warn(`[FontAwesomeIcon] Could not find icon: ${faIconName} in ${iconStyle} style`);
            IconComponent = null;
        }
        
        IconComponent = <FontAwesomeIcon icon={icon} className={classes} />;
    }

    return IconComponent;
}