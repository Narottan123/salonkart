import React, { useState } from "react";
import "./Carddescrption.css";
import { AiFillGift } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import postProductData from "../Redux/actions";
import { postProductData } from "../Redux/actions";
import { useLocation } from "react-router-dom";
const Cartdescription = (props) => {
  const { productdata } = props;

  console.log(productdata)
  const dispatch = useDispatch();
  const onclickfun = () => {
    dispatch(postProductData());
  };

  // const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  /*const smallImages = [
    "https://innovist.com/cdn/shop/products/PPA_ShampooCatalog1_1800x1800.webp?v=1666676018",
    "https://innovist.com/cdn/shop/products/AntiDandruffShampooCatalog_022_1800x1800.jpg?v=1667223617",
    "https://innovist.com/cdn/shop/products/AntiDandruffShampooCatalog_023_1800x1800.jpg?v=1667223617",
    "https://innovist.com/cdn/shop/products/AntiDandruffShampooCatalog_024_1800x1800.jpg?v=1667223617",
    "https://innovist.com/cdn/shop/products/AntiDandruffShampooCatalog_025_1800x1800.jpg?v=1667223617",
  ];*/

  // const handleImageClick = (index) => {
  //   setSelectedImageIndex(index);
  // };

  // const handlesinglebuttonClick = () => {
  //   setSelectedImageIndex(0);
  // };

  // const handlepack2buttonClick = () => {
  //   setSelectedImageIndex(1);
  // };

  return (
    <div className="flex xs:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row xxl:flex-row">
      {(window.innerWidth < 640 || window.innerWidth < 768) && (
        <Carousel
          showThumbs={false}
          // selectedItem={selectedImageIndex}
          // onChange={setSelectedImageIndex}
        >
          {productdata?.map((product, index) => {

            //console.log('image_link:', image_link);

            return (
              <div key={index}>
                <img src={product.image_link} alt={`image${index}`} />
              </div>
            );
          })}
        </Carousel>
      )}

      {window.innerWidth > 768 && (
        <div className="flex">
          <div className="ml-9">
            {productdata?.map((product, index) => (
              <img
                key={index}
                className={`w-[80px] h-[80px] mb-4 cursor-pointer`}
                src={product.image_link}
                alt={`image${index}`}
                // onClick={() => handleImageClick(index)}
              />
            ))}
          </div>

          <div className="">
            <img
              className="w-[500px] h-[465px] ml-[25px]"
              // src={productdata[selectedImageIndex]}
              alt="product image"
            />
          </div>
        </div>
      )}

      <div className="pl-0 xs:pl-4">
        <h2>Anti Dandruff Shampoo</h2>
        <p>
          Reduces Dandruff Up to 100% | Helps Shed Dry Flakes | Cleanses the
          Scalp
        </p>
        <div className="flex items-center xs:flex-col sm:flex-col md:flex-col">
          <button className="pr-5 xs:mb-2 sm:mb-2 md:mb-2">4.5 rating</button>
          <p>778 Verified Reviews | Free Shipping</p>
        </div>
        <h1>₹545.00 incl. of all taxes</h1>
        <h2>Size</h2>
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-2 xs:mr-2 sm:mr-2 md:mr-2"
          // onClick={handlesinglebuttonClick}
        >
          Single
        </button>
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          // onClick={handlepack2buttonClick}
        >
          Pack of 2
        </button>
        <button
          onClick={onclickfun}
          className="w-full bg-black text-white mt-4 xs:mt-6 sm:mt-6 md:mt-6 p-4 xs:mt-0 sm:mt-0 md:mt-0"
        >
          Add To Cart
        </button>
        <div className="w-full xs:w-1/2 sm:w-1/2 md:w-1/2 h-[150px] mt-4 shadow-lg relative">
          <div className="flex items-center mb-2 xs:mb-0 sm:mb-0 md:mb-0">
            <AiFillGift />
            <h2>Active Offers</h2>
          </div>
          <div className="flex justify-between">
            <div className="relative w-1/3 xs:w-full sm:w-full md:w-full">
              <img
                src="https://cdn.shopify.com/s/files/1/0039/6073/3763/files/offer_bg.svg?v=1694427078"
                alt="active1"
              />
              <p className="absolute inset-0 flex items-center justify-center text-white">
                Content for Image 1
              </p>
            </div>
            <div className="relative w-1/3 xs:w-full sm:w-full md:w-full">
              <img
                src="https://cdn.shopify.com/s/files/1/0039/6073/3763/files/offer_bg.svg?v=1694427078"
                alt="active2"
              />
              <p className="absolute inset-0 flex items-center justify-center text-white">
                Content for Image 2
              </p>
            </div>
            <div className="relative w-1/3 xs:w-full sm:w-full md:w-full">
              <img
                src="https://cdn.shopify.com/s/files/1/0039/6073/3763/files/offer_bg.svg?v=1694427078"
                alt="active3"
              />
              <p className="absolute inset-0 flex items-center justify-center text-white">
                Content for Image 3
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartdescription;
