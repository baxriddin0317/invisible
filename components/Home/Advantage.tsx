import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Advantage = () => {
  return (
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
  )
}
