import React from 'react'
import '../styles/ProjectCard.css'
import Arrow from '../../public/images/arrow.svg'

export default function ProjectCard({ name, desc, image, link }) {
  return (
    <div id='project-card' className=' gradient-border text-white mt-10 '>

      <div className='ml-5 mt-5 flex flex-col gap-4'>
        <h1 className='text-4xl font-bold'>{name}</h1>
        <p className='text-xl'> {desc}</p>
        <a href={link} target='_blank' className='proj-card-btn flex justify-center items-center gap-7 mb-10'> View project <img src={Arrow} className='max-w-[35px]' />  </a>

      </div>

      <div className='h-[50%] '>
        <img src={image} className='proj-card-img h-[100%] scale-150' />

      </div>




    </div>
  )
}
