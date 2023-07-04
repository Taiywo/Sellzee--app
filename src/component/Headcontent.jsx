import React from 'react'
import HeroImg from "../Asset/Pixel True Mockup 1.png"

function Headcontent() {
    return (
        <div className='flex mt-[81.46px] text-white  justify-between pr-[70.44px] pl-[233px] items-center'>
            <div>
                <h4 className='text-[20px] font-bold font-Inter'>INSPIRATION TECHNOLOGY.</h4>
                <div className='w-[464px] h-[140.96px]  '>
                    <h1 className='text-[61px] font-semibold font-Inter'>Runs faster.</h1>
                    <h4 className='text-[30px] font-Inter'>Costs less and never breaks.</h4>
                </div>
                <hr className='w-[365px] h-[1px] mb-7 mt-7' />
                <p className='w-[418.093px] text-[.8rem] pb-6 leading-10 font-Inter font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla sapien lectus sit tristique rhoncus,
                    nisi, malesuada. Tellus consequat </p>


                <div className='flex gap-[74px]'>
                    <button className='bg-[#FF5A05] px-[30px] py-[15px] text-[20px] rounded-sm' >Get Started</button>
                    <button className='rounded-sm border p-[15px] text-[20px]'>Free Trail</button>
                </div>

            </div>
            <div>
                <img src={HeroImg} alt="" srcset="" className='' />
            </div>

        </div>
    )
}

export default Headcontent