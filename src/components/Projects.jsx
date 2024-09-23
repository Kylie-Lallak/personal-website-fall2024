import React from 'react'
import ProjectCard from '../components/ProjectCard'
import '../styles/Projects.css'
export default function Projects() {
    return (
        <div id='projects' className='mt-20'>

            <div>
                <h1 className='gradient-text text-center font-bold text-7xl mt-10 mb-10 '>Projects</h1>
                <h2 className='text-white text-center mb-10 text-lg w-[400px] mx-auto'  > Here are some of the projects I have developed to enhance my skills as a developer.</h2>


            </div>

            <div id='proj-scroll' className='flex gap-12 ml-10'>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />


            </div>



        </div>
    )
}
