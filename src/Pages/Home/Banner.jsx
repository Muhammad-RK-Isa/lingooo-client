import { Carousel } from "@material-tailwind/react";
import bicon1 from '../../assets/Images/BannerIcons/1.png';
import bicon2 from '../../assets/Images/BannerIcons/2.png';
import bicon3 from '../../assets/Images/BannerIcons/3.png';
import bicon4 from '../../assets/Images/BannerIcons/4.png';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

const Banner = () => {

    // initial = {{ scale: 0.8, opacity: 0; }}; animate = {{ scale: 1, opacity: 1; }} transition = {{ type: "spring", stiffness: 200, damping: 20; }}
    return (
        <div className="h-max md:h-72 lg:h-96 grid place-content-center relative">
            <motion.img
                src={ bicon1 }
                alt="banner-icon"
                className="opacity-30 lg:opacity-100 rounded-full h-20 w-20 lg:h-24 lg:w-24 absolute left-10 -top-14 md:left-80 md:top-10"

            />
            <motion.img
                src={ bicon2 }
                alt="banner-icon"
                className="opacity-30 lg:opacity-100 rounded-full h-20 w-20 lg:h-24 lg:w-24 absolute left-6 -bottom-5 md:left-72 md:bottom-5"

            />
            <motion.img
                src={ bicon3 }
                alt="banner-icon"
                className="opacity-30 lg:opacity-100 rounded-full h-20 w-20 lg:h-24 lg:w-24 absolute right-10 -top-8 md:right-80 md:top-12"

            />
            <motion.img
                src={ bicon4 }
                alt="banner-icon"
                className="opacity-30 lg:opacity-100 rounded-full h-20 w-20 lg:h-24 lg:w-24 absolute right-10 -bottom-8 md:right-72 md:bottom-5"

            />

            <Swiper
                spaceBetween={ 30 }
                centeredSlides={ true }
                autoplay={ {
                    delay: 2500,
                    disableOnInteraction: true,
                } }
                loop
                navigation={ true }
                modules={ [ Autoplay ] }
                className="rounded-xl bg-transparent text-white max-w-lg lg:max-w-[100vw] w-full mx-auto"
            >
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
                    <div className="grid place-content-center gap-4 max-w-xs lg:max-w-screen-sm w-full mx-auto text-center">
                        <h1 className="text-2xl lg:text-5xl font-bold">
                            Unlock the World of Languages
                        </h1>
                        <p className="max-w-md mx-auto">
                            Join Our Online Language Summer Camp and Explore a Multilingual Adventure.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="grid place-content-center gap-4 max-w-xs lg:max-w-screen-sm w-full mx-auto text-center">
                        <h1 className="text-2xl lg:text-5xl font-bold">
                            Immerse Yourself in Language Learning
                        </h1>
                        <p>
                            Discover the Joy of Language Acquisition at Our Online Summer Camp.
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
            {/* <Carousel
                className="rounded-xl bg-transparent text-white"
                navigation={ () => { } }
                autoplay={ true }
                loop={ true }
                nextArrow={ () => { } }
                prevArrow={ () => { } }
            >

                <div
                    initial={ { scale: 0.8, opacity: 0, translateY: 100 } }
                    animate={ {
                        scale: 1,
                        opacity: [ "30%", "100%" ],
                        translateY: 0,
                        transitionEnd: { scale: 1.1, translateY: -10 },
                    } }
                    transition={ { type: "spring", stiffness: 200, damping: 20 } }
                    media={ [ { minWidth: 0, opacity: [ "30%", "100%" ] }, { minWidth: 768, opacity: [ "100%", "100%" ] } ] }
                >

                </div>
            </Carousel> */}
        </div>
    );
};

export default Banner;