import React from 'react'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <>
      <div className="  mb-10 h-px bg-gray-700  "></div>
      <div className='text-white flex justify-between mx-10 sm:mx-14 md:mx-20 lg:mx-28 ' >

        <h1 className=' text-4xl font-bold'>Kylie.</h1>
        <div id='footer-sect-container ' className='flex flex-wrap gap-12 ml-28 '>


          <div id='footer-site'>
            <h2 className='font-bold text-2xl'>Social</h2>
            <div className='flex flex-col gap-1 text-gray-300 mt-2'>
              <a href="https://www.linkedin.com/in/kylie-lallak/" target='_blank'> LinkedIn</a>
              <a href="https://github.com/Kylie-Lallak" target='_blank'>GitHub</a>

            </div>
          </div>




          <div id='footer-site'>
            <h2 className='font-bold text-2xl'>Contact</h2>
            <div className='flex flex-col gap-1 text-gray-300 mt-2'>
              <a href='mailto:kylieraelallak@gmail.com' target='_blank'> kylieraelallak@gmail.com</a>
              (651) 398-7545

            </div>
          </div>

          <div id='footer-site'>
            <h2 className='font-bold text-2xl'>Site</h2>
            <div className='flex flex-col gap-1 text-gray-300 mt-2'>
              <a href="#home"> Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#experience">Experience</a>
              <a href="#contact">Contact</a>
            </div>
          </div>




        </div>
      </div>

      <h2 className='text-white text-center text-lg mt-8 pb-10'>Made with 🤍 by Kylie Lallak</h2>
    </>

  )
}
