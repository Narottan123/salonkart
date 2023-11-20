
import { type } from "@testing-library/user-event/dist/type";
import { postApiData } from "../../utils/services";
// Define an action type for the API call
import axios from "axios";

const ADD_PRODUCT = 'addproduct';

// Define your action creator function that makes the API call
const addProduct = (productData) => {
  return {
    type: ADD_PRODUCT,
    payload: productData
  };
};
const postProductData = (productData, quantity) => {
  const endpoint = 'user/addProductToCart'
  console.log('user/addProductToCart', productData)
  const data = {
    productId: productData._id,
    quantity: quantity,
    phoneNumber: '7462378682'
  }

  return (dispatch) => {
    // Make the POST request using Axios
        dispatch({type:'addproduct',payload:productData})
    postApiData(endpoint, data, ((response) => {
      // console.log("response", response)
      // dispatch(addProduct(response))
    }), ((error) => console.log('error')))
  };
};



const cartRemove = (productData) => {
  const endpoint = 'user/removeFromCart'
  console.log('productData', productData._id)
  const data = {
    productId: productData._id,
    phoneNumber: '7462378682'
  }

  return (dispatch) => {
    // Make the POST request using Axios
    postApiData(endpoint, data, ((response) => {
      console.log("apiresponse", response)
      dispatch({ type: 'RemoveItem', payload: response })
    }), (error) => {
      console.log('error', error)
    })
  };
};

const cartTotal = (subtotal) => {
  console.log('jkdfhshjkdfshkdfshdfhjsdfhjshjdfs')
  return (dispatch) => {
    dispatch({ type: 'CarttotalAmount', payload: subtotal })

  }


}
const userDetails = (userDetailsData) => {
  return (dispatch) => {
    dispatch({ type: 'SET_USERDETAILS', payload: userDetailsData })

  }


}
const paymentTotal = (payment) => {
  console.log('jkdfhshjkdfshkdfshdfhjsdfhjshjdfs')
  return (dispatch) => {
    dispatch({ type: 'payment_TotalAmount', payload: payment })

  }


}

const totalProduct = (totalproducts) => {
  console.log("totalproducts",totalproducts)
  return (dispatch) => {
    dispatch({ type: 'cardTotalProduct', payload: totalproducts })
  }
}
const filterProducts=(productCategory)=>{
  return(dispatch)=>{
    dispatch({type:'filterProductData',payload:productCategory})
  }
}
const sliderPricedata=(price)=>{
  return(dispatch)=>{
    dispatch({type:'filterProductPrice',payload:price})
  }
}














export { postProductData, cartRemove, cartTotal, userDetails, paymentTotal, totalProduct,filterProducts,sliderPricedata };





