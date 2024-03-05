'use client'
import { Feature, HeroAbout, Investors } from '@/components'
import Image from 'next/image'
import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import Link from 'next/link';

const About = () => {
  return (
    <main>
      <HeroAbout />
      <Feature />
      {/* INVISIBLE AI LEADERSHIP */}
      <section className="relative max-w-xxl mx-auto text-center px-4 -mt-16 md:-mt-28 z-10"> 
        <div className="relative text-white rounded-xl p-5 lg:px-9 lg:py-14 overflow-hidden">
          <Image src='/assets/images/state-bg.webp' className='absolute inset-0 object-cover -z-10' fill alt='' />
          <h4 className="text-brand-gray-400 font-bold uppercase tracking-widest">invisible ai leadership</h4>
          <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-y-6 gap-x-4 lg:px-7 mt-10">
            <div>
              <div className="relative h-56 lg:h-17 rounded-lg overflow-hidden">
                <Image fill className="absolute size-full object-contain lg:object-cover" src="/assets/images/man.png" alt='' />
              </div>
              <h4 className="lg:text-lg xl:text-2xl mt-3 lg:mt-6">Eric Danziger</h4>
              <p className="font-bold text-gray-400 text-xs lg:text-sm mt-2.5">CO-FOUNDER &amp; CEO</p>
              <Link href="#" className="group inline-flex items-center font-bold text-sm lg:text-base/5 rounded-full border border-white hover:scale-110 transition-transform duration-300 gap-3 px-4 py-2 mt-6">
                <span>Linkedin</span>
                <svg className="size-6 lg:size-7 group-hover:translate-x-1 transition-transform duration-300 fill-current" xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24"><path d="M17.073 12.5H5.5q-.213 0-.357-.143Q5 12.213 5 12t.143-.357q.144-.143.357-.143h11.573l-3.735-3.735q-.146-.146-.152-.344q-.007-.198.152-.363q.166-.166.357-.169q.192-.002.357.163l4.383 4.383q.13.13.183.267q.053.136.053.298t-.053.298q-.053.137-.183.267l-4.383 4.383q-.146.146-.347.153q-.201.007-.367-.159q-.16-.165-.162-.354q-.003-.188.162-.353z" /></svg>
              </Link>
            </div>
            <div>
              <div className="relative h-56 lg:h-17 rounded-lg overflow-hidden">
                <Image fill className="absolute size-full object-contain lg:object-cover" src="/assets/images/man.png" alt='' />
              </div>
              <h4 className="lg:text-lg xl:text-2xl mt-3 lg:mt-6">Prateek Sachdeva</h4>
              <p className="font-bold text-gray-400 text-xs lg:text-sm mt-2.5">CO-FOUNDER &amp; CPO</p>
              <Link href="#" className="group inline-flex items-center font-bold text-sm lg:text-base/5 rounded-full border border-white hover:scale-110 transition-transform duration-300 gap-3 px-4 py-2 mt-6">
                <span>Linkedin</span>
                <svg className="size-6 lg:size-7 group-hover:translate-x-1 transition-transform duration-300 fill-current" xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24"><path d="M17.073 12.5H5.5q-.213 0-.357-.143Q5 12.213 5 12t.143-.357q.144-.143.357-.143h11.573l-3.735-3.735q-.146-.146-.152-.344q-.007-.198.152-.363q.166-.166.357-.169q.192-.002.357.163l4.383 4.383q.13.13.183.267q.053.136.053.298t-.053.298q-.053.137-.183.267l-4.383 4.383q-.146.146-.347.153q-.201.007-.367-.159q-.16-.165-.162-.354q-.003-.188.162-.353z" /></svg>
              </Link>
            </div>
            <div>
              <div className="relative h-56 lg:h-17 rounded-lg overflow-hidden">
                <Image fill className="absolute size-full object-contain lg:object-cover" src="/assets/images/man.png" alt='' />
              </div>
              <h4 className="lg:text-lg xl:text-2xl mt-3 lg:mt-6">Kyle Horton</h4>
              <p className="font-bold text-gray-400 text-xs lg:text-sm mt-2.5">VP OF CUSTOMER OPERATIONS</p>
              <Link href="#" className="group inline-flex items-center font-bold text-sm lg:text-base/5 rounded-full border border-white hover:scale-110 transition-transform duration-300 gap-3 px-4 py-2 mt-6">
                <span>Linkedin</span>
                <svg className="size-6 lg:size-7 group-hover:translate-x-1 transition-transform duration-300 fill-current" xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24"><path d="M17.073 12.5H5.5q-.213 0-.357-.143Q5 12.213 5 12t.143-.357q.144-.143.357-.143h11.573l-3.735-3.735q-.146-.146-.152-.344q-.007-.198.152-.363q.166-.166.357-.169q.192-.002.357.163l4.383 4.383q.13.13.183.267q.053.136.053.298t-.053.298q-.053.137-.183.267l-4.383 4.383q-.146.146-.347.153q-.201.007-.367-.159q-.16-.165-.162-.354q-.003-.188.162-.353z" /></svg>
              </Link>
            </div>
            <div>
              <div className="relative h-56 lg:h-17 rounded-lg overflow-hidden">
                <Image fill className="absolute size-full object-contain lg:object-cover" src="/assets/images/man.png" alt='' />
              </div>
              <h4 className="lg:text-lg xl:text-2xl mt-3 lg:mt-6">Ted Smith</h4>
              <p className="font-bold text-gray-400 text-xs lg:text-sm mt-2.5">VP SALES</p>
              <Link href="#" className="group inline-flex items-center font-bold text-sm lg:text-base/5 rounded-full border border-white hover:scale-110 transition-transform duration-300 gap-3 px-4 py-2 mt-6">
                <span>Linkedin</span>
                <svg className="size-6 lg:size-7 group-hover:translate-x-1 transition-transform duration-300 fill-current" xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24"><path d="M17.073 12.5H5.5q-.213 0-.357-.143Q5 12.213 5 12t.143-.357q.144-.143.357-.143h11.573l-3.735-3.735q-.146-.146-.152-.344q-.007-.198.152-.363q.166-.166.357-.169q.192-.002.357.163l4.383 4.383q.13.13.183.267q.053.136.053.298t-.053.298q-.053.137-.183.267l-4.383 4.383q-.146.146-.347.153q-.201.007-.367-.159q-.16-.165-.162-.354q-.003-.188.162-.353z" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Investors />
      {/* MISSION & VALUES */}
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

      {/* our values */}
      <section className="max-w-xxl mx-auto text-center px-4 mt-10 lg:mt-16">
        <h4 className="text-brand-gray-200 font-bold uppercase tracking-widest">our values</h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 lg:mt-8">
          <div className="bg-white rounded-lg space-y-2 lg:space-y-4 p-4 lg:p-6">
            <h5 className="text-xl">Human-centric</h5>
            <p>We place human-centric designs at heart of our value creation.</p>
          </div>
          <div className="bg-white rounded-lg space-y-2 lg:space-y-4 p-4 lg:p-6">
            <h5 className="text-xl">Practicality</h5>
            <p>Ethics and Integrity is the foundation of our business.</p>
          </div>
          <div className="bg-white rounded-lg space-y-2 lg:space-y-4 p-4 lg:p-6">
            <h5 className="text-xl">Practicality</h5>
            <p>We provide practical and quality solutions to real-world problems.</p>
          </div>
          <div className="bg-white rounded-lg space-y-2 lg:space-y-4 p-4 lg:p-6">
            <h5 className="text-xl">Creativity</h5>
            <p>Great ideas can come from anywhere. Start looking.</p>
          </div>
        </div>
      </section>

      {/* CAREERS */}
      <section className="max-w-xxl mx-auto text-center px-4 mt-10 lg:mt-16 mb-20">
        <div className="bg-white rounded-3xl p-5 lg:p-8 xl:p-16">
          <div className="max-w-4xl mx-auto lg:px-5">
            <h4 className="text-brand-gray-200 font-bold uppercase tracking-widest">our values</h4>
            <h2 className="leading-tight text-3xl/snug lg:text-4xl/tight xl:text-5xl/snug uppercase mt-4 lg:mt-8">join the team and build your future with us</h2>
            <p className="lg:text-lg mt-4 lg:mt-6">
              Build the next generation of AI &amp; computer vision products with Invisible AI.
            </p>
            <Link href="#" className="bg-brand-btn hover:bg-brand-btn-hover inline-block font-bold text-white uppercase rounded-full overflow-hidden transition duration-300 px-8 xl:px-14 py-3 mt-5 lg:mt-8 xl:mt-16">
              <span>See open positions</span>
            </Link> 
          </div>
        </div>
      </section>
    </main>
  )
}

export default About