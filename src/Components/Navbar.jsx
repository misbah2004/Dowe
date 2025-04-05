import React from 'react'
import { FaBars, FaChevronDown, FaSearch } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='bg-[#060A14]'>
        <div className='flex justify-between space-around p-4'>
            <div className='font-semibold text-md text-[#FFFFFF] pl-4'>DoWey</div>
            <div className=''> 
                <ul className='flex space-x-6'>
                    <li className='text-[#FFFFFF] flex items-center gap-x-1'>Home<FaChevronDown className='text-[10px]'/></li>
                    <li className='text-[#FFFFFF]'>About</li>
                    <li className='text-[#FFFFFF] flex items-center gap-x-1'>Service<FaChevronDown className='text-[10px]'/></li>
                    <li className='text-[#FFFFFF] flex items-center gap-x-1'>Blog<FaChevronDown className='text-[10px]'/></li>
                    <li className='text-[#FFFFFF]'>Contact</li>
                </ul>
            </div>
            <div className='flex items-center justify-center space-x-4 pr-4'>
                <FaSearch className='text-white'/>
                <button className='bg-[#5C00E5] px-4 py-1'>Contact Us</button>
                <FaBars className='text-white'/>
            </div>
        </div> 
    </div>
  )
}

export default Navbar
