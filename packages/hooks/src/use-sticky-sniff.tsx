import { useEffect, useState } from "react";

export function useStickySniff(ref: React.RefObject<HTMLElement | null>) {
    const [isSticky, setIsSticky] = useState(false);
    const [headerHeight, setHeaderHeight] = useState<string | null>(null);

    useEffect(() => {
        const headerHeightObserver = new MutationObserver(() => {
            const value = `-${getComputedStyle(document.documentElement).getPropertyValue("--header-height").trim()}`;
            console.log(value);
            setHeaderHeight(value);
        });

        headerHeightObserver.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["style"]
        });

        return () => headerHeightObserver.disconnect();;
    }, []);

    useEffect(() => {
        if (!ref?.current || !headerHeight) return;
        const intersectionObserver = new IntersectionObserver(([entry]) => {
            setIsSticky(entry.intersectionRect.top <= entry.rootBounds?.top!);
        }, {
            rootMargin: `${headerHeight} 0px 0px 0px`,
            threshold: [1]
        });

        intersectionObserver.observe(ref.current);

        return () => intersectionObserver.disconnect();
    },[ref, headerHeight])

    return { isSticky };
}