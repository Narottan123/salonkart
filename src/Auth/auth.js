import React from "react";
import BrandSlider from "../Brandslider/Brandslider";
import Productlist from "../Productlist/Productlist";
import Footer from "../components/footer";
import MainHeading from "../commonComponent/dividerline";
import "./home.css";
import { LOCAL_IMAGES } from "../utils/localimages";

import LoveusSlider from "../components/loveusslider";
import SellingBrandSlider from "../commonComponent/sellingBrandSlider";
import { sellingPlateformData } from "../utils/dummydata";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
      {/* <BrandContainer/> */}
      <div className="brandbanner">
        <Link to={'Skinco'}>
        <img src={LOCAL_IMAGES.skinbanner_icon} alt="skinco" />

        </Link>
        <Link to={'/Argatin'}>
        <img src={LOCAL_IMAGES.argatinbanner_icon} alt="argetinkaratine" className="argatin2img"/>

        </Link>
      </div>
      {/* <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}> */}
      <div style={{padding:'25px'}}>

      <BrandSlider/>
      </div>

      {/* </div> */}
      {/* <BrandSlider/> */}
      <MainHeading headingText={"Shop Favorites"} />
      <Productlist />
      <div className="reasonTolove">
        <MainHeading headingText={"Reason To Love Us "} />
      </div>
      <div style={{backgroundColor:'',padding:'25px'}}>

      <LoveusSlider/>
      </div>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <img src={LOCAL_IMAGES.app_banner} alt="phoneimg"/>

      </div>
      <div className='NowAvailable'>
      <MainHeading headingText={"Now Available on "}/>

      </div>
<div style={{backgroundColor:'',padding:'25px'}}
// className="sellingbrandslider"
>
      <SellingBrandSlider brandimg={sellingPlateformData}/>

      </div>

      {/* <Cartdescription /> */}
      {/* <div className="discriptionText">
        <p className="skinconyc">
          Skin Co is a first-of-its-kind skincare treatment that pioneered the
          way to healthy skin through innovative ingredients.
        </p>
      </div> */}
      {/* <Login />
      <SignUp /> */}
      {/* <Footer /> */}
      {/* <Cartdescription/> */}
      {/* <div  onClick={onclickPayment}
     style={{display:'flex',justifyContent:"center",alignItems:'center'}}>
      <p  >payNow</p>
    </div> */}
    </>
  );
};

export default Home;

// import axios from 'axios';

// const Home = () => {
//   const [amount, setAmount] = useState(0);

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//     script.async = true;
//     document.body.appendChild(script);
//   }, []);

//   const handleChange = (evt) => {
//     console.log(evt.target.value);
//     setAmount(evt.target.value);
//   };

//   const openPayModal = (amt) => {
//     const amountInPaise = amt * 100; // Razorpay considers the amount in paise

//     const options = {
//       key: process.env.REACT_APP_razorpaytest_id,
//       amount: amountInPaise,
//       name: '',
//       description: '',
//       order_id: '',
//       handler: function (response) {
//         console.log(response);
//         const values = {
//           razorpay_signature: response.razorpay_signature,
//           razorpay_order_id: response.razorpay_order_id,
//           transactionid: response.razorpay_payment_id,
//           transactionamount: amountInPaise,
//         };

//         axios
//           .post('http://localhost:5000/upgrade/payment', values)
//           .then((res) => {
//             alert('Success');
//           })
//           .catch((e) => console.log(e));
//       },
//       prefill: {
//         name: 'Sanjana Kumari',
//         email: 'sanjana@gmail.com',
//         contact: '1234567890',
//       },
//       notes: {
//         address: 'Hello World',
//       },
//       theme: {
//         color: '#528ff0',
//       },
//     };

//     axios
//       .post('http://localhost:5000/upgrade/order', { amount: amountInPaise })
//       .then((res) => {
//         options.order_id = res.data.id;
//         options.amount = res.data.amount;
//         console.log(options);
//         const rzp1 = new window.Razorpay(options);
//         rzp1.open();
//       })
//       .catch((e) => console.log(e));
//   };

//   return (
//     <div>
//       Enter the amount:
//       <input type="number" name="amount" onChange={handleChange} />
//       <button onClick={() => openPayModal(amount)}>Upgrade</button>
//     </div>
//   );
// };

// export default Home;
