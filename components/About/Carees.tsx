import Link from 'next/link'
import React from 'react'

export const Carees = () => {
  return (
    <section className="max-w-xxl mx-auto text-center px-4 mt-10 lg:mt-16 mb-20">
      <div className="bg-white rounded-3xl p-5 lg:p-8 xl:p-16">
        <div className="max-w-4xl mx-auto lg:px-5">
          <h4 className="text-brand-gray-200 font-bold uppercase tracking-widest">our values</h4>
          <h2 className="leading-tight text-3xl/snug lg:text-4xl/tight xl:text-5xl/snug uppercase mt-4 lg:mt-8">join the team and build your future with us</h2>
          <p className="lg:text-lg mt-4 lg:mt-6">
            Build the next generation of AI &amp; computer vision products with Invisible AI.
          </p>
          <Link href="#" className="bg-brand-btn hover:bg-brand-btn-hover inline-block font-bold text-white uppercase rounded-full overflow-hidden transition duration-300 px-8 xl:px-14 py-3 mt-5 lg:mt-8 xl:mt-16">
            <span>See open positions</span>
          </Link> 
        </div>
      </div>
    </section>
  )
}
