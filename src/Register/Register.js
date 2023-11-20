import React, { useState } from "react";
import "./Register.css";
import leftimage from "./login.png";
import Modal from "react-modal";
import login_icon from "./login_icon.png";
import { postApiData } from "../utils/services";
import SignUp from "../Login/Login";
import { useNavigate } from "react-router-dom";
const Login = ({ modalIsOpen, setIsOpen }) => {
  const [singuppress,setSignupPress]=useState(false)
  const customStyles = {

    content: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      border: 'none', // Remove the border
      // Semi-transparent white background for the modal content
      boxShadow: 'none', // Remove the shadow
      height: '400px',
      width: '700px',
      overflowX: 'hidden',
      overflowY: 'hidden',
      overflowX: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation=useNavigate()
  


  const loginPress = (e) => {
    e.preventDefault()
    const data = {
      email: email,
      password: password

    }
    console.log("data",data);
    postApiData('/user/login', data, (response) => {
      console.log("response login", response)

    }, (error) => {
      console.log("error", error)

    })
  }
 const signupPressButton=(e)=>{
  console.log('sdffhksdfhfh')
  setSignupPress(true)
  e.preventDefault()
 }
 const forgetPassword=()=>{

  navigation('/ResetPassword')
  setIsOpen(false)
  
  const data={

  }
  postApiData('user/forgotPassword',)

 }

  return (
    <Modal
      isOpen={modalIsOpen}
      //onAfterOpen={afterOpenModal}
      onRequestClose={() => setIsOpen(false)}
      style={customStyles}
      // style={{}}
      contentLabel="Example Modal"
    // style={{width:'300px',height:'290px'}}
    >

      <div className="left">
        <img src={leftimage} alt="image" />
      </div>
      <div className="right">
        <img src={login_icon} alt="login icon" />
        <h1>Welcome Back</h1>
        <h2>Login to continue</h2>
        <form>
          <div className="tbox">
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            <button class="login-button" onClick={loginPress}>Login</button>
            <button onClick={signupPressButton} className="signup-button">
              Sign UP
            </button>
            {/* {
              singuppress && <SignUp/>
            } */}
            {singuppress && (
            <SignUp modalIsOpen={singuppress} setIsOpen={true} />

          )}
          </div>
          



          <div class="link-container">
            {/* <a class="forgot-password-link" href="#"> */}
            <p onClick={forgetPassword}>
            Forgot your password?

            </p>
            {/* </a> */}
          </div>
        </form>
      </div>

    </Modal>

  );

  /*return(
    <div className="overlay">
      <div className="modalContainer">
        <img className="img" src={leftimage} alt="image"/>
        <div className="modelRight">
          <p onClick={onclose} className="closeBtn">X</p>
          <div className="content">
            <img src={login_icon} alt="login icon" />
            <h1>Welcome Back</h1>
            <h2>Login to continue</h2>
            <form onSubmit={submit}>
              <div className="tbox">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                <button class="login-button">Login</button>
              </div>

              <div class="link-container">
                <a class="forgot-password-link" href="#">
                  Forgot your password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )*/
};

export default Login;



