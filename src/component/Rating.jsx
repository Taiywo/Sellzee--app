import React from 'react'
import BgImg from '../Asset/bgImg.png'
import RateBG from '../Asset/rating.png'

function Rating() {
  return (
    <div className="bg-bgImg bg-cover bg-stone-950 w-52 bg-no-repeat">
        
        <img src={RateBG} alt="" srcset="" className='absolute top-8 left-96' />
    </div>
  )
}

export default Rating