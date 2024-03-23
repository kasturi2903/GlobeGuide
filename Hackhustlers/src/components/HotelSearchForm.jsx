import React, { useState } from 'react';
import axios from 'axios';
import './HotelSearch.css';
import Navbar from './navbar';
import { Link } from "react-router-dom";


const HotelSearchForm = () => {
    const [location, setLocation] = useState("");
    const [checkInDate, setCheckInDate] = useState("");
    const [checkOutDate, setCheckOutDate] = useState("");
    const [guests, setGuests] = useState("");
    const [nights, setNights] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate and format check-in date
        const formattedCheckInDate = validateAndFormatDate(checkInDate);
        if (!formattedCheckInDate) {
            alert('Check-in date should be in the format of YYYY-MM-DD. E.g., 2023-01-31');
            return;
        }

        try {
            const response = await axios.post("http://localhost:5173/hotels", {
                location,
                checkInDate: formattedCheckInDate, // Use formatted date
                checkOutDate,
                guests,
                nights
            });
            console.log("Hotel data:", response.data);
            // Update state or display hotel data
        } catch (error) {
            console.error("Error fetching hotel data:", error);
        }
    };

    const validateAndFormatDate = (dateString) => {
        const regex = /^\d{4}-\d{2}-\d{2}$/;
        if (regex.test(dateString)) {
            return dateString; // Date is already in the correct format
        } else {
            // Attempt to parse and format the date
            const parsedDate = new Date(dateString);
            if (!isNaN(parsedDate.getTime())) {
                const formattedDate = parsedDate.toISOString().slice(0, 10);
                return formattedDate;
            } else {
                return null; // Invalid date format
            }
        }
    };
    return (
        <>
        <Navbar/>
        <div>
            <div className="search">
        <div className="hotel_box">
        <h2 style={{ fontFamily: "Lucida Handwriting" }}>SEARCH FOR HOTELS</h2>


            <form onSubmit={handleSubmit}>
            <div className="mb-3" style={{ marginBottom: '15px' }}>
            <label htmlFor="password" style={{ fontFamily: "Lucida Handwriting", display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
               Location
             </label>
                <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} style={{
                   width: '90%',
                   padding: '10px',
                   borderRadius: '4px',
                   fontFamily: "Lucida Handwriting",
                   border: '1px solid #ccc',
                   boxSizing: 'border-box',
               }} />
               </div>
               <div className="mb-3" style={{ marginBottom: '15px' }}>
            <label htmlFor="password" style={{ fontFamily: "Lucida Handwriting", display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
               Check-in Date
             </label>
                <input type="text" placeholder="Check-in Date" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)}  style={{
                   width: '90%',
                   padding: '10px',
                   borderRadius: '4px',
                   fontFamily: "Lucida Handwriting",
                   border: '1px solid #ccc',
                   boxSizing: 'border-box',
               }}/>
               </div>
               <div className="mb-3" style={{ marginBottom: '15px' }}>
            <label htmlFor="password" style={{ fontFamily: "Lucida Handwriting", display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
               Check-out Date
             </label>
                <input type="text" placeholder="Check-out Date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} style={{
                   width: '90%',
                   padding: '10px',
                   borderRadius: '4px',
                   fontFamily: "Lucida Handwriting",
                   border: '1px solid #ccc',
                   boxSizing: 'border-box',
               }} />
               </div>
               <div className="mb-3" style={{ marginBottom: '15px' }}>
            <label htmlFor="password" style={{ fontFamily: "Lucida Handwriting", display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
               Guests
             </label>
                <input type="number" placeholder="Guests" value={guests} onChange={(e) => setGuests(e.target.value)} style={{
                   width: '90%',
                   padding: '10px',
                   borderRadius: '4px',
                   fontFamily: "Lucida Handwriting",
                   border: '1px solid #ccc',
                   boxSizing: 'border-box',
               }} />
               </div>
               <Link to="/fetchdata"> 
               <button type="submit" style={{
            width: '90%',
            padding: '10px',
            fontFamily: "Lucida Handwriting",
            backgroundColor: '#FF5733 ',
            color: 'white',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer',
        }} >Search Hotels</button></Link>
                
            </form>
        </div>
        </div>
        </div>
        </>
    );
};

export default HotelSearchForm;