import React from "react";

import { useDispatch } from "react-redux";
// import postProductData from "../Redux/actions";
import { postProductData } from "../Redux/actions";
export default function Allproducts(props) {
  const { productdata } = props;
  const dispatch=useDispatch()
  const image =
    "https://innovist.com/cdn/shop/products/Aqua_1.jpg?v=1674479748&width=300";

    const addToCart=(product)=>{
      // console.log("addedproduct",product)
dispatch(postProductData(product))

    }
  return (
    <div className="container mx-auto px-4 mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 px-11">
        {productdata?.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
            style={{ border: "1px solid #cccc", borderRadius:  "2px"}}
          >
            <img
              className="h-[300px] w-[300px] object-cover mb-2"
              src={product.image_link}
              alt="product"
            />
            <div className="flex justify-center mb-2">
              <div class="flex items-center space-x-1">
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-4 h-4 text-gray-300 dark:text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>
            </div>
            <div className="text-center w-[270px]">
              <p className="mb-2" style={{ fontSize: "13px", fontWeight: 500 }}>
                {'Argatin Damage Repair Sulfate-Free Shampoo Conditioner and Hair Mask Combo'}
              </p>
              <div className="flex flex-col items-center">
                <div className="flex items-center">
                  <p className="line-through text-gray-500 mr-2">
                    ₹{product.price}
                  </p>
                  {(1 - product.sale_price / product.price) * 100 > 0 && (
                    <p className="text-green-500">
                      -
                      {Math.round(
                        (1 - product.sale_price / product.price) * 100
                      )}
                      % OFF
                    </p>
                  )}
                </div>
                <p className="text-red-500">₹{product.sale_price}</p>
              </div>
              <button className="bg-black text-white mb-5 mt-3 add_to_cart_btn"
              onClick={()=>addToCart(product)}>Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
