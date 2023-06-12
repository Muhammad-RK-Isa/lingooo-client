import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper";
import InstructorCardMin from '../../Components/InstructorCardMin';

const InstructorsGrid = () => {
    return (
        <>
            <div className="mb-10 lg:mb-14 text-center max-w-xs lg:max-w-2xl mx-auto">
                <h2 className='text-xl lg:text-2xl font-semibold mt-20 mb-4 mx-2'>Meet Our Instructors</h2>
                <p>We provide the best service that comes with the best results.</p>
                <hr className="w-28 lg:w-32 mx-auto border-primary border-2 mt-6" />
            </div>

            <Swiper
                slidesPerView={ 3 }
                spaceBetween={ 6 }
                pagination={ {
                    clickable: true,
                } }
                autoplay={ {
                    delay: 5000,
                    disableOnInteraction: true,
                } }
                loop
                modules={ [ Pagination, Navigation, Autoplay ] }
                breakpoints={ {
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    }
                } }
                className="pb-12 instructors-swiper lg:max-w-6xl relative"
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

            {/* <Swiper
                slidesPerView={ 3 }
                spaceBetween={ 6 }
                pagination={ {
                    clickable: true,
                } }
                loop={ true }
                modules={ [ Pagination ] }
                className="flex lg:hidden pb-12 instructors-swiper"
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
            </Swiper> */}
        </>
    );
};

export default InstructorsGrid;