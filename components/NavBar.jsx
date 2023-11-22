"use client"

import React from 'react'
import Link from 'next/link'
import NavLink from './NaVLinks';
import { useState } from 'react';
import {Bars3Icon,XMarkIcon} from "@heroicons/react/24/solid"
import MenuOverlay from './MenuOverlay';

function NavBar() {

  const NavLinks = [
    {title:"About", href:"#about"},
    {title:"Projects", href:"#project"},
    {title:"Contact", href:"#contact"},
]

  const [click, setClick] = useState(false)

  const handleClick =() =>{
    setClick(!click)
  }

  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90 md:border-b md:border-slate-400 lg:px-12'>
        <div className="flex flex-wrap items-center justify-between mx-auto p-8 py-5">
            <Link href="/" className=" text-2xl md:text-5xl text-white font-semibold">LOGO</Link>
            
            <div className="mobile-view block md:hidden" onClick={handleClick}>
              {
                click ?(
                  <button className='flex items-center justify-center px-3 py-2 border rounded border-slate-200 hover:text-white  hover:border-white text-slate-200'><XMarkIcon className="w-5 h-5"/></button>
                ) : (
                  <button className='flex items-center px-3 py-2 border justify-center rounded border-slate-200 hover:text-white  hover:border-white text-slate-200'><Bars3Icon className="h-5 w-5"/></button>
                )
              }
            </div>
            <div className="menu hidden md:block md:w-auto " id="navbar">
                <ul className= 'flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 lg:text-2xl'>
                    {NavLinks.map((content,index) =>(
                      <li key={index}><NavLink href={content.href} title={content.title} /></li>
                    ))}
                </ul>
            </div>
        </div> 
        {click ?  <MenuOverlay links={NavLinks}/> : null}
    </nav>
  )
}

export default NavBar