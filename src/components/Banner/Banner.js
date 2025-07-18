import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import {
  bannerImgOne,
  bannerImgTwo,
  bannerImgThree,
} from "../../assets/images";
import Image from "../designLayouts/Image";

const CustomSlide = ({ Subtext, imgSrc, text, buttonLink, buttonText }) => (
  <div className="flex flex-col-reverse md:flex-row items-center justify-center bg-[#F5F5F3] p-4 md:p-10">
    {/* Image Section */}
    <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] mt-6 md:mt-0 md:ml-10">
      <Image imgSrc={imgSrc} />
    </div>

    {/* Text Section */}
    <div className="max-w-[450px] text-center md:text-left">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
        {text}
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6">
        {Subtext}
      </p>
      <Link to={buttonLink}>
        <button className="bg-primeColor text-white text-base sm:text-lg w-[160px] sm:w-[185px] h-[45px] sm:h-[50px] font-semibold hover:bg-black duration-300">
          {buttonText}
        </button>
      </Link>
    </div>
  </div>
);


const Banner = () => {
  const [dotActive, setDotActive] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "7%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                padding: "8px 0",
                cursor: "pointer",
              }
            : {
                width: "30px",
                color: "transparent",
                borderRight: "3px white solid",
                padding: "8px 0",
                cursor: "pointer",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "2%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}>{dots}</ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "25px",
                      color: "#262626",
                      borderRight: "3px #262626 solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
                  : {
                      width: "25px",
                      color: "transparent",
                      borderRight: "3px white solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };

  const slides = [
    {
      imgSrc: bannerImgOne,
      text: "Enhance Your Printing Experience",
      Subtext:
        "Explore our premium printers and consumables for exceptional results",
      buttonLink: "/shop",
      buttonText: "Shop Now",
    },
    {
      imgSrc: bannerImgTwo,
      text: "Quality Printing Solutions",
      Subtext:
        "Discover our wide range of printers and consumables designed for professional printing needs.",
      buttonLink: "/about",
      buttonText: "About-us",
    },
    {
      imgSrc: bannerImgThree,
      text: "Efficiency Redefined",
      Subtext:
        "Maximize productivity with our advanced printers and high-quality consumables.",
      buttonLink: "/contact",
      buttonText: "Contact-us",
    },
  ];

  return (
    <div className="w-full bg-white relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <CustomSlide key={index} {...slide} />
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
