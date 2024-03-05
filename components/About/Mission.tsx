'use client'
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';

export const Mission = () => {
  return (
    <section className="max-w-xxl mx-auto px-4 mt-8 lg:mt-20 xl:mt-36">
      <div className="max-w-3xl mx-auto text-center lg:px-16">
        <h4 className="text-brand-gray-200 font-bold uppercase tracking-widest">mission &amp; values</h4>
        <h2 className="leading-tight text-3xl/snug lg:text-4xl/tight xl:text-5xl/snug uppercase mt-4 lg:mt-8">our mission</h2>
        <p className="lg:text-lg mt-4 lg:mt-6">
          Invisible AI exists to maximize the output of every business by providing visibility and insight into the physical world.
        </p>
      </div>
      <div className='relative '>
        <Swiper 
          navigation={{
            nextEl: '.nextBtn',
            prevEl: '.prevBtn'
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }} 
          modules={[Navigation, Autoplay]} 
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="relative py-32 lg:py-48 xl:py-64 mt-8 lg:mt-16">
              <Image fill className="absolute left-0 w-full top-0 h-full z-0 size-full object-cover" src="/assets/images/one-slider.jpeg" alt='' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative py-32 lg:py-48 xl:py-64 mt-8 lg:mt-16">
              <Image fill className="absolute left-0 w-full top-0 h-full z-0 size-full object-cover" src="/assets/images/one-slider.jpeg" alt='' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative py-32 lg:py-48 xl:py-64 mt-8 lg:mt-16">
              <Image fill className="absolute left-0 w-full top-0 h-full z-0 size-full object-cover" src="/assets/images/one-slider.jpeg" alt='' />
            </div>
          </SwiperSlide>
        </Swiper>
        
        {/* slider navigation */}
        <div className="absolute top-1/2 inset-x-2 lg:inset-x-5 flex items-center justify-between z-10">
          <button type="button" className="grid place-content-center size-8 lg:size-10 rounded-full bg-white prevBtn">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4 lg:size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
            </svg>          
          </button>
          <button type="button" className="grid place-content-center size-8 lg:size-10 rounded-full bg-white nextBtn">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4 lg:size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>                  
          </button>
        </div>
      </div>
    </section>
  )
}
