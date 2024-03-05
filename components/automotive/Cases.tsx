import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Cases = () => {
  return (
    <div className="relative">
      <div className="relative max-w-xxl mx-auto px-4 pt-16 z-10">
        <div className="uppercase space-y-4">
          <h4 className="text-brand-gray-200 font-bold tracking-widest">use cases</h4>
          <h2 className="max-w-lg leading-tight text-3xl/snug lg:text-4xl/tight xl:text-5xl/snug">
            automotive use cases we solve for
          </h2>
        </div>
        <div className="bg-white rounded-2xl p-5 xl:p-10 mt-12">
          {/* Automotive OEM reallocated */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-12 xl:gap-28">
            <div className="max-w-xl text-center md:text-start">
              <h3 className="max-w-md text-xl lg:text-2xl/9">
                Automotive OEM reallocated 
                <strong className="block text-brand-blue-400">20% headcount with Invisible AI</strong>
              </h3>
              <p className="text-brand-gray-200 mt-4 lg:mt-6">
                “Invisible AI can compare different technician’s and/or  procedure/cycle-time simultaneously and discover opportunities with video evidence. We believe this technology will add immense value to our entire plant.” - Continuous Improvement Engineer
              </p>
              <Link href="#" className="inline-block font-semibold text-brand-blue-400 bg-brand-backwall uppercase hover:shadow-xs transition-shadow rounded-full px-8 xl:px-14 py-3 xl:py-5 mt-10">
                read the case study
              </Link>
            </div>
            <div className="relative order-first md:order-none h-48 md:h-72 lg:max-h-96 rounded-xl overflow-hidden -mt-8 md:-mt-16 lg:-mt-24 xl:-mt-32">
              <Image fill className="size-full object-contain shadow-case" src="/assets/images/video-center.png" alt='' />
            </div>
          </div>
          {/* statistic */}
          <div className="grid md:grid-cols-3 xl:grid-cols-4 font-semibold gap-3 lg:gap-4 mt-10">
            <div className="grid grid-cols-2 items-center border border-brand-gray-500 rounded-xl gap-2 xl:gap-4 p-4 xl:p-6">
              <h4 className="number-grad text-5xl xl:text-6xl">+5%</h4>
              <p>
                Increased Throughput per Shift
              </p>
            </div>
            <div className="grid grid-cols-2 items-center border border-brand-gray-500 rounded-xl gap-2 xl:gap-4 p-4 xl:p-6">
              <h4 className="number-grad text-5xl xl:text-6xl">30+</h4>
              <p> Seconds Saved per Cycle</p>
            </div>
            <div className="grid grid-cols-2 items-center border border-brand-gray-500 rounded-xl gap-2 xl:gap-4 p-4 xl:p-6">
              <h4 className="number-grad text-5xl xl:text-6xl">20%</h4>
              <p className="line-clamp-2">Headcount Reallocation</p>
            </div>
          </div>
          <div className="mt-10">
            <h4 className="text-brand-gray-200 font-bold uppercase tracking-widest">top automotive use cases</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-6 font-semibold">
              <div className="bg-brand-backwall space-y-3 px-4 pt-4 pb-8">
                <h5 className="text-lg">Labor <br /> Utilization</h5>
                <p className="text-sm text-brand-gray-200">Turn your operators into industrial athletes with video playback, AI coaching, and more.</p>
              </div>
              <div className="bg-brand-backwall space-y-3 px-4 pt-4 pb-8">
                <h5 className="text-lg">Labor <br /> Utilization</h5>
                <p className="text-sm text-brand-gray-200">Turn your operators into industrial athletes with video playback, AI coaching, and more.</p>
              </div>
              <div className="bg-brand-backwall space-y-3 px-4 pt-4 pb-8">
                <h5 className="text-lg">Labor <br /> Utilization</h5>
                <p className="text-sm text-brand-gray-200">Turn your operators into industrial athletes with video playback, AI coaching, and more.</p>
              </div>
              <div className="bg-brand-backwall space-y-3 px-4 pt-4 pb-8">
                <h5 className="text-lg">Labor <br /> Utilization</h5>
                <p className="text-sm text-brand-gray-200">Turn your operators into industrial athletes with video playback, AI coaching, and more.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* grid image */}
      <div className='absolute top-0 left-0 h-[215px] w-full'>
        <Image fill className=" object-cover" src="/assets/images/grid-road.svg" alt='' />
      </div>
    </div>
  )
}
