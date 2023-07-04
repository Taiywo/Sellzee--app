import React from 'react'
import HeroImg from "../Asset/Group 186.png"
import Analysis from "../Asset/Analysis.png"
import Certificate from "../Asset/certificate.png"

function Hero() {
    return (
        <div className='flex justify-center '>
            <img src={HeroImg} alt="" srcset="" className='rounded-lg m-10'/>
            <div className='flex flex-col gap-5 pt-[5rem]'>
                <h2 className='opacity-80 text-orange-600 text-[17px] font-semibold uppercase leading-7 font-Inter'>Lorem ipsum dolor sit ame</h2>
                <h2 className="w-[546px] h-[115px] text-zinc-950 text-[49px] font-bold leading-0">Simple Solutions for Complex Connections
                </h2>
                <h2 className="w-[530.63px] opacity-70 text-zinc-950 text-[16px] font-medium leading-relaxed ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida
                    feugiat neque, ipsum faucibus. Pharetra vel suspendisse mi odio a velit feugiat
                    sapien.</h2>
                    <div className='flex gap-10'>
                        <img src={Analysis} alt="" srcset="" />
                        <img src={Certificate} alt="" srcset="" />
                    </div>
                    <button className="w-[169px] h-[62px] px-[30px] py-[15px] bg-orange-600 rounded  text-white text-[20px] font-medium leading-loose">Learn More</button>
            </div>
           
        </div>
    )
}

export default Hero