import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import ButtonLink from './ButtonLink';

const Programs = () => {
  return (
    <div className="flex flex-wrap py-20" id='Campaign'>
      <div className="w-full md:w-1/4 bg-yellow-500">
        <div className="px-8">
          <h2 className="text-4xl font-bold mb-4 text-gray-800 leading-tight mt-12 ">Join Our Campaign</h2>
          <p className="text-lg text-justify text-gray-700 leading-relaxed mb-4">Submit your artwork to our The Van Gogh campaign and showcase your creativity in our upcoming exhibition. Join us and be part of the celebration of art.</p>
          <div className='mb-12'>
            <a href="Demo" className="flex items-center mt-4 font-semibold text-white hover:text-gray-100">
              Register Now
              <span className="ml-2"><FaArrowRight /></span>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full md:w-3/4 bg-cover bg-center" style={{ backgroundImage: 'url("img/bgkuning.webp")' }}></div>
    </div>
  );
};

export default Programs