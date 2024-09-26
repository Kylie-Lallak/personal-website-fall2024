import React from 'react'
import '../styles/Experience.css'
import LinkedIn from '../../public/images/linkedin.svg'
import Neuro from '../../public/images/neruo.png'

export default function Experience() {
    return (
        <div id='ex-sect' className='mt-16'>

            <div>
                <h1 className='font-bold text-center text-white text-5xl md:text-7xl gradient-text'>Experience</h1>
                <h2 className='text-white text-center   max-w-[450px] mx-auto mt-5'  > Here is an overview of my experience. I am always eager to learn and grow, and I'm currently seeking new opportunities to expand my skills  🌱</h2>

                <div className='flex items-center justify-center gap-3 mt-7'>
                    <a className='ex-btn '> <img src={LinkedIn} className='max-w-[25px]' />  View my LinkedIn</a>
                    <a className='ex-btn '> <img src={LinkedIn} className='max-w-[25px]' />  View my Resumé</a>


                </div>
            </div>


            <div className='w-[40%] ml-10'>
                <div className='flex items-center gap-4'>
                    <img src={Neuro} className='w-[70px]' />
                    <h1 className='text-white text-4xl font-bold '>Neurotech@Davis</h1>

                </div>
                <div className='flex items-center justify-between bg-slate-800'> <h2 className='text-white' >Project Manger</h2> <h3 className='text-gray-600'> June 2024 - Present</h3> </div>

                <ul className='ex-ul ml-10'>
                    <li>Led a cross-functional team of 3 developers and 1 designer in the development, design, and deployment of the organization's website. Successfully coordinated efforts to meet tight deadlines, ensuring a seamless user experience for over 100 members.</li>
                    <li>Devloped using React.js Javascript, CSS, Tailwind CSS</li>
                    <li>Website coming soon 😊</li>
                </ul>

                <div className='flex items-center justify-between bg-slate-800'> <h2 className='text-white' >Project Member</h2> <h3 className='text-gray-600'> Oct 2023 - June 2024</h3> </div>

                <ul className='ex-ul ml-10'>
                    <li>Led a cross-functional team of 3 developers and 1 designer in the development, design, and deployment of the organization's website. Successfully coordinated efforts to meet tight deadlines, ensuring a seamless user experience for over 100 members.</li>
                    <li>Devloped using React.js Javascript, CSS, Tailwind CSS</li>
                    <li>Website coming soon 😊</li>
                </ul>

            </div>



            <div className='w-[40%] ml-10'>
                <div className='flex items-center gap-4'>
                    <img src={Neuro} className='w-[70px]' />
                    <h1 className='text-white text-4xl font-bold '>Neurotech@Davis</h1>

                </div>
                <div className='flex items-center justify-between bg-slate-800'> <h2 className='text-white' >Project Manger</h2> <h3 className='text-gray-600'> June 2024 - Present</h3> </div>

                <ul className='ex-ul ml-10'>
                    <li>Led a cross-functional team of 3 developers and 1 designer in the development, design, and deployment of the organization's website. Successfully coordinated efforts to meet tight deadlines, ensuring a seamless user experience for over 100 members.</li>
                    <li>Devloped using React.js Javascript, CSS, Tailwind CSS</li>
                    <li>Website coming soon 😊</li>
                </ul>

                <div className='flex items-center justify-between bg-slate-800'> <h2 className='text-white' >Project Member</h2> <h3 className='text-gray-600'> Oct 2023 - June 2024</h3> </div>

                <ul className='ex-ul ml-10'>
                    <li>Led a cross-functional team of 3 developers and 1 designer in the development, design, and deployment of the organization's website. Successfully coordinated efforts to meet tight deadlines, ensuring a seamless user experience for over 100 members.</li>
                    <li>Devloped using React.js Javascript, CSS, Tailwind CSS</li>
                    <li>Website coming soon 😊</li>
                </ul>

            </div>





        </div >
    )
}
