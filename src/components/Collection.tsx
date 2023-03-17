import React, { Component } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FamousImage } from '@/constant/ImageData'
import { FaArrowRight } from 'react-icons/fa';


export default class PauseOnHover extends Component {
  render() {
    var settings = {dots: false,infinite: true,slidesToShow: 1,slidesToScroll: 1,autoplay: true,autoplaySpeed: 5000,pauseOnHover: true,};
    return (
      <section className='my-10 px-5 sm:px-10 lg:px-20 flex flex-col' id='Collection'>
        <div className='mb-10 flex flex-col items-center justify-center'>
          <h1 className="mb-4 text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-none tracking-tight text-gray-900 font-crimson text-center">See Van Goghs Most Famous Collection</h1>
          <p className="mb-6 text-lg lg:text-xl text-gray-500 text-center sm:px-16 xl:px-48 font-normal">Van Goghs emotionally charged and vividly colorful paintings have become some of the most recognizable and beloved artworks in history.</p>
        </div>
        <div className='flex flex-wrap'>
          <div className='w-full lg:w-1/2 bg-yellow-500 rounded-l-xl'>
            <Slider {...settings}>
            {FamousImage.map((item, index) => (
              <div className='card flex flex-col' key={index}>
                <div className='card-top'>
                  <Image className='bg-white bg-opacity-30 xl:rounded-tl-xl' src={item.image} alt={item.title} height={640} width={640} />
                </div>
                <div className='card-bottom bg-white xl:mr-10 pt-2 py-5 flex justify-center flex-col xl:rounded-bl-xl '>
                  <h1 className='px-5 text-xl font-crimson font-semibold'>{item.title}</h1>
                  <a href="/science-museum" className="flex items-center pt-2 px-5 font-semibold text-yellow-500 hover:text-yellow-600">Learn more<span className="ml-2"><FaArrowRight /></span></a>
                </div>
              </div> 
            ))}
            </Slider>
          </div>   
          <div className='w-full lg:w-1/2 flex bg-yellow-500 z-10 xl:rounded-r-xl'>
            <blockquote className="text-base pl-10 py-4 xl:text-xl italic font-semibold text-white pr-8 flex justify-center flex-col">
              <svg className="w-8 h-8 xl:w-10 lg:h-10 text-white" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
              <p className='text-center lg:text-left'>I am seeking, I am striving, I am in it with all my heart. The more I think of it, the more I feel that there is nothing more truly artistic than to love people. What I want is to paint peoples lives in all its simplicity, color, and grandeur. After all, the whole world is but a grain of sand on the beach, and no two are alike. Each has its own story, its own beauty, and its own significance. It is up to the artist to reveal that beauty, to see the world in a grain of sand, and to bring out the magic in the ordinary.</p>
              <p className='flex justify-end py-2'> - Vincent Van Gogh</p>
            </blockquote>
          </div>
        </div>
      </section>
    );
  };
  }