"use client"

import React from 'react'
import { Data } from './ProjectData'
import ProjectCard from './ProjectCard'
import { useState, useRef } from 'react'
import ProjectTab from './ProjectTab'
import { motion, useInView } from 'framer-motion'


function Project() {
  const [tab, setTabs] = useState("All")
  const ref = useRef(null);
  const isINView = useInView(ref, {once : true});

  const cardVarient = {
    initial: {y:50, opacity:0},
    animate:{y:0, opacity:1}
  }

  const handleProjectChange = (id) =>{
    setTabs(id)
  }




  const FilteredProject = Data.filter((project) => project.tag.includes(tab) )

  return (
    <section id="project">
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-5'>
            My Projects
        </h2>

        <div className="text-white flex flex-row justify-center items-center">
           <ProjectTab onclick={() => handleProjectChange("All")} isSelected={tab ==="All"} name={"All"}>All</ProjectTab>

           <ProjectTab onclick={() => handleProjectChange("Mobile")} isSelected={tab ==="Mobile"} name={"Mobile"}>Mobile</ProjectTab>

           <ProjectTab onclick={() => handleProjectChange("On Git")} isSelected={tab ==="On Git"} name={"GitHub"}>All</ProjectTab>

           <ProjectTab onclick={() => handleProjectChange("Web")} isSelected={tab ==="Web"} name={"Web"}></ProjectTab>
        </div>
        <ul ref={ref}className='grid md:grid-cols-3 mt-6 gap-8 md:gap-12'>
            {FilteredProject.map((project,index) => 
            <motion.li
            key={index}
             variants={cardVarient}
              initial="initial"
               animate={isINView ? "animate" : "initial"}
               transition={{duration:0.3,delay:index * 0.4}}>
                <ProjectCard
                    key={project.id} 
                    title={project.title} 
                    description={project.desc}
                    imgUrl={project.imgUrl}
                    tag={project.tag}   
                    previewUrl={project.previewUrl}
                    gitUrl={project.gitUrl}  />
           </motion.li>
           )}
        </ul>
    </section>
  )
}

export default Project