import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making API requests
 import './trips.css'
 import Navbar from './navbar';
const Trips = () => {
  const [departureId, setDepartureId] = useState('');
  const [arrivalId, setArrivalId] = useState('');
  const [outboundDate, setOutboundDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [flightsData, setFlightsData] = useState(null);
  const [error, setError] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('https://api.serpapi.com/playground', {
        params: {
          engine: 'google_flights',
          departure_id: departureId,
          arrival_id: arrivalId,
          gl: 'us',
          hl: 'en',
          currency: 'USD',
          outbound_date: outboundDate,
          return_date: returnDate,
        },
      });
      setFlightsData(response.data);
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  };

  return (
    <>
    <Navbar/>
    <div>
        <div>
            <div className="search1">
        <div className="flight_box">
        <h2 style={{ fontFamily: "Lucida Handwriting" }}>SEARCH FOR flights</h2>
        

      <form onSubmit={handleFormSubmit}>
        <label style={{ fontFamily: "Lucida Handwriting", display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Departure Airport:
          <input
            type="text"
            value={departureId}
            onChange={(e) => setDepartureId(e.target.value)}
            required style={{
                width: '90%',
                padding: '10px',
                borderRadius: '4px',
                fontFamily: "Lucida Handwriting",
                border: '1px solid #ccc',
                boxSizing: 'border-box',
            }}
          />
        </label>
        <br />
        <label style={{ fontFamily: "Lucida Handwriting", display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Arrival Airport:
          <input
            type="text"
            value={arrivalId}
            onChange={(e) => setArrivalId(e.target.value)}
            required style={{
                width: '90%',
                padding: '10px',
                borderRadius: '4px',
                fontFamily: "Lucida Handwriting",
                border: '1px solid #ccc',
                boxSizing: 'border-box',
            }}
          />
        </label>
        <br />
        <label style={{ fontFamily: "Lucida Handwriting", display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Outbound Date:
          <input
            type="text"
            value={outboundDate}
            onChange={(e) => setOutboundDate(e.target.value)}
            required style={{
                width: '90%',
                padding: '10px',
                borderRadius: '4px',
                fontFamily: "Lucida Handwriting",
                border: '1px solid #ccc',
                boxSizing: 'border-box',
            }}
          />
        </label>
        <br />
        <label style={{ fontFamily: "Lucida Handwriting", display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Return Date:
          <input
            type="text"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            required style={{
                width: '90%',
                padding: '10px',
                borderRadius: '4px',
                fontFamily: "Lucida Handwriting",
                border: '1px solid #ccc',
                boxSizing: 'border-box',
            }}
          />
        </label>
        <br />
        <button type="submit" disabled={loading} style={{
            width: '90%',
            padding: '10px',
            fontFamily: "Lucida Handwriting",
            backgroundColor: '#FF5733 ',
            color: 'white',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer',
        }}>
          {loading ? 'Loading...' : 'Search Flights'}
        </button>
      </form>
      {error && <p>Error: {error}</p>}
      {flightsData && (
        <div>
          {/* Display flights data here */}
          <pre>{JSON.stringify(flightsData, null, 2)}</pre>
        </div>
      )}
    </div>
    </div>
    </div>
   </div>
   </>
  );
};

export default Trips;

