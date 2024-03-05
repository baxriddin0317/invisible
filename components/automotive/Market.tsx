import Image from 'next/image'
import React from 'react'

export const Market = () => {
  return (
    <div className="max-w-xxl mx-auto px-6 lg:mt-14">
      <div className="relative rounded-2xl overflow-hidden py-16 xl:py-24 px-5 lg:px-8">
        <Image src='/assets/images/state-bg.webp' className='absolute inset-0 object-cover -z-10' fill alt='' />
        <div className="text-center uppercase space-y-5 xl:space-y-8">
          <h4 className="text-brand-gray-400 font-semibold tracking-widest">
            state of the market
          </h4>
          <h2 className="max-w-6xl mx-auto text-white font-semibold leading-tight text-3xl/snug lg:text-4xl/tight xl:text-5xl/snug">
            ELECTRIC Shockwaves: adapting to a changing landscape
          </h2>
        </div>
        <div className="relative z-10 grid lg:grid-cols-3 text-center md:text-start gap-5 mt-9 lg:mt-16 xl:mt-24 xl:mx-5">
          {/* 1 */}
          <div className="bg-brand-blue-300 border border-gray-700 rounded-xl backdrop-blur-2xl space-y-4 px-3 py-6 lg:p-6">
            <h3 className="font-bold text-lg xl:text-xl text-white uppercase tracking-wider lg:mt-5">
              The automotive industry is in a time of critical change.
            </h3>
            <p className="text-brand-gray-400">
              The push for electric and hyper-customization of vehicles has made line changeover and
              complexity skyrocket.
            </p>
          </div>
          {/* 1 */}
          <div className="bg-brand-blue-300 border border-gray-700 rounded-xl backdrop-blur-2xl space-y-4 px-3 py-6 lg:p-6">
            <h3 className="font-bold text-lg xl:text-xl text-white uppercase tracking-wider lg:mt-5">
              heavy research,development &amp; training
            </h3>
            <p className="text-brand-gray-400">
              Must accompany the shift towards electric vehicles, self-driving tech, sustainable manufacturing practices, and stricter vehicle emissions standards.
            </p>
          </div>
          {/* 1 */}
          <div className="bg-brand-blue-300 border border-gray-700 rounded-xl backdrop-blur-2xl space-y-4 px-3 py-6 lg:p-6">
            <h3 className="font-bold text-lg xl:text-xl text-white uppercase tracking-wider lg:mt-5">
              the world’s leading oems &amp; suppliers
            </h3>
            <p className="text-brand-gray-400">
              Turned to Invisible AI to meet ambitious production targets, maintain high-quality levels, and ensure their workforce possesses the necessary skills to adapt.
            </p>
          </div>
        </div>
        {/* circle  */}
        <div className="absolute bottom-0 h-1/4 md:h-1/3 lg:h-[45%] w-full left-1/2 -translate-x-1/2">
          <Image fill className="size-full object-contain" src="/assets/images/next-gen-circle.webp" alt='' />
        </div>
      </div>
    </div>
  )
}
