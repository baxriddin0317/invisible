'use client'

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay } from 'swiper/modules';

const head = [
  {
    name: "Safety",
    id: '01'
  },
  {
    name: "Quality",
    id: '02'
  },
  {
    name: "Health",
    id: '03'
  },
  {
    name: "Analytics",
    id: '04'
  },
]

export const HeroSlider = () => {
  const p1 = useRef([]);
  const onAutoplayTimeLeft = (s, time, progress) => {
    const lineWidth = `${100 - progress * 100}%`;
    p1.current[s.activeIndex].style.width = lineWidth;
  }

  const onSlideChangeTransitionEnd = (s) => {
    p1.current[s.previousIndex].style.width = '0%';
  };

  return (
    <div className="max-w-7xl mx-auto mt-10 md:mt-20 lg:mt-28 px-4 xl:px-10">
      <h2 className="font-bold text-4xl text-center">Our Solutions</h2>
      {/* desktop head */}
      <div className="hidden md:grid grid-cols-4 font-semibold gap-5 mt-10">
        {head.map((item,idx) => (
          <div key={idx}>
            <h5 className="block text-brand-blue-100">{item.id}</h5>
            <p className="mt-0.5">{item.name}</p>
            <div className="relative w-full h-1 bg-white mt-2.5">
              <span ref={(el) => (p1.current[idx] = el)} className="block absolute top-0 h-full bg-brand-blue-100" />
            </div>
          </div>
        ))}
      </div>
      {/* mobile head */}
      <div className="mt-8 divide-y divide-brand-gray-300 md:hidden">
        {head.map((item,idx) => (
          <AccardionItme title={item.name} key={idx}>
            <SliderContent />
          </AccardionItme>
        ))}
      </div> 
      {/* swiper content */}
      <div className='hidden md:block'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          onSlideChangeTransitionEnd={onSlideChangeTransitionEnd}
          className="mySwiper"
        >
          <SwiperSlide>
            <SliderContent />
          </SwiperSlide>
          <SwiperSlide>
            <SliderContent />
          </SwiperSlide>
          <SwiperSlide>
            <SliderContent />
          </SwiperSlide>
          <SwiperSlide>
            <SliderContent />
          </SwiperSlide>
        </Swiper> 
      </div>
      
    </div>
  )
}

const SliderContent = () => {
  return (
    <div className="grid md:grid-cols-2 lg:h-[33.75rem] xl:h-[38.125rem] bg-white rounded-lg overflow-hidden mt-10">
      <div className="p-6 xl:p-12">
        <h5 className="block xl:text-xl font-semibold text-brand-blue-100">01</h5>
        <h2 className="font-bold text-2xl lg:text-3xl xl:text-4xl/tight mt-2">
          Simple to Install, Use &amp; Maintain
        </h2>
        <p className="font-light xl:text-xl mt-4">
          Set up a Verkada device in minutes and empower teams with an intuitive user interface, easily accessible from a mobile app and web browser.
        </p>
        <div className="font-semibold space-y-2 mt-4 xl:mt-7">
          <div className="flex items-center space-x-2.5">
            <div className="size-12 shrink-0">
              <Image className="w-full h-full object-cover" width={48} height={48} src="/assets/images/our-solutions-1.webp" alt='' />
            </div>
            <p>All-in-one (no on-premise servers)</p>
          </div>
          <div className="flex items-center space-x-2.5">
            <div className="size-12 shrink-0">
              <Image className="w-full h-full object-cover" width={48} height={48} src="/assets/images/Plug_Play.webp" alt='' />
            </div>
            <p>Plug &amp; Play via PoE</p>
          </div>
          <div className="flex items-center space-x-2.5">
            <div className="size-12 shrink-0">
              <Image className="w-full h-full object-cover" width={48} height={48} src="/assets/images/Cloud.webp" alt='' />
            </div>
            <p>Cloud-based software</p>
          </div>
        </div>
      </div>
      <div className="relative order-first md:order-none aspect-[4/3] md:aspect-auto w-full">
        <Image className="w-full h-full object-cover" fill src="https://www.geoguessr.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.6af091ed.webp&w=3840&q=75" alt='' />
      </div>
    </div>
  )
}

const AccardionItme = ({title, children}) => {
  const [isActive, setIsActive] = useState(false);
  const [height, setHeight] = useState(0);
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      setHeight(isActive ? ref.current.clientHeight : 0);
    }
  }, [isActive]);
  return (
    <div className="py-6 pl-2">
      <button 
        className="w-full flex items-center justify-start font-semibold text-brand-gray-300 gap-2"
        onClick={() => setIsActive(!isActive)}
      >
        <sup className="text-xs text-brand-blue-100">01</sup>
        <p className="text-lg">{title}</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 ml-auto">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>        
      </button>
      <div className='overflow-hidden transition-all ease-in-out duration-500' style={{ height: `${isActive ? `${height}px` : "0px"}` }}>
        <div className='pb-10' ref={ref}>
          {children}
        </div>
      </div>
    </div>
  )
}
