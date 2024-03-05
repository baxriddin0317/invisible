import { Action, Newslatter, Solutions, Testimonial, Training, Visibility } from '@/components'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Safety = () => {
  return (
    <main>
      <Solutions />
      <Action />
      <Visibility />
      <Testimonial />
      <Training />
      <Newslatter />
    </main>
  )
}

export default Safety