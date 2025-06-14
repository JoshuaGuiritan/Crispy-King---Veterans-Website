import { useState, useEffect } from "react";

const home = ({about, products}) => {
    
      const locationLink = "https://www.google.com/maps/place/Crispy+King+Veterans/@6.9080304,122.0787977,894m/data=!3m1!1e3!4m10!1m2!2m1!1scrispy+king!3m6!1s0x325041f9da4ee891:0xbeb14f99643146b6!8m2!3d6.90803!4d122.0802416!15sCgtjcmlzcHkga2luZ1oNIgtjcmlzcHkga2luZ5IBFGZhc3RfZm9vZF9yZXN0YXVyYW50qgFEEAEqDyILY3Jpc3B5IGtpbmcoADIeEAEiGkHFR-jv2lu_Zyy2nBQGWfP5sy8rpqOtvcDiMg8QAiILY3Jpc3B5IGtpbmfgAQA!16s%2Fg%2F11wbzchg7s?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D";
      
      const [img, setImg] = useState("bg-[url('/assets/Images/background-1.jpg')]");
      const [count, setCount] = useState(1);
      const [dropDown, setDropdown] = useState(false);
      const [hoverMenu, sethoverMenu] = useState("");
      const [hScreen, setHScreen] = useState("h-screen");
    
      const scrollAbout = () => {
        about.current?.scrollIntoView({behavior: "smooth"});
      }
    
      const scrollProducts = () => {
        products.current?.scrollIntoView({behavior: "smooth"});
      }

      const clickedMenu = () => {
        dropDown ? setDropdown(false) : setDropdown(true);
      }

      useEffect(() => {
        dropDown ? sethoverMenu("border border-gray-400") : sethoverMenu("");
        !dropDown ? setHScreen("h-screen") : setHScreen("h-120");
      },[dropDown]);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCount(counts => counts === 6 ? 1 : counts + 1);
        }, 20000);

        return () => clearInterval(interval);
      }, []);
    
      useEffect(() => {
        if(count === 1){
          setImg("bg-[url('/assets/Images/background-1.jpg')]");
        }
        else if(count === 2){
          setImg("bg-[url('/assets/Images/background-2.jpg')]");
        }
        else if(count === 3){
          setImg("bg-[url('/assets/Images/background-3.jpg')]");
        }
        else if(count === 4){
          setImg("bg-[url('/assets/Images/background-4.jpg')]");
        }
      }, [count]);

      return (
        <div className={`${img} w-screen h-screen bg-no-repeat bg-cover bg-center transition-all duration-700`}>
            <div className={`bg-[#000000b4] w-full h-full flex flex-col flex-start items-start`}>
                <div className="overflow-x-hidden w-full">
                    <div className="w-full h-24 flex justify-between absolute top-0">
                        <div className="w-50 h-full flex justify-start items-center">
                            <img src="/assets/Icons/cklogo.jpg" alt="crispyking logo" className="md:w-25 w-22 ml-8 transition-all duration-500 ease-out"/>
                        </div>
                        <div className="md:w-130 w-40 h-full text-white text-sm flex justify-end items-center font-garet transition-all duration-500 ease-out">
                            <a role="button" className="mr-10 md:block hidden cursor-pointer hover:text-gray-300" onClick={scrollAbout}>ABOUT</a>
                            <a role="button" className="mr-10 md:block hidden cursor-pointer hover:text-gray-300" onClick={scrollProducts}>PRODUCTS</a>
                            <a role="button" className="mr-10 md:block hidden cursor-pointer hover:text-gray-300">CONTACTS</a>
                            <a role="button" className="md:hidden block cursor-pointer" onClick={clickedMenu}>
                              <div className="mr-6 h-full">
                                <div className={`p-2 ${hoverMenu}`}>
                                  <img src="/assets/Icons/Menu-icon.png" alt="menu icon" className="w-10"/>
                                </div>
                              </div>
                            </a>
                        </div>
                    </div>
                    { dropDown && 
                      <div className="relative w-full mt-22 transition-all duration-1000">
                        <div className="md:hidden text-[14px] w-full h-50 bg-[#00000046] text-white flex flex-col justify-evenly items-center font-garet">
                          <a role="button" className="cursor-pointer hover:text-gray-300" onClick={scrollAbout}>ABOUT</a>
                          <a role="button" className="cursor-pointer hover:text-gray-300" onClick={scrollProducts}>PRODUCTS</a>
                          <a role="button" className="cursor-pointer hover:text-gray-300">CONTACTS</a>
                        </div>
                      </div>
                    }
                </div>
                
                <div className={`md:h-screen ${hScreen} w-full flex justify-center items-center md:flex-row flex-col transition-all duration-500 ease-out`}>
                    <div className="h-60 xl:w-185 lg:w-140 md:w-90 sm:w-145 w-110 flex flex-col justify-center md:items-start items-center">
                        <h1 className="font-milk text-white xl:text-7xl lg:text-5xl md:text-4xl sm:text-5xl text-[40px]">Veterans Branch</h1>
                        <h3 className="font-garet text-white xl:4xl lg:text-2xl md:text-xl sm:text-lg text-base">Zamboanga City</h3>
                        <div className="w-full md:h-31 h-25 flex md:justify-end justify-center md:items-center items-end">
                            <h3 className="font-milk-cursive text-ck-yellow lg:text-2xl md:text-base sm:xl text-lg md:relative md:top-2 md:left-14">Click here for location</h3>
                            <div className="relative top-13 md:block hidden">
                                <img src="/assets/Icons/yellow-arrow.png" className="lg:w-60 w-50" />
                            </div>
                        </div>
                    </div>
                    <a target="_blank" href={`${locationLink}`}>
                        <img src="/assets/Icons/Store.png" alt="store logo" className="xl:w-100 lg:w-90 md:w-80 sm:w-75 w-70 hover:scale-105 transition-all duration-500 ease-out" title="Crispy King - Veterans Bran Location via Google Maps"/>
                    </a>
                </div>
            </div>
      </div>
      );
}

export default home;
