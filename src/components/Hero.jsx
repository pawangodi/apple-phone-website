import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


import { heroVideo, smallHeroVideo } from '../utils/index'

const Hero = () => {

  const [videoSrc, setVideoSrc] = useState(window.innerWidth > 768 ? heroVideo : smallHeroVideo)

  const handleVideoSrcSet = () => {

    if (window.innerWidth > 768) {
      setVideoSrc(heroVideo)
    } else setVideoSrc(smallHeroVideo)
  }

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);

    return () => {
      window.addEventListener("resize", handleVideoSrcSet);
      window.removeEventListener("resize",)
    }
  }, [])

  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 1.2 })

    gsap.to("#cta", { opacity: 1, y: -50, delay: 2 })

  }, [])


  return (
    <section className='w-full nav-height bg-black relative'>
      <div className=' h-5/6 w-full flex-center flex-col'>
        <p id='hero' className='hero-title '>iPhone 15 Pro</p>
        <div className='md:w-10/12 w-9/12'>
          <video className='pointer-events-none ' autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div id='cta' className='max-md:mt-4 flex flex-col flex-center opacity-0'>
        <a href='#highlights' className='btn' >Buy</a>
        <p className='font-normal  text-xl '>From $199/month or $999</p>
      </div>
    </section>
  )
}

export default Hero
