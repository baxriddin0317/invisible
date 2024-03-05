import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { menu } from '@/lib'

export const Header = () => {
  return (
    <header className="flex items-center justify-start gap-4 xl:gap-8 py-5 xl:py-7 px-4 xl:px-10">
      <Link href="/" className="relative w-44 h-10">
        <Image className='absolute inset-0' src="/assets/images/logo.png" fill alt='sakdjna' />
      </Link>
      <div className="hidden lg:flex items-center font-semibold capitalize space-x-3 ml-4 xl:ml-12">
        {menu.map((item,idx) => (
          <div className="group relative" key={idx}>
            <div className="flex items-center cursor-pointer space-x-1 p-2">
              <span>{item.name}</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
            <div className="hidden group-hover:flex flex-col absolute top-9 left-0 w-44 bg-white rounded-b-lg overflow-hidden z-20">  
              {item.links.map((link, idx) => (
                <Link href={link.href} key={idx} className="hover:bg-brand-blue-100 text-black hover:text-white transition-colors px-4 py-5">{link.name}</Link>  
              ))}         
            </div>
          </div>
        ))}
      </div>

      {/* mobile menu */}
      {/* <div className='lg:hidden'>
        sa
      </div> */}

      <Link href="#" className="hidden md:inline-block bg-brand-btn hover:bg-brand-btn-hover font-bold text-center text-white uppercase rounded-full overflow-hidden transition duration-300 px-8 xl:px-14 py-3 ml-auto">
        <span>Questions</span>
      </Link> 
      {/*menu btn  */}
      <button type="button" className="block lg:hidden text-brand-blue-100 bg-white rounded-md p-3 ml-auto md:ml-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>      
      </button>
    </header>
  )
}
