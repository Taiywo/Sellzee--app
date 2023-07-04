import React from 'react'
import Fedex from '../Asset/image 25.png'
import Google from '../Asset/google-1-removebg-preview 1.png'
import Ola from '../Asset/image 27.png'
import Micro from '../Asset/new-Microsoft-logo-removebg-preview 1.png'
import Amazon from '../Asset/539f3ffbecad044276726c01-removebg-preview 1.png'
import Fedx from '../Asset/90a2c3b80d4b7a7599788bfeb9b848ce-removebg-preview 1.png'
import Walmart from '../Asset/kisspng-logo-brand-walmart-desktop-wallpaper-image-walmart-to-offer-low-cost-checking-accounts-5b63eaa32fa612 1.png'

function Hero() {
    return (
        <div className='m-[5rem] '>
            <div className='flex  gap-20 justify-center wrap'>
                <div className='shadow-2xl w-30 p-5' ><img src={Fedex} alt="" srcset="" /></div>
                <div className='shadow-2xl w-30 p-5' > <img src={Google} alt="" srcset="" /></div>
                <div className='shadow-2xl w-30 p-5' > <img src={Ola} alt="" srcset="" /></div>
                <div className='shadow-2xl w-30 p-5' ><img src={Micro} alt="" srcset="" /></div>
                <div className='shadow-2xl w-30 p-5' ><img src={Amazon} alt="" srcset="" /></div>
                <div className='shadow-2xl w-30 p-5' ><img src={Fedx} alt="" srcset="" /></div>
                <div className='shadow-2xl w-30 p-5' ><img src={Walmart} alt="" srcset="" /></div>
            </div>
        </div>
    )
}

export default Hero