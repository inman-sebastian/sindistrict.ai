import "./image.css";
import { cn } from "@packages/utils";
import { Skeleton } from "../skeleton";
import { useEffect, useState } from "react";

export type ImageProps = {
    src?: string;
    alt?: string;
    className?: string;
}

function ImageElement({ src, alt, className }: ImageProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [showSkeleton, setShowSkeleton] = useState(true);
    const [image, setImage] = useState<HTMLImageElement | null>(null);

    useEffect(() => {
        if (!src) return;
        const img = new Image();
        img.src = src;
        if (img.complete) {
            setIsLoading(false);
            setShowSkeleton(false);
            setImage(img);
        } else {
            img.onload = () => {
                setIsLoading(false);
                setImage(img);
            };
            img.onerror = () => {
                setIsLoading(false);
                setShowSkeleton(false);
            };
        }
    }, [src]);

    useEffect(() => {
        !isLoading && setTimeout(() => setShowSkeleton(false), 1000);
    }, [isLoading]);

    return (
        <picture className={cn("image", className)} data-loading={isLoading}>
            <img src={src} alt={alt ?? ""} draggable="false" onDragStart={(e) => e.preventDefault()} />
            {showSkeleton && <Skeleton />}
        </picture>
    )

}

ImageElement.displayName = "Image";
export { ImageElement as Image };