import React from 'react'
import NaVLinks from './NaVLinks'

function MenuOverlay({links}) {
  return (
    <ul className='flex flex-col py-4 items-center justify-center'>
        {links.map((link,index) => (
            <li key={index}>
               <NaVLinks href={link.href} title= {link.title} /> 
            </li>
            
        ))}


    </ul>
  )
}

export default MenuOverlay