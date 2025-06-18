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
            <h1 className="font-milk-cursive mb-10 xl:text-9xl lg:text-8xl text-7xl bg-clip-text text-transparent bg-gradient-to-tl from-[#eec54b] to-[#ffb300] transition-all duration-500">Products</h1>
            <Carousel className="xl:w-5xl lg:w-4xl w-xs transition-all duration-500" opts={{
        align: "center",
      }}>
                <CarouselContent className="h-[395px]">
                    <CarouselItem className="">
                        <div className="p-1">
                        <Card className="shadow-sm">
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-4xl font-semibold"></span>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="">
                        <div className="p-1">
                        <Card className="shadow-sm">
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-4xl font-semibold"></span>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="">
                        <div className="p-1">
                        <Card className="shadow-sm">
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-4xl font-semibold"></span>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="">
                        <div className="p-1">
                        <Card className="shadow-sm">
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-4xl font-semibold"></span>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="">
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