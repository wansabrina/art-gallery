import React, { Component } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ExhibitNow, ImageData } from '@/constant/ImageData'
import { FaArrowRight } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';


type CollectionSlider = {
  image: string;
  link?: string;
}

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <section className='mb-10 w-full px-20'>
        <Slider {...settings}>
          {ExhibitNow.map((item) => (
            <div className='card my-8 mx-5'>
              <div className='card-top'>
                <Image className='bg-white bg-opacity-30 shadow-xl rounded-t-xl' src={item.image} alt={item.location} height={300} width={300} />
              </div>
            <div className='card-bottom bg-gray-100 mr-10 pt-2 py-5 shadow-md rounded-b-xl'>
              <div className='flex'>
              <span className="pl-4 text-xl mt-1 text-red-500"><MdLocationPin /></span>
                <h1 className='pl-1 text-xl font-crimson font-semibold'>{item.location}</h1>
              </div>
              <p className='pl-5 pr-9 text-sm text-justify'>{item.date}</p>
              <a href="/science-museum" className="flex items-center pt-2 px-5 font-semibold text-yellow-500 hover:text-yellow-600">
                See Details
                <span className="ml-2"><FaArrowRight /></span>
              </a>
            </div>
          </div> 
          ))}
        </Slider>   
      </section>
    );
  };
  }


