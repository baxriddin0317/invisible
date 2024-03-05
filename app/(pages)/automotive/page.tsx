import { Cases, Industries, Market, Newslatter, Testimonial } from '@/components'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Automotive = () => {
  return (
    <main>
      <Industries />
      <Market />
      <Cases />
      <section className="max-w-xxl mx-auto px-4 mt-10 lg:mt-16">
        <h2 className="font-semibold leading-tight text-3xl/snug lg:text-4xl/tight xl:text-5xl/snug uppercase mb-6 xl:mb-10">
          hear from our customers
        </h2>
        <Testimonial />
      </section>
      <Newslatter />
    </main>
  )
}

export default Automotive