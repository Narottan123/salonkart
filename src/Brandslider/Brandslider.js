import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './brandslide.css'
import { LOCAL_IMAGES } from '../utils/localimages';

const BrandSlider = () => {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 4,
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
    LOCAL_IMAGES.banner_icon,
    LOCAL_IMAGES.banner_icon,

  ];

  return (
  


<div style={{  }}>
<Slider {...settings}>
    {images.map((image, index) => (
        <div key={index} className="productslide"> {/* Apply the className here */}
            <img src={image} alt={`Slide ${index}`} />
        </div>
    ))}
</Slider>
</div>
    
  );
};

export default BrandSlider;
