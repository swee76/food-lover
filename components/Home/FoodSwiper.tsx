'use client'

import React from 'react';
import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import {SwiperOptions} from "swiper/types";
import {motion} from 'framer-motion'

const imgArray = ['/img/pizza.jpg', '/img/dose.jpg', '/img/fries.jpg', '/img/noodles.jpg', '/img/seafood-grill.jpg', '/img/shawarma.jpg', '/img/toast-bread.jpg']

const FoodSwiper = () => {
    const options: SwiperOptions = {
        allowTouchMove: true,
        cssMode: true,
        autoplay: {delay: 1000},
        speed: 4000,
        loop: true,
        pagination: {enabled: true, clickable: true},
        modules: [Autoplay, Navigation, Pagination],
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 8,
    };

    return (
        <div className={'max-w-xl food-slider'}>
            <Swiper {...options}>
                {imgArray.map((img, i) => (
                    <div key={i}>
                        <SwiperSlide>
                            <Image src={img} alt={`${i}.img`} width={600} height={300} className={'object-cover'}/>
                        </SwiperSlide>
                    </div>
                ))}
            </Swiper>
        </div>
    );
};

export default FoodSwiper;