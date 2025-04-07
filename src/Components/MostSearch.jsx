import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'

const MostSearch = () => {
  return (
    <div className='relative'>
      <div className='mt-10'>
        <div className='text-center'>
        <h1 className='font-Anton text-5xl text-[#FFFFFF]'>MOST SEARCHED</h1>
        <span className='text-[#FFFFFFB5] flex justify-center items-center'>We can help with your financing plan, we can offer some<span className='block bg-[#FF3234] w-20 h-0.5 ml-3'></span></span>
        </div>
        <div className='w-full mt-5 flex h-screen  '>
          <div className=' w-2xl '>
            <div className=' w-70 h-50 absolute bg-[#5B1DE80D]'>
              <div className='w-70 h-50 bg-[#5B1DE80D] mt-20 ml-20'>
                <div className='w-70 h-96 absolute bg-[#5B1DE80D] mt-20 ml-20'>
                  <div className='w-70 h-73 mt-10 bg-amber-50'>
                    <img src="/images/s1.jpg" alt=""  className='opacity-65'/>
                  </div>
                </div>
              </div>
                

            </div>
          </div>
          <div className='w-2xl flex justify-end'>
            <div className='w-50 h-70 bg-[#5B1DE80D] absolute'>
              <div className='w-50 h-70 bg-[#5B1DE80D] mt-20 absolute ml-[-50px]'>
                <div className='w-70 h-80 bg-[#5B1DE80D] mt-30 ml-[-100px]'>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className=' flex w-3xl h-96 bg-[#5B1DE8] absolute top-0 mt-60 ml-[310px]'>
        <div className='w-sm flex justify-center items-center'>
          <div className='w-xs h-80 flex flex-col space-y-4 '>
            <h1 className='font-Anton text-[#FFFFFF] text-3xl'>Artificial Intelligence</h1>
            <div className='flex space-x-2'>
            <FaRegStar className='text-[#FFBA36]'/>
            <FaRegStar className='text-[#FFBA36]'/>
            <FaRegStar className='text-[#FFBA36]'/>
            <FaRegStar className='text-[#FFBA36]'/>
            <FaRegStar className='text-[#FFBA36]'/>
            </div>
            <p className='mt-5 text-[#FFFFFF] font-Urbanist'>
              <span>
              8.8 kmpl speed automatic <br />
              2.5 liter 4-cylinder 204 HP
              </span> <br />
              <span className='mt-10'>
              Stock#: KU680564 <br />
              Model#: Portofino M
              </span> <br />
              <h1>Vin#: 4T1B11HK1KU680564</h1>
            </p>
            <span className='text-[#FFFFFF] text-2xl font-Urbanist'>$920,000</span>
          </div>
        </div>
        <div className='w-xs h-50  mt-13'>
          <img src="/images/robo.jpg" alt="" className='h-70' />
        </div>

      </div>
    </div>
  )
}

export default MostSearch
