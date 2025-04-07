import React, { useState } from 'react';
import { FaBars, FaChevronDown, FaSearch } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[#060A14]">
      <div className="flex justify-between items-center p-4">
        {/* Logo */}
        <div className="font-Audiowide text-md text-[#FFFFFF] pl-4">
          DoWey{' '}
          <span className="text-[25px] bg-gradient-to-t from-[#59EBFD] to-[#5B1DE8] text-transparent bg-clip-text">
            ai
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li className="text-[#FFFFFF] flex items-center gap-x-1">
            Home <FaChevronDown className="text-[10px]" />
          </li>
          <li className="text-[#FFFFFF]">About</li>
          <li className="text-[#FFFFFF] flex items-center gap-x-1">
            Service <FaChevronDown className="text-[10px]" />
          </li>
          <li className="text-[#FFFFFF] flex items-center gap-x-1">
            Blog <FaChevronDown className="text-[10px]" />
          </li>
          <li className="text-[#FFFFFF]">Contact</li>
        </ul>

        {/* Right Side */}
        <div className="hidden md:flex items-center justify-center space-x-4 pr-4">
          <FaSearch className="text-white" />
          <button className="bg-[#5C00E5] px-4 py-1 text-white">Contact Us</button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden pr-4 z-20" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <IoClose className="text-white text-2xl" /> : <FaBars className="text-white text-xl" />}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col items-start space-y-4 p-4 bg-[#060A14] text-white">
          <li className="flex items-center gap-x-1">
            Home <FaChevronDown className="text-[10px]" />
          </li>
          <li>About</li>
          <li className="flex items-center gap-x-1">
            Service <FaChevronDown className="text-[10px]" />
          </li>
          <li className="flex items-center gap-x-1">
            Blog <FaChevronDown className="text-[10px]" />
          </li>
          <li>Contact</li>
          <div className="flex items-center gap-x-4 mt-4">
            <FaSearch />
            <button className="bg-[#5C00E5] px-4 py-1 text-white">Contact Us</button>
          </div>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
