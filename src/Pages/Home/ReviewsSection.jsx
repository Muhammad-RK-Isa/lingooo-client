import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";
import ReviewCard from '../../Components/ReviewCard';

const ReviewsSection = () => {
    return (
        <div className='bg-primary dark:bg-opacity-80 pb-6 lg:pb-8 w-full mt-10 lg:mt-20'>
            <div className="mb-10 lg:mb-14 text-center max-w-xs lg:max-w-2xl mx-auto text-white">
                <h2 className='text-xl lg:text-2xl font-semibold mt-20 mb-4 mx-2 pt-8 lg:pt-16'>Hear from our students</h2>
                <p>Hear them out. Start your journey with us today!</p>
                <hr className="w-28 lg:w-32 mx-auto border-white border-2 mt-6" />
            </div>

            <div className='mx-auto lg:max-w-6xl'>
                <Swiper
                    pagination={ {
                        clickable: true,
                    } }
                    loop={ true }
                    autoplay={ {
                        delay: 4500,
                        disableOnInteraction: true,
                    } }
                    modules={ [ Pagination, Autoplay ] }
                    breakpoints={ {
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        }
                    } }
                    className="pb-12 lg:pb-20 reviews-swiper"
                >
                    <SwiperSlide>
                        <ReviewCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReviewCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReviewCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReviewCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReviewCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReviewCard />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default ReviewsSection;