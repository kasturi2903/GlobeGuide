import Card from "./card";

import React, { useState, useEffect } from 'react';
import axios from 'axios';


const HotelList = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get('http://localhost:5173//hotels'); // Replace with your API endpoint URL
        setHotels(response.data); // Assuming the response.data is an array of hotel objects
      } catch (error) {
        console.error('Error fetching hotels:', error);
      }
    };

    fetchHotels();
  }, []);

  return (
    <div className="hotel-list">
      {hotels.map((hotel) => (
        <Card key={hotel._id} hotel={hotel} />
      ))}
    </div>
  );
};

export default HotelList;
