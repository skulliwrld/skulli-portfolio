import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

function ProjectCard({imgUrl, title, description,gitUrl,previewUrl}) {
  return (
    <section>
        <div style={{background:`url(${imgUrl})`,backgroundSize:"cover"}} className="h-52 md:h-72 rounded-t-xl relative group">
            <div className='items-center justify-center overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
               <Link href={gitUrl} className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white mr-4 group/link'>
                    <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE]  cursor-pointer absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 group-hover/link:text-white"/>
               </Link>

               <Link href={previewUrl} className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white'>
                    <EyeIcon className="h-10 w-10 text-[#ADB7BE] cursor-pointer absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 hover:text-white"/>
               </Link>
            </div>

        </div>

        <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
            <h5 className='font-semibold text-xl mb-2'>{title}</h5>
            <p className='text-[#ADB7BE]'>{description}</p>
        </div>
    </section>
  )
}

export default ProjectCard