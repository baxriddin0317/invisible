import Image from 'next/image'
import React from 'react'

export const Hear = () => {
  return (
    <div className="max-w-xxl mx-auto px-4 mt-6 lg:mt-0">
      <div className="relative text-white rounded-xl p-6 lg:p-10 xl:px-16 overflow-hidden">
        <Image className='absolute inset-0 size-full object-cover -z-10' src='/assets/images/customer-bg.png' fill alt='' />
        <p className="text-2xl xl:text-3xl/10">&quot;Invisible AI is not only helping us find opportunities for improvement on the assembly lines, but we&apos;re also constantly finding new use cases for their technology such as ergonomic analysis to proactively prevent injuries.&quot;</p>
        <div className="flex items-start md:items-center space-x-4 mt-6">
          <div className="relative size-12 lg:size-16 shrink-0 rounded-full overflow-hidden">
            <Image fill className="absolute size-full object-cover" src="/assets/images/Mask.png" alt='' />
          </div>
          <div className="uppercase space-y-1">
            <h4 className="lg:text-xl xl:text-2xl">advanced technology engineer</h4>
            <h5 className="text-sm md:text-base text-brand-gray-400">toyota motor north america</h5>
          </div>
        </div>
      </div>
    </div>
  )
}
