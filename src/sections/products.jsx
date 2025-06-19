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
        <div ref={products} className="w-screen h-screen flex flex-col bg-[#282828] justify-center items-center">
            <h1 className="font-milk-cursive mb-5 xl:text-9xl lg:text-8xl text-7xl bg-clip-text text-transparent bg-gradient-to-tl from-[#ffd966] to-[#ce9000] transition-all duration-500">Products</h1>
            <Carousel className="xl:w-5xl lg:w-4xl w-64 transition-all duration-500">
                <CarouselContent className="flex justify-start items-center">
                    <CarouselItem className="">
                        <Card className="bg-[#404040] border-none">
                            <CardContent className="flex aspect-square items-center justify-center">
                            <span className="text-4xl font-semibold text-white">1</span>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className="">
                        <Card className="bg-[#404040] border-none">
                            <CardContent className="flex aspect-square items-center justify-center">
                            <span className="text-4xl font-semibold text-white">2</span>
                            </CardContent>
                        </Card>
                        
                    </CarouselItem>
                    <CarouselItem className="">
                        <Card className="bg-[#404040] border-none">
                            <CardContent className="flex aspect-square items-center justify-center">
                            <span className="text-4xl font-semibold text-white">3</span>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className="">
                        <Card className="bg-[#404040] border-none">
                            <CardContent className="flex aspect-square items-center justify-center">
                            <span className="text-4xl font-semibold text-white">4</span>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className="">
                        <Card className="bg-[#404040] border-none">
                            <CardContent className="flex aspect-square items-center justify-center">
                            <span className="text-4xl font-semibold text-white">5</span>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="bg-[#555555] border-none hover:bg-[#4d4c4c] cursor-pointer text-gray-200 ml-1"/>
                <CarouselNext className="bg-[#555555] border-none hover:bg-[#4d4c4c] cursor-pointer text-gray-200 mr-1"/>
            </Carousel>
        </div>
    );
}

export default products;