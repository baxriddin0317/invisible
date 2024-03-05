'use client'

import Image from "next/image";
import Link from "next/link";
import { HeroSlider } from "@/components";
import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      offset: 50,
      delay: 300,
      duration: 800
    });
  }, []);
  
  useEffect(() => {
    AOS.refresh();
  }, []);
  return (
    <main>
      <HeroSlider />
      {/* section 2 */}
      <section className="overflow-hidden pt-16 md:pt-20 lg:pt-28">
        <div className="max-w-xxl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-6 xl:gap-8">
            <div className="flex flex-col h-full bg-white rounded gap-6 p-6 xl:p-8">
              <h3 className="text-lg lg:text-xl text-brand-gray-600 uppercase">Safety &amp; Ergonomics</h3>
              <p className="text-brand-gray-200">
                Our ergonomics monitor, forklift tracker, and incident root-cause analysis features help EHS teams proactively protect the workforce.
              </p>
              <Link href="#" className="max-w-80 inline-flex items-center justify-between font-bold text-brand-blue-400 bg-brand-backwall uppercase hover:shadow-xs transition-shadow rounded-full gap-6 px-8 py-3 xl:py-5 mt-auto">
                <span>learn more</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </div>
            <div className="order-first lg:order-none lg:col-span-2 relative h-64 sm:h-72 md:h-96 xl:h-[33.125rem] px-5 md:pl-0 md:pr-10 lg:pr-20">
              <div className="relative size-full rounded-xl overflow-hidden">
                <Image fill className="absolute size-full object-cover"  src="/assets/images/worker.png" alt='' />
              </div>
              {/* alert */}
              <div className="absolute -top-4 lg:-top-12 left-1/4 sm:ml-5 lg:ml-10 w-12 lg:w-20">
                <Image width={80} height={80} src="/assets/images/alert.svg" alt='' />
              </div>
              {/* ergo monitor */}
              <div className="absolute -top-[15%] -right-[5%] w-2/5 h-5/6">
                <Image fill className="object-contain" src="/assets/images/monitor-card.png" alt='' />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 3 */}
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
      {/* section 4 */}
      <section className="max-w-6xl mx-auto font-helvetica px-4 lg:px-8 mt-10 md:mt-20 lg:mt-28">
        <div className="grid md:grid-cols-2 items-center gap-6 lg:gap-9">
          <div className="group bg-white shadow-card rounded-lg p-1">
            <div className="relative bg-brand-blue-50 py-32 lg:py-40 overflow-hidden">
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 flex flex-col w-3/5 gap-y-5">
                <div className="h-1/2 relative">
                  <Image fill className="absolute size-full object-cover rounded-b-lg" src="/assets/images/search.svg" alt='' />
                </div>
                <div className="h-1/2 relative">
                  <Image fill className="absolute size-full object-cover rounded-t-lg" src="/assets/images/dynamic_mobile_wallets_visual.svg" alt='' />
                </div>
              </div>
            </div>
            <div className="relative space-y-2 md:space-y-3 p-4 lg:p-6 xl:p-8">
              <div className="inline-flex items-center text-xs font-semibold bg-brand-backwall rounded space-x-3 p-2.5 pr-4">
                <svg className="size-6" width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">        
                  <path fillRule="evenodd" clipRule="evenodd" d="M2 10.02c0-.95.5-1.83 1.33-2.3L16.08.36a2.66 2.66 0 0 1 2.66 0l12.75 7.36a2.66 2.66 0 0 1 1.33 2.3v6l-5-2.89a2.66 2.66 0 0 0-2.66 0l-9.51 5.48a2.66 2.66 0 0 0-1.34 2.3v10.95c0 .9.45 1.72 1.19 2.21L3.33 27.05A2.66 2.66 0 0 1 2 24.75V10.02z" fill="url(#product-icon-elements--a)" /><path fillRule="evenodd" clipRule="evenodd" d="M15.5 34.07l.58.34c.82.48 1.84.48 2.66 0l12.75-7.36a2.66 2.66 0 0 0 1.33-2.3v-8.72l4.47 2.58a2.66 2.66 0 0 1 1.33 2.3v10.95c0 .95-.5 1.83-1.33 2.3l-9.48 5.48c-.82.48-1.83.48-2.65 0l-9.51-5.47-.15-.1z" fill="#96F" /><path fillRule="evenodd" clipRule="evenodd" d="M32.82 16.03l-5-2.9a2.66 2.66 0 0 0-2.66 0l-9.51 5.48a2.66 2.66 0 0 0-1.34 2.3v10.95c0 .9.45 1.72 1.19 2.21l.58.34c.82.48 1.84.48 2.66 0l12.75-7.36a2.66 2.66 0 0 0 1.33-2.3v-8.72z" fill="url(#product-icon-elements--b)" /><defs><linearGradient id="product-icon-elements--a" x1="17.41" y1="2.24" x2={17} y2="32.18" gradientUnits="userSpaceOnUse"><stop stopColor="#11EFE3" /><stop offset=".33" stopColor="#15E8E2" /><stop offset=".74" stopColor="#1FD3E0" /><stop offset={1} stopColor="#21CFE0" /></linearGradient><linearGradient id="product-icon-elements--b" x1="21.95" y1="40.81" x2="30.59" y2="9.56" gradientUnits="userSpaceOnUse"><stop stopColor="#0048E5" /><stop offset=".64" stopColor="#625AF5" /><stop offset={1} stopColor="#8A62FC" /></linearGradient></defs>
                </svg>
                <span>Elements</span>
              </div>
              <h4 className="font-semibold text-xl xl:text-2xl">Flexible UI components</h4>
              <p className="max-w-96 xl:text-xl">Build your own pixel-perfect payment experience</p>
              <div className="text-sm text-brand-gray-200 tracking-wider space-y-2">
                <div className="flex items-start space-x-3">
                  <div className="inline-flex size-4 shrink-0 rounded-full bg-brand-violet">
                    <svg className="size-2 m-auto shrink-0" width={15} height={13} viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12.9458 0.62169L4.59246 8.68336L2.3758 6.31502C1.96747 5.93002 1.3258 5.90669 0.859132 6.23336C0.404132 6.57169 0.275798 7.16669 0.555798 7.64502L3.1808 11.915C3.43746 12.3117 3.8808 12.5567 4.38246 12.5567C4.8608 12.5567 5.3158 12.3117 5.57246 11.915C5.99246 11.3667 14.0075 1.81169 14.0075 1.81169C15.0575 0.738356 13.7858 -0.206643 12.9458 0.610023V0.62169Z" fill="#9E77ED" />
                    </svg>
                  </div>
                  <span>Meet business-specific needs with modular UI components</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="inline-flex size-4 shrink-0 rounded-full bg-brand-violet">
                    <svg className="size-2 m-auto shrink-0" width={15} height={13} viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12.9458 0.62169L4.59246 8.68336L2.3758 6.31502C1.96747 5.93002 1.3258 5.90669 0.859132 6.23336C0.404132 6.57169 0.275798 7.16669 0.555798 7.64502L3.1808 11.915C3.43746 12.3117 3.8808 12.5567 4.38246 12.5567C4.8608 12.5567 5.3158 12.3117 5.57246 11.915C5.99246 11.3667 14.0075 1.81169 14.0075 1.81169C15.0575 0.738356 13.7858 -0.206643 12.9458 0.610023V0.62169Z" fill="#9E77ED" />
                    </svg>
                  </div>
                  <span>Design a fully branded checkout with customisable CSS-level styling</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="inline-flex size-4 shrink-0 rounded-full bg-brand-violet">
                    <svg className="size-2 m-auto shrink-0" width={15} height={13} viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12.9458 0.62169L4.59246 8.68336L2.3758 6.31502C1.96747 5.93002 1.3258 5.90669 0.859132 6.23336C0.404132 6.57169 0.275798 7.16669 0.555798 7.64502L3.1808 11.915C3.43746 12.3117 3.8808 12.5567 4.38246 12.5567C4.8608 12.5567 5.3158 12.3117 5.57246 11.915C5.99246 11.3667 14.0075 1.81169 14.0075 1.81169C15.0575 0.738356 13.7858 -0.206643 12.9458 0.610023V0.62169Z" fill="#9E77ED" />
                    </svg>
                  </div>
                  <span>Reduce friction and simplify compliance with built-in logic</span>
                </div>
              </div>
              <Link href="#" className="inline-flex items-center font-medium text-brand-blue-500 tracking-wider hover:text-brand-black transition gap-3 pt-2 lg:pt-4">
                <span>Explore Elements </span>
                <svg className="size-4 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>  
              </Link>
            </div>
          </div>
          <div className="group bg-white shadow-card rounded-lg p-1">
            <div className="relative bg-brand-blue-50 py-32 lg:py-40 overflow-hidden">
              <div className="absolute left-4 lg:left-6 top-4 lg:top-6 size-48 xl:size-56 rounded-lg shadow-md overflow-hidden">
                <Image fill className="size-full object-cover" src="/assets/images/message.png" alt='' />
              </div>
              <div className="absolute right-0 bottom-0 h-3/5 w-24 md:w-36 xl:w-52 rounded-tl-md">
                <Image fill className="size-full object-cover" src="/assets/images/scren.png" alt='' />
              </div>
            </div>
            <div className="relative space-y-2 md:space-y-3 p-4 lg:p-6 xl:p-8">
              <div className="inline-flex items-center text-xs font-semibold bg-brand-backwall rounded space-x-3 p-2.5 pr-4">
                <svg className="size-6" width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5603 16.2116c-.3287-.8362.2877-1.7409 1.1862-1.7409h15.7828c0 .3165-.059.633-.1768.9327l-3.5077 8.9217c-.3834.9751-1.3244 1.6163-2.3722 1.6163h-7.1818c0-.1582-.0295-.3165-.0884-.4663l-3.6421-9.2635Z" fill="url(#product-icon-payment-links--a)" /><path d="M.0896108 4.74087C-.239137 3.90471.377287 3 1.27575 3H14.6995c.0185 0 .0369.00039.0552.00117.0258-.00078.0517-.00117.0777-.00117h7.6402c1.0478 0 1.9889.6412 2.3723 1.61636l3.5076 8.92164c.1179.2998.1768.6162.1768.9327H12.7465c-.8985 0-1.5149.9047-1.1862 1.7409l3.6421 9.2635c.0589.1498.0884.3081.0884.4663H1.27575c-.898464 0-1.514886-.9047-1.1861386-1.7408L3.73167 14.9371c.11784-.2998.11784-.633 0-.9327L.0896108 4.74087Z" fill="url(#product-icon-payment-links--b)" /><path fillRule="evenodd" clipRule="evenodd" d="M15.2908 25.9414c0 .1583-.0295.3165-.0884.4664l-3.6421 9.2635c-.3287.8361.2877 1.7408 1.1862 1.7408h21.1968c1.0478 0 1.9889-.6412 2.3723-1.6163l3.5076-8.9217c.2357-.5995.2357-1.2659 0-1.8654l-3.5076-8.9216c-.3834-.9752-1.3245-1.6164-2.3723-1.6164h-5.414c0 .3165-.059.633-.1768.9327l-3.5077 8.9217c-.3834.9751-1.3244 1.6163-2.3722 1.6163h-7.1818Z" fill="#96F" /><defs><linearGradient id="product-icon-payment-links--a" x1="14.0622" y1="24.6669" x2="29.3565" y2="12.5589" gradientUnits="userSpaceOnUse"><stop stopColor="#0048E5" /><stop offset=".63979" stopColor="#625AF5" /><stop offset={1} stopColor="#8A62FC" /></linearGradient><linearGradient id="product-icon-payment-links--b" x1="14.2646" y1="4.50656" x2="14.0622" y2="24.6669" gradientUnits="userSpaceOnUse"><stop stopColor="#11EFE3" /><stop offset=".33" stopColor="#15E8E2" /><stop offset=".74" stopColor="#1FD3E0" /><stop offset={1} stopColor="#21CFE0" /></linearGradient></defs>
                </svg>
                <span>Payment Links</span>
              </div>
              <h4 className="font-semibold text-xl xl:text-2xl">Shareable payment links</h4>
              <p className="max-w-96 xl:text-xl">Accept your first payment in minutes – no code required</p>
              <div className="text-sm text-brand-gray-200 tracking-wider space-y-2">
                <div className="flex items-start space-x-3">
                  <div className="inline-flex size-4 shrink-0 rounded-full bg-brand-violet">
                    <svg className="size-2 m-auto shrink-0" width={15} height={13} viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12.9458 0.62169L4.59246 8.68336L2.3758 6.31502C1.96747 5.93002 1.3258 5.90669 0.859132 6.23336C0.404132 6.57169 0.275798 7.16669 0.555798 7.64502L3.1808 11.915C3.43746 12.3117 3.8808 12.5567 4.38246 12.5567C4.8608 12.5567 5.3158 12.3117 5.57246 11.915C5.99246 11.3667 14.0075 1.81169 14.0075 1.81169C15.0575 0.738356 13.7858 -0.206643 12.9458 0.610023V0.62169Z" fill="#9E77ED" />
                    </svg>
                  </div>
                  <span>Meet business-specific needs with modular UI components</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="inline-flex size-4 shrink-0 rounded-full bg-brand-violet">
                    <svg className="size-2 m-auto shrink-0" width={15} height={13} viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12.9458 0.62169L4.59246 8.68336L2.3758 6.31502C1.96747 5.93002 1.3258 5.90669 0.859132 6.23336C0.404132 6.57169 0.275798 7.16669 0.555798 7.64502L3.1808 11.915C3.43746 12.3117 3.8808 12.5567 4.38246 12.5567C4.8608 12.5567 5.3158 12.3117 5.57246 11.915C5.99246 11.3667 14.0075 1.81169 14.0075 1.81169C15.0575 0.738356 13.7858 -0.206643 12.9458 0.610023V0.62169Z" fill="#9E77ED" />
                    </svg>
                  </div>
                  <span>Design a fully branded checkout with customisable CSS-level styling</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="inline-flex size-4 shrink-0 rounded-full bg-brand-violet">
                    <svg className="size-2 m-auto shrink-0" width={15} height={13} viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12.9458 0.62169L4.59246 8.68336L2.3758 6.31502C1.96747 5.93002 1.3258 5.90669 0.859132 6.23336C0.404132 6.57169 0.275798 7.16669 0.555798 7.64502L3.1808 11.915C3.43746 12.3117 3.8808 12.5567 4.38246 12.5567C4.8608 12.5567 5.3158 12.3117 5.57246 11.915C5.99246 11.3667 14.0075 1.81169 14.0075 1.81169C15.0575 0.738356 13.7858 -0.206643 12.9458 0.610023V0.62169Z" fill="#9E77ED" />
                    </svg>
                  </div>
                  <span>Reduce friction and simplify compliance with built-in logic</span>
                </div>
              </div>
              <Link href="#" className="inline-flex items-center font-medium text-brand-blue-500 tracking-wider hover:text-brand-black transition gap-3 pt-2 lg:pt-4">
                <span>Explore Payment Links </span>
                <svg className="size-4 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>  
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* section 5 */}
      <section className="bg-white mt-10 md:mt-20 lg:mt-28">
        <div className="max-w-6xl mx-auto font-helvetica py-10 lg:py-20 px-4 xl:px-8">
          <div className="grid lg:grid-cols-4 gap-6 lg:gap-8 overflow-hidden">
            <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-7">
              <div className="blue-line pb-7 md:pb-10">  
                <h4 className="font-medium text-2xl">5+</h4>
                <p className="text-sm tracking-wider text-brand-gray-200">Amazon businesses on Stripe including Prime, Audible, and Amazon Pay.</p>
              </div>
              <div className="blue-line pb-7 md:pb-10">  
                <h4 className="font-medium text-2xl">50+</h4>
                <p className="text-sm tracking-wider text-brand-gray-200"> Payment methods available on Stripe</p>
              </div>
              <div className="hidden lg:block blue-line pb-1">  
                <h4 className="font-medium text-lg">Products used</h4>
                <div className="space-y-2 text-brand-gray-200">
                  <div className="flex items-center gap-3.5">
                    <svg className="size-5" width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M34.61 11.28a2.56 2.56 0 0 0-1.22-1.04L8.54.2A2.57 2.57 0 0 0 5 2.6V15c0 1.05.64 2 1.61 2.4l6.44 2.6 21.56 8.72c.26-.4.4-.88.39-1.36V12.64c0-.48-.13-.96-.39-1.37z" fill="url(#product-icon-payments-CustomerProfile-Maersk-a)" /><path d="M34.63 11.28L13.06 20l-6.45 2.6A2.58 2.58 0 0 0 5 25v12.42a2.58 2.58 0 0 0 3.54 2.39L33.4 29.76c.5-.21.93-.57 1.21-1.04.26-.41.4-.88.39-1.36V12.64c0-.48-.12-.95-.37-1.36z" fill="#96F" /><path d="M34.62 11.28l.1.17c.18.37.28.77.28 1.19v-.03 14.75c0 .48-.13.95-.39 1.36L13.06 20l21.56-8.72z" fill="url(#product-icon-payments-CustomerProfile-Maersk-b)" /><defs><linearGradient id="product-icon-payments-CustomerProfile-Maersk-a" x1={20} y1="4.13" x2={20} y2="21.13" gradientUnits="userSpaceOnUse"><stop stopColor="#11EFE3" /><stop offset={1} stopColor="#21CFE0" /></linearGradient><linearGradient id="product-icon-payments-CustomerProfile-Maersk-b" x1={35} y1="11.28" x2={35} y2="28.72" gradientUnits="userSpaceOnUse"><stop stopColor="#0048E5" /><stop offset={1} stopColor="#9B66FF" /></linearGradient></defs>
                    </svg>
                    <p>Payments</p>
                  </div>
                  <div className="flex items-center gap-3.5">
                    <svg className="size-5" width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">              
                      <path d="M12.47.01a13.01 13.01 0 0 0 .5 25.99h10.55c1.37 0 2.48-1.1 2.48-2.48V13.01a12.99 12.99 0 0 0-13.53-13z" fill="url(#product-icon-connect-CustomerProfile-BMW-a)" /><path d="M27.53 39.99a13.01 13.01 0 0 0-.5-25.99H16.48A2.48 2.48 0 0 0 14 16.48v10.51a12.99 12.99 0 0 0 13.53 13z" fill="#0073E6" /><path d="M26 14v9.52A2.48 2.48 0 0 1 23.52 26H14v-9.52A2.48 2.48 0 0 1 16.32 14l.16-.01H26z" fill="url(#product-icon-connect-CustomerProfile-BMW-b)" /><defs><linearGradient id="product-icon-connect-CustomerProfile-BMW-a" x1={13} y1="1.71" x2={13} y2="15.25" gradientUnits="userSpaceOnUse"><stop stopColor="#11EFE3" /><stop offset=".33" stopColor="#15E8E2" /><stop offset=".74" stopColor="#1FD3E0" /><stop offset={1} stopColor="#21CFE0" /></linearGradient><linearGradient id="product-icon-connect-CustomerProfile-BMW-b" x1={20} y1="15.72" x2={20} y2="27.24" gradientUnits="userSpaceOnUse"><stop stopColor="#00299C" /><stop offset={1} stopColor="#0073E6" /></linearGradient></defs>
                    </svg>
                    <p>Connect</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="group lg:col-span-3 relative h-80 lg:h-[25.625rem] card-overlay flex flex-col justify-between rounded-xl overflow-hidden p-4 md:p-6">
              <div className="relative flex items-start justify-between z-10">
                <svg className="!fill-current text-white" xmlns="http://www.w3.org/2000/svg" width={200} height={40} preserveAspectRatio="xMinYMin meet" viewBox="53.987 12.06 200 40"><g fill="none" fillRule="evenodd"><path fill="currentColor" d="M111.58 33.91C106.18 37.9 98.37 40 91.64 40a36.13 36.13 0 01-24.37-9.28c-.5-.45-.05-1.08.56-.72a49.08 49.08 0 0024.37 6.46c5.98 0 12.55-1.24 18.6-3.8.9-.39 1.67.6.78 1.25" /><path fill="currentColor" d="M113.82 31.36c-.69-.88-4.56-.42-6.3-.21-.52.06-.6-.4-.13-.73 3.09-2.17 8.15-1.54 8.73-.82.6.74-.15 5.8-3.04 8.21-.45.38-.87.18-.67-.31.65-1.63 2.1-5.26 1.41-6.14" /><path fill="currentColor" d="M107.65 15.13v-2.1c0-.33.24-.54.53-.54h9.45c.3 0 .54.22.54.53v1.8c0 .3-.26.7-.71 1.33l-4.9 6.97c1.82-.04 3.74.23 5.4 1.16.36.2.47.51.5.82v2.24c0 .31-.34.67-.7.48a10.89 10.89 0 00-9.98.02c-.33.17-.67-.18-.67-.49v-2.13c0-.34 0-.93.35-1.45l5.67-8.11h-4.94a.53.53 0 01-.54-.53M73.2 28.26h-2.88a.54.54 0 01-.5-.48V13.06c0-.3.24-.53.55-.53h2.67c.28.01.5.23.52.5v1.92h.06c.7-1.86 2-2.73 3.78-2.73 1.8 0 2.92.87 3.73 2.73a4.08 4.08 0 013.96-2.73c1.2 0 2.52.5 3.33 1.61.9 1.24.72 3.04.72 4.62v9.28c0 .3-.25.53-.55.53h-2.87a.54.54 0 01-.52-.52v-7.8c0-.63.06-2.18-.08-2.76-.22-1-.86-1.27-1.69-1.27-.7 0-1.42.46-1.72 1.2-.29.75-.26 1.99-.26 2.82v7.8c0 .3-.25.53-.56.53h-2.87a.54.54 0 01-.51-.52v-7.8c0-1.65.26-4.06-1.77-4.06-2.07 0-1.99 2.35-1.99 4.05v7.8c0 .3-.25.53-.55.53m53.11-13.03c-2.11 0-2.25 2.88-2.25 4.67 0 1.8-.02 5.64 2.23 5.64 2.22 0 2.33-3.1 2.33-4.99 0-1.24-.05-2.72-.43-3.9-.32-1.02-.96-1.42-1.88-1.42m-.02-3.01c4.26 0 6.57 3.66 6.57 8.3 0 4.5-2.55 8.05-6.57 8.05-4.19 0-6.46-3.65-6.46-8.2 0-4.59 2.3-8.15 6.46-8.15m12.1 16.04h-2.87a.54.54 0 01-.51-.52V13a.55.55 0 01.55-.48h2.66c.25.01.46.18.51.41v2.25h.05c.81-2.01 1.94-2.97 3.92-2.97 1.29 0 2.55.47 3.35 1.74.75 1.17.75 3.16.75 4.58v9.26a.55.55 0 01-.55.46h-2.88a.54.54 0 01-.5-.46v-8c0-1.6.18-3.95-1.8-3.95-.7 0-1.35.46-1.67 1.17-.4.9-.46 1.8-.46 2.79v7.92c0 .3-.25.53-.55.53m-35.38-.03a.6.6 0 01-.68.06c-.96-.79-1.13-1.15-1.65-1.9-1.57 1.6-2.7 2.08-4.73 2.08-2.42 0-4.3-1.5-4.3-4.47a4.87 4.87 0 013.06-4.69c1.56-.68 3.74-.8 5.4-1v-.36c0-.69.06-1.5-.35-2.08-.35-.53-1.02-.75-1.61-.75-1.1 0-2.07.56-2.31 1.72-.05.26-.24.52-.5.53l-2.78-.3c-.24-.05-.5-.24-.43-.6.64-3.37 3.69-4.4 6.42-4.4 1.4 0 3.23.38 4.33 1.44 1.4 1.3 1.26 3.04 1.26 4.93v4.47c0 1.34.56 1.93 1.09 2.66.18.26.22.57-.01.76-.59.49-1.63 1.4-2.2 1.9h-.01zm-2.9-7c0 1.12.03 2.05-.54 3.05-.45.8-1.18 1.3-1.98 1.3-1.1 0-1.75-.84-1.75-2.08 0-2.44 2.2-2.88 4.27-2.88v.61zm-34.76 7a.6.6 0 01-.68.06c-.95-.79-1.12-1.15-1.65-1.9-1.57 1.6-2.69 2.08-4.73 2.08-2.42 0-4.3-1.5-4.3-4.47a4.87 4.87 0 013.06-4.69c1.56-.68 3.74-.8 5.4-1v-.36c0-.69.06-1.5-.35-2.08-.34-.53-1.02-.75-1.6-.75-1.1 0-2.08.56-2.32 1.72-.05.26-.24.52-.5.53l-2.78-.3c-.23-.05-.5-.24-.43-.6.64-3.37 3.7-4.4 6.43-4.4 1.4 0 3.22.38 4.32 1.44 1.4 1.3 1.27 3.04 1.27 4.93v4.47c0 1.34.55 1.93 1.08 2.66.18.26.22.57-.01.76-.59.49-1.63 1.4-2.2 1.9zm-2.9-7c0 1.12.03 2.05-.53 3.05-.46.8-1.18 1.3-2 1.3-1.1 0-1.74-.84-1.74-2.08 0-2.44 2.2-2.88 4.28-2.88v.61z" /></g>
                </svg>
                <svg role="presentation" width={20} viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.9.27c1.62 0 2.92 1.3 2.92 2.91v13.1c0 .8-.65 1.45-1.46 1.45H3.42c-2.15 0-3.24-1.05-3.24-2.83V6.4c0-2.45 2.18-3.2 4.12-3.2C4.3 1.57 5.6.26 7.21.26h9.7zM7.83 3.55a1.1 1.1 0 1 0 0 2.18h5.45a1.1 1.1 0 1 0 0-2.18H7.82zm0 4.36a1.1 1.1 0 1 0 0 2.18h8.73a1.1 1.1 0 0 0 0-2.18H7.82zm0 4.36a1.1 1.1 0 1 0 0 2.18h8.73a1.1 1.1 0 1 0 0-2.18H7.82zM4 5.73c-.9 0-1.64.73-1.64 1.63v7.1c0 .6.5 1.09 1.1 1.09h1.09V5.73H4z" fill="#fff" /></svg>
              </div>
              <div className="relative space-y-2 lg:space-y-4 z-20">
                <h2 className="max-w-md text-white text-xl lg:text-2xl/9">See how Amazon simplified cross-border payments with Stripe</h2>
                <Link href="#" className="inline-flex items-center font-medium text-white transition gap-3">
                  <span>Read story </span>
                  <svg className="size-4 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>  
                </Link>
              </div>
              {/* amazon img */}
              <Image className="absolute top-0 left-0 size-full z-0 object-cover" fill src="/assets/images/home-enterprise-amazon.png" alt='' />
            </div>  
          </div>
        </div>
      </section>
      {/* contact btn */}
      <section className="flex items-center justify-center py-10">
        <Link href="/contact" className="bg-brand-btn hover:bg-brand-btn-hover font-bold text-center text-white uppercase rounded-full overflow-hidden transition duration-300 px-8 xl:px-14 py-3">
          <span>Contact us</span>
        </Link> 
      </section>
    </main>
  );
}
