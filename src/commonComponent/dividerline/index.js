import React from 'react'
import { LOCAL_IMAGES } from '../../utils/localimages'
import './line.css'

export default function MainHeading(props) {
    const {headingText}=props
  return (
    <div className='mainHeadingContainer'>
        <div>
        <p className='headingText'>{headingText}</p>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop: '6px' }}>
        <img src={LOCAL_IMAGES.linechnage} alt='lineimage'
      style={{}}/>
        </div>
 
        </div>
 
    </div>
  )
}
