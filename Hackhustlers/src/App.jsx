import { useState } from 'react'
import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Activities from './pages/activities/activities.pages';
import HotelSearchForm from './components/HotelSearchForm'; 
import Homepage from './pages/homepage';
//import Footer from './components/footer/footer.components';
import Login from './pages/login';
import Signup from './pages/signup';
import Trips from './components/Trips';
import HotelCards from './pages/hotels';
import FetchData from './components/Fetchdata';
function App() {
  

  return (
    <>
    <Router>
      <Routes>
        {/* Add a catch-all route for the root path   <Route path='*' element={<Signup />} />*/}
        <Route path='*' element={<Homepage/>} />
        <Route path='/activities' element={<Activities/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/hotels' element={<HotelSearchForm/>} />
        <Route path='/trips' element={<Trips/>} />
        <Route path='/fetchdata' element={<FetchData/>} />
      



        
       
        

       

        
      </Routes>
    </Router>
   
     
    </>
  )
}

export default App
