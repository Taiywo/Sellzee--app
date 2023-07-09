import React from 'react'
import instagram from '../Asset/Group 198.png'
import twitter from '../Asset/Group 197.png'
import Youtube from '../Asset/Group 198.png'
import facebook from '../Asset/Group 191.png'
import Logo from '../Asset/logo.png'




export const Footer = () => {
    return (
        <div className='footerbg h-[432.06px] bg-indigo-950 p-32 flex justify-evenly'>
            <div>
                <img src={Logo} alt="" srcset="" className='pb-8' />
                <div className='flex gap-[15px]'>
                    <img src={facebook} alt="" srcset="" />
                    <img src={twitter} alt="" srcset="" />
                    <img src={instagram} alt="" srcset="" />
                    <img src={Youtube} alt="" srcset="" /> </div>

            </div>
            <div className="w-[134px] h-[149px] relative">
                <div className="w-[133px] h-[23px] left-[1px] top-0 absolute text-center text-white text-[20px] font-medium leading-loose">SHORT LINKS</div>
                <div className="w-[46px] h-[18.92px] left-0 top-[43px] absolute opacity-80 text-center text-white text-[16px] font-medium leading-relaxed">Home</div>
                <div className="w-[77px] h-[19px] left-[1px] top-[72px] absolute opacity-80 text-white text-[16px] font-medium leading-relaxed">Services</div>
                <div className="w-[100px] h-[19px] left-[1px] top-[101px] absolute opacity-80 text-white text-[16px] font-medium leading-relaxed">Screenshots</div>
                <div className="w-[125px] h-[19px] left-[1px] top-[130px] absolute opacity-80 text-white text-[16px] font-medium leading-relaxed">contact</div>
            </div>
            <div className="w-[137.23px] h-[149px] relative">
                <div className="w-[133px] h-[23px] left-0 top-0 absolute text-white text-[20px] font-medium leading-loose">HELP LINK
                    <br /></div>
                <div className="w-[137.23px] h-[19px] left-0 top-[43px] absolute opacity-80 text-white text-[16px] font-medium leading-relaxed">How to download</div>
                <div className="w-[97px] h-[19px] left-0 top-[72px] absolute opacity-80 text-white text-[16px] font-medium leading-relaxed">How it work</div>
                <div className="w-[114px] h-[19px] left-0 top-[101px] absolute opacity-80 text-white text-[16px] font-medium leading-relaxed">Video tutorial</div>
                <div className="w-[39px] h-[19px] left-0 top-[130px] absolute opacity-80 text-white text-[16px] font-medium leading-relaxed">FAQ</div>
            </div>
            <div className="w-[258px] h-[120px] relative">
                <div className="w-[133px] h-[23px] left-0 top-0 absolute text-center text-white text-[20px] font-medium leading-loose">SHORT LINKS</div>
                <div className="w-[258px] h-[19px] left-0 top-[43px] absolute opacity-80 text-white text-[16px] font-medium leading-relaxed">Google Play Store</div>
                <div className="w-[197px] h-[19px] left-0 top-[72px] absolute opacity-80 text-white text-[16px] font-medium leading-relaxed">Apple App Store</div>
                <div className="w-[140px] h-[19px] left-0 top-[101px] absolute opacity-80 text-white text-[16px] font-medium leading-relaxed">Download Directly</div>
            </div>
        </div>
    )
}
