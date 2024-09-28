import React from 'react'
import '../styles/Experience.css'
import LinkedIn from '../../public/images/linkedin.svg'
import Neuro from '../../public/images/neruo.png'
import D3C from '../../public/images/d3c.png'
import IMG from '../../public/images/about.png'

export default function Experience() {
    return (
        <div id='ex-sect' className='mt-16'>

            <div className='mb-20'>
                <h1 className='font-bold text-center text-white text-5xl md:text-7xl gradient-text'>Experience</h1>
                <h2 className='text-white text-center   max-w-[450px] mx-auto mt-5'  > Here is an overview of my experience. I am always eager to learn and grow, and I'm currently seeking new opportunities to expand my skills  🌱</h2>

                <div className='flex items-center justify-center gap-3 mt-7'>
                    <a className='ex-btn '> <img src={LinkedIn} className='max-w-[25px]' />  View my LinkedIn</a>
                    <a className='ex-btn '> <img src={LinkedIn} className='max-w-[25px]' />  View my Resumé</a>


                </div>
            </div>



            <div id='neuro-ex'>
                <div className=' flex flex-col items-center mx-auto gap-10 w-[80%]  md:flex-row '>

                    <div className='md:w-[50%]'>

                        <div className='flex items-center gap-4'>
                            <img src={Neuro} className='w-[70px]' />
                            <h1 className='text-white text-4xl font-bold '>Neurotech@Davis</h1>

                        </div>
                        <div className='flex items-center justify-between mt-4'> <h2 className='font-bold gradient-text-blue text-xl' >Project Manger</h2> <h3 className='text-gray-600'> June 2024 - Present</h3> </div>

                        <ul className='ex-ul ml-10'>
                            <li>Led a cross-functional team of 3 developers and 1 designer in the development, design, and deployment of the organization's website. Successfully coordinated efforts to meet tight deadlines, ensuring a seamless user experience for over 100 members.</li>
                            <li>Devloped using React.js Javascript, CSS, Tailwind CSS</li>
                            <li>Website coming soon 😊</li>
                        </ul>





                    </div>

                    <img src={IMG} className='md:w-[50%] md:ml-14' />



                </div>

                <div className=' flex flex-col items-center mx-auto gap-10 w-[80%]  md:flex-row '>

                    <div className='md:w-[50%]'>


                        <div className='flex items-center justify-between mt-4'> <h2 className='font-bold gradient-text-blue text-xl' >Project Manger</h2> <h3 className='text-gray-600'> June 2024 - Present</h3> </div>

                        <ul className='ex-ul ml-10'>
                            <li>Led a cross-functional team of 3 developers and 1 designer in the development, design, and deployment of the organization's website. Successfully coordinated efforts to meet tight deadlines, ensuring a seamless user experience for over 100 members.</li>
                            <li>Devloped using React.js Javascript, CSS, Tailwind CSS</li>
                            <li>Website coming soon 😊</li>
                        </ul>





                    </div>

                    <img src={IMG} className='md:w-[50%] md:ml-14' />
                </div>
            </div>


            <div id='neuro-ex'>
                <div className=' flex flex-col items-center mx-auto gap-10 w-[80%]  md:flex-row '>

                    <div className='md:w-[50%]'>

                        <div className='flex items-center gap-4'>
                            <img src={Neuro} className='w-[70px]' />
                            <h1 className='text-white text-4xl font-bold '>Neurotech@Davis</h1>

                        </div>
                        <div className='flex items-center justify-between mt-4'> <h2 className='font-bold gradient-text-blue text-xl' >Project Manger</h2> <h3 className='text-gray-600'> June 2024 - Present</h3> </div>

                        <ul className='ex-ul ml-10'>
                            <li>Led a cross-functional team of 3 developers and 1 designer in the development, design, and deployment of the organization's website. Successfully coordinated efforts to meet tight deadlines, ensuring a seamless user experience for over 100 members.</li>
                            <li>Devloped using React.js Javascript, CSS, Tailwind CSS</li>
                            <li>Website coming soon 😊</li>
                        </ul>





                    </div>

                    <img src={IMG} className='md:w-[50%] md:ml-14' />



                </div>

                <div className=' flex flex-col items-center mx-auto gap-10 w-[80%]  md:flex-row '>

                    <div className='md:w-[50%]'>


                        <div className='flex items-center justify-between mt-4'> <h2 className='font-bold gradient-text-blue text-xl' >Project Manger</h2> <h3 className='text-gray-600'> June 2024 - Present</h3> </div>

                        <ul className='ex-ul ml-10'>
                            <li>Led a cross-functional team of 3 developers and 1 designer in the development, design, and deployment of the organization's website. Successfully coordinated efforts to meet tight deadlines, ensuring a seamless user experience for over 100 members.</li>
                            <li>Devloped using React.js Javascript, CSS, Tailwind CSS</li>
                            <li>Website coming soon 😊</li>
                        </ul>





                    </div>

                    <img src={IMG} className='md:w-[50%] md:ml-14' />
                </div>
            </div>












        </div >
    )
}
