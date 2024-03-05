import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Payments = () => {
  return (
    <section className="max-w-6xl mx-auto font-helvetica px-4 lg:px-8 mt-10 md:mt-20 lg:mt-28">
      <div className="grid md:grid-cols-2 items-center gap-10">
        <div className="max-w-md space-y-4 lg:space-y-6">
          <div className="flex items-center space-x-2">
            <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">  
              <path d="M34.61 11.28a2.56 2.56 0 0 0-1.22-1.04L8.54.2A2.57 2.57 0 0 0 5 2.6V15c0 1.05.64 2 1.61 2.4l6.44 2.6 21.56 8.72c.26-.4.4-.88.39-1.36V12.64c0-.48-.13-.96-.39-1.37z" fill="url(#product-icon-payments-PaymentsSection-a)" /><path d="M34.63 11.28L13.06 20l-6.45 2.6A2.58 2.58 0 0 0 5 25v12.42a2.58 2.58 0 0 0 3.54 2.39L33.4 29.76c.5-.21.93-.57 1.21-1.04.26-.41.4-.88.39-1.36V12.64c0-.48-.12-.95-.37-1.36z" fill="#96F" /><path d="M34.62 11.28l.1.17c.18.37.28.77.28 1.19v-.03 14.75c0 .48-.13.95-.39 1.36L13.06 20l21.56-8.72z" fill="url(#product-icon-payments-PaymentsSection-b)" /><defs><linearGradient id="product-icon-payments-PaymentsSection-a" x1={20} y1="4.13" x2={20} y2="21.13" gradientUnits="userSpaceOnUse"><stop stopColor="#11EFE3" /><stop offset={1} stopColor="#21CFE0" /></linearGradient><linearGradient id="product-icon-payments-PaymentsSection-b" x1={35} y1="11.28" x2={35} y2="28.72" gradientUnits="userSpaceOnUse"><stop stopColor="#0048E5" /><stop offset={1} stopColor="#9B66FF" /></linearGradient></defs>
            </svg>
            <h5>Payments</h5>
          </div>
          <h3 className="font-bold text-2xl xl:text-4xl/tight">Accept and optimize payments, globally</h3>
          <p>
            Increase authorization rates, optimize your checkout conversion, and offer local payment methods in every market.
          </p>
          <Link href="#" className="group inline-flex items-center font-semibold text-white bg-brand-blue-500 hover:bg-brand-black transition-colors rounded-full gap-3 py-2 px-4">
            <span>Start with Payments </span>
            <svg className="size-4 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>  
          </Link>
          <div className="font-medium space-y-2 lg:pt-8 xl:pt-16">
            <pre className="block font-bold">See also</pre>
            <p> <Link href="#" className="inline-block text-brand-blue-500 hover:text-brand-black transition-colors">Tax</Link> for automating sales tax and VAT</p>
            <p> <Link href="#" className="inline-block text-brand-blue-500 hover:text-brand-black transition-colors">Radar</Link> for fraud prevention and management</p>
            <p> <Link href="#" className="inline-block text-brand-blue-500 hover:text-brand-black transition-colors">Terminal</Link> for custom in-person payments</p>
          </div>
        </div> 
        <div className="order-first md:order-none relative rounded-xl overflow-hidden py-48 lg:py-56 xl:py-80">
          <div data-aos="fade-up" className="absolute left-0 w-full top-0 h-full">
            <Image fill className="size-full object-contain" src="/assets/images/phone-2.jpg" alt='' />
          </div>
        </div>
      </div>
    </section>
  )
}
