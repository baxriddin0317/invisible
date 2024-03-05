import Image from 'next/image'
import React from 'react'

export const Newslatter = () => {
  return (
    <div className="max-w-xxl mx-auto px-4 pb-16">
      <div className="bg-white rounded-2xl gap-7 space-y-5 lg:space-y-7 p-6 lg:p-10 xl:p-16 mt-5 lg:mt-14">
        <h5 className="text-brand-gray-200">STAY IN THE KNOW</h5>
        <h2 className="text-2xl lg:text-5xl">SUBSCRIBE TO OUR NEWSLETTER</h2>
        <p className="text-lg text-brand-gray-200">
          Get industry news, insights, and product updates delivered directly to your inbox.
        </p>
        {/* input */}
        <form action="#" className="flex flex-col md:flex-row items-stretch gap-5 lg:gap-8">
          <input type="email" name="email" placeholder="Email address..." className="flex-1 focus:outline-none bg-white border border-gray-300 focus:border-brand-blue-100
          rounded-full p-2.5 lg:p-4 px-6 lg:px-8" />
          <button type="button" className="bg-brand-btn hover:bg-brand-btn-hover font-bold text-white uppercase rounded-full overflow-hidden transition duration-300 px-8 xl:px-14 py-2.5 lg:py-5">
            <span className="whitespace-nowrap ">request demo</span>
          </button>
        </form>
      </div>
    </div>
  )
}
