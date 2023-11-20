import React from 'react'
import Link from 'next/link'
import {FaHome} from "react-icons/fa"
import { FaPhoneSquareAlt } from "react-icons/fa"
import { FaAddressCard } from "react-icons/fa6";
import { AiTwotoneMail } from "react-icons/ai";



function Footer() {
  return (
    <footer className="footer border border-t-[#33353F]">
        <div className=' py-10 md:px-10 px-4 grid md:grid-cols-2 '>
            <Link href={"/"}>
                <h1 className="font-bold text-white text-4xl">Code Skulli</h1>
                <div className="content text-[#ADB7BE] ml-8 mt-7">
                    <div className="flex items-start my-4 hover:text-primary-500 ">
                        <FaHome className="font-semibold text-4xl mr-4" />
                        <h1 className="text-[#ADB7BE] md:text-xl">No 2 ogunlaye street,otta ikosi</h1>
                    </div>

                    <div className="flex items-start my-4  hover:text-primary-500">
                        <FaPhoneSquareAlt className="font-semibold text-4xl mr-4" />
                        <h1 className="text-[#ADB7BE] text-xl">+234-8157382509</h1>
                    </div>

                    <div className="flex items-start my-4  hover:text-primary-500">
                        <AiTwotoneMail  className="font-semibold text-4xl mr-4 " />
                        <h1 className="text-[#ADB7BE] text-xl">ikechijosephpriye14@gmail.com</h1>
                    </div>

                    <div className="flex items-start my-4  hover:text-primary-500">
                        <FaAddressCard className="font-semibold text-4xl mr-4" />
                        <h1 className="text-[#ADB7BE] text-xl">Lagos Nigeria</h1>
                    </div>

                </div>
            </Link> 
            <p className="font-semibold text-white  text-2xl">All Right Reserved</p>  
        </div>
        

       <p></p>
    </footer>
  )
}

export default Footer