import bicon1 from '../../assets/Images/BannerIcons/1.png';
import bicon2 from '../../assets/Images/BannerIcons/2.png';
import bicon3 from '../../assets/Images/BannerIcons/3.png';
import bicon4 from '../../assets/Images/BannerIcons/4.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

const Banner = () => {
    return (
        <div className="h-max md:h-72 lg:h-96 grid place-content-center relative">
            <img
                src={ bicon1 }
                alt="banner-icon"
                className="opacity-10 rounded-full h-20 w-20 lg:h-24 lg:w-24 absolute left-10 -top-14 md:left-80 md:top-10"

            />
            <img
                src={ bicon2 }
                alt="banner-icon"
                className="opacity-20 rounded-full h-20 w-20 lg:h-24 lg:w-24 absolute left-6 -bottom-5 md:left-72 md:bottom-5"

            />
            <img
                src={ bicon3 }
                alt="banner-icon"
                className="opacity-10 rounded-full h-20 w-20 lg:h-24 lg:w-24 absolute right-10 -top-8 md:right-80 md:top-12"

            />
            <img
                src={ bicon4 }
                alt="banner-icon"
                className="opacity-20 rounded-full h-20 w-20 lg:h-24 lg:w-24 absolute right-10 -bottom-8 md:right-72 md:bottom-5"
            />

            <Swiper
                spaceBetween={ 30 }
                centeredSlides={ true }
                autoplay={ {
                    delay: 2500,
                    disableOnInteraction: true,
                } }
                loop
                modules={ [ Autoplay ] }
                className="rounded-xl bg-transparent text-white max-w-lg lg:max-w-[100vw] w-full mx-auto"
            >
                <SwiperSlide>
                    <div className="grid place-content-center gap-4 max-w-xs lg:max-w-screen-md w-full mx-auto text-center">
                        <h1 className="text-2xl lg:text-5xl font-bold">
                            Learn a new language
                            with an online tutor
                        </h1>
                        <p>
                            Hold an online language class with your favorite teacher!
                            Find your teacher, choose the time and start learning the language.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="grid place-content-center gap-4 max-w-xs lg:max-w-screen-md w-full mx-auto text-center">
                        <h1 className="text-2xl lg:text-5xl font-bold">
                            Unlock the World of Languages
                        </h1>
                        <p className="max-w-md mx-auto">
                            Join Our Online Language Summer Camp and Explore a Multilingual Adventure.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="grid place-content-center gap-4 max-w-xs lg:max-w-screen-md w-full mx-auto text-center">
                        <h1 className="text-2xl lg:text-5xl font-bold">
                            Immerse Yourself in Language Learning
                        </h1>
                        <p>
                            Discover the Joy of Language Acquisition at Our Online Summer Camp.
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;