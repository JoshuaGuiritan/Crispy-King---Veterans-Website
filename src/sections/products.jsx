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
            <h1 className="font-milk mb-5 xl:text-9xl lg:text-8xl text-5xl text-gray-200 transition-all duration-500">Products</h1>
            <Carousel className="xl:w-5xl lg:w-4xl w-64 transition-all duration-500">
                <CarouselContent className="flex justify-start items-center">
                    <CarouselItem className="">
                        <Card className="bg-[#404040] border border-white">
                            <CardContent className="flex flex-col justify-center items-center aspect-square">
                                <div className="flex flex-col">
                                    <img src="/assets/Images/fried-chicken.jpeg" className="w-60"/>
                                    <div className="text-sm font-milk-cursive text-white mt-2">Crispy Fried Chicken</div>
                                    <div className="text-[8px] font-garet text-white">Php 40.00/pc</div>
                                </div>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className="">
                        <Card className="bg-[#404040] border border-white">
                            <CardContent className="flex flex-col justify-center items-center aspect-square">
                                <div className="flex flex-col">
                                    <img src="/assets/Images/tokwang.jpeg" className="w-60"/>
                                    <div className="text-sm font-milk-cursive text-white mt-2">Ngohiong</div>
                                    <div className="text-[8px] font-garet text-white">Php 10.00/pc</div>
                                </div>
                            </CardContent>
                        </Card>
                        
                    </CarouselItem>
                    <CarouselItem className="">
                        <Card className="bg-[#404040] border border-white">
                            <CardContent className="flex flex-col justify-center items-center aspect-square">
                                <div className="flex flex-col">
                                    <img src="/assets/Images/lumpia-shanghai.jpeg" className="w-60"/>
                                    <div className="text-sm font-milk-cursive text-white mt-2">Lumpiang Shanghai</div>
                                    <div className="text-[8px] font-garet text-white">Php 8.00/pc</div>
                                </div>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className="">
                        <Card className="bg-[#404040] border border-white">
                            <CardContent className="flex flex-col justify-center items-center aspect-square">
                                <div className="flex flex-col">
                                    <img src="/assets/Images/meatball.jpeg" className="w-60"/>
                                    <div className="text-sm font-milk-cursive text-white mt-2">MeatBall</div>
                                    <div className="text-[8px] font-garet text-white">Php 10.00/pc</div>
                                </div>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className="">
                        <Card className="bg-[#404040] border border-white">
                            <CardContent className="flex flex-col justify-center items-center aspect-square">
                                <div className="flex flex-col">
                                    <img src="/assets/Images/siomain.jpeg" className="w-60"/>
                                    <div className="text-sm font-milk-cursive text-white mt-2">Siomai</div>
                                    <div className="text-[8px] font-garet text-white">Php 30.00/4pc</div>
                                </div>
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