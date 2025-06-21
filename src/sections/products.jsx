import { useState, useEffect } from "react"
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
        <div ref={products} className="w-screen h-screen bg-[url('/assets/Images/products-bg.jpeg')] bg-cover bg-no-repeat bg-center">
            <div className="w-full h-full flex flex-col bg-[#000000ad] justify-center items-center">
                <h1 className="text-white font-milk xl:text-6xl lg:text-5xl text-5xl xl:mb-5 lg:mb-4 mb-4 transition-all duration-500">PRODUCTS</h1>
                <Carousel className="xl:w-5xl lg:w-4xl md:w-3xl sm:w-lg w-sm transition-all duration-500">
                    <CarouselContent className="flex justify-start items-center">
                        <CarouselItem className="">
                            <Card className="bg-[radial-gradient(circle_at_top_left,_#da2113,_#b50000)] border-2 border-white">
                                <CardContent className="flex flex-col justify-center items-center md:aspect-video aspect-square">
                                    <div className="flex w-full h-full justify-center items-center">
                                        <div className="flex justify-center items-center">
                                            <img src="/assets/Icons/friedchicken.png" className="xl:w-90 lg:w-75 w-65 transition-all duration-500"/>
                                        </div>
                                        <div className="flex flex-col ml-5">
                                            <h1 className="xl:text-6xl lg:text-5xl text-4xl font-milk-cursive text-white mb-3 transition-all duration-500">Crispy Fried Chicken</h1>
                                            <h6 className="xl:text-lg text-base font-milk-cursive text-white transition-all duration-500">Php 40.00/pc</h6>
                                        </div>
                                    </div>
                                    <h6 className="text-white xl:text-lg text-base font-milk-cursive">1</h6>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="">
                            <Card className="bg-[radial-gradient(circle_at_top_left,_#da2113,_#b50000)] border-2 border-white">
                                <CardContent className="flex flex-col justify-center items-center md:aspect-video aspect-square">
                                    <div className="flex w-full h-full justify-center items-center">
                                        <div className="flex justify-center items-center">
                                            <img src="/assets/Icons/ngohiong.png" className="xl:w-100 lg:w-85 w-75 transition-all duration-500"/>
                                        </div>
                                        <div className="flex flex-col ml-10">
                                            <div className="xl:text-7xl lg:text-6xl text-5xl font-milk-cursive text-white mb-3 transition-all duration-500">Ngohiong</div>
                                            <div className="xl:text-lg text-base font-milk-cursive text-white transition-all duration-500">Php 10.00/pc</div>
                                        </div>
                                    </div>
                                    <h6 className="text-white xl:text-lg text-base font-milk-cursive">2</h6>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="">
                            <Card className="bg-[radial-gradient(circle_at_top_left,_#da2113,_#b50000)] border-2 border-white">
                                <CardContent className="flex flex-col justify-center items-center md:aspect-video aspect-square">
                                    <div className="flex w-full h-full justify-center items-center">
                                        <div className="flex justify-center items-center">
                                            <img src="/assets/Icons/meatball.png" className="xl:w-100 lg:w-85 w-75 transition-all duration-500"/>
                                        </div>
                                        <div className="flex flex-col ml-8">
                                            <div className="xl:text-7xl lg:text-6xl text-5xl font-milk-cursive text-white mb-3 transition-all duration-500">Meatball</div>
                                            <div className="xl:text-lg text-base font-milk-cursive text-white transition-all duration-500">Php 10.00/pc</div>
                                        </div>
                                    </div>
                                    <h6 className="text-white xl:text-lg text-base font-milk-cursive">3</h6>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="">
                            <Card className="bg-[radial-gradient(circle_at_top_left,_#da2113,_#b50000)] border-2 border-white">
                                <CardContent className="flex flex-col justify-center items-center md:aspect-video aspect-square">
                                    <div className="flex w-full h-full justify-center items-center">
                                        <div className="flex justify-center items-center">
                                            <img src="/assets/Icons/siomai.png" className="xl:w-85 lg:w-65 w-55 transition-all duration-500"/>
                                        </div>
                                        <div className="flex flex-col ml-8">
                                            <div className="xl:text-7xl lg:text-6xl text-5xl font-milk-cursive text-white mb-3 transition-all duration-500">Siomai</div>
                                            <div className="xl:text-lg text-base font-milk-cursive text-white transition-all duration-500">Php 10.00/pc</div>
                                        </div>
                                    </div>
                                    <h6 className="text-white xl:text-lg text-base font-milk-cursive">4</h6>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="">
                            <Card className="bg-[radial-gradient(circle_at_top_left,_#da2113,_#b50000)] border-2 border-white">
                                <CardContent className="flex flex-col justify-center items-center md:aspect-video aspect-square">
                                    <div className="flex w-full h-full justify-center items-center">
                                        <div className="flex justify-center items-center">
                                            <img src="/assets/Icons/lumpia.png" className="xl:w-95 lg:w-85 w-70 transition-all duration-500"/>
                                        </div>
                                        <div className="flex flex-col ml-8">
                                            <div className="xl:text-6xl lg:text-5xl text-4xl font-milk-cursive text-white mb-3 transition-all duration-500">Lumpiang Shanghai</div>
                                            <div className="xl:text-lg text-base font-milk-cursive text-white transition-all duration-500">Php 10.00/pc</div>
                                        </div>
                                    </div>
                                    <h6 className="text-white xl:text-lg text-base font-milk-cursive">5</h6>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="bg-[#0000007c] border-none hover:bg-[#000000e3] cursor-pointer text-white hover:text-white"/>
                    <CarouselNext className="bg-[#0000007c] border-none hover:bg-[#000000e3] cursor-pointer text-white hover:text-white"/>
                </Carousel>
            </div>
        </div>
    );
}

export default products;