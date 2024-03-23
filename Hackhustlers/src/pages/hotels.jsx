import React, { useState, useEffect } from 'react';
import Card from '../components/card';
import Navbar from '../components/navbar';
import './metrocard.css';

const HotelCards = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const response = await fetch('http://your-api-endpoint-url');
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setCardData(data);
      } catch (error) {
        console.error('Error fetching card data:', error);
      }
    };

    fetchCardData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        {cardData.map((card) => (
          <Card key={card.id} hotel_name={card.hotel_name} imgurl={card.imgurl} new_price={card.new_price} />
        ))}
      </div>
    </>
  );
};

export default HotelCards;
