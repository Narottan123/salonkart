import React from 'react'
import { postApiData } from '../../utils/services'
import {  cardProductAdded } from '../../Redux/actions'

export default function ProductAddButton(props) {
    const {productid,productQantity}=props
    const data={
        productId:productid,
        quantity:productQantity,
        phoneNumber:'7462378682'

    }
    const addproduct=()=>{
        // cardProductAdded()
        postApiData('user/addProductToCart',data,(resp)=>{
            console.log('addproduct',resp)

        },(failur)=>{
            console.log("fali",failur)

        })

    }
  return (
    <div>
        <p onClick={addproduct}>ProductAddButton</p>
       {/* <button
                            onClick={(e) => addToCart(product._id, 1)}
                            className="btn btn-md btn-info"
                          >
                            Add to cart
                          </button> */}
    </div>
  )
}
