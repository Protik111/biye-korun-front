import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Initialize the required Swiper modules
SwiperCore.use([Navigation, Pagination]);

const HappyCouples = () => {
    const swiperRef = useRef(null);

    // Function to navigate to the previous slide
    const navigateToPreviousSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    // Function to navigate to the next slide
    const navigateToNextSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };


    return (
        <div className='root-happy__couple'>

            <Swiper
                navigation={{
                    nextEl: '.next-arrow',
                    prevEl: '.prev-arrow',
                }}
                pagination={{
                    type: 'fraction',
                }}
                className="mySwiper"
                onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
                <SwiperSlide>
                    <div className="happy__couple container">
                        <div className="happy__couple--left">
                            <div className='info'>
                                <div className='flex flex-column align-center flex-gap-15'>
                                    <div className=''>
                                        <img src="/V3/landing/quote.png" alt="Quote" loading="lazy" />
                                    </div>
                                    <p className='desc'>We are very happy in our married life. We found our life partner through Biye korun platform. Biye korun is an excellent platform. Many many thanks to the owner of this platform</p>
                                    <p className='name'>Anika Sarma & Rahul Ganguli</p>
                                    <p className='title'>Happy Couple</p>
                                </div>
                            </div>
                        </div>
                        <div className="happy__couple--right rounded-15">

                            <img src="/V3/landing/slide.png" alt="Gift Collection" loading="lazy" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="happy__couple container">
                        <div className="happy__couple--left">
                            <div className='info'>
                                <div className='flex flex-column align-center flex-gap-15'>
                                    <div className=''>
                                        <img src="/V3/landing/quote.png" alt="Quote" loading="lazy" />
                                    </div>
                                    <p className='desc'>We are very happy in our married life. We found our life partner through Biye korun platform. Biye korun is an excellent platform. Many many thanks to the owner of this platform</p>
                                    <p className='name'>Anika Sarma & Rahul Ganguli</p>
                                    <p className='title'>Happy Couple</p>
                                </div>
                            </div>
                        </div>
                        <div className="happy__couple--right rounded-15">

                            <img src="/V3/landing/slide.png" alt="Gift Collection" loading="lazy" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            {/* <div className="happy__couple container">
                <div className="happy__couple--left">
                    <div className='info'>
                        <div className='flex flex-column align-center flex-gap-15'>
                            <div className=''>
                                <img src="/V3/landing/quote.png" alt="Quote" loading="lazy" />
                            </div>
                            <p className='desc'>We are very happy in our married life. We found our life partner through Biye korun platform. Biye korun is an excellent platform. Many many thanks to the owner of this platform</p>
                            <p className='name'>Anika Sarma & Rahul Ganguli</p>
                            <p className='title'>Happy Couple</p>
                        </div>
                    </div>
                </div>
                <div className="happy__couple--right rounded-15">

                    <img src="/V3/landing/slide.png" alt="Gift Collection" loading="lazy" />
                </div>
            </div> */}

            <div className='container next-prev'>
                <div className='flex flex-gap-25 justify-center'>
                    <img
                        src="/V3/landing/left.svg"
                        alt="Previous"
                        loading="lazy"
                        onClick={() => {
                            // Trigger navigation to the previous slide
                            if (swiperRef.current) {
                                swiperRef.current.slidePrev();
                            }
                        }}
                    />
                    <img
                        src="/V3/landing/right.svg"
                        alt="Next"
                        loading="lazy"
                        onClick={() => {
                            // Trigger navigation to the next slide
                            if (swiperRef.current) {
                                swiperRef.current.slideNext();
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default HappyCouples