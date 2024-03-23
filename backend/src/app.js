const axios = require('axios');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
// console.log('API Key:', process.env.SERP_API_KEY);

// CORS configuration
const allowedOrigins = ['http://localhost:5173']; // Add your frontend URL here
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));
app.use(express.json());

app.post('/hotels', (req, res) => {
  const { location, check_in_date, check_out_date } = req.body;

  // Calling SERP API to fetch hotel data
  axios
    .get(`https://serpapi.com/search?engine=google_hotels&q=${location}&gl=us&hl=en&currency=USD&check_in_date=2024-03-23&check_out_date=2024-03-24&api_key=daab26e3ab3e4bc64a78276bc76045186d803d98d813679ae4ee01804bf235d9`)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.error('Error fetching hotel data:', error);
      res.status(500).send({ error: 'Internal server error' }); // Improve error handling
    });
});
app.post('/trips', async (req, res) => {
    const { departureId, arrivalId, outboundDate, returnDate } = req.body;
   
   
      // Convert arrivalId and departureId to uppercase if they are not null or undefined
      if (departureId) {
        departureId = departureId.toUpperCase();
      }
      if (arrivalId) {
        arrivalId = arrivalId.toUpperCase();
      }
    axios
    .get(`https://serpapi.com/search.json?engine=google_flights&departure_id=CDG&arrival_id=AUS&gl=us&hl=en&currency=USD&outbound_date=2024-03-23&return_date=2024-03-24&api_key=daab26e3ab3e4bc64a78276bc76045186d803d98d813679ae4ee01804bf235d9`)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.error('Error fetching hotel data:', error);
      res.status(500).send({ error: 'Internal server error' }); // Improve error handling
    });
}
    // Calling SERP API to fetch flights data
   );
  


const PORT = process.env.PORT || 5173;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
