import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Ergonomics = () => {
  return (
    <section className="overflow-hidden pt-16 md:pt-20 lg:pt-28">
      <div className="max-w-xxl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-6 xl:gap-8">
          <div className="flex flex-col h-full bg-white rounded gap-6 p-6 xl:p-8">
            <h3 className="text-lg lg:text-xl text-brand-gray-600 uppercase">Safety &amp; Ergonomics</h3>
            <p className="text-brand-gray-200">
              Our ergonomics monitor, forklift tracker, and incident root-cause analysis features help EHS teams proactively protect the workforce.
            </p>
            <Link href="#" className="max-w-80 inline-flex items-center justify-between font-bold text-brand-blue-400 bg-brand-backwall uppercase hover:shadow-xs transition-shadow rounded-full gap-6 px-8 py-3 xl:py-5 mt-auto">
              <span>learn more</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </Link>
          </div>
          <div className="order-first lg:order-none lg:col-span-2 relative h-64 sm:h-72 md:h-96 xl:h-[33.125rem] px-5 md:pl-0 md:pr-10 lg:pr-20">
            <div className="relative size-full rounded-xl overflow-hidden">
              <Image fill className="absolute size-full object-cover"  src="/assets/images/worker.png" alt='' />
            </div>
            {/* alert */}
            <div className="absolute -top-4 lg:-top-12 left-1/4 sm:ml-5 lg:ml-10 w-12 lg:w-20">
              <Image width={80} height={80} src="/assets/images/alert.svg" alt='' />
            </div>
            {/* ergo monitor */}
            <div className="absolute -top-[15%] -right-[5%] w-2/5 h-5/6">
              <Image fill className="object-contain" src="/assets/images/monitor-card.png" alt='' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
