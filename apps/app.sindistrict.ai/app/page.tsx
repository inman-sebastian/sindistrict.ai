import { Carousel, CarouselSlide } from "@packages/components";

export default function Home() {
    return (
        <>
            <Carousel id="promo-banner">
                <CarouselSlide backgroundImage="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                    <h1>Slide 01</h1>
                </CarouselSlide>
                <CarouselSlide>
                    <h1>Slide 02</h1>
                </CarouselSlide>
                <CarouselSlide>
                    <h1>Slide 03</h1>
                </CarouselSlide>
                <CarouselSlide>
                    <h1>Slide 04</h1>
                </CarouselSlide>
                <CarouselSlide>
                    <h1>Slide 05</h1>
                </CarouselSlide>
            </Carousel>
        </>
    );
    // return (
    //     <div>
    //         <h1>app.sindistrict.ai</h1>
    //         <UserButton />
    //     </div>
    // )
}