import React, { Component } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ExhibitNow, ImageData } from "@/constant/ImageData";
import { FaArrowRight } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import ButtonLink from "./ButtonLink";

type CollectionSlider = {
  image: string;
  link?: string;
};

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
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <section className="mb-10 w-full px-20">
        <Slider {...settings}>
        {ExhibitNow.map((item, index) => (
          <div key={index} className="p-4">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                <a href="#">
                  <Image className="rounded-t-lg" src={item.image} alt={item.location} height={400} width={400}/>
                </a>
                <div className="p-5">
                  <a href="#" className="flex">
                    <span className="text-xl mt-1 text-red-500"><MdLocationPin /></span>
                    <h5 className="ml-2 text-2xl font-bold tracking-tight font-crimson">{item.location}</h5>
                  </a>
                  <p className="ml-1 mb-3 font-normal text-gray-700 ">{item.date}</p>
                  <div className="mt-5 mb-3">
                    <ButtonLink title="See Details" />
                  </div>
                </div>
              </div>
          </div>
        ))}
        </Slider>
      </section>
    );
  }
}
