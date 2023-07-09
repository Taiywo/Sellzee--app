import React from 'react'
import Logo from "../Asset/logo.png"

function Nav(Navlink) {
  const {home, about, contact, testimonial, pricing} = Navlink
  return (
    <div className='flex justify-around  items-center pt-[50px] '>
      <img src="" alt="" srcset="" />
        <div>
           <img src={Logo} alt=''/>
        </div>
        <ul className='flex gap-[29px] text-white text-[20px] font-medium leading-loose font-Inter'>
            <li><a href={home}>Home</a></li>
            <li><a href={about}>About</a></li>
            <li><a href={contact}>Contact</a></li>
            <li><a href={testimonial}>Testimonial</a></li>
            <li><a href={pricing}>Pricing</a></li>
            
        </ul>
        <button className='bg-[#FF5A05]  text-white  px-[30px] py-[15px] text-[20px] rounded-sm'>Get Started</button>
    </div>
  )
}

export default Nav