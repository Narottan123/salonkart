import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './loveus.css'
// import { LOCAL_IMAGES } from '../utils/localimages';
import { LOCAL_IMAGES } from '../../utils/localimages';

const LoveusSlider = () => {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    // arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          //   dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3
        }
      }
    ]
  };

  const images = [
    LOCAL_IMAGES.loveusicon1,
    LOCAL_IMAGES.loveusicon2,
    LOCAL_IMAGES.loveusicon3,
    LOCAL_IMAGES.loveusicon4,
    LOCAL_IMAGES.loveusicon5,

  ];

  return (
    <div className="w-full xs:w-full sm:w-full xs:overflow-hidden sm:overflow-hidden">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="">
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LoveusSlider;
