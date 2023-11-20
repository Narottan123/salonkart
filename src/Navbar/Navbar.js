import React, { useState } from "react";
import logo from "./img/logo.png";
import skinco from "./img/skinco_logo.png";
import argatin from "./img/argatin_logo.png";
import user from "./img/user.png";
import kart from "./img/kart.png";
import searchicon from "./img/search_icon.png";
import { PiCirclesThreePlusBold } from "react-icons/pi";
import { MdKeyboardArrowRight } from "react-icons/md";
import Login from "../Register/Register";
import { useSelector } from "react-redux";
import { LOCAL_IMAGES } from "../utils/localimages";
import Cart from "../commonComponent/cardDetails";
import { Link } from "react-router-dom";
import Register from "../Login/Login";
import SignUp from "../Login/Login";
import AddressModal from "../commonComponent/addressModal";
import "./navbar.css"; // Import your custom CSS file
import ProfilePopUp from "../components/profilePopup";


const Navbar = () => {
  const [options, setOptions] = useState(false);
  const [isshopbyBrand, setisshopByBrand] = useState(false);
  const [ishaircare, setishaircare] = useState(false);
  const [isskincare, setskincare] = useState(false);
  const [issunprotection, setissunprotection] = useState(false);
  const [isshopbyconcern, setisshopbyconcern] = useState(false);
  const [isblog, setisblog] = useState(false);
  const [isabout, setisabout] = useState(false);
  const [isinnovistInsider, setisinnovistInsider] = useState(false);
  const [showLogin, setshowLogin] = useState(false);
  const [headersearch, setHeaderSearch] = useState("");
  const cardData = useSelector((state) => state.addProduct);
  const itemAddedCount = cardData.cart.length;
  console.log("cardData", itemAddedCount);
  const [showCart, setShowCart] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false)
  const [test,setTest]= useState(false)

  const onpress = () => {
    setShowCart(true);
  };
  const loginpress = () => {
    setIsOpen(true);
  };

  

  function shopbyBrand() {
    setisshopByBrand(!isshopbyBrand);
    setisabout(false);
    setisblog(false);
    setishaircare(false);
    setskincare(false);
    setisinnovistInsider(false);
    setisshopbyconcern(false);
    setissunprotection(false);
  }

  function haircare() {
    setisshopByBrand(false);
    setisabout(false);
    setisblog(false);
    setishaircare(!ishaircare);
    setskincare(false);
    setisinnovistInsider(false);
    setisshopbyconcern(false);
    setissunprotection(false);
  }

  function skincare() {
    setisshopByBrand(false);
    setisabout(false);
    setisblog(false);
    setishaircare(false);
    setskincare(!isskincare);
    setisinnovistInsider(false);
    setisshopbyconcern(false);
    setissunprotection(false);
  }

  function sunprotection() {
    setisshopByBrand(false);
    setisabout(false);
    setisblog(false);
    setishaircare(false);
    setskincare(false);
    setisinnovistInsider(false);
    setisshopbyconcern(false);
    setissunprotection(!issunprotection);
  }

  function shopbyconcern() {
    setisshopByBrand(false);
    setisabout(false);
    setisblog(false);
    setishaircare(false);
    setskincare(false);
    setisinnovistInsider(false);
    setisshopbyconcern(!isshopbyconcern);
    setissunprotection(false);
  }

  function blog() {
    setisshopByBrand(false);
    setisabout(false);
    setisblog(!isblog);
    setishaircare(false);
    setskincare(false);
    setisinnovistInsider(false);
    setisshopbyconcern(false);
    setissunprotection(false);
  }

  function aboutus() {
    setisshopByBrand(false);
    setisabout(!isabout);
    setisblog(false);
    setishaircare(false);
    setskincare(false);
    setisinnovistInsider(false);
    setisshopbyconcern(false);
    setissunprotection(false);
  }

  function innovistInsider() {
    setisshopByBrand(false);
    setisabout(false);
    setisblog(false);
    setishaircare(false);
    setskincare(false);
    setisinnovistInsider(!isinnovistInsider);
    setisshopbyconcern(false);
    setissunprotection(false);
  }

  function toggleOption() {
    setOptions(!options);
  }
  return (
    <>
      <div className="navbar-container">
        <Link to={'/'}>
        <img className="logo" src={logo} alt="logo" />

        </Link>

        <div className="search-container">
          <input className="search-input" type="search" />
          <div className="search-icon">
            <img src={searchicon} alt="search icon" />
          </div>
        </div>
        <Link to={"/Skinco"}>
          <img className="skinco-logo" src={skinco} alt="logo" />
        </Link>
        <Link to={"/Argatin"}>
        <img className="argatin-logo" src={argatin} alt="logo" />

        </Link>

        <div className="user-cart-container">
          <img
            className="user-icon"
            src={user}
            alt="user icon"
            onClick={loginpress}
          />
          
          {modalIsOpen && (
            // <Login modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}  />
            <ProfilePopUp modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}  />

            
          )}
          <div className="cart-container">
            <img
              className="kart-icon"
              src={kart}
              alt="kart icon"
              onClick={onpress}
            />
            {showCart && <Cart setShowCart={setShowCart} setTest={setTest}  test={test}/>}
          </div>
          <PiCirclesThreePlusBold
            className="menu-icon"
            onClick={toggleOption}
          />
        </div>
    
      </div>
      {/* {options && (
        <div className="mobile-menu">
          <div className="menu-item" onClick={shopbyBrand}>
            Shop By Brands
            <MdKeyboardArrowRight className="arrow-icon" />
          </div>
          {isshopbyBrand && (
            <div className="submenu">
              <div>View all</div>
              <div>All Brands</div>
              <div>Bare Antomy</div>
              <div>Chemist At play</div>
              <div>Sunscoop</div>
            </div>
          )}
        </div>
      )} */}
      {test && <AddressModal addressmodal={test} setAddressModal={setTest}/>}
      <div className="mobileview">
        

      </div>
    </>
  );
};

export default Navbar;
