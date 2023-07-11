import React from 'react'
import RateBG from '../Asset/rating.png'
import Showcase from "../Asset/showcase.png"
import Blog from "../Asset/blog.png"
import user from "../Asset/user.png"
import idea from "../Asset/idea.png"
import Easy from "../Asset/easy.png"
import Rated from "../Asset/ratings.png"
import UserImg from "../Asset/Rectangle 26.png"
import Quote from "../Asset/quote.png"
import "../App"



function Rating() {
  return (
    <div>
      <div className='bgImage h-[437.67px] bg-no-repeat bg-cover bg-center' >
        <img src={RateBG} alt="" srcset="" className='pl-[23rem]' />
      </div>
      <section>
        <div className=" h-[737.67px] bg-stone-50 grid grid-cols-3 py-[5rem] px-[20rem]">
          <div className="w-[358px] h-[265px] rounded-lg">
            <p className="text-orange-600 text-[20px] font-semibold 
      uppercase leading-loose tracking-wider">
              Your Vision, Our Future.</p>
            <p className="w-[333px] text-zinc-950 text-[31px] font-bold leading-10">Committed to People, Committed</p>
            <p className="w-[358px] opacity-70 text-zinc-950 text-[16px] font-medium leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
          <div className="w-[358px] h-[265px] bg-indigo-700 rounded-lg p-10 transform transition-all duration-300 hover:scale-110">
            <img src={idea} alt="" />
            <p className="text-white text-[20px] font-semibold leading-loose">Creative Ideas</p>
            <p className="w-[251px] opacity-80 text-white text-[16px] font-medium leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida </p>
          </div>
          <div className="w-[358px] h-[265px] bg-white rounded-lg border-indigo-700 border-opacity-10 border-2 p-10 transform transition-all duration-300 hover:scale-110">
            <img src={Blog} alt="" />
            <p className="text-zinc-950 text-[20px] font-semibold leading-loose">Beautiful Blog</p>
            <p className="w-[251px] opacity-70 text-zinc-950 text-[16px] font-medium leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida </p>
          </div>
          <div className="w-[358px] h-[265px] bg-white rounded-lg  border-indigo-700 border-opacity-10 border-2 p-10 transform transition-all duration-300 hover:scale-110">
            <img src={user} alt="" />
            <p className="text-zinc-950 text-[20px] font-semibold leading-loose">User Friendly</p>
            <p className="w-[251px] opacity-80 text-zinc-950 text-[16px] font-medium leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida </p>
          </div>
          <div className="w-[358px] h-[265px]  bg-white rounded-lg border-indigo-700 border-opacity-10 border-2 p-10 transform transition-all duration-300 hover:scale-110">
            <img src={Showcase} alt="" />
            <p className="text-zinc-950 text-[20px] font-semibold leading-loose">Perfect Showcase</p>
            <p className="w-[251px] opacity-80 text-zinc-950 text-[16px] font-medium leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida </p>
          </div>
          <div className="w-[358px] h-[265px] bg-white rounded-lg  border-indigo-700 border-opacity-10 border-2 p-10 transform transition-all duration-300 hover:scale-110">
            <img src={Easy} alt="" />
            <p className="text-zinc-950 text-[20px] font-semibold leading-loose">Easy to Use</p>
            <p className="w-[251px] opacity-80 text-zinc-950 text-[16px] font-medium leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida </p>
          </div>



        </div>
      </section>
      <section className=' p-20'>
        <h2 className="h-[47px] text-zinc-950 text-[49px] font-bold leading-10  pb-20 text-center ">User’s Review</h2>
        <div className="w-[494px] m-auto opacity-70 text-center text-zinc-950 text-[16px] font-normal pb-20  leading-relaxed">Collaborate over projects with your team and clients optimised for mobile and tablet don't let slow</div>

        <div className='carousel w-full'>
          <div className='relative w-full carousel-item' id='item1'>
            <div className='pl-[20rem] '>
              <h3 className=" text-zinc-950 text-[31px] font-semibold leading-10 pb-32"> What People Say About Us</h3>
              <div className="w-[655px] h-[236px] bg-white">
                <div className="w-[373px] h-[129px] bg-white shadow-xl absolute text-left pl-10 pt-6 left-[25rem]  z-10 ">
                  <h4 className=" text-zinc-950 text-[25px] font-semibold leading-10">Davit millar</h4>
                  <h6 className="w-[222px] h-[27px] opacity-80 text-zinc-950 text-[20px] font-normal leading-loose">CEO, PParkivew int, Ltd</h6>
                </div>
                <div className='absolute flex flex-col items-end left-[25rem] text-left gap-10 flex-wrap w-[655px] shadow-2xl h-[236px] bg-white pt-10 pr-20'>
                  <img src={Rated} alt="" />
                  <p className="w-[515px] h-[74px] text-zinc-950 text-[16px] font-normal leading-relaxed pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nisl, tincidunt commodo sit. Et, purus lectus odio cursus placerat leo, non etiam. Neque at leo risus orci, </p>
                </div>
              </div>
            </div>
            <div>
              <img src={Quote} alt="" className='absolute right-[15rem]' />
              <img src={UserImg} alt="" className='' />
            </div>
          </div>
          <div className='relative w-full carousel-item' id='item2'>
            <div className='pl-[20rem] '>
              <h3 className=" text-zinc-950 text-[31px] font-semibold leading-10 pb-32"> What People Say About Us</h3>
              <div className="w-[655px] h-[236px] bg-white">
                <div className="w-[373px] h-[129px] bg-white shadow-xl absolute text-left pl-10 pt-6 left-[25rem]  z-10 ">
                  <h4 className=" text-zinc-950 text-[25px] font-semibold leading-10">Davit millar</h4>
                  <h6 className="w-[222px] h-[27px] opacity-80 text-zinc-950 text-[20px] font-normal leading-loose">CEO, PParkivew int, Ltd</h6>
                </div>
                <div className='absolute flex flex-col items-end left-[25rem] text-left gap-10 flex-wrap w-[655px] shadow-2xl h-[236px] bg-white pt-10 pr-20'>
                  <img src={Rated} alt="" />
                  <p className="w-[515px] h-[74px] text-zinc-950 text-[16px] font-normal leading-relaxed pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nisl, tincidunt commodo sit. Et, purus lectus odio cursus placerat leo, non etiam. Neque at leo risus orci, </p>
                </div>
              </div>
            </div>
            <div>
              <img src={Quote} alt="" className='absolute right-[15rem]' />
              <img src={UserImg} alt="" className='' />
            </div>
          </div>

        </div>
        <div class="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="w-[46px] h-[46px] left-[46px] flex items-center justify-center text-white bg-orange-600 rounded-tl-[62.50px] rounded-tr-[62.50px] rounded-bl-[62.50px]" >❮</a>
          <a href="#item2" className="w-[46px] h-[46px]  flex items-center justify-center text-white bg-orange-600 rounded-tl-[62.50px] rounded-tr-[62.50px] rounded-br-[62.50px]" >❯</a>
        </div>
      </section>

    </div >


  )
}

export default Rating