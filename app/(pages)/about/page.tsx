import { Carees, Feature, HeroAbout, Investors, Leadership, Mission, Values } from '@/components'
import React from 'react'

const About = () => {
  return (
    <main>
      <HeroAbout />
      <Feature />
      <Leadership />
      <Investors />
      {/* MISSION & VALUES */}
      <Mission />
      {/* our values */}
      <Values />
      {/* CAREERS */}
      <Carees />
    </main>
  )
}

export default About