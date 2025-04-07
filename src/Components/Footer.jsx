import React from 'react'
import { FaPhone } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='w-5xl h-80 '>
        <div className='flex flex-col space-y-5'>
          <h1 className='font-Exo font-bold text-[#FFFFFF] text-4xl'>Subscribe to our <br /> <span className='bg-gradient-to-l from-[#5B1DE8] to-[#59EBFD] text-transparent bg-clip-text'>newsLetter</span></h1>
          <h1 className='text-2xl  text-[#FFFFFF] font-Audiowide'> Dowey <span className='bg-gradient-to-t from-[#5B1DE8] to-[#59EBFD] text-transparent bg-clip-text text-4xl'>ai</span></h1>
          <p className='text-[#AAA8B1]'>717 Old Edinburgh Road, Belmontze A7M <br />
          Austin, M7D</p>
          <div>
            <span><FaPhone/></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
