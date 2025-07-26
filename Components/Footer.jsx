import Image from 'next/image'
import React from 'react'
import { assets } from '@/Assets/assets'

const Footer = () => {
  return (
    <div className='flex justify-around flex-col sm:flex-row items-center gap-2 bg-black py-3'>
      <Image src={assets.logo_light} alt='' width={180} />
      <p className='font-extralight text-white text-lg text-center sm:text-left px-2'>
        This website is created by Hassan Elsayed
      </p>
      <div className='flex gap-2'>
        <Image src={assets.facebook_icon} alt='Facebook' width={30} />
        <Image src={assets.twitter_icon} alt='Twitter' width={30} />
        <Image src={assets.googleplus_icon} alt='Google Plus' width={30} />
      </div>
    </div>
  )
}

export default Footer
