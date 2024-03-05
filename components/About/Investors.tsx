import Image from 'next/image'
import React from 'react'

export const Investors = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 mt-8 lg:mt-20 xl:mt-36">
      <h2 className="leading-tight text-3xl/snug lg:text-4xl/tight xl:text-5xl/snug uppercase text-center">our investors</h2>
      <div className="grid grid-cols-2 justify-items-center md:flex flex-wrap justify-center items-center gap-x-6 lg:gap-x-12 gap-y-8 mt-8 lg:mt-14">
        <div className="relative w-28 md:w-36 h-20">
          <Image fill className="absolute inset-0 object-contain" src="/assets/images/brands/brand-1.svg" alt='' />
        </div>
        <div className="relative w-28 md:w-36 h-20">
          <Image fill className="absolute inset-0 object-contain" src="/assets/images/brands/8vc.svg" alt='' />
        </div>
        <div className="relative w-28 md:w-36 h-20">
          <Image fill className="absolute inset-0 object-contain" src="/assets/images/brands/brand-3.svg" alt='' />
        </div>
        <div className="relative w-28 md:w-36 h-20">
          <Image fill className="absolute inset-0 object-contain" src="/assets/images/brands/brand-4.svg" alt='' />
        </div>
        <div className="relative w-28 md:w-36 h-20">
          <Image fill className="absolute inset-0 object-contain" src="/assets/images/brands/fm_capital.svg" alt='' />
        </div>
        <div className="relative w-28 md:w-36 h-20">
          <Image fill className="absolute inset-0 object-contain" src="/assets/images/brands/robot.svg" alt='' />
        </div>
        <div className="relative w-28 md:w-36 h-20">
          <Image fill className="absolute inset-0 object-contain" src="/assets/images/brands/SilentVentures-Black-p-500.png" alt='' />
        </div>
        <div className="relative w-28 md:w-36 h-20">
          <Image fill className="absolute inset-0 object-contain" src="/assets/images/brands/vest_coast.svg" alt='' />
        </div>
        <div className="relative w-36 col-span-2 h-20 md:col-span-1">
          <Image fill className="absolute inset-0 object-contain" src="/assets/images/brands/brand-last.svg" alt='' />
        </div>
      </div>
    </section>
  )
}
