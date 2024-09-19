import React from 'react'
import '../styles/About.css'
import AboutImg from '../../public/images/about.png'

export default function About() {
  return (
    <div id='about'>
      <div id='about-text'>
        <h1 className='text-white font-bold mx-10 mt-24 text-5xl'>a bit about me</h1>
        <p className='text-white mt-6 mx-10'>Hi, I'm Kylie Lallak, a computer science student from Mahtomedi, Minnesota. I began my journey at UC Davis in the fall of 2022 with a passion for problem-solving and using technology to create solutions that make a real difference. My main focus is on web development, where I’m continually sharpening my skills. Outside of coding, I love bouldering, playing volleyball, and expressing creativity through arts and crafts.</p>
      </div>
      <img src={AboutImg} className='mx-10 mt-10 max-w-[420px]' alt='a grid of 6 images, a picture of kylie standing, a ceramic mug being made, sunset at the beach, the woods in winter, a group holding a sword fish on a boat and a group of 4 girls hugging '/>
    </div>
  )
}
