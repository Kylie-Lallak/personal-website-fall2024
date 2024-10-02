import React from 'react'
import '../styles/Contact.css'
import Profile from '../../public/images/profile.png'
import Email from '../../public/images/mail.png'
import Location from '../../public/images/location.png'
import Phone from '../../public/images/phone.png'
import Git from '../../public/images/github.svg'
import linkedin from '../../public/images/linkedin.svg'

export default function Contact() {
    return (
        <div id='contact-sect' className='pt-20'>

            <div className='flex flex-col justify-center items-center gap-2 -mb-10 lg:-mb-28 ' >

                <h1 className='text-5xl text-white font-bold text-center md:text-7xl ' >
                    Lets Connect
                </h1>
                <p className='text-center text-gray-300 max-w-[260px]'>Feel free to reach out—I'm always open for a chat or to explore new opportunities 😊</p>

            </div>


            <div className='-z-50'>

                <div className='blob-outer-container'>
                    <div className='blob-inner-countainer'>
                        <div className='blob'>

                        </div>

                    </div>

                </div>

            </div>










            <div className='contact-card w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] h-auto '>
                <img src={Profile} className='mx-auto w-[80px] mt-7 mb-7' />

                <div id='contact-info-container' className='text-gray-300 ml-5 sm:ml-7 md:ml-7 lg:ml-24 flex flex-col gap-8'>
                    <a href='mailto:kylieraelallak@gmail.com' target='_blank' > <h2 className='flex items-center mail-link'><img src={Email} className='w-[40px] mr-7' /> kylieraelallak@gmail.com</h2> </a>
                    <h2 className='flex items-center'><img src={Phone} className='w-[40px] mr-7' /> (530) 601-9613 (Google Voice)</h2>
                    <h2 className='flex items-center'><img src={Location} className='w-[40px] mr-7' /> Davis, CA</h2>


                </div>

                <div className='flex items-center justify-center gap-5 mt-10 mb-5'>
                    <a href='https://www.linkedin.com/in/kylie-lallak/' target='_blank'><img src={linkedin} className='contact-social' /></a>
                    <a href='https://github.com/Kylie-Lallak' target='_blank'> <img src={Git} className='contact-social' /></a>
                </div>




            </div>










        </div>
    )
}
