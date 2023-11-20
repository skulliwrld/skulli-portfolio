import React from 'react'



function ProjectTab({name, isSelected, onclick}) {

    const ProjectClasses = isSelected ? "text-white  border-primary-500" :"text-[#ADB7BE]"
  return (
    <>
        <button onClick={onclick}>
            <p className={`${ProjectClasses} mr-3 font-semibold hover:text-white rounded-full px-6 py-3 border-2 text-sm  md:text-xl cursor-pointer hover:border-white`}>{name}</p>
        </button>
     
    </>
  )
}

export default ProjectTab