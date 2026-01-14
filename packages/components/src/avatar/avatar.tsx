import { Image } from "../image";
import "./avatar.css";

export type AvatarProps = {
    size?: "sm" | "md" | "lg" | "full";
    shape?: "circle" | "square" | "rounded" | "squircle";
    src?: string;
    alt?: string;
}

export function Avatar({ size = "md", shape = "circle", src, alt }: AvatarProps) {
    return <Image className={`avatar avatar-${shape} avatar-${size}`} src={src} alt={alt} />;
}