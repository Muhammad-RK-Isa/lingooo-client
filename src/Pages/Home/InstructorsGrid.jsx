import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import InstructorCardMin from '../../Components/InstructorCardMin';

const InstructorsGrid = () => {
    return (
        <>
            <div className="mb-10 lg:mb-14 text-center max-w-xs lg:max-w-2xl mx-auto">
                <h2 className='text-xl lg:text-2xl font-semibold mt-20 mb-4 mx-2'>Meet Our Instructors</h2>
                <p>We provide the best service that comes with the best results.</p>
                <hr className="w-28 lg:w-32 mx-auto border-primary border-2 mt-6"/>
            </div>

            <Swiper
                slidesPerView={ 4 }
                spaceBetween={ 16 }
                pagination={ {
                    clickable: true,
                    // Autoplay: true
                } }
                modules={ [ Pagination ] }
                className="hidden lg:flex pb-12"
            >
                <SwiperSlide>
                    <InstructorCardMin />
                </SwiperSlide>
                <SwiperSlide>
                    <InstructorCardMin />
                </SwiperSlide>
                <SwiperSlide>
                    <InstructorCardMin />
                </SwiperSlide>
                <SwiperSlide>
                    <InstructorCardMin />
                </SwiperSlide>
                <SwiperSlide>
                    <InstructorCardMin />
                </SwiperSlide>
                <SwiperSlide>
                    <InstructorCardMin />
                </SwiperSlide>
            </Swiper>

            <Swiper
                slidesPerView={ 3 }
                spaceBetween={ 4 }
                pagination={ {
                    clickable: true,
                    // Autoplay: true
                } }
                modules={ [ Pagination ] }
                className="flex lg:hidden pb-12"
            >
                <SwiperSlide>
                    <InstructorCardMin />
                </SwiperSlide>
                <SwiperSlide>
                    <InstructorCardMin />
                </SwiperSlide>
                <SwiperSlide>
                    <InstructorCardMin />
                </SwiperSlide>
                <SwiperSlide>
                    <InstructorCardMin />
                </SwiperSlide>
                <SwiperSlide>
                    <InstructorCardMin />
                </SwiperSlide>
                <SwiperSlide>
                    <InstructorCardMin />
                </SwiperSlide>
            </Swiper>

            {/* <div className='grid grid-cols-2 lg:grid-cols-6 gap-2 lg:gap-4'>
                <InstructorCardMin />
                <InstructorCardMin />
                <InstructorCardMin />
                <InstructorCardMin />
                <InstructorCardMin />
            </div> */}
        </>
    );
};

export default InstructorsGrid;