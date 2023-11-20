import React, { useEffect, useState } from "react";
import "./Productlist.css";
import { useDispatch } from "react-redux";
import { cardAdded, cardProductAdded, totalProduct } from "../Redux/actions";
import BestSeller from "../bestseller";
import { postApiData } from "../utils/services";
import { Link } from "react-router-dom";
const Productlist = () => {
  const [data, setData] = useState([]);
  const [productlistData, setproductListData] = useState([]);
  console.log('productdata', productlistData)
  const [loading, setLoading] = useState(false);
  const [categorypress, setCategorypress] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Best Sellers");
  const handleButtonClick = (buttonName) => {
    // setLoading(true);
    setSelectedCategory(buttonName);
    setCategorypress(!categorypress);
  };

  const dispatch = useDispatch();
  // const onclickfun = () => {
  //   dispatch(cardProductAdded());
  // };
  const apidata = {
    brand: "",
  };
  useEffect(() => {
    postApiData("user/getAllProducts", apidata, (callBack) => {
      setproductListData(callBack);
      console.log("fgetAllProductsst",callBack)
      dispatch(totalProduct(callBack))
    });
  }, []);

  const buttonStyle = {
    backgroundColor: "black",
    color: "white",
    transition: "background-color 0.3s, color 0.3s",
  };

  return (
    <div className="xs:overflow-hidden sm:overflow-hidden">
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      // className="sm:flex xs:flex xs:overflow-x-auto scrollbar-thin "
      >
        <button
          type="button"
          className={`bg-zinc-300 m-1 sm:m-4 xs:m-2 inline-block rounded-full font-bold text-black px-4 py-2 sm:px-6 xs:px-4 py-2 sm:px-4 py-2 xs:pb-1.5  whitespace-nowrap pt-1 sm:pt-2 xs:pt-1.5 text-xs  whitespace-nowrap sm:text-sm  whitespace-nowrap xs:text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-primary-600  ${selectedCategory === "Best Sellers" ? "bg-primary-600" : ""
            }`}
          style={selectedCategory === "Best Sellers" ? buttonStyle : {}}
          onClick={() => handleButtonClick("Best Sellers")}
        >
          Best Sellers
        </button>

        <button
          type="button"
          className={`bg-zinc-300 m-1 sm:m-4 xs:m-2 inline-block rounded-full font-bold text-black px-4 py-2 sm:px-6 xs:px-4 pb-1.5 sm:pb-2 xs:pb-1.5 pt-1 sm:pt-2 xs:pt-1.5  whitespace-nowrap text-xs sm:text-sm xs:text-xs  whitespace-nowrap font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-primary-600 ${selectedCategory === "Best Seller-combos" ? "bg-primary-600" : ""
            }`}
          style={selectedCategory === "Best Seller-combos" ? buttonStyle : {}}
          onClick={() => handleButtonClick("Best Seller-combos")}
        >
          Best Seller-combos
        </button>

        <button
          type="button"
          className={`bg-zinc-300 m-1 sm:m-4 xs:m-2 inline-block rounded-full font-bold text-black px-4 py-2 sm:px-6 xs:px-4 pb-1.5 sm:pb-2 xs:pb-1.5 pt-1 sm:pt-2 xs:pt-1.5  whitespace-nowrap text-xs sm:text-sm xs:text-xs  whitespace-nowrap font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-primary-600 ${selectedCategory === "New Launches" ? "bg-primary-600" : ""
            }`}
          style={selectedCategory === "New Launches" ? buttonStyle : {}}
          onClick={() => handleButtonClick("New Launches")}
        >
          New Launches
        </button>

        <button
          type="button"
          className={`bg-zinc-300 m-1 sm:m-4 xs:m-2 inline-block rounded-full font-bold text-black px-4 py-2 sm:px-6 xs:px-4 pb-1.5 sm:pb-2 xs:pb-1.5 pt-1 sm:pt-2 xs:pt-1.5  whitespace-nowrap text-xs sm:text-sm xs:text-xs  whitespace-nowrap font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-primary-600 ${selectedCategory === "Hair Care" ? "bg-primary-600" : ""
            }`}
          style={selectedCategory === "Hair Care" ? buttonStyle : {}}
          onClick={() => handleButtonClick("Hair Care")}
        >
          Hair Care
        </button>

        <button
          type="button"
          className={`bg-zinc-300 m-1 sm:m-4 xs:m-2 inline-block rounded-full font-bold text-black px-4 py-2 sm:px-6 xs:px-4 pb-1.5 sm:pb-2 xs:pb-1.5 pt-1 sm:pt-2 xs:pt-1.5  whitespace-nowrap text-xs sm:text-sm xs:text-xs  whitespace-nowrap font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-primary-600 ${selectedCategory === "Skin Care" ? "bg-primary-600" : ""
            }`}
          style={selectedCategory === "Skin Care" ? buttonStyle : {}}
          onClick={() => handleButtonClick("Skin Care")}
        >
          Skin Care
        </button>

        {/* <button
          type="button"
          className={`bg-zinc-300 m-1 sm:m-4 xs:m-2 inline-block rounded-full font-bold text-black px-4 py-2 sm:px-6 xs:px-4 pb-1.5 sm:pb-2 xs:pb-1.5 pt-1 sm:pt-2 xs:pt-1.5  whitespace-nowrap text-xs sm:text-sm xs:text-xs  whitespace-nowrap font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-primary-600 ${selectedCategory === "Sun Care" ? "bg-primary-600" : ""
            }`}
          style={selectedCategory === "Sun Care" ? buttonStyle : {}}
          onClick={() => handleButtonClick("Sun Care")}
        >
          Sun Care
        </button> */}
      </div>

      {selectedCategory === "Best Sellers" && (
        <>
          <Link to="/best-sellers" state={{ productdata: productlistData }}>
            <div className="underline font-bold row justify-end flex mr-11">
              View Details
            </div>
          </Link>
          <div>
            <BestSeller productdata={productlistData} />
          </div>
        </>
      )}

      {selectedCategory === "Best Seller-combos" && (
        <>
          <Link to="/best-sellers-combos" state={{ productdata: productlistData }}>
            <div className="underline font-bold row justify-end flex mr-11">
              View Details
            </div>
          </Link>
          <div>
            <BestSeller productdata={productlistData} />
          </div>
        </>
      )}

      {selectedCategory === "New Launches" && (
        <>
          <Link to="/newlaunches" state={{ productdata: productlistData }}>
            <div className="underline font-bold row justify-end flex mr-11">
              View Details
            </div>
          </Link>
          <div>
            <BestSeller productdata={productlistData} />
          </div>
        </>
      )}






      {selectedCategory === "Hair Care" && (
        <>
          <Link to="/haircareallproducts" state={{ productdata: productlistData }}>
            <div className="underline font-bold row justify-end flex mr-11">
              View Details
            </div>
          </Link>
          <div>
            <BestSeller productdata={productlistData} />
          </div>
        </>
      )}
      {selectedCategory === "Skin Care" && (
        <>
          <Link to="/skincareallproducts" state={{ productdata: productlistData }}>
            <div className="underline font-bold row justify-end flex mr-11 ">
              View Details
            </div>
          </Link>
          <div>
            <BestSeller productdata={productlistData} />
          </div>
        </>
      )}
    </div>
  );
};

export default Productlist;
