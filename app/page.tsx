'use client'

import Image from "next/image";
import Link from "next/link";
import { Advantage, Cards, Ergonomics, HeroSlider, Payments } from "@/components";
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
      <Ergonomics />
      {/* section 3 */}
      <Payments />
      <Payments />
      <Payments />
      <Payments />
      {/* section 4 */}
      <Cards />
      {/* section 5 */}
      <Advantage />
      {/* contact btn */}
      <section className="flex items-center justify-center py-10">
        <Link href="/contact" className="bg-brand-btn hover:bg-brand-btn-hover font-bold text-center text-white uppercase rounded-full overflow-hidden transition duration-300 px-8 xl:px-14 py-3">
          <span>Contact us</span>
        </Link> 
      </section>
    </main>
  );
}
