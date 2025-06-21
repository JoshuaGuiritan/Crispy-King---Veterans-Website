const about = ({about}) => {
    return(
        <div ref={about} className="w-screen h-screen bg-[radial-gradient(circle_at_top_left,_#da2113,_#b50000)] flex flex-col-reverse md:flex-row justify-center items-center transition-all duration-1000">
            <img src="/assets/Images/ckopening.png" className="border border-white xl:w-150 lg:w-140 md:w-105 sm:w-110 w-90 lg:mr-15 md:mr-10 md:mt-0 mt-5 transition-all duration-500"/>
            <div className="xl:w-119 lg:w-90 md:w-75 sm:w-100 w-82 transition-all duration-500 flex flex-col items-center md:items-start md:justify-start">
                <div className="relative w-full">
                    <img src="/assets/Icons/Crown.png" className="absolute transition-all duration-500 xl:-top-4 xl:left-111 xl:w-12 lg:-top-4 lg:left-83 lg:w-10 md:-top-3 md:left-69 md:w-8 sm:-top-3 sm:left-82 sm:w-8 -top-2 left-67 w-6" />
                </div>
                <h1 className="text-white xl:text-8xl lg:text-7xl md:text-6xl sm:text-6xl text-5xl font-milk transition-all duration-500 mb-1">ABOUT US</h1>
                <div className="w-full xl:text-lg lg:text-base md:text-sm sm:text-xs text-[10px] transition-all duration-500 md:text-start text-center">
                    <p className="text-white font-garet">
                        Established in August 2024, our branch proudly joined the growing Crispy
                        King family, bringing the brand’s signature tasty, satisfying, 
                        and budget-friendly chicken meals to the heart of Zamboanga 
                        City. As a locally operated franchise, we’re committed to not
                        only delivering delicious food but also creating a welcoming 
                        space where our community can gather, enjoy, and feel at home. 
                        Whether you're craving a quick bite or a hearty meal, we're here
                        to serve comfort and flavor — crispy and hot, every time.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default about;