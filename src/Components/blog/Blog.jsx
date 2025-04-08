import React from 'react'

const Blog = () => {
  return (
    <div className='h-screen'>
      <div>
        <h1 className='text-white text-center font-Anton text-5xl'>Latest Blog & <span className='bg-gradient-to-r from-[#59EBFD] to-[#5B1DE8] text-transparent bg-clip-text'>Articles</span></h1>
        <p className='text-center text-[#FFFFFF]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod <br />
        tempor incididunt ut labore et dolore magna aliqua</p>
        <div className='flex justify-center items-center mt-10'>
            <div className='w-5xl h-90 flex justify-center items-center space-x-4'>
                <div className='shadow-xl'>
                <div className='bg-[#01141D] h-60 w-80 flex justify-center items-center '>
                    <div className=' bg-white w-70'> <img src="/images/depressrobo.jpg" alt="" /> </div>
                </div>
                <div className='flex flex-col justify-center space-y-3  items-center h-30 w-80 bg-gradient-to-b mb-3 from-[#017AF500] to-[#02030FEB]'>
                    <h1 className='font-orbitro text-[#FFFFFF]'>Transforming Industries <br />
                    and Changing Lives with AI</h1>
                    <span className='text-[#FFFFFF] font-Inter'>Lorem ipsum dolor sit amet,<br />
                    adipiscing elit, sed do eiusmod...</span>
                </div>
                </div>
                <div>
                <div className='bg-[#01141D] h-60 w-80 flex justify-center items-center '>
                <div className=' bg-white w-70'> <img src="/images/depressrobo.jpg" alt="" /> </div>
                </div>
                <div className='h-30 w-80 bg-gradient-to-b mb-3 from-[#017AF500] to-[#02030FEB]'>
                <div className='flex flex-col justify-center space-y-3  items-center h-30 w-80 bg-gradient-to-b mb-3 from-[#017AF500] to-[#02030FEB]'>
                    <h1 className='font-orbitro text-[#FFFFFF]'>Transforming Industries <br />
                    and Changing Lives with AI</h1>
                    <span className='text-[#FFFFFF] font-Inter'>Lorem ipsum dolor sit amet,<br />
                    adipiscing elit, sed do eiusmod...</span>
                </div>
                </div>
                </div>
                <div>
                <div className='bg-[#01141D] h-60 w-80 flex justify-center items-center '>
                <div className=' bg-white w-70'> <img src="/images/depressrobo.jpg" alt="" /> 
                </div>
                </div>
                <div className='h-30 w-80 bg-gradient-to-b mb-3 from-[#017AF500] to-[#02030FEB]'>
                <div className='flex flex-col justify-center space-y-3  items-center h-30 w-80 bg-gradient-to-b mb-3 from-[#017AF500] to-[#02030FEB]'>
                    <h1 className='font-orbitro text-[#FFFFFF]'>Transforming Industries <br />
                    and Changing Lives with AI</h1>
                    <span className='text-[#FFFFFF] font-Inter'>Lorem ipsum dolor sit amet,<br />
                    adipiscing elit, sed do eiusmod...</span>
                </div>
                </div>
                </div>


            </div>

        </div>
      </div>

    </div>
  )
}

export default Blog
