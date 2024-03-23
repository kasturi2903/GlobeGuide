import React from "react";
import "./activities.styles.css";
import Hero from "../../components/hero";


import Cruising from "../../assets/cruising.png";
import Navbar from "../../components/navbar";
import JetSki from "../../assets/jetski.png"
import ActivityCard from "../../components/activityCard/activityCard.components";

function Activities() {
  return (
    <>
    <Navbar/>
    <div className="activities">
      <div className="book">
      {/* <div className="book-bg-image-act">
        <div className="inner-bg">
          <div>
            <h1>BOOK A TRIP WITH US</h1>
            <button className="book-trip-btn">BOOK NOW</button>
          </div>
        </div>
      </div> */}
      <Hero/>
      </div>
      
      <div className="activity-container">
        <div className="water">
          <div className="water1">
            <img className="waterimage" src={JetSki} alt="" />
            <h2>JET SKI</h2>
          </div>
          <div className="water2">
            <img className="waterimage" src={Cruising} alt="" />
            <h2>CRUISING</h2>
          </div>
        </div>
        <ActivityCard />
      </div>
    </div>
    </>
  );
}

export default Activities;
