import React, { useState } from 'react'
import Standard from "../Asset/standard.png"
import Elite from "../Asset/standard2.png"
import MArk from "../Asset/mark.png"




export const Pricing = () => {
    const [Monthly, setMonthly] = useState(true)
    const [Yearly, setYearly] = useState(false)
    const [MonthBG, setMonthBG] = useState('bg-orange-600')
    const [YearBG, setYearBG] = useState('bg-white')
    const [TextMonthColor, setTextMonthColor] = useState('text-white')
    const [TextYearColor, setTextYearColor] = useState('text-orange-600')

    function handleYear() {
        setMonthBG('bg-white')
        setYearBG('bg-orange-600')
        setTextMonthColor('text-orange-600')
        setTextYearColor('text-white')
        setMonthly(!Monthly)
        setYearly(!Yearly)

    }
    function handleMonth() {
        setMonthBG('bg-orange-600')
        setYearBG('bg-white')
        setTextMonthColor('text-white')
        setTextYearColor('text-orange-600')
        setMonthly(!Monthly)
        setYearly(!Yearly)

    }

    return (
        <div className='relative pb-64'>
            <div className="w-full h-[501px] bg-violet-100 pt-10 flex flex-col items-center gap-6">
                <div className="text-center text-zinc-950 text-[31px] font-bold leading-10">Without Extra Charge Choose<br />Your Best Plan</div>
                <div className="w-[450px] h-[126px] bg-white rounded-lg flex gap-5 justify-center items-center">
                    <button onClick={handleMonth} className={`w-[148px] h-14 px-[34px] py-3 ${MonthBG} items-center text-center border border-orange-600 ${TextMonthColor}  text-[20px] font-semibold leading-loose rounded-lg justify-center gap-2.5 inline-flex`}>Monthly</button>
                    <button onClick={handleYear} className={`w-[148px] h-14 px-[34px] py-3 ${YearBG}   items-center text-center border border-orange-600 ${TextYearColor} text-[20px] font-semibold leading-loose rounded-lg justify-center gap-2.5 inline-flex`}>Yearly</button>
                </div>
            </div>
            <section>
                {Monthly && <div className='flex gap-10 absolute top-[20rem] right-[25%] '>
                    <div className="w-[455px] h-[670.50px] rounded-lg border bg-white  shadow-xl border-opacity-70 flex flex-col items-center">
                        <img src={Standard} alt="" srcset="" />
                        <h2 className="text-center text-zinc-950 text-[31px] font-semibold leading-10">STANDARD</h2>
                        <h2 className="w-[232px] h-[115px] text-center text-blue-700 text-[96.39506530761719px] font-bold pt-7 leading-10">$239</h2>
                        <h2 className="text-center pb-4"><span className="text-zinc-950 text-[20px] font-medium leading-loose">YEARLY</span><span className="text-zinc-950 text-[20px] font-normal leading-loose"> PACK</span></h2>
                        <div className='flex flex-col items-start gap-4'>
                            <div className=" flex items-center m-auto gap-5">
                                <img src={MArk} alt='' />
                                <h4 className="text-center text-zinc-950 text-[16px] font-medium leading-relaxed">256 GB SSD STORE</h4>
                            </div>
                            <div className=" flex items-center m-auto gap-5">
                                <img src={MArk} alt='' />
                                <h4 className="text-center text-zinc-950 text-[16px] font-medium leading-relaxed">FULL UI KIT DOWNLOAD</h4>
                            </div>
                            <div className=" flex items-center m-auto gap-5">
                                <img src={MArk} alt='' />
                                <h4 className="text-center text-zinc-950 text-[16px] font-medium leading-relaxed">PUBLIC API</h4>
                            </div>
                            <div className=" flex items-center m-auto gap-5">
                                <img src={MArk} alt='' />
                                <h4 className="text-center text-zinc-950 text-[16px] font-medium leading-relaxed">FULL UI PACK DOWNLOAD</h4>
                            </div>
                            <div className=" flex items-center m-auto gap-5">
                                <img src={MArk} alt='' />
                                <h4 className="text-center text-zinc-950 text-[16px] font-medium leading-relaxed">FULL UI PACK DOWNLOAD</h4>
                            </div>
                        </div>
                        <button className="w-[335px] h-[58px] px-[34px] py-3 bg-orange-600 rounded-lg justify-center mt-10 items-center text-center text-white text-[18px] font-bold leading-7 gap-2.5 inline-flex">Install Pack</button>


                    </div>
                    <div className="w-[455px] h-[670.50px] rounded-lg border bg-white shadow-xl border-opacity-70 flex flex-col items-center">
                        <img src={Elite} alt="" srcset="" />
                        <h2 className="text-center text-zinc-950 text-[31px] font-semibold leading-10">ELITE</h2>
                        <h2 className="w-[232px] h-[115px] text-center text-blue-700 text-[96.39506530761719px] font-bold pt-7 leading-10">$439</h2>
                        <h2 className="text-center  pb-4"><span className="text-zinc-950 text-[20px] font-medium leading-loose">YEARLY</span><span className="text-zinc-950 text-[20px] font-normal leading-loose"> PACK</span></h2>
                        <div className='flex flex-col items-start gap-4'>
                            <div className=" flex items-center m-auto gap-5">
                                <img src={MArk} alt='' />
                                <h4 className="text-center text-zinc-950 text-[16px] font-medium leading-relaxed">256 GB SSD STORE</h4>
                            </div>
                            <div className=" flex items-center m-auto gap-5">
                                <img src={MArk} alt='' />
                                <h4 className="text-center text-zinc-950 text-[16px] font-medium leading-relaxed">FULL UI KIT DOWNLOAD</h4>
                            </div>
                            <div className=" flex items-center m-auto gap-5">
                                <img src={MArk} alt='' />
                                <h4 className="text-center text-zinc-950 text-[16px] font-medium leading-relaxed">PUBLIC API</h4>
                            </div>
                            <div className=" flex items-center m-auto gap-5">
                                <img src={MArk} alt='' />
                                <h4 className="text-center text-zinc-950 text-[16px] font-medium leading-relaxed">FULL UI PACK DOWNLOAD</h4>
                            </div>
                            <div className=" flex items-center m-auto gap-5">
                                <img src={MArk} alt='' />
                                <h4 className="text-center text-zinc-950 text-[16px] font-medium leading-relaxed">FULL UI PACK DOWNLOAD</h4>
                            </div>
                        </div>
                        <button className="w-[335px] h-[58px] px-[34px] py-3 bg-orange-600 rounded-lg mt-10 justify-center items-center text-center text-white text-[18px] font-bold leading-7 gap-2.5 inline-flex">Install Pack</button>


                    </div>
                </div>}
                {Yearly && <div className='flex gap-10 absolute top-[20rem] right-[25%] '>
                    <div className="w-[455px] h-[670.50px] rounded-lg border bg-white  border-blue border-opacity-70 flex flex-col items-center shadow-xl">
                        <img src={Standard} alt="" srcset="" />
                        <h2 className="text-center text-zinc-950 text-[31px] font-semibold leading-10">STANDARD</h2>
                        <h2 className="w-[232px] h-[115px] text-center text-blue-700 text-[96.39506530761719px] font-bold leading-10 pt-7">$39</h2>
                        <h2 className="text-center  pb-4 "><span className="text-zinc-950 text-[20px] font-medium leading-loose">MONTHLY</span><span className="text-zinc-950 text-[20px] font-normal leading-loose"> PACK</span></h2>
                        <div className='flex flex-col  gap-4'>
                            <div className=" flex items-center justify-start m-auto gap-5">
                                <img src={MArk} alt='' />
                                <h4 className="text-center text-zinc-950 text-[16px] font-medium leading-relaxed">256 GB SSD STORE</h4>
                            </div>
                            <div className=" flex items-center m-auto gap-5">
                                <img src={MArk} alt='' />
                                <h4 className="text-center text-zinc-950 text-[16px] font-medium leading-relaxed">FULL UI KIT DOWNLOAD</h4>
                            </div>
                            <div className=" flex items-center m-auto gap-5">
                                <img src={MArk} alt='' />
                                <h4 className="text-center text-zinc-950 text-[16px] font-medium leading-relaxed">PUBLIC API</h4>
                            </div>
                            <div className=" flex items-center m-auto gap-5">
                                <img src={MArk} alt='' />
                                <h4 className="text-center text-zinc-950 text-[16px] font-medium leading-relaxed">FULL UI PACK DOWNLOAD</h4>
                            </div>
                            <div className=" flex items-center m-auto gap-5">
                                <img src={MArk} alt='' />
                                <h4 className="text-center text-zinc-950 text-[16px] font-medium leading-relaxed">FULL UI PACK DOWNLOAD</h4>
                            </div>
                        </div>
                        <button className="w-[335px] h-[58px] px-[34px] py-3 bg-orange-600 rounded-lg justify-center mt-10 items-center text-center text-white text-[18px] font-bold leading-7 gap-2.5 inline-flex">Install Pack</button>


                    </div>
                    <div className="w-[455px] h-[670.50px] rounded-lg border bg-white shadow-xl border-opacity-70 flex flex-col items-center ">
                        <img src={Elite} alt="" srcset="" />
                        <h2 className="text-center text-zinc-950 text-[31px] font-semibold leading-10">ELITE</h2>
                        <h2 className="w-[232px] h-[115px] text-center text-blue-700 text-[96.39506530761719px] font-bold leading-10 pt-7">$79</h2>
                        <h2 className="text-center  pb-4"><span className="text-zinc-950 text-[20px] font-medium leading-loose">MONTHLY</span><span className="text-zinc-950 text-[20px] font-normal leading-loose"> PACK</span></h2>
                        <div className='flex flex-col items-start gap-4'>
                            <div className=" flex items-center m-auto gap-5">
                                <img src={MArk} alt='' />
                                <h4 className="text-center text-zinc-950 text-[16px] font-medium leading-relaxed">256 GB SSD STORE</h4>
                            </div>
                            <div className=" flex items-center m-auto gap-5">
                                <img src={MArk} alt='' />
                                <h4 className="text-center text-zinc-950 text-[16px] font-medium leading-relaxed">FULL UI KIT DOWNLOAD</h4>
                            </div>
                            <div className=" flex items-center m-auto gap-5">
                                <img src={MArk} alt='' />
                                <h4 className="text-center text-zinc-950 text-[16px] font-medium leading-relaxed">PUBLIC API</h4>
                            </div>
                            <div className=" flex items-center m-auto gap-5">
                                <img src={MArk} alt='' />
                                <h4 className="text-center text-zinc-950 text-[16px] font-medium leading-relaxed">FULL UI PACK DOWNLOAD</h4>
                            </div>
                            <div className=" flex items-center m-auto gap-5">
                                <img src={MArk} alt='' />
                                <h4 className="text-center text-zinc-950 text-[16px] font-medium leading-relaxed">FULL UI PACK DOWNLOAD</h4>
                            </div>
                        </div>
                        <button className="w-[335px] h-[58px] px-[34px] py-3 mt-10 bg-orange-600 rounded-lg justify-center items-center text-center text-white text-[18px] font-bold leading-7 gap-2.5 inline-flex">Install Pack</button>


                    </div>
                </div>}

            </section>
            <section>
            <div className="w-[998.99px] h-[405px] opacity-40 bg-[#FDEEE7] rounded-[30px] absolute left-[53rem] bottom-[20rem] " />
                <div className="w-[890.92px] h-[386.11px] opacity-30 bg-[#FDEEE7] rounded-[30px] absolute bottom-96 left-[57rem]  " />

                <div className="w-[1200px] h-[405px] bg-[#FDEEE7] rounded-[30px] mt-[50rem] m-auto p-10 flex flex-col items-center relative gap-10 ">

                    <h5 className="w-[155px] h-[23px] text-center text-orange-600 text-[20px] font-bold leading-loose tracking-widest">NEWSLETTER</h5>
                    <p className="text-center text-zinc-950 text-[39px] font-semibold leading-10">We Offer Every Month 20% Off
                        <br />For Our All Subscribers</p>
                    <div className='flex m-[1rem] h-[77px]  border border-stone-300  items-center '>
                        <input className="w-[562px] h-[55px] rounded  border-none bg-transparent p-5 outline-none text-black" placeholder='Email Address' />
                        <button className="w-[184px] h-[55px] bg-orange-600 rounded text-center text-white text-[16px] font-medium leading-relaxed m-3">Subscribe</button>
                    </div>
                </div>
            </section>
        </div>
    )
}
