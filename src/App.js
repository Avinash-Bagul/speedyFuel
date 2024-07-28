import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../src/components/Navbar'
import Footer from './components/Footer';
import Home from './components/homePageComp/Home';
import LoginPage from './components/loginSignupComp/LoginPage';
import SignUp from './components/loginSignupComp/SignUp';
import Contact from './components/homePageComp/Contact';
import Dashboard from './components/productPageComp/dashboardComp/Dashboard';
import BuyFuel from './components/productPageComp/buyfuelComp/BuyFuel';
import MyOrders from './components/productPageComp/myOrdersComp/MyOrders';
import Reports from './components/productPageComp/reportComp/Reports';
import Error from './components/Error';
import Protecting from './Protecting';

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        
        <Route exact path='/dashboard' element={<Protecting Component={Dashboard}/>} />
        <Route exact path='/buyfuel' element={<Protecting Component={BuyFuel}/>} />
        <Route exact path='/myorders' element={<Protecting Component={MyOrders}/>}/>
        <Route exact path='reports/:id' element={<Protecting Component={Reports}/>}/>

        <Route exact path='/login' element={< LoginPage />} />
        <Route exact path='/signup' element={< SignUp />} />
        <Route exact path='/contactus' element={<Contact />} />

        <Route  path='*' element={<Error/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
