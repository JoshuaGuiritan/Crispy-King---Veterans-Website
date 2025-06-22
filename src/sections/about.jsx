import FadeInSection from "/src/components/FadeInSection";

const about = ({about}) => {
    return(
        <div ref={about} className="w-screen h-screen bg-[radial-gradient(circle_at_top_left,_#da2113,_#b50000)] flex flex-col-reverse md:flex-row justify-center items-center transition-all duration-1000">
            <div className="flex flex-col justify-center items-center xl:mr-20 lg:mr-17 md:mr-10 md:mt-0 mt-6">
                <FadeInSection delay={300}><img src="/assets/Images/ckopening.png" className="border border-white xl:w-130 lg:w-120 md:w-105 sm:w-110 w-83 transition-all duration-500"/></FadeInSection>
                <h1 className="text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl-[16px] xl:text-base text-yellow-300 font-milk-cursive mt-3 transition-all duration-500"><FadeInSection>Veterans Ave Ext., Sta. Catalina, Zamboanga City, Zamboanga del Sur</FadeInSection></h1>
            </div>
            <FadeInSection delay={300}><div className="w-2 xl:h-120 lg:h-110 md:h-95 border-r-2 border-white xl:mr-15 lg:mr-10 md:mr-8 md:block hidden transition-all duraiton-500"></div></FadeInSection>
            <div className="xl:w-119 lg:w-90 md:w-75 sm:w-100 w-82 transition-all duration-500 flex flex-col items-center md:items-start md:justify-start">
                <div className="relative w-full">
                    <FadeInSection delay={300}><img src="/assets/Icons/Crown.png" className="absolute transition-all duration-500 xl:-top-4 xl:left-111 xl:w-12 lg:-top-4 lg:left-83 lg:w-10 md:-top-3 md:left-69 md:w-8 sm:-top-3 sm:left-82 sm:w-8 -top-2 left-67 w-6" /></FadeInSection>
                </div>
                <h1 className="text-white xl:text-8xl lg:text-7xl md:text-6xl sm:text-6xl text-5xl font-milk transition-all duration-500 mb-2"><FadeInSection delay={300}>ABOUT US</FadeInSection></h1>
                <div className="w-full xl:text-xl lg:text-base md:text-sm text-xs transition-all duration-500 md:text-start text-center">
                    <p className="text-white font-garet">
                        <FadeInSection delay={300}>
                        Established in August 2024, our branch proudly joined the growing Crispy
                        King family, bringing the brand’s signature tasty, satisfying, 
                        and budget-friendly chicken meals to the heart of Zamboanga 
                        City. As a locally operated franchise, we’re committed to not
                        only delivering delicious food but also creating a welcoming 
                        space where our community can gather, enjoy, and feel at home. 
                        Whether you're craving a quick bite or a hearty meal, we're here
                        to serve comfort and flavor — crispy and hot, every time.
                        </FadeInSection>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default about;