import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export default function PhotographyPage() {
    return (
            <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
            <p className="text-2xl font-bold">Photos I took whilst bored</p>
            <p className="text-lg" >All these photos were taken on a iPhone 12 Pro Max.</p>
            <Carousel className="w-[350px] content-center justify-center">
                <CarouselPrevious />
                <CarouselContent>
                    <CarouselItem className="content-center justify-center">
                        <img src="/APC_0108-hdr.png" alt="Image 1" className="rounded-lg"/>
                    </CarouselItem>
                    <CarouselItem className="content-center justify-center">
                        <img src="/APC_0147-hdr.png" alt="Image 2" className="rounded-lg"/>
                    </CarouselItem>
                    <CarouselItem className="content-center justify-center">
                        <img src="/APC_0222-hdr.png" alt="Image 3" className="rounded-lg"/>
                    </CarouselItem>
                </CarouselContent>
                <CarouselNext />
            </Carousel>
        </div>
    );
}
