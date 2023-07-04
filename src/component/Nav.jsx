import React from 'react'
import Logo from "../Asset/logo.png"

function Nav() {
  return (
    <div className='flex justify-between pl-[233px] pr-[233px] items-center  pt-[50px] '>
        <div>
           <img src={Logo} alt='' />
        </div>
        <ul className='flex gap-[29px] text-white text-[20px] font-medium leading-loose font-Inter'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Testimonial</li>
            <li>Pricing</li>
        </ul>
        <button className='bg-[#FF5A05]  text-white  px-[30px] py-[15px] text-[20px] rounded-sm'>Get Started</button>
    </div>
  )
}

export default Nav