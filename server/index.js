// server.js
require('dotenv').config()
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

// Set up CORS to allow requests from the frontend
app.use(require('cors')());

// Define API endpoint
app.get('/api/search', async (req, res) => {
  const { query } = req.query;

  // Replace with your Google Custom Search API Key and Search Engine ID
  const apiKey = 'YOUR_API_KEY';
  const searchEngineId = 'YOUR_SEARCH_ENGINE_ID';

  try {
    const response = await axios.get(
      `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${query}`
    );
    
    res.json(response.data.items);
  } catch (error) {
    console.error('Error fetching search results:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
