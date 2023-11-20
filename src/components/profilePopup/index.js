// App.js

import React from "react";
import Modal from 'react-modal';
import { LOCAL_IMAGES } from "../../utils/localimages";
import { Link } from "react-router-dom";
export default function ProfilePopUp({modalIsOpen,setIsOpen}) {

	const handleClose = () => {
		setIsOpen(false);
	};
const profileClick=()=>{
    setIsOpen(false)
}


	return (
		
			<Modal isOpen={modalIsOpen} onClose={handleClose}

            style={{
                content: {
                  width: '250px', // set the width of the modal
                  height: '150px', // set the height of the modal
                  right:'40px',
                  position:'absolute',
                //   background:'red',
                //   margin: 'auto', 
                
                },
              }}
            >
				<> <div style={{display:'flex',justifyContent:'space-between'}}>
                <p>{'new cutomer'}</p>
                <p>{'Sign Up'}</p>


                </div>
                <div style={{display:'flex',alignItems:'center'}}>
                <img src={LOCAL_IMAGES.userIcon} alt="userIcon"
                style={{height:'20px',width:'20px'}}/>
                <Link to={'/Profile'}>
                <p onClick={profileClick}>My Profile</p>

                </Link>
                </div>
                <div style={{display:'flex',alignItems:'center'}}>
                <img src={LOCAL_IMAGES.packageIcon} alt="order"
                style={{height:'20px',width:'20px'}}/>
                <p>Orders</p>
                </div>
           

				</>
			</Modal>
	);
}
