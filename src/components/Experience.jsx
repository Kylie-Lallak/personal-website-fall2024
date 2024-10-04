import React from 'react'
import '../styles/Experience.css'
import LinkedIn from '../../public/images/linkedin.svg'
import Neuro from '../../public/images/neruo.png'
import D3C from '../../public/images/d3c.png'
import IMG from '../../public/images/about.png'
import Neuroweb from '../../public/images/neuroweb.png'
import Bci from '../../public/images/bci.png'
import D3cImg from '../../public/images/d3cimg.png'
import Resume from '../../public/images/resumeicon.svg'


export default function Experience() {
    return (
        <div id='experience' className='mt-16 mb-16 pt-20'>

            <div className='mb-20 mx-10'>
                <h1 className='font-bold mx-auto text-center text-white text-5xl md:text-7xl gradient-text'>Experience</h1>
                <h2 className='text-white text-center   max-w-[450px] mx-auto mt-5'  > Here is an overview of my experience. I am always eager to <span className='font-bold text-xl text-indigo-400'>learn and grow</span>, and I'm currently seeking new opportunities to expand my skills  🌱</h2>

                <div className='flex items-center justify-center gap-3 mt-7'>
                    <a className='ex-btn ' href='https://www.linkedin.com/in/kylie-lallak/' target='_blank'> <img src={LinkedIn} className='max-w-[25px] mr-5 sm:mr-0' />  View my LinkedIn</a>
                    <a className='ex-btn ' href='https://docs.google.com/document/d/1aaoQ6NoRA_d8LWe_vG59l1WNP-m0O3R-U9lpKGseLXA/edit?usp=sharing' target='_blank'> <img src={Resume} className='max-w-[25px] mr-5 sm:mr-0' />  View my Resume</a>


                </div>
            </div>



            <div id='neuro-ex' className='mb-14'>
                <div className=' flex flex-col items-center mx-auto gap-10 w-[80%]  md:flex-row '>

                    <div className='md:w-[50%]'>

                        <div className='flex items-center gap-4'>
                            <img src={Neuro} className='w-[70px]' />
                            <h1 className='text-white  text-2xl sm:text-4xl font-bold '>Neurotech@Davis</h1>

                        </div>
                        <div className='flex items-center justify-between mt-4'> <h2 className='font-bold gradient-text-blue text-xl' >Project Manger</h2> <h3 className='text-gray-600'> June 2024 - Present</h3> </div>

                        <ul className='ex-ul ml-10 text-gray-400'>
                            <li>Led a cross-functional team of 3 to develop, design, and deploy the organization's website, meeting tight deadlines and delivering a seamless user experience for 100+ members.</li>
                            <a href='https://neurotechdavis.com' target='_blank'>  <li className='web-link'>Vist the website 💙</li> </a>
                        </ul>





                    </div>

                    <img src={Neuroweb} className='md:w-[35%] md:ml-14 md:h-[50%] ' />



                </div>

                <div className=' flex flex-col items-center mx-auto gap-10 w-[80%]  md:flex-row '>

                    <div className='md:w-[50%]'>


                        <div className='flex items-center justify-between mt-10 sm:mt-4'> <h2 className='font-bold gradient-text-blue text-xl' >Project Member</h2> <h3 className='text-gray-600'> Oct 2023 - June 2024</h3> </div>

                        <ul className='ex-ul ml-10 text-gray-400'>
                            <li>Contributed to the development of a brain-computer interface that detected eye blinks via EEG signals, collecting EMG/EEG data and implementing a real-time random forest classifier with 86% accuracy; presented at the 2024 NeurotechX Conference, showcasing neural signal-controlled devices and advancements in assistive technology.</li>
                        </ul>





                    </div>

                    <img src={Bci} className='md:w-[35%] mt-0 md:ml-14 sm:mt-5' />
                </div>
            </div>

            <div className=" ml-16 mr-16 mt-28 h-px bg-gray-700 my-4 sm:ml-24 sm:mr-24"></div>

            <div id='d3c-ex'>
                <div className=' flex flex-col items-center mx-auto gap-10 w-[80%]  md:flex-row '>

                    <div className='md:w-[50%]'>

                        <div className='flex items-center gap-4'>
                            <img src={D3C} className='w-[70px]' />
                            <h1 className='text-white  text-2xl sm:text-4xl  font-bold '>SafeHer</h1>

                        </div>
                        <div className='flex items-center justify-between mt-4'> <h2 className='font-bold gradient-text-blue text-xl' >Web Developer</h2> <h3 className='text-gray-600'> April 2024 - Present</h3> </div>

                        <ul className='ex-ul ml-10 text-gray-400'>
                            <li>
                                Contributed to the development of SafeHer, a website promoting women's issues and making educational resources more accessible. Collaborated with a cross-functional team to create resource and data visualization components, ensuring cohesive design and functionality.</li>
                            <li>Website currently under maintance ⚒️</li>
                        </ul>





                    </div>

                    <img src={D3cImg} className='md:w-[35%] md:ml-14 mt-5' />



                </div>


            </div>












        </div >
    )
}
