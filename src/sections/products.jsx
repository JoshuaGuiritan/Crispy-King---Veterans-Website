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
            <h1 className="font-milk-cursive mb-5 xl:text-9xl lg:text-8xl text-7xl bg-clip-text text-transparent bg-gradient-to-tl from-[#eec54b] to-[#ffb300] transition-all duration-500">Products</h1>
            <Carousel className="xl:w-5xl lg:w-4xl w-60 transition-all duration-500">
                <CarouselContent className="flex justify-center items-center">
                    <CarouselItem className="h-[300px]">
                        <div className="">
                        <Card className="">
                            <CardContent className="flex aspect-square items-center justify-center">
                            <span className="text-4xl font-semibold"></span>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="">
                        <div className="">
                        <Card className="shadow-sm">
                            <CardContent className="flex aspect-square items-center justify-center">
                            <span className="text-4xl font-semibold"></span>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="">
                        <div className="">
                        <Card className="shadow-sm">
                            <CardContent className="flex aspect-square items-center justify-center">
                            <span className="text-4xl font-semibold"></span>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="">
                        <div className="">
                        <Card className="shadow-sm">
                            <CardContent className="flex aspect-square items-center justify-center">
                            <span className="text-4xl font-semibold"></span>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="">
                        <div className="">
                        <Card className="shadow-sm">
                            <CardContent className="flex aspect-square items-center justify-center">
                            <span className="text-4xl font-semibold"></span>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="ml-3 w-7 h-7"/>
                <CarouselNext className="mr-3 w-7 h-7"/>
            </Carousel>
        </div>
    );
}

export default products;