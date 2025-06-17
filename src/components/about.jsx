const about = ({about}) => {
    return(
        <div ref={about} className="w-screen h-screen bg-ck-red flex flex-col-reverse md:flex-row justify-center items-center transition-all duration-1000">
            <img src="/assets/Images/ckopening.png" className="border border-white xl:w-119 lg:w-110 md:w-100 sm:w-100 w-90 md:mr-12 md:mt-0 mt-5 transition-all duration-500"/>
            <div className="xl:w-119 lg:w-90 md:w-75 sm:w-100 w-90 transition-all duration-500 flex flex-col items-center md:items-start md:justify-start">
                <div className="relative w-full hidden">
                    <img src="/assets/Icons/Crown.png" className="absolute" />
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