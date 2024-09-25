import React from 'react'
import '../styles/ProjectCard.css'
import Arrow from '../../public/images/arrow.svg'


export default function ProjectCard({ name, desc, image, link }) {
  return (
    <div id='project-card' className=' gradient-border text-white  '>

      <div className=' flex flex-col justify-center '>
        <h1 className='text-4xl font-bold mb-2'>{name}</h1>
        <p className='text-xl mb-7'> {desc}</p>
        <a href={link} target='_blank' className='proj-card-btn flex justify-center items-center gap-7 mb-28'> View project <img src={Arrow} className='max-w-[35px]' />  </a>

      </div>

      <div className='h-[50%] '>
        <img src={image} className='proj-card-img h-[100%] scale-150' />

      </div>




    </div>
  )
}
