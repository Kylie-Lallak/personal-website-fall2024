import React from 'react'
import '../styles/About.css'
import AboutImg from '../../public/images/about.png'

export default function About() {
  return (
    <div id='about' className='flex  flex-col items-center mx-10 md:flex-row  md:gap-10 lg:gap-20 mb-20'>
      <div id='about-text md:max-w-[50%] '>
        <h1 className='text-white  font-bold  mt-24 text-5xl sm:text-4xl lg:text-7xl'>a bit about me</h1>
        <p className='text-white mt-6 text-base'>Hi, I'm Kylie Lallak, a computer science student at UC Davis, originally from Minnesota. I began my journey at UC Davis in the fall of 2022, driven by my passion for problem-solving and creating impactful projects. I’m currently an aspiring full stack web developer, with significant experience in front-end development, and I’m actively working on mastering the back-end to complete my skill set. </p>
        <p className='text-white mt-6 text-base'>Outside of my professional development, I love being involved in my campus community. I’m happiest when meeting new people and contributing to meaningful activities. Currently, I’m part of Neurotech@Davis, Data Driven Change, and Alpha Phi Omega, a professional service fraternity. </p>
        <a href="#projects" className="btn btn-white btn-animate text-sm mt-6 mb-6">See my work</a>
      </div>

      <img src={AboutImg} className='mt-10 md:max-w-[50%] pt-20 md:pt-0' alt='a grid of 6 images, a picture of kylie standing, a ceramic mug being made, sunset at the beach, the woods in winter, a group holding a sword fish on a boat and a group of 4 girls hugging ' />
    </div>


  )
}
