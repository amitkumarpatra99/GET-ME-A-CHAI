/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Footer = () => {
  return (
    <footer className=' bg-slate-900 text-white  px-4 h-14 flex gap-1 items-center justify-center'>
     <p className='flex  text-center '>Copyright &copy;</p>
     <p className='flex  text-center font-semibold'>MR PATRA </p>
     <span className='flex gap-2 p-1 m-1 animate-pulse' >
      <img width={20} src="/heart.png" alt="" /></span> 
    </footer>
  )
}

export default Footer
