import React, { useState } from "react";
import axios from "axios";

import Classes from "./Hero.module.css";
// import Banner from "Hackhustlers\src\assets\image 42.png";
import Banner from "../assets/hero.jpeg";
function Hero() {
  const [modal, setModal] = useState(false);
  const [accommodations, setAccommodations] = useState([]);

  // Function to fetch accommodation data from the backend
  const fetchAccommodations = async () => {
    try {
      // Make a GET request to your backend API endpoint
      const response = await axios.get("/api/accommodations");
      // Set the fetched accommodation data in state
      setAccommodations(response.data);
    } catch (error) {
      console.error("Error fetching accommodation data:", error);
    }
  };

  // Handler function for the "book now" button
  const handleBookNow = () => {
    // Fetch accommodation data when the button is clicked
    fetchAccommodations();
    // Open the modal
    setModal(true);
  };

  return (
    <>
      <div className={!modal && Classes.open}>
        <div className={Classes.modalContainer}>
          <h5>We Receive your information</h5>
          <button onClick={() => setModal(false)}>Ok</button>
        </div>
      </div>

      <section id="hero" className={Classes.heroContainer}>
        <div className={Classes.heroimage}>
          <img src={Banner} alt="" />
        </div>

        <div className={Classes.content}>
          <div className={Classes.title}>
            <h1>
              Travel & Explore With{" "}
              <span className={Classes.nickName}>Global Guide</span>
            </h1>
            <p>
              Save at least 15% on stays worldwide, from relaxing retreats to
              off-grid adventures
            </p>
          </div>

          <div className={Classes.bookingContainer}>
            <div className={Classes.search}>
              <label>Where you want to go</label>
              <input type="text" placeholder="search your location" />
            </div>

            <div className={Classes.search}>
              <label>Check in</label>
              <input type="date" />
            </div>

            <div className={Classes.search}>
              <label>Check out</label>
              <input type="date" />
            </div>

            <button onClick={handleBookNow}>book now</button>
          </div>
        </div>
      </section>

      {/* Modal to display accommodation options */}
      {modal && (
        <div className={Classes.modal}>
          <h2>Choose Your Accommodation</h2>
          <div className={Classes.accommodationsContainer}>
            {accommodations.map((accommodation) => (
              <div className={Classes.card} key={accommodation.id}>
                <img src={accommodation.image} alt={accommodation.name} />
                <h3>{accommodation.name}</h3>
                <p>{accommodation.description}</p>
                <button>Select</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Hero;