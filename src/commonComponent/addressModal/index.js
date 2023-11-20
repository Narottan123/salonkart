import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import "./addressmodal.css";
import { postApiData } from "../../utils/services";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function AddressModal({ addressmodal ,setTest,setAddressModal}) {
  console.log("addressmodal", addressmodal);
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address1, setAddress1] = useState("");
  const [city, setCity] = useState("");
  const [countrystate, setCountrystate] = useState("");
  const [pincode, setPincode] = useState(null);
  const { state } = useLocation();
  const [selectedOption, setSelectedOption] = useState('');
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  console.log('selectedOption',selectedOption)
  
  const loadScript = (src, callback) => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    script.onload = callback;
    document.head.appendChild(script);
  };

  // Load Razorpay SDK
  loadScript("https://checkout.razorpay.com/v1/checkout.js", () => {
    console.log("Razorpay SDK loaded.");
    // Now you can create a Razorpay instance
  });
  <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
  const handleOptionChange = (event) => {
    console.log('event.target.value',event.target.value)
    setSelectedOption(event.target.value);
  };
  // const {paymentResponse}=state
  // console.log("stadfhfdhshdfshfd", state);
  //   phoneNumber:{type: Number},
  //     address: {type: String},
  //     address2: {type: String},
  //     city: {type: String},
  //     pincode: {type: Number},
  //     state: {type: String},
  //     isActive: {type: Boolean}

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "whitesmoke",
      position: "absolute",
      zIndex: 899,
    },
  };

  const onClickPayment = () => {
    console.log('changepayment')

    // setShowCart(false)

    const data = {
      email: "abc@gmail.com",
      addresses: {
        phoneNumber: phoneNumber,
        address: address,
        address2: address1,
        city: city,
        pincode: pincode,
        state:countrystate ,
        isActive: true,
        email:email,
        name:name
      }
    };

    postApiData(
      "user/createProductOrder",
      data,

      (response) => {
        console.log("product response", response);

        // setpaymentResponse(prevState => {
        //   // Log previous state and new response to debug
        //   // console.log('Previous paymentResponse:', prevState);
        //   // console.log('New Response:', response);
        //   return response;
        // });
        if(selectedOption=='online')
        {
          var options = {
            key: 'rzp_live_ZmjmD6vtJZ9giq',
            amount: (response.amount), // Amount in paise
            currency: 'INR',
            name: 'SalonKart',
            description: 'Test Transaction',
            order_id: response.id,
            handler: async (response) => {
              console.log('payement Response',response)
              // try {
              //   // Post payment details to the backend for verification
              //   // const paymentId = response.razorpay_payment_id;
              //   const url = "user/verifyProductOrderAmount";
              //   await axios.post(url, {
              //     orderId: response.id,
              //     amount: response.amount,
              //   });
              //   alert('Payment Successful');
              // } catch (error) {
              //   alert('Payment failed. Please try again.');
              // }
              // alert(response)
            },
            prefill: {
              name: 'Customer Name',
              email: 'customer@example.com',
              contact: '9999999999',
            },
            notes: {
              address: 'Note Address',
            },
            theme: {
              color: '#61dafb',
            },
          };
        }
    
        // if( phoneNumber!=='' && address!=='' && city!=='' && pincode!=='' && countrystate!=='')
        {
          const razorpay = new window.Razorpay(options);
          console.log("razorpay",razorpay)
          razorpay.open();
          razorpay.on('payment.failed', function (response) {
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
          })
        }
     
     
      },
      (error) => {
        alert("order error",error)
      }
    );


  };
  // const activateLasers = () => {
  //   const data = {
  //     phoneNumber: phoneNumber,
  //     address: address,
  //     address2: address1,
  //     city: city,
  //     pincode: pincode,
  //     state: state,
  //     isActive: true,
  //   };
  //   postApiData(
  //     "user/addAddressInProductOrder",
  //     data,
  //     (response) => {
  //       console.log("respnoseaddress", response);
  //     },
  //     (error) => {
  //       console.log("error", error);
  //     }
  //   );
  //   console.log("object");
  // };
  //   const options = {
  //           key: 'rzp_live_ZmjmD6vtJZ9giq',
  //           amount: (paymentResponse.amount) , // Amount in paise
  //           currency: 'INR',
  //           name: 'SalonKart',
  //           description: 'Test Transaction',
  //           order_id: paymentResponse.id,
  //           handler: async (response) => {
  //             try {
  //               // Post payment details to the backend for verification
  //               // const paymentId = response.razorpay_payment_id;
  //               const url = "/user/verifyProductOrderAmount";
  //               await axios.post(url, {
  //                 orderId:response.id,
  //                 amount:response.amount,
  //               });
  //               alert('Payment Successful');
  //             } catch (error) {
  //               alert('Payment failed. Please try again.');
  //             }
  //           },
  //           prefill: {
  //             name: 'Customer Name',
  //             email: 'customer@example.com',
  //             contact: '9999999999',
  //           },
  //           notes: {
  //             address: 'Note Address',
  //           },
  //           theme: {
  //             color: '#61dafb',
  //           },
  //         };
  //         const razorpay = new window.Razorpay(options);
  //         razorpay.open();
  //         razorpay.on('payment.failed', function (response){
  //           alert(response.error.code);
  //           alert(response.error.description);
  //           alert(response.error.source);
  //           alert(response.error.step);
  //           alert(response.error.reason);
  //           alert(response.error.metadata.order_id);
  //           alert(response.error.metadata.payment_id);
  //       })

  return (
    // <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
    <Modal
      isOpen={addressmodal}
      // onAfterOpen={afterOpenModal}
      // onRequestClose={setAddressModalvalue(false)}
      // onRequestClose={!addressmodalvalue}
      onRequestClose={() => setAddressModal(false)}
      style={customStyles}
      // style={{}}
      contentLabel="Example Modal"
    >
      <div style={{}}>
        <div className="salonkartcontianer">
        <span className="salonkart">{'SalonKart'}</span>
              <span className="totalprice">{'448'}</span>
        </div>
        <p className="freeshipping">{'Free shipping on orders above 449'}</p>
        <form>
        <label
            htmlFor="labeled-input"
            style={{ display: "block", marginBottom: "8px" }}
          >
            Enter Name:
          </label>
          <input
            className="textinputStyle"
            type="text"
            placeholder="Enter your Name"
            style={
              {
                // paddingRight: '60px' // Adjust the padding to ensure the text doesn't go under the <p> tag
              }
            }
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
           <label
            htmlFor="labeled-input"
            style={{ display: "block", marginBottom: "8px" }}
          >
            Enter Email:
          </label>
          <input
            className="textinputStyle"
            type="text"
            placeholder="Enter your Email"
            style={
              {
                // paddingRight: '60px' // Adjust the padding to ensure the text doesn't go under the <p> tag
              }
            }
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label
            htmlFor="labeled-input"
            style={{ display: "block", marginBottom: "8px" }}
          >
            Enter phoneNumber:
          </label>

          <input
            className="textinputStyle"
            type="text"
            placeholder="Enter your phone number"
            style={
              {
                // paddingRight: '60px' // Adjust the padding to ensure the text doesn't go under the <p> tag
              }
            }
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <label
            htmlFor="labeled-input"
            style={{ display: "block", marginBottom: "8px" }}
          >
            Enter Address:
          </label>
          <input
            className="textinputStyle"
            type="text"
            placeholder="Enter your address"
            style={
              {
                // paddingRight: '60px' // Adjust the padding to ensure the text doesn't go under the <p> tag
              }
            }
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <label
            htmlFor="labeled-input"
            style={{ display: "block", marginBottom: "8px" }}
          >
            Enter Address2:
          </label>
          <input
            className="textinputStyle"
            type="text"
            placeholder="address1"
            style={
              {
                // paddingRight: '60px' // Adjust the padding to ensure the text doesn't go under the <p> tag
              }
            }
            value={address1}
            onChange={(e) => setAddress1(e.target.value)}
          />
          <label
            htmlFor="labeled-input"
            style={{ display: "block", marginBottom: "8px" }}
          >
            Enter City:
          </label>
          <input
            className="textinputStyle"
            type="text"
            placeholder="Enter City"
            style={
              {
                // paddingRight: '60px' // Adjust the padding to ensure the text doesn't go under the <p> tag
              }
            }
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <label
            htmlFor="labeled-input"
            style={{ display: "block", marginBottom: "8px" }}
          >
            Enter State:
          </label>

          <input
            className="textinputStyle"
            type="text"
            placeholder="Enter State"
            style={
              {
                // paddingRight: '60px' // Adjust the padding to ensure the text doesn't go under the <p> tag
              }
            }
            value={countrystate}
            onChange={(e) => setCountrystate(e.target.value)}
          />
          <label
            htmlFor="labeled-input"
            style={{ display: "block", marginBottom: "8px" }}
          >
            Enter Pincode:
          </label>

          <input
            className="textinputStyle"
            type="text"
            placeholder="Enter Pincode"
            style={
              {
                // paddingRight: '60px' // Adjust the padding to ensure the text doesn't go under the <p> tag
              }
            }
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
   
        </form>
        <div style={{backgroundColor:'',marginTop:'10px',display:'flex'}}>
        <label>
        <input
          type="radio"
          value="cash"
          checked={selectedOption === 'cash'}
          onChange={handleOptionChange}
        />
        cash 
      </label>
      <label>
        <input
          type="radio"
          value="online"
          checked={selectedOption === 'online'}
          onChange={handleOptionChange}
        />
       online
      </label>
        </div>
     
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'20px'}}>
        <button onClick={onClickPayment} className="buttonstyle">
          Complete Purchase
        </button>
        </div>
     
      </div>
    </Modal>
  );
}
