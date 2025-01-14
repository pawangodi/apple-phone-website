import React from 'react'

import {navLists } from "../constants/index"

import {appleImg , searchImg , bagImg} from "../utils"

const Navbar = () => {
  
  return (
    <header className=' w-full  py-5 sm:px-10 px-5 '>
      <nav className=' flex w-full screen-max-width '>
         <img src = {appleImg} alt = "Apple image"  width={18}  height={18} />
          
         <div className=' flex flex-1 justify-center max-sm:hidden'>
              {navLists.map((nav)=>(
                <a href={`linking-to/${nav}`} key={nav} className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-all' >{nav}</a> 
              ))}
          </div> 
           <div className=' flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
               <img src = {searchImg} alt = "Search image"  width={18}  height={18} />
               <img src = {bagImg} alt = "Bag image"  width={18}  height={18} />
           </div>
      </nav>
    </header>
  )
}

export default Navbar
