"use client"
import React from 'react'
import dynamic from 'next/dynamic'

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
    ssr: false,
  });
function MetricContent() {

    const MetricData = [
        {
            metric:"Projects",
            value:25,
            prefix: "+"

        },

        {
            metric:"Certification",
            value:3,
            postfix:"*"

        },

        {
            metric:"Users",
            value:15,
            prefix: "+"
        },


        {
            metric:"Years",
            value:2,
            prefix: "+"
        },

        {
            metric:"Git Push",
            value:35,
            prefix: "+"
        },
    ]

    const status = true
  return (
    <section className="text-white border border-[#ADB7BE] my-12 px-0 hover:border-primary-400">
        <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start bg-black py-8 px-  md:px-8">
            {MetricData.map((data, index) =>(
                <div key={index} className="flex flex-col  items-center mx-4 my-4 sm:my-0">
                    <h2 className="font-bold text-xl ">
                    <AnimatedNumbers
                        includeComma
                        transitions={(index) => ({
                        type: "spring",
                        duration: index + 0.3,
                        })}
                        animateToNumber={data.value}
                        fontStyle={{
                        fontSize: 40,
                        color: "white",
            
                    }}
      /> 
                    </h2>
                    <span>{data.prefix || data.postfix}</span>
                    <p className="text-xl font-semibold  text-[#ADB7BE] ">
                        {data.metric}
                    </p>
                </div>
            ))}
        </div>
        
    </section>
  )
}

export default MetricContent