import { createContext, useContext, cloneElement, useState, useMemo, isValidElement } from "react";
import { cn } from "@packages/utils";
import { Image } from "../image";
import { Surface } from "../surface";
import "./carousel.css";

const CarouselContext = createContext<{
    currentSlideIndex: number;
    setCurrentSlideIndex: (slideIndex: number) => void;
}>({
    currentSlideIndex: 0,
    setCurrentSlideIndex: () => {}
});

export function useCarousel() {
    return useContext(CarouselContext);
}

export type CarouselProps = {
    value?: number;
    children: React.ReactElement<CarouselSlideProps>[];
}

export function Carousel({ value = 0, children }: CarouselProps) {
    const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(value);

    const slides = useMemo(() => {
        return children.filter((child) => isValidElement(child) && child.type === CarouselSlide).map((slide, index) => cloneElement(slide, { key: index, index }));
    }, [children]);

    const handleIndicatorClick = (slideIndex: number) => setCurrentSlideIndex(slideIndex);

    return (
        <CarouselContext.Provider value={{ currentSlideIndex, setCurrentSlideIndex }}>
            <Surface className="carousel" aria-roledescription="carousel">
                <div className="carousel-slides" aria-live="polite">
                    {slides}
                </div>
                {slides.length > 1 && (
                    <div className="carousel-controls">
                        <div className="carousel-control carousel-control-indicators">
                            <nav className="carousel-indicators">
                                {slides.map((_, index) => (
                                    <button key={index} className={cn("carousel-indicator", index === currentSlideIndex ? "active" : "")} onClick={() => handleIndicatorClick(index)} />
                                ))}
                            </nav>
                        </div>
                    </div>
                )}
            </Surface>
        </CarouselContext.Provider>
    );
}

export type CarouselSlideProps = {
    index?: number;
    image?: string;
    className?: string;
    children: React.ReactNode;
};

export function CarouselSlide({ index, image, className, children, ...rest }: CarouselSlideProps) {
    const { currentSlideIndex } = useCarousel();
    return (
        <div className={cn("carousel-slide", className, currentSlideIndex === index ? "active" : "")} role="group" aria-roledescription="slide" {...rest}>
            <div className="carousel-slide-content">
                {children}
            </div>
            {image && <Image className="carousel-slide-background-image" src={image} loading={currentSlideIndex === index ? "eager" : "lazy"} />}
        </div>
    );
}