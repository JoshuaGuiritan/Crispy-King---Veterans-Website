import FadeInSection from "/src/components/FadeInSection";

const about = ({about}) => {
    return(
        <div ref={about} className="w-screen h-170 bg-[radial-gradient(circle_at_top_left,_#da2113,_#b50000)] flex flex-col items-center justify-center">
                <h1 className="text-white lg:text-8xl md:text-7xl sm:text-6xl text-5xl font-milk transition-all duration-500 mb-4"><FadeInSection delay={300}>ABOUT US</FadeInSection></h1>
                <div className="w-8/12 lg:text-2xl md:text-xl sm:text-lg text-base transition-all duration-500 text-center">
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
                <div className="w-8/12 flex justify-end mt-10">
                    <h1 className="text-ck-yellow font-milk-cursive xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs"><FadeInSection delay={300}>- Crispy King Veterans Admin</FadeInSection></h1>
                </div>
        </div>
    );
}

export default about;