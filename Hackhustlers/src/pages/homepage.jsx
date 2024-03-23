
import Navbar from "../components/navbar";

import React from "react";


import "./homepage.css"
import {Homebg,Sky,Plane} from "../assets"
const Homepage = () => {
  return (
    <>
    <Navbar/>
    <div className="home-pages">
      <div className="top-section">
        <div className="home-container">
          <img className="bg-image" src={Homebg} alt="" />
        </div>
        <div className="home-page-content">
          <h1>Globe Guide</h1>
          <p>
            find personalized recommendations for activities, hotels and more
          </p>
        </div>
      </div>

      <div className="participants">
        
      </div>

      <div className="middle-section">
        <h1>
          Tickets and <br /> Accomodation
        </h1>
        <div className="home-container">
          <img className="bg-sky" src={Sky} alt="" />
        </div>
        <img src={Plane} className="plane" alt="" />
      </div>

     
    </div>
    </>
  );
};

export default Homepage;
