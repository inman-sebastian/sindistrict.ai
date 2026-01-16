import { Carousel, CarouselSlide, Image } from "@packages/components";

export default function Home() {
    return (
        <>
            <Carousel id="promo-banner">
                <CarouselSlide image="https://images.unsplash.com/photo-1768157691814-238f75972a64?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                    <h1>Slide 01</h1>
                </CarouselSlide>
                <CarouselSlide image="https://images.unsplash.com/photo-1762692496722-de2a899e3af5?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                    <h1>Slide 02</h1>
                </CarouselSlide>
                <CarouselSlide image="https://images.unsplash.com/photo-1767321320442-b7afa2d10d44?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                    <h1>Slide 03</h1>
                </CarouselSlide>
                <CarouselSlide image="https://images.unsplash.com/photo-1763688506555-c73c1b944080?q=80&w=4032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                    <h1>Slide 04</h1>
                </CarouselSlide>
            </Carousel>
        </>
    );
}