import { Carousel } from "@material-tailwind/react";
import bicon1 from '../../assets/Images/BannerIcons/1.png'
import bicon2 from '../../assets/Images/BannerIcons/2.png'
import bicon3 from '../../assets/Images/BannerIcons/3.png'
import bicon4 from '../../assets/Images/BannerIcons/4.png'

const Banner = () => {
    return (
        <div className="h-max md:h-72 lg:h-96 grid place-content-center relative">
            <img src={bicon1} alt="banner-icon" className="hidden md:block rounded-full h-10 w-10 md:h-20 md:w-20 absolute left-8 -top-10 md:left-80 md:top-10"/>
            <img src={bicon2} alt="banner-icon" className="hidden md:block rounded-full h-10 w-10 md:h-20 md:w-20 absolute left-5 -bottom-8 md:left-72 md:bottom-5"/>
            <img src={bicon3} alt="banner-icon" className="hidden md:block rounded-full h-10 w-10 md:h-20 md:w-20 absolute right-10 -top-8 md:right-80 md:top-12"/>
            <img src={bicon4} alt="banner-icon" className="hidden md:block rounded-full h-10 w-10 md:h-20 md:w-20 absolute right-8 -bottom-8 md:right-72 md:bottom-5"/>
            <Carousel
                className="rounded-xl bg-transparent text-white"
                navigation={ () => { } }
                autoplay={ true }
                loop={ true }
                nextArrow={ () => {} }
                prevArrow={ () => {} }
            >
                <div className="grid place-content-center gap-4 max-w-xs lg:max-w-screen-sm w-full mx-auto text-center">
                    <h1 className="text-2xl lg:text-5xl font-bold">
                        Learn a new language
                        with an online tutor
                    </h1>
                    <p>
                        Hold an online language class with your favorite teacher!
                        Find your teacher, choose the time and start learning the language.
                    </p>
                </div>
                <div className="grid place-content-center gap-4 max-w-xs lg:max-w-screen-sm w-full mx-auto text-center">
                    <h1 className="text-2xl lg:text-5xl font-bold">
                        Unlock the World of Languages
                    </h1>
                    <p className="max-w-md mx-auto">
                        Join Our Online Language Summer Camp and Explore a Multilingual Adventure.
                    </p>
                </div>
                <div className="grid place-content-center gap-4 max-w-xs lg:max-w-screen-sm w-full mx-auto text-center">
                    <h1 className="text-2xl lg:text-5xl font-bold">
                        Immerse Yourself in Language Learning
                    </h1>
                    <p>
                        Discover the Joy of Language Acquisition at Our Online Summer Camp.
                    </p>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;