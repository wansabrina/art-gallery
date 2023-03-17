import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const PictureSection = () => {
  return (
    <div className="flex flex-wrap mb-20 px-20" id='Programs'>
      <div className="w-full md:w-1/3 bg-cover bg-center bg-yellow-500" style={{ backgroundImage: 'url("img/vangogggg.png")' }}></div>
      <div className="w-full md:w-2/3 bg-yellow-500 mt-36">
        <div className="px-8 pt-12">
          <h2 className="text-4xl md:text-4xl font-bold mb-4 text-gray-800 leading-tight">Enroll in our Art Classes and Unlock Your Creativity Today!</h2>
          <p className="text-lg md:text-xl text-justify text-gray-700 leading-relaxed mb-8">Our art classes offer a unique opportunity to unleash your creativity. With experienced instructors and a supportive community, youll develop the skills and confidence to bring your artistic vision to life. Whether youre a beginner or an experienced artist, we have a range of classes to suit your needs. Join us today and discover the joy of creating art.</p>
          <div className="pb-5 bg-yellow-500">
            <div className="container mx-auto ">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url("img/2.png")' }}></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Drawing Classes</h3>
                    <p className="text-gray-600">Improve your drawing and creativity skills with in-person classes.</p>
                    <a href="/museum-of-contemporary-art" className="flex items-center mt-4 font-semibold text-yellow-500 hover:text-yellow-300">
                      Learn more
                      <span className="ml-2"><FaArrowRight /></span>
                    </a>
                  </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url("img/3.png")' }}></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Painting Classes</h3>
                    <p className="text-gray-600 ">Learn to paint with our expert instructors in a studio setting.</p>
                    <a href="/national-gallery-of-art" className="flex items-center mt-4 font-semibold text-yellow-500 hover:text-yellow-300">
                      Learn more
                      <span className="ml-2"><FaArrowRight /></span>
                    </a>
                  </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url("img/1.png")' }}></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Sculpture Classes</h3>
                    <p className="text-gray-600">Discover 3D expression with our in-person sculpture classes.</p>
                    <a href="/science-museum" className="flex items-center mt-4 font-semibold text-yellow-500 hover:text-yellow-300">
                      Learn more
                      <span className="ml-2"><FaArrowRight /></span>
                    </a>
                  </div>
                </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PictureSection;
