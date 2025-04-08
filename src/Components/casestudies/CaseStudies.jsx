import React from 'react'

const CaseStudies = () => {
  return (
    <div>
      <div className='flex mt-22'>
        <div className='w-2xl'>
            <span className='block ml-40 font-Exo text-white text-4xl font-bold'><h1>Explore Our <span className='bg-gradient-to-r from-[#5B1DE8] to-[#59EBFD] text-transparent bg-clip-text'>Case Studies</span></h1></span>
        </div>
        <div className='w-2xl'>
        <span className='block text-[#AAA8B1] text-md '><h1>Here are a few AI and Robotics case studies that showcase the <br />
        practical applications and benefits of these technologies</h1></span>
        </div>
      </div>
      <div className='mt-10 w-full flex justify-center items-center'>
        <div className=' w-6xl flex justify-center space-x-2 relative'>
            <div className='bg-gray-500 w-90'><img src="/images/case1.jpg" alt="" /> <button className='absolute top-50 ml-5 bg-[#060A14] px-3 py-2.5 text-white'>Industrial Automation</button></div>
            <div className='bg-gray-500 w-90'><img src="/images/case2.jpg" alt="" /> <button className='absolute top-50 ml-5 bg-[#060A14] px-3 py-2.5 text-white'>Surjical Robotics</button></div>
            <div className='bg-gray-500 w-90'><img src="/images/case3.jpg" alt="" /> <button className='absolute top-50 ml-5 bg-[#060A14] px-3 py-2.5 text-white'>Autonomous Vehicles</button></div>    
        </div>
      </div>
    </div>
  )
}

export default CaseStudies
