import { useGSAP } from '@gsap/react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6"
const Landingpage = () => {
  useGSAP(()=>{
    gsap.from(".animate",{    
    
    })
  })

  return (
    <div className='main  w-full '>
      <div className=" page text mt-40">
        <div className="  masker   px-16"> <h1 className='uppercase text-[8vw] leading-3  tracking-tighter font-["Founders Grotesk"] font-extrabold'>WE CREATE</h1>
        </div>
       
      </div>
      <div className="text flex">
        <div className='animate w-[9vw] h-[6vw] bg-zinc-900 rounded-md mt-16 ml-20'></div>
        <div className="  masker mt-12  "> <h1 className='uppercase text-[8vw] leading-none	  tracking-tighter font-["Founders Grotesk"] font-extrabold'>eye-opening</h1>
        </div>
      </div>
      <div className="text">
        <div className="  masker mt-12  px-16"> <h1 className='uppercase text-[8vw] leading-3	  tracking-tighter font-["Founders Grotesk"] font-extrabold'>presentations</h1>
        </div>
        <div className="line border-t-[1px] border-zinc-400 flex justify-between items-center py-5 px-20 mt-60 ">
        {["For public and private companies","From the first pitch to Ipo"].map((item,index)=>
          <p className='text-md  font-light tracking-tight leading-none'>{item}</p>)
        }
        <div className="start flex item-center gap-5">
          <div className='px-4 py-2 border-[1px] border-zinc-500 text-sm rounded-full'>START THE PROJECT</div>
          <div className='w-10 h-10 border-[1px] flex justify-center items-center border-zinc-500 rounded-full font-light'>
            <span className='rotate-45'>
            <FaArrowUpLong /></span>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Landingpage
