import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
    <div className='flex justify-center items-center '>
      <div className='w-5xl h-80 flex'>
        <div className='flex flex-col space-y-5'>
          <h1 className='font-Exo font-bold text-[#FFFFFF] text-4xl'>Subscribe to our <br /> <span className='bg-gradient-to-l from-[#5B1DE8] to-[#59EBFD] text-transparent bg-clip-text'>newsLetter</span></h1>
          <h1 className='text-2xl  text-[#FFFFFF] font-Audiowide'> Dowey <span className='bg-gradient-to-t from-[#5B1DE8] to-[#59EBFD] text-transparent bg-clip-text text-4xl'>ai</span></h1>
          <p className='text-[#AAA8B1]'>717 Old Edinburgh Road, Belmontze A7M <br />
          Austin, M7D</p>
          <div className='flex space-x-5'>
            <div>
            <span className='flex items-center space-x-1 text-[#FFFFFF]'><FaPhone className='text-[#59EBFD]'/> <span className='font-Inter'>Phone <br /></span></span>
            <span className='text-[#FFFFFF]'>+175325887753</span>
            </div>
            <div>
            <span className='flex items-center space-x-1 text-[#FFFFFF]'><FaEnvelope className='text-[#59EBFD]'/> <span className='font-Inter'>Email<br /></span></span>
            <span className='text-[#FFFFFF]'><a href="mailto:example@doweai.com">example@doweai.com</a></span>
            </div>
          </div>
        </div>
        <div className='w-full h-full overflow-hidden'>
          <div className='h-22 w-[650px] ml-20 mt-2 relative '><input type="text" placeholder='your email address'  className=' rounded-sm  border pl-2 border-[#AAA8B1] text-[#AAA8B1] font-Inter w-full  h-14 ' /> <button className='bg-[#5B1DE8] absolute right-4 top-1/3 -translate-y-1/2 px-5 py-2 rounded-sm'>Subscribe</button> </div>
          <div className='h-45 w-full ml-20  flex space-x-2'>
            <div className='h-45 w-52 flex flex-col justify-start space-y-3 '>
              <h1 className='font-Exo text-3xl text-[#FFFFFF]'>Social</h1>
              <span className='text-[#AAA8B1] font-Inter'>Facebook</span>
              <span className='text-[#AAA8B1] font-Inter'>Twitter</span>
              <span className='text-[#AAA8B1] font-Inter'>Linkdin</span>
              <span className='text-[#AAA8B1] font-Inter'>Instagram</span>
            </div>
            
            <div className='h-45 w-52 flex flex-col justify-start space-y-3 '>
              <h1 className='font-Exo text-3xl text-[#FFFFFF]'>Company</h1>
              <span className='text-[#AAA8B1] font-Inter'>About</span>
              <span className='text-[#AAA8B1] font-Inter'>Services</span>
              <span className='text-[#AAA8B1] font-Inter'>Blog</span>
              <span className='text-[#AAA8B1] font-Inter'>Contact</span>
            </div>

            <div className='h-45 w-52 flex flex-col justify-start space-y-3 '>
              <h1 className='font-Exo text-3xl text-[#FFFFFF]'>Portfolio</h1>
              <span className='text-[#AAA8B1] font-Inter'>Advanced Sensors</span>
              <span className='text-[#AAA8B1] font-Inter'>Autonomous Vehicles</span>
              <span className='text-[#AAA8B1] font-Inter'>Surgical Robotics</span>
              <span className='text-[#AAA8B1] font-Inter'>Industrial Automation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className='w-full h-15 bg-[#0C0D1A] flex justify-center items-center'>
        <h1 className='text-[#9B9B9E]'>Copyright © 2025 doweai All rights reserved.</h1>
      </div>
    </div>
  )
}

export default Footer
