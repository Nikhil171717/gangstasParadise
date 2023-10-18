"use client"

import React from 'react'
import Image from 'next/image'
const Nav = () => {
  return (
    <div>
      <div className='flex justify-between px-3 items-center'>
        <div className='border-solid p-2 border-r-[.2px] flex items-center justify-center w-36 border-black '>
          <Image src={require("../assets/logo.png")} height={40}/>
        </div>
        <div className='p-2 flex items-center gap-4'>
          <select>
            
          </select>
          <button className='bg-green-300 p-1 rounded-full text-sm  px-3'>
            LOG IN 
          </button>
        </div>

      </div>
     
    </div>
  )
}

export default Nav