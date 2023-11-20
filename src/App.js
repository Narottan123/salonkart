
import { Provider, useDispatch, useSelector } from 'react-redux';
import './App.css';
import Home from './Auth/auth';
import { cardAdded } from './Redux/actions';
// import store from './Redux/store/store';
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import Skinco from './components/skinco';
import Navbar from './Navbar/Navbar';
import Register from './Login/Login';
import Cartdescription from './Cartdescription/Cartdescription';
import BestSeller from './bestseller';
import Haircareallproducts from './Haircareallproducts/Haircareallproducts';
import Skincareallproducts from './Skincareallproducts/Skincareallproducts';
import Argatin from './components/argatin';
import Login from './Register/Register';
import SignUp from './Login/Login';
import AddressModal from './commonComponent/addressModal';
import ResetPassword from './components/resetpassword';
import Menicure from './components/menicure';
import FacialKit from './components/facialkit';
import Profile from './components/profile';

function App() {
  return (
   
      <BrowserRouter>
      {/* <Header /> */}
      <Navbar/>

      <Routes>
        <Route path="/" Component={Home} />
        <Route path='/Skinco'  Component={Skinco}/>
        <Route path="/haircare" Component={Cartdescription}/>
        <Route path='/best-sellers' Component={BestSeller}/>
        <Route path="/haircareallproducts" Component={Haircareallproducts}/>
        <Route path='/skincareallproducts' Component={Skincareallproducts}/>
        <Route path='/best-sellers' Component={Skincareallproducts}/>
        <Route path='/best-sellers-combos' Component={Skincareallproducts}/>
        <Route path='/newlaunches' Component={Skincareallproducts}/>
        <Route path="/Cartdescription" Component={Cartdescription}/>
        <Route path="/Argatin" Component={Argatin}/>
        <Route path="/Login" Component={Login}/>
        <Route path='/SignUp' Component={SignUp}/>
        <Route path='/ResetPassword' Component={ResetPassword}/>
        <Route path='/Menicure' Component={Menicure}/>
        <Route path='/FacialKit' Component={FacialKit}/>
        <Route path='/Profile' Component={Profile}/>







        <Route path='/AddressModal' Component={AddressModal}/>



        {/* <Route path='/Skinco'  Component={Register}/> */}

      </Routes>
      {/* <Fotter/> */}
    </BrowserRouter>

    
    
  );
}

export default App;



























