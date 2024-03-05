import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Cards = () => {
  return (
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
  )
}
