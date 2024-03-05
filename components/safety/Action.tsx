import Image from 'next/image'
import React from 'react'

export const Action = () => {
  return (
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
  )
}
