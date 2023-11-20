import React from 'react'
import { useLocation } from 'react-router-dom'
import BestSeller from '../../bestseller'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterProducts } from '../../Redux/actions'
import { sliderPricedata } from '../../Redux/actions'

export default function Menicure() {
  const location=useLocation()
  const dispatch=useDispatch()
  const productList= useSelector((state)=>state.addProduct.products
  )
  const fileterdata= useSelector((state)=>
state.addProduct.filterData
  )
  console.log("location",fileterdata)
  const {state}=location
  let maxprice=productList?.map((item)=>item?.price)
const calculatedMax_Price =Math.max.apply(null,maxprice)
const [minValue, setMinValue] = useState(0);
const [maxValue, setMaxValue] = useState(100);
const [categoryName,setCategoryName]=useState("All")
const [ price, setPrice ] = useState(0);
const handleInput = (e)=>{
  setPrice( e.target.value );
  dispatch(sliderPricedata(price))
}
const arrx= productList.filter( sliderprice => {
  return sliderprice.price > parseInt(price, 10)
  }
  )
  console.log("arrx",arrx)
// .map( hotel => {
//  return <p key={hotel.name}>{ hotel.name } | { hotel.price } &euro; </p>
// })
const handleMinChange = (event) => {
  setMinValue(parseInt(event.target.value, 10));
};

const handleMaxChange = (event) => {
  setMaxValue(parseInt(event.target.value, 10));
};
console.log("calculatedMax_Price",calculatedMax_Price)
// to get unquie data of each feilds
const getUniqueData=(data,categoryType)=>{
  let newvalue= data?.map((item)=>
  {
    return(item[categoryType])
  }
  )

  newvalue=["All",...new Set(newvalue)]
  return(newvalue)

}
const categoryData=getUniqueData(productList,"category");
const updateFiltervalue=(name)=>{
  setCategoryName(name)
  dispatch(filterProducts(name))
  
}
  return (
<div style={{backgroundColor:''}}>
{/* <label htmlFor="min">Min Value: {minValue}</label>
      <input
        type="range"
        id="min"
        name="min"
        min={0}
        max={100}
        value={minValue}
        onChange={handleMinChange}
      /> */}

      <label htmlFor="max">Max Value: {calculatedMax_Price}</label>
      <input type="range" onInput={ handleInput } />
      <div>
      <p>{"category"}</p>
        {
categoryData?.map((item,index)=>{
  return(
    <button key={index}
    type='button'
    name='category'
    onClick={()=>updateFiltervalue(item)}>
    <p>{item}</p>
    </button>
  )
})
        }
      </div>

  {/* <p style={{marginLeft:'10px'}}>{calculatedMax_Price}</p> */}
  {
 categoryName=="All" 
    ? <BestSeller productdata={productList} />
    :  <BestSeller productdata={fileterdata} />
}
{/* <div>
  {
    arrx &&  <BestSeller productdata={arrx} />
  }
       
      </div> */}

  
</div>
  )
}
