"use client"

import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';



function Hero() {
  return (
    <section className="lg:py-16">
        <div className= 'grid grid-cols-1 lg:grid-cols-12'>
        <motion.div 
        initial={{opacity:0,scale:0.5}} 
        animate={{opacity:1 ,scale:1}}
        transition={{duration: 0.1}}
        className='col-span-8 place-self-center mb-4 text-center sm:text-left'>
                <h1 className='text-white mb-4 text-6xl font-extrabold sm:text-5xl lg:text-8xl justify-self-start'>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-pink-600 leading-normal'> Hello, i'm{""} 

                </span><br/>
                <TypeAnimation
                    sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Code Skulli',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'A Software Engineer',
                    1000,
                    'A full stack web developer',
                    1000,
                    'A Web Designer',
                    1000,
                    'A Financial Analyst',
                    1000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{fontSize: '3rem'}}
                    repeat={Infinity}
                    className="text-xl"
                />
                </h1>

                <p className='text-[#ADB7BE] text-base md:text-lg sm:text-lg lg:text-3xl mb-6'>Hello I'm ikechi joseph, Also known as  Code Skulli. For fast,scalable web application with high SEO on search engines,Animations,Authenications,API's, full stack Applications, Hit me  up via Emails on my contact section so we talk more on what you WANT... Thank You.</p>

            <div className="mt-10">
                <Link href={"#contact"}>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-pink-500  hover:bg-slate-200 text-white'>Hire Me</button>
                </Link>

                <a href={"www.google.com"}>
                    <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-pink-500 hover:bg-slate-800 text-white border-white mt-3'><span className='block  bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span></button>
                </a>
                
                
            </div>
            </motion.div>

            <motion.div 
            initial={{opacity:0,scale:0.5}} 
            animate={{opacity:1 ,scale:1}}
            transition={{duration: 0.1}} className='col-span-4 mt-6 lg:mt-0 place-self-center'>
                <div className='bg-[#181818]  rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative' >
                    <Image src="/images/dev.jpeg" width={300} height={300} alt='photofile' className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full'/>
                </div>
                
            </motion.div>

        
            
        </div>
    </section>
  )
}

export default Hero