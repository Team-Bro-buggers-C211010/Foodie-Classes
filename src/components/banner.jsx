import banImg from '../image/bannerChef.png'
const Banner = () => {
    return (
        <div className="rounded-3xl hero min-h-screen bg-no-repeat bg-center font_lexend" style={{ backgroundImage: `url(${banImg})` }}
        >
            <div className="hero-overlay bg-opacity-10 rounded-3xl"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="w-full">
                    <h1 className="text-2xl md:text-6xl font-semibold md:font-bold mb-4 md:mb-6">Discover an exceptional cooking <br/>class tailored for you!</h1>
                    <p className="text-sm md:text-lg mb-6 md:mb-10">Explore personalized cooking classes designed just for you! Dive into a culinary journey <br /> of exceptional taste and skill development.</p>
                    <div className='space-x-0.5 md:space-x-6'>
                    <button className="bg-[#0BE58A] border-0 rounded-full px-3 md:px-7 py-3 md:py-5 text-[#150B2B] text-base md:text-xl font-semibold">Explore Now</button>
                    <button className="rounded-full border px-3 md:px-7 py-3 md:py-5 text-base md:text-xl font-semibold">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner