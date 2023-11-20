import React, { useState } from "react";
import Modal from "react-modal";
import signin from "./signIn.png";
import { LOCAL_IMAGES } from "../utils/localimages";
import "./Login.css"
import Login from "../Register/Register";
import { postApiData } from "../utils/services";
const SignUp = ({ modalIsOpen, setIsOpen }) => {

  


  const [ismodelopen, setmodelopen] = useState(false);

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [password,setPassword]=useState("");

  function loginpress(e) {
    e.preventDefault();
    setmodelopen(true)
   
  }
  const sendotp=()=>{
      let data={
      email:email
    }
    postApiData('/user/sendOtp',data,(response)=>{
      console.log("sendresponse",response)

    }, (error)=>{
      console.log('error',error)
      })
   
  }


  const signuppress = (e) => {
    e.preventDefault()
    
    const data = {
      name:fname,
      email: email,
      phoneNumber:phone,
      otp:otp,
      password: password,

    }
    // name, phoneNumber, email, password, otp
    console.log("data",data);
    postApiData('/user/signUp', data, (response) => {
      console.log("response", response)

    }, (error) => {
      console.log("error", error)

    })
  }
 
  const customStyles = {

    content: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      border: 'none', // Remove the border
      // Semi-transparent white background for the modal content
      boxShadow: 'none', // Remove the shadow
      height: '500px',
      width: '800px',
      overflowX: 'hidden',
      overflowY: 'hidden',
      overflowX: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      //  onAfterOpen={afterOpenModal}
      onRequestClose={() => setIsOpen(false)}
      style={customStyles}
      // style={{}}
      contentLabel="Example Modal"
    // style={{width:'300px',height:'290px'}}
    
    >

      <div className="left">
        <img src={signin} alt="image" />
      </div>
      <div className="right">
        <h1>Sign Up</h1>
        <form>
          <div className="inputbox">
            <div className="tbox">
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />
            </div>

            <div className="tbox">
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
            </div>
          </div>

          <div className="tbox">
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}

            />
            <span onClick={sendotp}>sendOtp</span>
          </div>
          <div className="tbox">
            <input
              type="text"
              name="Phone"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="tbox">
            <input
              type="text"
              name="otp"
              placeholder="Enter Otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
          <div className="tbox">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div class="button-container">
            <button onClick={loginpress} className="login-button">Login</button>
            <button onClick={signuppress} className="signup-button">
              Sign UP
            </button>
          </div>
          {ismodelopen && (
            <Login modalIsOpen={ismodelopen} setIsOpen={setmodelopen} />

          )}
        </form>
      </div>

    </Modal>
  );
};

export default SignUp;
