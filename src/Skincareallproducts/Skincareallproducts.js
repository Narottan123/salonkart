import React from 'react'
import { useLocation } from 'react-router-dom'

import Allproducts from '../Allproductlist/Allproductlist';

const Skincareallproducts = () => {
    const location=useLocation();
    const {productdata}=location.state
    console.log("dataneeds",productdata)
    return (
        <div className=''>
        <div className=''>
            <h1 className="mt-[30px] ml-[20px] mb-[3rem] text-3xl">Chemist At Play</h1>
            <div className="border-b-2 border-black shadow text-white"></div>
        </div>
        <div className='mt-[3rem] ml-[3rem] '>
            <h1 className='text-2xl text-bold mb-2'>Availability</h1>
            <h1 className='text-2xl text-bold mb-2'>Price</h1>
            <h1 className='text-2xl text-bold mb-2'>Product type</h1>
            <h1 className='text-2xl text-bold mb-2'>Brand</h1>
        </div>
        <div>
            {/* {productdata} */}
           <Allproducts productdata={productdata}/>
        </div>
        </div>
        




    )
}

export default Skincareallproducts;