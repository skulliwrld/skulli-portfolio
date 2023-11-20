import Link from 'next/link'
import React from 'react'

function NaVLinks({href , title}) {
  return (
    <Link href={href} className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white lg:text-3xl">{title}
    </Link>
  )
}

export default NaVLinks