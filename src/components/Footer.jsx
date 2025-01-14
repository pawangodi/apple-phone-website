import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
    return (
        <div className='screen-max-eidth common-padding'>
            <div>
                <p className='font-semibold text-gray text-xs '>
                    More ways to shop: {' '}
                    <span className='underline text-blue'>
                        Find an Apple Store {' '}
                    </span>
                    or {' '}
                    <span className='underline text-blue'>
                        other retailer {' '}
                    </span>
                    near you.
                </p>
                <p className='font-semibold text-gray text-xs '>
                    Or call 00080-040-1966
                </p>
            </div>
            <div className='bg-neutral-700 my-5 h-[1px] w-full' />
            <div className='flex md:flex-row flex-col md:items-center justify-between'>
                <p className='font-semibold text-gray text-xs'>
                    Copyright @2024 Apple Inc All rights reserved.
                </p>
                <div className='flex'>
                    {footerLinks.map((link, i) => (
                        <p key ={link} className='font-semibold  text-gray text-xs' >
                            {link}{' '}{i !== footerLinks.length - 1 && '| '}
                        </p>
                    ))}
                </div>


            </div>
        </div>
    )
}

export default Footer