import React from 'react'
import HeroImg from "../Asset/Pixel True Mockup 1.png"

function Headcontent() {
    return (
        <div className='flex mt-[51.46px] text-white justify-between px-[334px] pb-16 items-center'>
            <div className='flex flex-col gap-4'>
                <div className="text-white text-[20px] font-semibold uppercase leading-loose tracking-widest font-Inter">Inspiration Technology.</div>
                <div className='w-[464px] h-[140.96px]'>
                    <div className="w-[464px] h-[202.96px] font-Inter  "><span className="text-white text-[61px] font-bold leading-tight font-Inter">Runs Faster.<br/>
                    </span><span className="text-white text-[50px] font-medium leading-tight font-Inter ">Costs less and never breaks.<br /></span></div>
                </div>
                <hr className='w-[365px] mt-20 ' />
                <div className="w-[418.09px] opacity-70"><span className="text-white text-[16px] font-medium leading-relaxed">Lorem ipsum dolor sit amet, </span><span className="text-white text-[16px] font-semibold leading-relaxed">consectetur adipiscing</span><span className="text-blue-700 text-[16px] font-semibold leading-relaxed"> </span><span className="text-white text-[16px] font-medium leading-relaxed">elit. Nulla sapien lectus sit tristique rhoncus, nisi, malesuada. Tellus consequat </span></div>

                <div className='flex gap-[74px]  pt-11'>
                    <button className="w-[172px] h-[62px] px-[30px] py-[15px] bg-orange-600 rounded justify-start items-start gap-2.5 inline-flex font-Inter
                     text-white text-[20px] font-medium leading-loose hover:border-teal-50" >Get Started</button>
                    <button className="w-[149px] h-[62px] px-[30px] py-[15px] rounded border  border-white border-opacity-30">Free Trail</button>
                </div>

            </div>
            <div>
                <img src={HeroImg} alt="" srcset="" className='' />
            </div>

        </div>
    )
}

export default Headcontent
