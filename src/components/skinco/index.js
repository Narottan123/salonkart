import React, { useEffect, useState } from 'react'
import { brandimg } from '../../utils/dummydata'
import CommonSlider from '../../commonComponent/commonSlider'
import MainHeading from '../../commonComponent/dividerline'
import './skinco.css'
import BestSeller from '../../bestseller'
import { postApiData } from '../../utils/services'
import SellingBrandSlider from '../../commonComponent/sellingBrandSlider'
import { sellingPlateformData } from '../../utils/dummydata'
import Footer from '../footer'
import { LOCAL_IMAGES } from '../../utils/localimages'
import { Link } from 'react-router-dom'

export default function Skinco() {
  const [facialkit,setFacialKit]=useState([])
  const apidata = {
    brand: "Skinconyc",
  };
  useEffect(() => {
    postApiData("user/getAllProducts", apidata, (callBack) => {
      setFacialKit(callBack);
    });
  }, []);
  return (
    <div>
       
      <CommonSlider brandimg={brandimg}/>
      <div className="brandbanner">
        <Link to='/Menicure' state={{facilakit:facialkit}}>
        <img src={LOCAL_IMAGES.medicare} alt="skinco" />

        </Link>
        <Link to='/FacialKit' state={{facilakit:facialkit}} > 
      <img src={LOCAL_IMAGES.facial} alt="argetinkaratine" className="argatin2img"/>
      </Link>
      </div>
   
      <div className='facialkitContainer'>
      <MainHeading headingText={"Facial Kits"}/>

      </div>
      <BestSeller productdata={facialkit}/>
      <div className='facialkitContainer'>
      <MainHeading headingText={"Menicur Pedicure Kits"}/>

      </div>
      <BestSeller productdata={facialkit}/>
      <div className='facialkitContainer'>
      <MainHeading headingText={"Now Available on"}/>

      </div>
      <div style={{backgroundColor:'',padding:'30px'}}>
      <SellingBrandSlider brandimg={sellingPlateformData}/>

      </div>
 <div style={{marginTop:'70px',backgroundColor:'red'}}>
<Footer/>

  </div>     
      
    </div>
  )
}


