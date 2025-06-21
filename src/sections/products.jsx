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
                <h1 className="text-white font-milk xl:text-6xl text-5xl md:mb-3 mb-8 transition-all duration-500">PRODUCTS</h1>
                <Carousel className="xl:w-5xl lg:w-4xl md:w-2xl sm:w-md w-xs transition-all duration-500">
                    <CarouselContent className="flex justify-start items-center">
                        <CarouselItem className="">
                            <Card className="bg-[#00000079] border-none backdrop-blur-xs">
                                <CardContent className="flex flex-col justify-center items-center md:aspect-video aspect-square">
                                    <div className="flex w-full h-full md:flex-row flex-col justify-center items-center">
                                        <div className="flex justify-center items-center">
                                            <img src="/assets/Icons/friedchicken.png" className="xl:w-90 lg:w-75 md:w-65 md:mb-0 mb-8 sm:w-70 w-50 transition-all duration-500"/>
                                        </div>
                                        <div className="flex flex-col md:items-start items-center md:ml-5 ml-0">
                                            <h1 className="xl:text-6xl lg:text-5xl sm:text-4xl text-2xl font-milk-cursive text-white mb-3 transition-all duration-500">Crispy Fried Chicken</h1>
                                            <h6 className="xl:text-lg sm:text-base text-xs font-milk-cursive text-yellow-400 transition-all duration-500">Php 40.00/pc</h6>
                                        </div>
                                    </div>
                                    <h6 className="text-white xl:text-lg sm:text-base text-xs font-milk-cursive">1</h6>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="">
                            <Card className="bg-[#00000079] border-none backdrop-blur-xs">
                                <CardContent className="flex flex-col justify-center items-center md:aspect-video aspect-square">
                                    <div className="flex w-full h-full md:flex-row flex-col justify-center items-center">
                                        <div className="flex justify-center items-center">
                                            <img src="/assets/Icons/ngohiong.png" className="xl:w-100 lg:w-85 md:w-75 sm:w-60 w-45 md:mb-0 mb-5 transition-all duration-500"/>
                                        </div>
                                        <div className="flex flex-col md:items-start items-center md:ml-10 ml-0">
                                            <div className="xl:text-7xl lg:text-6xl sm:text-5xl text-3xl font-milk-cursive text-white mb-3 transition-all duration-500">Ngohiong</div>
                                            <div className="xl:text-lg sm:text-base text-xs font-milk-cursive text-yellow-400 transition-all duration-500">Php 10.00/pc</div>
                                        </div>
                                    </div>
                                    <h6 className="text-white xl:text-lg sm:text-base text-xs font-milk-cursive">2</h6>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="">
                            <Card className="bg-[#00000079] border-none backdrop-blur-xs">
                                <CardContent className="flex flex-col justify-center items-center md:aspect-video aspect-square">
                                    <div className="flex w-full h-full md:flex-row flex-col justify-center items-center">
                                        <div className="flex justify-center items-center">
                                            <img src="/assets/Icons/meatball.png" className="xl:w-100 lg:w-85 md:w-75 sm:w-60 w-45 md:mb-0 mb-5 transition-all duration-500"/>
                                        </div>
                                        <div className="flex flex-col md:items-start items-center md:ml-8 ml-0">
                                            <div className="xl:text-7xl lg:text-6xl sm:text-5xl text-3xl font-milk-cursive text-white mb-3 transition-all duration-500">Bola-bola</div>
                                            <div className="xl:text-lg sm:text-base text-xs font-milk-cursive text-yellow-400 transition-all duration-500">Php 10.00/pc</div>
                                        </div>
                                    </div>
                                    <h6 className="text-white xl:text-lg sm:text-base text-xs font-milk-cursive">3</h6>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="">
                            <Card className="bg-[#00000079] border-none backdrop-blur-xs">
                                <CardContent className="flex flex-col justify-center items-center md:aspect-video aspect-square">
                                    <div className="flex w-full h-full md:flex-row flex-col justify-center items-center">
                                        <div className="flex justify-center items-center">
                                            <img src="/assets/Icons/siomai.png" className="xl:w-85 lg:w-65 md:w-55 sm:w-50 w-40 md:mb-0 mb-5 transition-all duration-500"/>
                                        </div>
                                        <div className="flex flex-col md:items-start items-center md:ml-8 ml-0">
                                            <div className="xl:text-7xl lg:text-6xl sm:text-5xl text-3xl font-milk-cursive text-white mb-3 transition-all duration-500">Siomai</div>
                                            <div className="xl:text-lg sm:text-base text-xs font-milk-cursive text-yellow-400 transition-all duration-500">Php 30.00/4pc</div>
                                        </div>
                                    </div>
                                    <h6 className="text-white xl:text-lg sm:text-base text-xs font-milk-cursive">4</h6>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="">
                            <Card className="bg-[#00000079] border-none backdrop-blur-xs">
                                <CardContent className="flex flex-col justify-center items-center md:aspect-video aspect-square">
                                    <div className="flex w-full h-full md:flex-row flex-col justify-center items-center">
                                        <div className="flex justify-center items-center">
                                            <img src="/assets/Icons/lumpia.png" className="xl:w-95 lg:w-85 md:w-70 sm:w-75 w-50 md:mb-0 mb-8 transition-all duration-500"/>
                                        </div>
                                        <div className="flex flex-col md:items-start items-center md:ml-8 ml-0">
                                            <div className="xl:text-6xl lg:text-5xl sm:text-4xl text-2xl font-milk-cursive text-white mb-3 transition-all duration-500">Lumpiang Shanghai</div>
                                            <div className="xl:text-lg sm:text-base text-xs font-milk-cursive text-yellow-400 transition-all duration-500">Php 8.00/pc</div>
                                        </div>
                                    </div>
                                    <h6 className="text-white xl:text-lg sm:text-base text-xs font-milk-cursive">5</h6>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="bg-[#0000007c] border-none hover:bg-[#000000e3] cursor-pointer text-white hover:text-white sm:flex justify-center hidden"/>
                    <CarouselNext className="bg-[#0000007c] border-none hover:bg-[#000000e3] cursor-pointer text-white hover:text-white sm:flex justify-center hidden"/>
                    <h1 className="sm:hidden block text-xs text-white mt-8 font-garet text-center">Swipe left and right</h1>
                </Carousel>
            </div>
        </div>
    );
}

export default products;