import React from 'react'
import ProjectCard from '../components/ProjectCard'
import '../styles/Projects.css'
import Git from '../../public/images/github.svg';

export default function Projects() {
    return (
        <div id='projects' className=''>

            <div id='project-header-text' className=' pt-32'>
                <h1 className='gradient-text text-center font-bold text-7xl  ' id='project-title'>Projects </h1>
                <h2 className='text-white text-center  text-lg w-[400px] mx-auto mt-5'  > Here are some of the projects I have developed to enhance my skills as a developer 🚀</h2>
                <a>  <button className='text-white flex items-center justify-center gap-2 bg-gray-700 git-button mx-auto mt-3 '> <img src={Git} className='w-[20px] ' />View my Github</button> </a>

            </div>

            <div id='proj-scroll' className='flex gap-12 ml-12 mt-10' >
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />


            </div>



        </div>
    )
}
