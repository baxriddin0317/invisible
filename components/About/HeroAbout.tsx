import Image from 'next/image'
import React from 'react'

export const HeroAbout = () => {
  return (
    <>
    {/* hero */}
    <div className="relative">
      <div className="relative max-w-80 mx-auto text-center space-y-3 lg:space-y-5 pt-7 lg:pt-14 pb-20 lg:pb-36 z-10">
        <h4 className="text-brand-gray-200 font-bold uppercase tracking-widest">about</h4>
        <h1 className="text-3xl lg:text-4xl/tight xl:text-6xl/tight uppercase">company</h1>
        <p className="lg:text-lg font-semibold">
          We're building state of the art AI solutions for manufacturing.
        </p>
      </div>
      {/* grid image */}
      <Image fill className="absolute left-0 bottom-0 h-1/2 lg:h-auto w-full size-full object-cover" src="/assets/images/grid-road.svg" alt='' />
    </div>
    </>
  )
}
