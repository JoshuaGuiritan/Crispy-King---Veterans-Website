import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const products = ({products}) => {

    return(
        <div ref={products} className="w-screen h-screen flex flex-col bg-[#f4f4f4] justify-center items-center">
            <h1 className="font-milk-cursive font-extrabold mb-10 text-8xl text-[#ffcb2f]">Products</h1>
            <Carousel className="w-7xl">
                <CarouselContent>
                    <CarouselItem className="basis-1/3">
                        <div className="p-1">
                        <Card className="shadow-sm">
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-4xl font-semibold"></span>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/3">
                        <div className="p-1">
                        <Card className="shadow-sm">
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-4xl font-semibold"></span>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/3">
                        <div className="p-1">
                        <Card className="shadow-sm">
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-4xl font-semibold"></span>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/3">
                        <div className="p-1">
                        <Card className="shadow-sm">
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-4xl font-semibold"></span>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/3">
                        <div className="p-1">
                        <Card className="shadow-sm">
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-4xl font-semibold"></span>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext/>
            </Carousel>
        </div>
    );
}

export default products;