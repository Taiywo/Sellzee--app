import React from 'react'
import Logo from "../Asset/logo.png"

function Nav() {
  return (
    <div className='flex justify-between pl-[233px] pr-[233px] text-white items-center  pt-[50px] '>
        <div>
           <img src={Logo} alt='' />
        </div>
        <ul className='flex gap-[29px] text-[20px] font-normal font-Inter leading-9'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Testimonial</li>
            <li>Pricing</li>
        </ul>
        <button className='bg-[#FF5A05] px-[30px] py-[15px] text-[20px] rounded-sm'>Get Started</button>
    </div>
  )
}

export default Nav