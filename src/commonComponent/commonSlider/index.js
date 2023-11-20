import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function CommonSlider(props) {
    const {brandimg}=props
    console.log('brandimg',brandimg)
    const settings = {
        dots:true,
        // infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            //   dots: true
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
    
    <div>
           <Slider {...settings}>
        {
                brandimg?.map((item,index)=>{
                    return(
                        // <div style={{display:'flex',width: 'calc(100% /2- 10px)',}}
                        //  >
                            <img src={item?.img}
                            // style={{height:'200px',width:'440px',}}
                            alt='galleryimages'
                            />
                        // </div>
                    )

                })
            }
        </Slider>
    </div>
  )
}
