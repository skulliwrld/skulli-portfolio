"use client"

import React from 'react'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Github from "/public/git.svg"
import LinkedIn from "/public/linkedin.svg"
import emailjs from 'emailjs-com';



function Contact() {

    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     message: ''
    //   });

    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[message, setMessage] = useState("")

    const[alert, setAlert] = useState(false)

    //   const handleChange = (event) => {
    //     setFormData({ ...formData, [event.target.name]: event.target.value });
    //   };


    
      const handleSubmit = (e) => {


        e.preventDefault();


        const FormData = {
            name: name,
            message : message,
            email : email
        }

        emailjs.send(process.env.NEXT_PUBLIC_SERVICE_ID,process.env.NEXT_PUBLIC_TEMPLATE_ID,FormData,process.env.NEXT_PUBLIC_PUBLIC_KEY).then(res => res).then(data => 
            console.log(JSON.stringify(data),setAlert(true)))
            setTimeout(() => setAlert(false),5000)
      }
  return (
    <section className= 'grid md:grid-cols-2 py-6 md:my-6 gap-2 justify-center relative'>
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 left-16 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="mb-4 items-center">
            <h5 className="font-xl font-bold text-white my-2">Let's Connect</h5>
            <p className="text-[#ADB7BE] mb-4 mzx-w-md">i am currently looking for new opportunities , my inbox is alway open. Whether you have a question or just want to say hi,I'll try my best to get back to you!</p>
            <div className= 'flex flex-row space-x-2'>
                <Link href="github.com">
                    <Image src={Github}></Image>
                </Link>

                <Link href="linkedIn.com">
                    <Image src={LinkedIn}></Image>
                </Link>
            </div>
        </div>

      <form onSubmit={handleSubmit} className='flex flex-col gap-2 px-0'>
        <div className="w-full flex flex-col items-start ">
            <label className="text-2xl text-white mb-3 font-semibold">Name</label>
            <input className="py-6 px-2 text-white bg-[#181818] text-2xl  md:w-full h-full border border-white rounded-lg" type="text" name="name" value={name} onChange={(e) =>{ setName((e.target.value))}} required placeholder="Your Name" />
        </div>
        <div className="w-full flex flex-col items-start" >
        <label className="text-2xl text-white mb-3 font-semibold">Email</label>
            <input className="py-6 px-2 text-white bg-[#181818] text-2xl  md:w-full h-full border border-white rounded-lg" type="email" name="email" value={email} onChange={(e) =>setEmail(e.target.value)} placeholder="Email Address" required />
        </div>
        <div className="w-full flex flex-col items-start">
        <label className="text-2xl text-white mb-3 font-semibold">Message</label>
            <textarea className='w-full bg-[#181818] text-2xl text-white  md:h-full border border-white rounded-lg px-2 py-8 mb-6 ' type="text"name="message" rows={8} cols={25} value={message} onChange={(e) => {setMessage(e.target.value)}} placeholder="Message" required />
        </div>
        <button className="py-6 px-2 text-2xl rounded-full font-bold bg-primary-700 text-white md:w-full hover:bg-[#ADB7BE] hover:text-black" type="submit">
            Send
        </button>

        {alert ?  <div className="text-2xl text-green-600">Message sent successfully</div> : null}
    </form>
    </section>
  )
}

export default Contact