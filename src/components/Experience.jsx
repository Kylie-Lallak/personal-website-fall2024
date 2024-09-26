import React from 'react'
import '../styles/Experience.css'
import LinkedIn from '../../public/images/linkedin.svg'

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




        </div>
    )
}
