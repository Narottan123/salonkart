import React from 'react'
import './footer.css'
import { LOCAL_IMAGES } from '../../utils/localimages'

export default function Footer() {
  return (
    <div className='mainContainer'>
      <div>
        <ul className='aboutuslistContainer'>
          <li>Join us</li>
          <li>Franchise</li>
          <li>Contact Us</li>
          <li>Join us</li>
          <li>Contact Us</li>



        </ul>
      </div>
      <div className='addressmainContainer'>
        <div>
          <p className='addresstext'>The Professional Hair Salon & Spa (India) Pvt. Ltd. Plot No-31</p>
          <p className='addresstext'>Okhla Industrial Estate, Phase – 3, South Delhi, New Delhi – 110020</p>
        </div>
      </div>
      <div className='phonenoContainer'>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <img src={LOCAL_IMAGES.call_icon} alt='' />

          <p style={{
            color: 'white',

          }}>    9354011796</p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <img src={LOCAL_IMAGES.call_icon} alt='' />

          <p style={{
            color: 'white',

          }}>    9354011796</p>
        </div>
      </div>


      <ul className='socialmediaIconContainer'>
        <li >
          <a href="https://www.youtube.com/user/monsoonsalon">
            {/* <GrYoutube size={28}  style={{color:'white'}}
                                 /> */}
            <img src={LOCAL_IMAGES.facebook_icon} alt='facebookicon' />


          </a>
        </li>
        <li >
          <a href="https://www.youtube.com/user/monsoonsalon">
            {/* <GrYoutube size={28}  style={{color:'white'}}
                                 /> */}
            <img src={LOCAL_IMAGES.instagram_icon} alt='instagramicon' />


          </a>
        </li>
        <li >
          <a href="https://www.youtube.com/user/monsoonsalon">
            {/* <GrYoutube size={28}  style={{color:'white'}}
                                 /> */}
            <img src={LOCAL_IMAGES.youtube} alt='instagramicon' />


          </a>
        </li>
        <li >
          <a href="https://www.youtube.com/user/monsoonsalon">
            {/* <GrYoutube size={28}  style={{color:'white'}}
                                 /> */}
            <img src={LOCAL_IMAGES.linkein_icon} alt='instagramicon' />


          </a>
        </li>
        <li >
          <a href="https://www.youtube.com/user/monsoonsalon">
            {/* <GrYoutube size={28}  style={{color:'white'}}
                                 /> */}
            <img src={LOCAL_IMAGES.pinterest_icon} alt='instagramicon' />


          </a>
        </li>
        <li >
          <a href="https://www.youtube.com/user/monsoonsalon">
            {/* <GrYoutube size={28}  style={{color:'white'}}
                                 /> */}
            <img src={LOCAL_IMAGES.twitter_icon} alt='instagramicon' />


          </a>
        </li>
      </ul>



    </div>
  )
}
