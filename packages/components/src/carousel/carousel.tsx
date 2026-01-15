import { useEffect, useState, useMemo, useRef, useCallback, type AriaAttributes } from "react";
import { useId } from "@packages/hooks";
import { cn } from "@packages/utils";
import { Icon } from "../icon";
import { Image } from "../image";
import { Surface } from "../surface";
import "./carousel.css";

export type CarouselProps = {
    id?: string
    autoplay?: boolean;
    autoplayInterval?: number;
    children: 
        | React.ReactElement<Omit<CarouselSlideProps, "index">> 
        | React.ReactElement<Omit<CarouselSlideProps, "index">>[];
}

export function Carousel({ children, ...props }: CarouselProps) {
    const { id, autoplay = true, autoplayInterval = 8000 } = props;

    const uniqueId = id ?? useId({ prefix: "carousel" });

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoplayDisabled, setIsAutoplayDisabled] = useState(false);

    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const childrenArray = useMemo(() => Array.isArray(children) ? children : [children], [children]);
    const totalSlides = useMemo(() => childrenArray.length, [childrenArray]);

    const handlePrev = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setCurrentIndex((prevIndex) => {
            const newIndex = (prevIndex - 1 + totalSlides) % totalSlides;
            setIsAutoplayDisabled(true);
            return newIndex;
        });
    }, [totalSlides]);

    const handleNext = useCallback((event?: React.MouseEvent<HTMLButtonElement>) => {
        if (event) {
            event.preventDefault();
            setCurrentIndex((prevIndex) => {
                const newIndex = (prevIndex + 1) % totalSlides;
                setIsAutoplayDisabled(true);
                return newIndex;
            });
        } else {
            // Autoplay - no manual interaction
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        }
    }, [totalSlides]);

    const handleIndicatorClick = useCallback((index: number, event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setCurrentIndex(index);
        setIsAutoplayDisabled(true);
    }, []);

    useEffect(() => {
        // Only run autoplay if it's enabled and hasn't been manually disabled
        if (autoplay && !isAutoplayDisabled) {
            intervalRef.current = setInterval(() => {
                handleNext();
            }, autoplayInterval);
        } else if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [autoplay, isAutoplayDisabled, autoplayInterval, handleNext]);

    return (
        <Surface id={uniqueId} className="carousel" aria-roledescription="carousel">
            <div id={`${uniqueId}-slides`} className="carousel-slides" aria-live={autoplay && !isAutoplayDisabled ? "off" : "polite"}>
                {childrenArray.map((child, index) => (
                    <CarouselSlide key={index} index={index} {...child.props} className={index === currentIndex ? "active" : ""} aria-label={`${index + 1} of ${totalSlides}`} />
                ))}
            </div>
            <div className="carousel-controls">
                <div className="carousel-control carousel-control-prev">
                    <button aria-controls={`${uniqueId}-slides`} aria-label="Previous slide" onClick={handlePrev}>
                        <Icon library="untitledui" name="ChevronLeft" />
                    </button>
                </div>
                <div className="carousel-control carousel-control-next">
                    <button aria-controls={`${uniqueId}-slides`} aria-label="Next slide" onClick={handleNext}>
                        <Icon library="untitledui" name="ChevronRight" />
                    </button>
                </div>
                <div className="carousel-control carousel-control-indicators">
                    <nav className="carousel-indicators">
                        {childrenArray.map((child, index) => (
                            <button key={index} className={cn("carousel-indicator", index === currentIndex ? "active" : "")} aria-controls={`${uniqueId}-slides`} aria-label={`${index + 1} of ${totalSlides}`} onClick={(event) => handleIndicatorClick(index, event)} />
                        ))}
                    </nav>
                </div>
            </div>
        </Surface>
    );
}

export type CarouselSlideProps = {
    index?: number;
    backgroundImage?: string;
    children: React.ReactNode;
    className?: string;
} & AriaAttributes;

export function CarouselSlide({ index, backgroundImage, className, children, ...props }: CarouselSlideProps) {
    return (
        <div className={cn("carousel-slide", className)} role="group" aria-roledescription="slide" {...props}>
            <div className="carousel-slide-content">
                {children}
            </div>
            {backgroundImage && <Image className="carousel-slide-background-image" src={backgroundImage} alt={`Background image for slide ${index! + 1}`} />}
        </div>
    );
}