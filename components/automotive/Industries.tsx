import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Industries = () => {
  return (
    <section className="relative">
      <div className="relative max-w-xxl mx-auto grid md:grid-cols-2 pt-12 md:pt-16 pb-10 md:pb-6 px-4 z-10">
        <div>
          <h4 className="text-brand-gray-200 font-bold uppercase tracking-widest">industries</h4>
          <h1 className="font-semibold text-3xl lg:text-4xl/tight xl:text-6xl/tight uppercase mt-2.5 lg:mt-4">automotive oems and suppliers</h1>
          <p className="lg:text-lg font-semibold mt-4 lg:mt-6">
            The world’s leading automotive OEMs and Suppliers leverage Invisible AI to isolate bottlenecks,
            increase throughput, improve employee training and much more.
          </p>
          <Link href="#" className="bg-brand-btn hover:bg-brand-btn-hover w-full md:w-auto inline-block font-bold text-center text-white uppercase rounded-full overflow-hidden transition duration-300 px-8 xl:px-14 py-3 xl:py-5 mt-12 xl:mt-20">
            <span>request demo</span>
          </Link>
        </div>
      </div>
      {/* hero background image */}
      <div>
        <Image fill className="absolute right-0 top-0 h-full w-full lg:w-3/4 z-0 size-full object-cover md:object-contain object-[0%_50%] md:object-[100%_50%]" src="/assets/images/hero.png" alt='' />
      </div>
    </section>
  )
}
