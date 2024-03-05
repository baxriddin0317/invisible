import Image from 'next/image'
import React from 'react'

export const Feature = () => {
  return (
    <>
     <div className="relative pb-28">
      <div className="relative linear-gr">
        <div className="relative max-w-xxl mx-auto grid md:grid-cols-3 text-center gap-4 px-4 lg:px-8 pt-16 md:pt-28 lg:pt-48 xl:pt-96 z-30">
          <div className="bg-white rounded-lg space-y-2 lg:space-y-4 p-5 lg:py-10 lg:px-8">
            <h5 className="font-bold text-xl">OUR HISTORY</h5>
            <p className="text-brand-gray-200">
              Born from the challenging demands of implementing computer vision algorithms for use in self driving cars. Our leadership teamed up to introduce this groundbreaking technology to the manufacturing industry.
            </p>
          </div>
          <div className="bg-white rounded-lg space-y-2 lg:space-y-4 p-5 lg:py-10 lg:px-8">
            <h5 className="font-bold text-xl">EXPERTS IN AI &amp; COMPUTER VISION</h5>
            <p className="text-brand-gray-200">
              Our engineers have advanced degrees from prestigious engineering &amp; robotics institutions. They are experts in computer vision and AI for human body and motion tracking.
            </p>
          </div>
          <div className="bg-white rounded-lg space-y-2 lg:space-y-4 p-5 lg:py-10 lg:px-8">
            <h5 className="font-bold text-xl">READY FOR THE FUTURE</h5>
            <p className="text-brand-gray-200">
              We have raised our Series A fundraising round and are rapidly scaling our business. If you are interested in building the future of computer vision and manufacturing technology, check out our careers page.
            </p>
          </div>
        </div>
        {/* bg image */}
        <Image fill className="absolute top-0 h-full left-0 w-full z-0 size-full object-cover " src="/assets/images/alpinist.jpeg" alt='' />
        <Image fill className="absolute h-full bottom-0 inset-x-0 z-0 size-full object-cover" src="/assets/images/circle-shape.png" alt='' />
    </div>
</div>
    </>
  )
}
