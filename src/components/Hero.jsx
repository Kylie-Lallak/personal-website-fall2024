import React from 'react'
import '../styles/HeroStyles.css'

export default function Hero() {
  return (
    <div id='hero-section'>
      <div className='blob-outer-container'>
        <div className='blob-inner-countainer'> 
        <div className='blob'>

        </div>

        </div>

      </div>

      <div className=' flex justify-center items-center text-white h-[100vh] hero-text '>
        <div className='flex justify-center flex-col mx-16'>
            <h1 className='text-7xl font-bold sm:text-8xl'>Hi, I'm Kylie.</h1> 
            <h2 className='text-2xl mt-5 sm:text-3xl md:text-5xl'> and I'm a aspiring <span className='font-extrabold text-3xl sm:text-4xl md:text-5xl'>  software devloper</span></h2>
            
            <div class="flex justify-center mt-14">
              <a href="#" class="btn btn-white btn-animate text-xl">See my work</a>
            </div>

        </div>
     
       
      </div>
    </div>
  )
}
