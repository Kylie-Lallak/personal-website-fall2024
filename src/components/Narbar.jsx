import React from 'react'
import '../styles/Navbar.css'

export default function Narbar() {
  return (
    <nav className='box navbar mx-auto z-50' >
      <div className='nav-text flex justify-between items-center  mx-8 md:mx-20 h-full z-10' >
        <h1 className='text-xl font-bold sm:text-2xl md:text-3xl'>Kylie.</h1>
        <div className='flex gap-6 text-base sm:text-lg sm:gap-11 md:text-xl md:gap-14 items-center'>
          <h2> Home </h2>
          <h2> About </h2>
          <h2> Projects </h2>
          <h2> Contact </h2>
        </div>
      </div>

    </nav>
  )
}
