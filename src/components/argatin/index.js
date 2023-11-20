import React, { useEffect, useState } from 'react'
import { brandimg } from '../../utils/dummydata'
import CommonSlider from '../../commonComponent/commonSlider'
import MainHeading from '../../commonComponent/dividerline'
import './argatin.css'
import BestSeller from '../../bestseller'
import { postApiData } from '../../utils/services'
import SellingBrandSlider from '../../commonComponent/sellingBrandSlider'
import { argatinbannerdata } from '../../utils/dummydata'
import BrandContainer from '../../Middlesection/Middlesection'
import { sellingPlateformData } from '../../utils/dummydata'

export default function Argatin() {
  const [facialkit,setFacialKit]=useState([])
  const apidata = {
    brand: "Argatinkeratin",
  };
  useEffect(() => {
    postApiData("user/getAllProducts", apidata, (callBack) => {
      setFacialKit(callBack);
    });
  }, []);
  return (
    <div style={{overflowX:'hidden',}}>
      <div className='mainsliderargatin'>
      <CommonSlider brandimg={argatinbannerdata}/>

      </div>
      <BrandContainer/>
      <div className='facialkitContainer'>
      <MainHeading headingText={"Argatin Based Hair Care Product"}/>

      </div>
      <BestSeller productdata={facialkit}/>
      <div className='facialkitContainer'>
      <MainHeading headingText={"Argatin Keritin Feautred Items"}/>

      </div>
      <BestSeller productdata={facialkit}/>
      <div className='NowAvailable'>
      <MainHeading headingText={"Now Available on "}/>

      </div>
<div style={{backgroundColor:'',padding:'25px'}}
// className="sellingbrandslider"
>
      <SellingBrandSlider brandimg={sellingPlateformData}/>

      </div>

      
    </div>
  )
}


