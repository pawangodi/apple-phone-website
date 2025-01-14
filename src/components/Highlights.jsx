import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'
import React from 'react'

import VideoCarausel from "./VideoCarausel"
import { watchImg, rightImg } from '../utils'

const Hilights = () => {

  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 })
    gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25 })

  }, [])
  return (
    <section id="highlights" className=' w-screen overflow-hidden h-full common-padding bg-zinc mt-0'>
      <div className=' screen-max-width'>
        <div className=' mb-12 w-full md:flex  justify-between'>
          <h1 id="title" className='section-heading'>Get the Highlights.</h1>

          <div className='flex flex-wrap items-end gap-5'>
            <p className='link'>Watch the film
              <img src={watchImg} alt="watch" className='ml-2' />
            </p>
            <p className='link'>Watch the event
              <img src={rightImg} alt="right" className='ml-2' />
            </p>
          </div>
        </div>
        <VideoCarausel />
      </div>
    </section>
  )
}

export default Hilights
