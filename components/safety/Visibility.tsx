import Image from 'next/image'
import React from 'react'

export const Visibility = () => {
  return (
    <div className="overflow-hidden">
      <div className="max-w-xxl mx-auto px-4 mt-11 lg:mt-16">
        <div className="max-w-3xl mx-auto text-center uppercase space-y-5 xl:space-y-8">
          <h4 className="font-semibold text-brand-gray-200 tracking-widest">
            always-on visibility
          </h4>
          <h2 className="max-w-6xl mx-auto font-semibold leading-tight text-3xl/snug lg:text-4xl/tight xl:text-5xl/snug">
            unprecedented ergonomics monitoring, at scale
          </h2>
        </div>
        <div className="grid md:grid-cols-2 items-center gap-y-6 gap-4 xl:gap-0 mt-8 lg:mt-16">
          {/* 1 */}
          <div className="order-2 md:order-none space-y-3 lg:space-y-6 md:px-4 lg:px-10 xl:px-20">
            <h3 className="text-2xl/7 lg:text-3xl">Track 17 Human Body Joints</h3>
            <p className="xl:text-xl/9 text-brand-gray-200">Our sensors track 17 human body joints in
              3D, allowing you to proactively monitor ergonomics and categorize human movement with extreme precision. </p>
          </div>
          {/*2 */}
          <div className="order-1 md:order-none relative w-full md:h-64 lg:h-96 xl:h-xl md:grid md:place-content-center">
            <div className="relative z-10 py-2.5 md:py-7">
              <Image width={419} height={679} className="size-full object-cover" src="/assets/images/factory-1.png" alt='' />
            </div>
            <div>
              <Image fill className='absolute top-0 h-full left-0 w-full z-0' src="/assets/images/factory-gr.png" alt='' />
            </div>
          </div>
          {/*3 */}
          <div className="order-3 md:order-none relative w-full md:h-64 lg:h-96 xl:h-xl md:grid md:place-content-center">
            <div className="relative z-10 py-2.5 md:py-7">
              <Image width={419} height={679} className="size-full object-cover z-10" src="/assets/images/factory-2.png" alt='' />
            </div>
            <div>
              <Image fill className="absolute top-0 left-0 size-full object-cover" src="/assets/images/factory-gr.png" alt='' />
            </div>
          </div>
          {/* 4 */}
          <div className="order-4 md:order-none space-y-3 lg:space-y-6 md:px-4 lg:px-10 xl:px-20">
            <h3 className="text-2xl/7 lg:text-3xl">Remotely Audit Any Process</h3>
            <p className="xl:text-xl/9 text-brand-gray-200">
              Fill out customizable safety reports while watching real-time or recorded videos of any cycle on any station or assembly line. </p>
          </div>
          {/* 5 */}
          <div className="order-6 md:order-none space-y-3 lg:space-y-6 md:px-4 lg:px-10 xl:px-20">
            <h3 className="text-2xl/7 lg:text-3xl">Configure Custom Settings</h3>
            <p className="xl:text-xl/9 text-brand-gray-200">Configure settings to define and monitor any type of bend or reach relevant to your business. Our AI Coach will detect unsafe movements and automatically alert you. </p>
          </div>
          {/*6 */}
          <div className="order-5 md:order-none relative w-full md:h-64 lg:h-96 xl:h-xl md:grid md:place-content-center">
            <div className="relative z-10 py-2.5 md:py-7">
              <Image width={419} height={679} className="size-full object-cover" src="/assets/images/sport-part.png" alt='' />
            </div>
            <div>
              <Image fill className='absolute top-0 h-full left-0 w-full z-0' src="/assets/images/factory-gr.png" alt='' />
            </div>
          </div>
          {/*7 */}
          <div className="order-7 md:order-none relative w-full md:h-64 lg:h-96 xl:h-xl md:grid md:place-content-center">
            <div className="relative z-10 py-2.5 md:py-7">
              <Image width={419} height={679} className="size-full object-cover z-10" src="/assets/images/videos.png" alt='' />
            </div>
            <div>
              <Image fill className="absolute top-0 left-0 h-full w-full size-full object-contain" src="/assets/images/factory-gr.png" alt='' />
            </div>
          </div>
          {/* 8 */}
          <div className="order-8 md:order-none space-y-3 lg:space-y-6 md:px-4 lg:px-10 xl:px-20">
            <h3 className="text-2xl/7 lg:text-3xl">Streamline Root-Cause Analysis</h3>
            <p className="xl:text-xl/9 text-brand-gray-200">
              If a safety incident occurs, use our precision search to pull video evidence of exactly what happened. Save and download videos for future use. </p>
          </div> 
        </div>
      </div>
    </div>

  )
}
