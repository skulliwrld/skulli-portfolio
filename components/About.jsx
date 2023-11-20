"use client"
import React from 'react'
import Image from 'next/image'
import TabButton from './TabButton'
import {useTransition, useState } from 'react'

function About() {
    const[tabs ,setTabs] = useState("skills")
    const [isPending,startTransition] = useTransition();

    const handleChangeTab = (id) =>{
        startTransition(() => {
            setTabs(id);
        });
    }


    const TABS_DATA = [
        {
            title:"Skills",
            id:"skills",
            content:(
                <ul className='list disc pl-2'>
                    <li>React.js</li>
                    <li>Next.js</li>
                    <li>Express.js</li>
                    <li>Node.js</li>
                    <li>Javascript</li>
                    <li>MongoDB</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Python</li>
                </ul>
            )

        },

        {
            title:"Education",
            id:"education",
            content:(
                <ul className='list disc pl-2'>
                    <li>Js Mastery Online Acadmic and Training</li>
                    <li>University of Portharcout, River state Nigeria</li>
               
                </ul>
            )

        },

        {
            title:"certification",
            id:"certification",
            content:(
                <ul className="list disc pl-2">
                    <li>fullstack Next.js Certification</li>
                    <li>HTML,CSS,JS intermediate Level Certification</li>
                    <li>Backend developer certificatin of Completion(python)</li>
                </ul>
            )

        }

        
    ]

  return (
    <section className='text-white' id="about">
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src='/images/about-image.png'width={500} height={500} alt='about photo' ></Image>
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                <p className="text-base lg:text-xl">
                    I am full stack web developer with a passion for creating interactive and responsive web application. i have experience working with javaScript, React, Redux,Node.js, Next.js,PostgresQL,HTML,CSS,and Git. i am a quick learner and i am alway looking to expand my knowledge  skill set. i am a team player and i am excited to work with others to create amazing applications
                </p>
                <div className="flex flew-row mt-8 md:text-xl ">
                    <TabButton selectTab={()=> handleChangeTab('skills')} active={tabs === 'skills'}>Skills</TabButton>

                    {/* <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500">Skills</span> */}

                    <TabButton selectTab={()=> handleChangeTab('education')} active={tabs === 'education'}>Education</TabButton>

                    <TabButton selectTab={()=> handleChangeTab('certification')} active={tabs === 'certification'}>Certifications</TabButton>
                </div>

                <div className='mt-8 md:text-xl'> {TABS_DATA.find((t) => t.id === tabs).content}</div>
            </div>
        </div>
    </section>
  )
}

export default About