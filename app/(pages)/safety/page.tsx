import { Newslatter, Testimonial, Training, Visibility } from '@/components'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Safety = () => {
  return (
    <main>
      {/* INDUSTRIES */}
      <section className="relative">
        <div className="relative max-w-xxl mx-auto grid md:grid-cols-2 pt-12 md:pt-16 pb-10 md:pb-6 px-4 z-10">
          <div>
            <h4 className="text-brand-gray-200 font-bold uppercase tracking-widest">solutions</h4>
            <h1 className="font-semibold text-3xl lg:text-4xl/tight xl:text-6xl/tight text-brand-black uppercase mt-2.5 lg:mt-4">invisible ai for safety teams</h1>
            <p className="lg:text-lg font-semibold text-brand-black mt-4 lg:mt-6">
              Proactively address potential hazards and promote a safety-conscious culture with our manufacturing vision platform.
            </p>
            <Link href="#" className="relative group w-full md:w-auto inline-block font-bold text-center text-white uppercase rounded-full overflow-hidden transition duration-300 px-8 xl:px-14 py-3 xl:py-5 mt-12 xl:mt-20">
              <span className="relative z-10">request demo</span>
              <div className="block group-hover:hidden absolute inset-0 z-0 transition ease-in-out duration-700">
                <Image fill className="size-full object-cover" src="/assets/images/button-default.png" alt='' />
              </div>
              <div className="hidden group-hover:block absolute inset-0 z-0 transition ease-in-out duration-700">
                <Image fill className="size-full object-cover" src="/assets/images/button-hover.png" alt='' />
              </div>
            </Link>
          </div>
        </div>
        {/* hero background image */}
        <div >
          <Image fill className="absolute right-0 top-0 h-full w-full lg:w-1/2 z-0 size-full object-cover md:object-contain object-[0%_50%] md:object-[100%_50%]" src="/assets/images/safety-hero-bg.jpg" alt='' />
        </div>
      </section>
      
      {/*MUSCULOSKELETAL INJURIES ARE EXPENSIVE AND PREVENTABLE */}
      <section className="max-w-xxl mx-auto px-4 lg:mt-14">
        <div className="relative rounded-2xl overflow-hidden py-16 xl:py-24 px-5 lg:px-8">
          <div className="relative z-10 text-center uppercase space-y-5 xl:space-y-8">
            <h2 className="max-w-6xl mx-auto text-white font-semibold leading-tight text-3xl/snug lg:text-4xl/tight xl:text-5xl/snug">
              MUSCULOSKELETAL INJURIES ARE EXPENSIVE AND PREVENTABLE
            </h2>
            <p className="xl:text-xl text-brand-gray-400">
              MSDs are the leading cause of suffering in the workplace. <br />
              Now is the time to take preventative action. 
            </p>
          </div>
          <div className="relative z-10 grid lg:grid-cols-3 text-center gap-5 mt-9 lg:mt-16 xl:mt-24 xl:mx-5">
            {/* 1 */}
            <div className="bg-brand-blue-300 border border-gray-700 rounded-xl backdrop-blur-2xl space-y-4 px-3 py-6 lg:p-6">
              <h3 className="font-bold text-5xl text-white uppercase tracking-wider lg:mt-5">
                400,000
              </h3>
              <p className="text-brand-gray-400"> Musculoskeletal injuries <br /> occur every year
              </p>
            </div>
            {/* 2 */}
            <div className="bg-brand-blue-300 border border-gray-700 rounded-xl backdrop-blur-2xl space-y-4 px-3 py-6 lg:p-6">
              <h3 className="font-bold text-5xl text-white uppercase tracking-wider lg:mt-5">
                $20B
              </h3>
              <p className="text-brand-gray-400">
                Direct cost of Musculoskeletal <br /> Disorders per year
              </p>
            </div>
            {/* 3 */}
            <div className="bg-brand-blue-300 border border-gray-700 rounded-xl backdrop-blur-2xl space-y-4 px-3 py-6 lg:p-6">
              <h3 className="font-bold text-5xl text-white uppercase tracking-wider lg:mt-5">
                $45 - $54B
              </h3>
              <p className="text-brand-gray-400">
                Estimated total costs of <br /> musculoskeletal disorders per year
              </p>
            </div>
          </div>
          {/* circle  */}
          <div>
            <Image fill className="absolute left-0 w-full top-0 h-full z-0 size-full object-cover" src="/assets/images/safety-market-bg.png" alt='' />
          </div>
        </div>
      </section>

      <Visibility />
      <Testimonial />
      <Training />
      <Newslatter />
    </main>
  )
}

export default Safety