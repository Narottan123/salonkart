// import "./Cart.scss";dlePayment
import "./Cart.css";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
// import { useState, useEffect } from "React";
import { getApiCall, postApiData } from "../../utils/services";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartRemove, cartTotal, postProductData } from "../../Redux/actions";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AddressModal from "../addressModal";
import { paymentTotal } from "../../Redux/actions";
const Cart = ({ setShowCart,setTest,test }) => {
  // const { cartItems, cartSubTotal } = useContext(Context)
  const [cartDetails, setCartDetails] = useState([]);
  const [address,setAddressPress]=useState(false)
  const [totalpayable,  setpaymentResponse]=useState([])
  const [addressmodal,setaddressmodal]=useState(false)
  // console.log("totalpaylabe",setTest)
  const cartLength=useSelector((state)=>{
    console.log(state.addProduct.cart)

  })
  
  
  // const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const navigate=useNavigate()

  const incrementQuantity = (item,quantity) => {
    dispatch(postProductData(item,quantity))
    const data = {
      phoneNumber: "7462378682",
    };
    postApiData(
      "user/getCartDetails",  
      data,
      (response) => {
        // console.log("getcarddetails", response[0]?.products);
        setCartDetails(response[0]?.products);
        let carttoal=response[0]?.products.reduce((acc,cuu)=>{
          acc=acc+(cuu.sale_price*cuu.quantity)
          return acc

        },0)
        dispatch(cartTotal(carttoal))
      },
      (error) => {
        console.log("erro");
      }
    );
  };
  const decrementQuantity = (item,quantity) => {
    // setQuantity(-1)
    dispatch(postProductData(item,quantity))
    const data = {
      phoneNumber: "7462378682",
    };
    postApiData(
      "user/getCartDetails",  
      data,
      (response) => {
        console.log("getcarddetails", response[0]?.products);
        setCartDetails(response[0]?.products);
      },
      (error) => {
        console.log("erro",error);
      }
    );
  };
  // const removeitem = (item) => {
  //   dispatch(cartRemove(item));
  // };
  const cartItems = [
    {
      name: "kljdjklj",
    },
    {
      name: "kljdjklj",
    },
  ];
  // const stripePromise = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;
  // const handlePayment = () => {
    const removeitem=(item)=>{
      dispatch(cartRemove(item))

    }

  const onClickPayment =  () => {
    setTest(true)
    setAddressPress(true)
    // setShowCart(false)

    // const data = {
    //   phoneNumber: "7462378682",
    // };
  
    // postApiData(
    //   "user/createProductOrder",
    //   data,
    //   (response) => {
    //     console.log("product response", response);
    //     dispatch(paymentTotal(response))
    //     // setpaymentResponse(prevState => {
    //     //   // Log previous state and new response to debug
    //     //   // console.log('Previous paymentResponse:', prevState);
    //     //   // console.log('New Response:', response);
    //     //   return response;
    //     // });
    //   //   const options = {
    //   //     key: 'rzp_live_ZmjmD6vtJZ9giq',
    //   //     amount: (response.amount) , // Amount in paise
    //   //     currency: 'INR',
    //   //     name: 'SalonKart',
    //   //     description: 'Test Transaction',
    //   //     order_id: response.id,
    //   //     handler: async (response) => {
    //   //       try {
    //   //         // Post payment details to the backend for verification
    //   //         // const paymentId = response.razorpay_payment_id;
    //   //         const url = "/user/verifyProductOrderAmount";
    //   //         await axios.post(url, {
    //   //           orderId:response.id,
    //   //           amount:response.amount,
    //   //         });
    //   //         alert('Payment Successful');
    //   //       } catch (error) {
    //   //         alert('Payment failed. Please try again.');
    //   //       }
    //   //     },
    //   //     prefill: {
    //   //       name: 'Customer Name',
    //   //       email: 'customer@example.com',
    //   //       contact: '9999999999',
    //   //     },
    //   //     notes: {
    //   //       address: 'Note Address',
    //   //     },
    //   //     theme: {
    //   //       color: '#61dafb',
    //   //     },
    //   //   };
    //   //   const razorpay = new window.Razorpay(options);
    //   //   razorpay.open();
    //   //   razorpay.on('payment.failed', function (response){
    //   //     alert(response.error.code);
    //   //     alert(response.error.description);
    //   //     alert(response.error.source);
    //   //     alert(response.error.step);
    //   //     alert(response.error.reason);
    //   //     alert(response.error.metadata.order_id);
    //   //     alert(response.error.metadata.payment_id);
    //   // })
    //   },
    //   (error) => {
    //     alert("order not created yet")
    //   }
    // );
    // navigate('/AddressModal',{
    //   state: {
    //     totalpayable
    //   }
    // })

  };
  // };
  useEffect(() => {
    // getApiCall("")
    const data = {
      phoneNumber: "7462378682",
    };
    postApiData(
      "user/getCartDetails",
      data,
      (response) => {
        console.log("getcarddetails", response[0]?.products);
        setCartDetails(response[0]?.products);
        let carttoal=response[0]?.products.reduce((acc,cuu)=>{
          acc=acc+(cuu.price*cuu.quantity)
          return acc

        },0)
        dispatch(cartTotal(carttoal))
      },
      (error) => {
        console.log("erro");
      }
    );
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        backgroundColor: "red",
        marginRight: "0px",
        width: "30%",
      }}
    >
      <div 
      // className="cart-panel"
       className={ test? "cart-panelstyleadd" : "cart-panel"}
      >
        <div className="opac-layer"></div>
        <div className="cart-content">
          <div className="cart-header">
            <span className="heading">Shopping cart</span>
            <span className="close-btn" onClick={() => setShowCart(false)}>
              <MdClose />
              <span className="text">Close</span>
            </span>
          </div>
          <div>
            {cartDetails.map((item, index) => {
            return (
                <div style={{ display: "flex" }}>
                  <div>
                    <img
                      src={item.image_link}
                      style={{ height: "100px", width: "90px" }}
                      alt="product"
                    />
                  </div>
                  <div>
                    <div style={{background:'',display:'flex'}}>

                    <span className="truncate-text">{item?.name}</span>
                    <MdClose
                    style={{marginRight:'15px',marginTop:'10px'}}
                     onClick={()=>removeitem(item)}/>

                    </div>
                    
                    <div className="pricemaincontainer">
                      <div className="quantityContainer">
                        {
                          item.quantity ===1 ?    <button
                          onClick={() => decrementQuantity(item,-1)}
                          style={{ marginRight: "10px" }}
                          disabled
                        >
                          -
                        </button>:    <button
                          onClick={() => decrementQuantity(item,-1)}
                          style={{ marginRight: "10px" }}
                        >
                          -
                        </button>
                        }
                    
                        <div style={{ marginRight: "10px" }}>
                          {item?.quantity}
                        </div>
                        
                        <button onClick={() => incrementQuantity(item,1)}>
                          +
                        </button>
                      </div>
                      <div 
                    //   onClick={() => removeitem(item)}
                      >
                        <p>{item.price*item.quantity}</p>
                        {
                       console.log( "sumvalue", cartDetails.reduce((acc,cuu)=>{
                            acc=acc+(cuu.price*cuu.quantity)
                            return acc

                          },0)
                       )
                        }
                      </div>
                    </div>
                  </div>
                </div>
              );  
              
            })}
          </div>
          {cartItems?.length == 0 ? (
            <div className="empty-cart">
              <BsCartX />
              <span>No products in the cart</span>
              <button className="return-cta">RETURN TO SHOP</button>
            </div>
          ) : (
            <React.Fragment>
              {/* <CartItem /> */}
              <div className="cart-footer">
                <div className="subtotal">
                  <span className="text"> Subtotal:</span>
                  <span className="text total">&#8377;{"cartSubTotal"}</span>
                </div>
                <div className="button">
                  <button className="checkout-cta" onClick={onClickPayment}>
                    Checkout
                  </button>
                </div>
              </div>
            </React.Fragment>
          )}
        </div>
      
      </div>
      {
        // <AddressModal addressmodal={addressmodal}/>
      }
      
    </div>
  );
};

export default Cart;
