import React from 'react'

const Services = () => {
  return (
    <div className='flex justify-center mt-10 space-x-10'>
        <div className=''> 
            <span className='text-[#FFFFFF] sm:text-2xl md:text-4xl lg:text-5xl font-Exo font-bold'>Explore Best <br /> <span className='bg-gradient-to-r from-[#5C00E5] to-[#59EBFD] text-transparent bg-clip-text' > Al Services</span></span> <br />
            <span className='text-[#FFFFFFB2] text-sm mt-4 block'>Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit sed eiusmod tempor</span>
            <button className='border border-[#59EBFD] text-white px-3 mt-4 py-1 shadow-inner rounded-full hover:bg-[#59EBFD] hover:text-black transition'>
  All Services
</button>

        </div>
        <div className='w-2xl flex flex-wrap gap-4'>
            <div className='h-80 w-70 bg-white rounded relative'>
              <img src="/images/card1.jpg" alt="" className='rounded h-80' />
              <div className='w-full h-full bg-gradient-to-r from-[#5B1DE8F7] to -[#59EBFD52] absolute top-0'>
                <div className='mt-60 ml-5'>
                <span className='text-[#FFFFFF] font-orbitro text-xl'>Robotic Automtion</span>
                <p className='text-[#FFFFFF] text-xs'>Lorem ipsum dolor sit sedar conse <br />
                adipiscing el sed do eiusmod.</p>
                </div>
              </div>
            </div>
            <div className='h-80 w-70 bg-white relative rounded'>
              <img src="/images/card2.jpg" alt=""  className=' rounded h-80' />
              <div className='w-full h-full bg-gradient-to-r from-[#5B1DE8F7] to -[#59EBFD52] absolute top-0'>
              <div className='mt-60 ml-5'>
                <span className='text-[#FFFFFF] font-orbitro text-xl'>Machine Learning</span>
                <p className='text-[#FFFFFF] text-xs'>Lorem ipsum dolor sit sedar conse <br />
                adipiscing el sed do eiusmod.</p>
                </div>
              </div>
            </div>
            <div className='h-80 w-70 bg-white rounded relative'>
              <img src="/images/card3.jpg" alt="" className=' h-80 rounded' />
              <div className='w-full h-full rounded bg-gradient-to-r from-[#5B1DE8F7] to -[#59EBFD52] absolute top-0'>
              <div className='mt-60 ml-5'>
                <span className='text-[#FFFFFF] font-orbitro text-xl'>AI For Conversation</span>
                <p className='text-[#FFFFFF] text-xs'>Lorem ipsum dolor sit sedar conse <br />
                adipiscing el sed do eiusmod.</p>
                </div>
              </div>
            </div>
            <div className='h-80 w-70 bg-white rounded relative'>
              <img src="/images/card4.jpg" alt="" className=' rounded h-80' />
              <div className='w-full h-full bg-gradient-to-r from-[#5B1DE8F7] to -[#59EBFD52] absolute top-0'>
              <div className='mt-60 ml-5'>
                <span className='text-[#FFFFFF] font-orbitro text-xl '>Internet of things</span>
                <p className='text-[#FFFFFF] text-xs'>Lorem ipsum dolor sit sedar conse <br />
                adipiscing el sed do eiusmod.</p>
                </div>
              </div>
            </div>
        </div>

          </div>
  )
}

export default Services
