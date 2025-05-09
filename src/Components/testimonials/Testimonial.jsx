import React from 'react'

const Testimonial = () => {
  return (
    <div>
      <div className='w-full bg-[url(/images/testimonialbg.jpg)] mt-10 relative'>
      <img src="/images/testimonialpng.png" alt="" />
      <div className=' w-full absolute z-50 top-0 mt-10 flex justify-center'>
        <div className='flex flex-col justify-center items-center space-y-2 mt-1'> 
            <h1 className='text-[#41F681] font-Monsterrat text-lg'>Testimonials</h1>
            <h1 className='text-[rgb(255,255,255)] sm:text-2xl lg:text-5xl font-bold'>Hear it From Our Clients</h1>
            <div className=' space-x-4  flex flex-wrap '>
                <div className='bg-[#664dfd] w-sm p-5 rounded-md' > 
                    <div className='w-90 h-40'>
                        <div className='flex space-x-5'>
                        <img src="/images/cprofile1.jpg" alt="" className='w-20 h-20 rounded-full object-cover'/><span className='text-white'>Perin Rames <br /><span>Head Of Managemint at ZE</span></span>
                        </div>
                        <div><h1 className='text-white ml-2 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga possimus harum iure explicabo accusantium officiis.</h1></div>
                    </div>
                </div>
                <div className='bg-[#22222c] w-sm p-5 rounded-md' > 
                    <div className='w-90 h-40'>
                        <div className='flex  space-x-5'>
                        <img src="/images/cprofile2.jpg" alt="" className='w-20 h-20 rounded-full object-cover'/><span className='text-white'>Perin Rames <br /><span>Head Of Managemint at ZE</span></span>
                        </div>
                        <div><h1 className='text-white ml-2 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga possimus harum iure explicabo accusantium officiis.</h1></div>
                    </div>
                </div>
            </div>
            </div>

      </div>
        

      </div>
    </div>
  )
}

export default Testimonial
