import Image from 'next/image'
import React from 'react'

export const Training = () => {
  return (
    <section className="relative pb-8 lg:pb-14">
      <div className="relative max-w-xxl mx-auto text-center px-4 mt-11 lg:mt-28 z-10">
        <h2 className="leading-tight text-3xl/snug lg:text-4xl/tight xl:text-5xl/snug uppercase">
          training &amp; compliance made simple
        </h2>
        <div className="grid md:grid-cols-3 gap-4 mt-10 xl:mt-20">
          <div className="bg-white rounded-lg p-4 xl:px-10 xl:pb-10 pt-6">
            <h6 className="font-bold uppercase">on demand footage</h6>
            <div className="inline-block relative size-12 lg:size-16 xl:size-24 my-5 xl:my-8">
              <Image fill className="absolute inset-0 size-full object-cover" src="/assets/images/play-img.png" alt='' />
            </div>
            <h5 className="text-xl lg:text-2xl xl:text-3xl">Video Playback</h5>
            <p className="mt-4 xl:mt-6">See exactly what's happening on the floor to ensure safety compliance.</p>
          </div>
          <div className="bg-white rounded-lg p-4 xl:px-10 xl:pb-10 pt-6">
            <h6 className="font-bold uppercase">save for later</h6>
            <div className="inline-block relative size-12 lg:size-16 xl:size-24 my-5 xl:my-8">
              <Image fill className="absolute inset-0 size-full object-cover" src="/assets/images/cloud-img.png" alt='' />
            </div>
            <h5 className="text-xl lg:text-2xl xl:text-3xl">Download &amp; Favorite</h5>
            <p className="mt-4 xl:mt-6">Save videos of good and bad cycles for training purposes.</p>
          </div>
          <div className="bg-white rounded-lg p-4 xl:px-10 xl:pb-10 pt-6">
            <h6 className="font-bold uppercase">in depth analytics</h6>
            <div className="inline-block relative size-12 lg:size-16 xl:size-24 my-5 xl:my-8">
              <Image fill className="absolute inset-0 size-full object-cover" src="/assets/images/file-img.png" alt='' />
            </div>
            <h5 className="text-xl lg:text-2xl xl:text-3xl">Advanced Reporting</h5>
            <p className="mt-4 xl:mt-6">Identify stations with increased safety risks and make proactive adjustments.</p>
          </div>
        </div>
      </div>
      {/* grid image */}
      <div>
        <Image fill className="absolute bottom-0 left-0 w-full h-full size-full object-cover" src="/assets/images/grid-road.svg" alt='' />
      </div>
    </section>
  )
}
