import React from 'react';
import { assets } from '../assets/assets';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-teal-700 text-white py-10 '>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-10 px-5 sm:px-10 my-5 text-sm'>
        
        {/* Logo and About Section */}
        <div>
          <img src={assets.logo} className='mb-5 w-32' alt="E-ART Gallery" />
          <p className='w-full md:w-2/3 text-gray-300'>
            E-ART Gallery is a platform designed to bridge the gap between local artists and art collectors. Our mission is to provide a space where talented artists can showcase and sell their unique creations to a broader audience.
          </p>
        </div>

        {/* Explore Links */}
        <div>
          <p className='text-xl font-medium mb-5'>EXPLORE</p>
          <ul className='flex flex-col gap-1 text-gray-300'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Social Media Links with Icons */}
        <div>
          <p className='text-xl font-medium mb-5'>FOLLOW US</p>
          <div className='flex gap-4'>
            <a href='#' className='text-gray-300 hover:text-white'>
              <FaFacebookF size={20} />
            </a>
            <a href='#' className='text-gray-300 hover:text-white'>
              <FaInstagram size={20} />
            </a>
            <a href='#' className='text-gray-300 hover:text-white'>
              <FaTwitter size={20} />
            </a>
            <a href='#' className='text-gray-300 hover:text-white'>
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
        
      </div>

      {/* Footer Bottom */}
      <div className=' text-center text-gray-300 mt-6 sm:mt-5  justify-center '>
        <p>&copy; {new Date().getFullYear()} E-ART Gallery. All Rights Reserved.</p>
      </div>
      

    </div>
  );
};

export default Footer;
