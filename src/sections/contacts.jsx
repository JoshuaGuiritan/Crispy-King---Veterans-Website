const contacts = ({contacts}) => {
    return(
        <div ref={contacts} className="w-screen h-100 bg-[radial-gradient(circle_at_top_left,_#da2113,_#b50000)]">
            <div className="w-full h-full flex sm:flex-row flex-col-reverse sm:justify-evenly justify-center items-center">
                <img src="/assets/Images/contact-ck.png" className="xl:w-90 lg:w-80 md:w-70 sm:w-60 w-50 transition-all duration-500 sm:mt-0 mt-8"/>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-white font-milk xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-5xl xl:mb-15 lg:mb-12 md:mb-10 sm:mb-5 mb-5 transition-all duration-500">
                        Contacts
                    </h1>
                    <div className="flex md:flex-row md:w-auto sm:w-40 w-80 sm:flex-col flex-row sm:justify-center justify-evenly sm:items-start items-center">
                        <a href="tel:+630967-092-8349" target="_blank" className="flex justify-start items-center transition-all duration-500 ease-out xl:mr-15 lg:mr-13 md:mr-10 md:mb-0 sm:mb-5">
                            <img src="/assets/Icons/call.png" className="xl:w-10 lg:w-8 sm:w-6 w-5 xl:mr-4 lg:mr-3 mr-2 transition-all duration-500"/>
                            <h3 className="text-yellow-300 xl:text-3xl md:text-2xl sm:text-xl text-lg font-milk-cursive transition-all duration-500">0967-092-8349</h3>
                        </a>
                        <a href="https://www.facebook.com/ck.veterans" target="_blank" className="flex justify-start items-center transition-all duration-200 ease-out ">
                            <img src="/assets/Icons/facebook-icon.png" className="xl:w-10 lg:w-8 sm:w-6 w-5 xl:mr-4 lg:mr-3 mr-2"/>
                            <h3 className="text-yellow-300 xl:text-3xl md:text-2xl sm:text-xl text-lg font-milk-cursive transition-all duration-500">CK Veterans</h3>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default contacts