import React from 'react';
import Card from './card'; // Assuming Card component is in a separate file
import jsonData from './flight.json'; // Import the JSON file
import "./Fetchdata.css"
import Navbar from './navbar';
const FetchData = () => {
  const properties = jsonData.properties || [];

  return (
    <>
    <Navbar/>
    <div className="hotels-container">
      {properties.map((property) => (
        <Card
          key={property.name}
          hotel_name={property.name}
          imgurl={property.images[0]?.thumbnail}
          new_price={property.rate_per_night?.lowest || 'N/A'}
          link={property.link}
        />
      ))}
    </div>
    </>
  );
};

export default FetchData;
