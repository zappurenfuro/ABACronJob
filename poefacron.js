const axios = require('axios');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use the PORT environment variable provided by Render

app.get('/', (req, res) => {
  res.send('Cron job is running!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const visitWebsite = async () => {
  try {
    const response = await axios.get('https://albionbalanceassistance-1.onrender.com/');
    console.log(`Visited website. Status Code: ${response.status}`);

    const response2 = await axios.get('https://lgrhelper.onrender.com/');
    console.log(`Visited website 2. Status Code: ${response2.status}`);
  } catch (error) {
    console.error('Error visiting website:', error.message);
  }
};

// Schedule to run every 3 minutes
setInterval(visitWebsite, 180000);
