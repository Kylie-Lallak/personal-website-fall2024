import React from 'react'
import ProjectCard from '../components/ProjectCard'
import '../styles/Projects.css'
import Git from '../../public/images/github.svg';
import ProjectsData from './ProjectsData';
import Work from '../../public/images/work.svg'

export default function Projects() {
    return (
        <div  >

            <div id='projects' className=' pt-32'>
                <h1 className='gradient-text text-center font-bold text-7xl  ' id='project-title'>Projects </h1>
                <h2 className='text-white text-center  text-lg w-[450px] mx-auto mt-5'  > Here are my projects, listed from <span className='font-bold text-xl text-blue-500'>newest</span> to <span className='font-bold text-xl text-blue-500'>oldest</span>. I hope you can see my <span className='font-bold text-xl text-indigo-400'>growth</span> and everything I've learned along the way! 🚀</h2>
                <div className='flex justify-center gap-4'>
                    <a href='#experience' >  <button className='text-white flex items-center justify-center gap-2 bg-gray-700 git-button mx-auto mt-3 '> <img src={Work} className='w-[20px] ' /> My experiences</button> </a>
                    <a href='https://github.com/Kylie-Lallak' target="_blank">  <button className='text-white flex items-center justify-center gap-2 bg-gray-700 git-button mx-auto mt-3 '> <img src={Git} className='w-[20px] ' />View my Github</button> </a>
                </div>

            </div>

            <div id='proj-scroll' className='flex gap-12 ml-12 mt-10' >
                {ProjectsData.map((card, i) => (
                    <ProjectCard key={i} name={card.name} desc={card.desc} image={card.image} link={card.link} />
                ))}


            </div>



        </div>
    )
}
