import React, { useEffect, useState } from 'react'
import Footer from '../footer'
import { LOCAL_IMAGES } from '../../utils/localimages'
import { Link } from 'react-router-dom'
import './profile.css'
import { postApiData } from '../../utils/services'


export default function Profile() {
    const [orderHistory, setHistory] = useState([])
    console.log("orderHistory", orderHistory)
    useEffect(() => {
        const data = {
            phoneNumber: "7462378682",
        }
        postApiData(
            "user/getCartDetails",
            data,
            (response) => {
                console.log("getcarddetails", response[0]?.products);
                setHistory(response[0]?.products);

            },
            (error) => {
                console.log("erro");
            }
        );

    }, [])

    return (
        <div>
            <div className='profileContainer'>
                <div style={{ padding: '0px', background: 'gainsboro', height: '360px', width: '200px' }}>
                    <div style={{ marginLeft: '10px', backgroundColor: '', paddingTop: '20px' }}>

                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src={LOCAL_IMAGES.userIcon} alt="userIcon"
                                style={{ height: '20px', width: '20px' }} />
                            <Link to={'/Profile'}>
                                <p className='myprofile'
                                >My Profile</p>

                            </Link>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                            <img src={LOCAL_IMAGES.packageIcon} alt="order"
                                style={{ height: '20px', width: '20px' }} />
                            <p className='myprofile'>Orders</p>
                        </div>
                    </div>
                </div>
                <div style={{ background: 'whitesmoke', width: '100%' }}>
                    <p className='myprofile'>{'My Orders'}</p>
                    <div style={{ borderBottom: '1px solid whitesmoke', width: '100%', marginTop: '7px' }}></div>
                    {/* <div className='orderNumber'>
                    <span>Order Number</span>
                    <span>SK-177653505-8603074</span>
                  </div> */}
                    <div style={{background:''}}>
                        {
                            orderHistory.map((item,index) => {
                                return (
                                  <div style={{padding:'20px',background:'grey',marginTop:'10px',display:'flex'}}>
                                    <img src={item?.image_link} alt='img' style={{height:'160px',width:'150px'}}/>
                                    <span>{item?.name}</span>
                                    <span>{item?.price}</span>

                                  </div>
                            )
                            })



                        }

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
