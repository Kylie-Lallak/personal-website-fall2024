import React from 'react'
import '../styles/About.css'
import AboutImg from '../../public/images/about.png'

export default function About() {
  return (
    <div id='about' className='flex  flex-col items-center mx-10 md:flex-row  md:gap-10 lg:gap-20 mb-20'>
      <div id='about-text md:max-w-[50%] '>
        <h1 className='text-white  font-bold  mt-24 text-5xl sm:text-4xl lg:text-7xl'>a bit about me</h1>
        <p className='text-white mt-6 text-base'>Hi, I'm Kylie Lallak, a computer science student from Mahtomedi, Minnesota. I began my journey at UC Davis in the fall of 2022 with a passion for problem-solving and using technology to create solutions that make a real difference. My main focus is on web development, where I’m continually sharpening my skills. Outside of coding, I love bouldering, playing volleyball, and expressing creativity through arts and crafts.</p>
        <a href="#projects" className="btn btn-white btn-animate text-sm mt-6 mb-6">See my work</a>
      </div>

      <img src={AboutImg} className='mt-10 md:max-w-[50%] pt-20 md:pt-0' alt='a grid of 6 images, a picture of kylie standing, a ceramic mug being made, sunset at the beach, the woods in winter, a group holding a sword fish on a boat and a group of 4 girls hugging ' />
    </div>


  )
}
