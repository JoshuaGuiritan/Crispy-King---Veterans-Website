const about = ({about}) => {
    return(
        <div ref={about} className="w-screen h-screen bg-ck-red flex justify-center items-center">
            <div className="w-160 border border-white flex flex-col justify-start items-center">
                <h1 className="font-milk text-9xl text-white mb-5">ABOUT US</h1>
                <p className="font-garet text-white text-lg">Established in August 2024, our branch proudly joined the growing Crispy
                     King family, bringing the brand’s signature tasty, satisfying, 
                     and budget-friendly chicken meals to the heart of Zamboanga 
                     City. As a locally operated franchise, we’re committed to not
                      only delivering delicious food but also creating a welcoming 
                      space where our community can gather, enjoy, and feel at home. 
                      Whether you're craving a quick bite or a hearty meal, we're here
                       to serve comfort and flavor — crispy and hot, every time.</p>
            </div>
        </div>
    );
}

export default about;