import React from 'react'
import '../styles/ProjectCard.css'
import UiUx from '../../public/images/uiux.png'
import Arrow from '../../public/images/arrow.svg'

export default function ProjectCard() {
  return (
    <div id='project-card' className=' gradient-border text-white mt-10 '>

      <div className='ml-5 mt-5 flex flex-col gap-4'>
        <h1 className='text-4xl font-bold'>Project Name</h1>
        <p className='text-xl'> a quick description</p>
        <a> <button className='proj-card-btn flex justify-center items-center gap-7 mb-10'> View project <img src={Arrow} className='max-w-[35px]' /> </button> </a>

      </div>

      <div className='h-[50%] object-cover'>
        <img src={UiUx} className='proj-card-img h-[100%] scale-150' />

      </div>




    </div>
  )
}
