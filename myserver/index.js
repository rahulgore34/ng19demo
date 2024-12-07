const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Enable CORS
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Endpoint for 'dev'
app.get('/dev', (req, res) => {
  res.json({ message: 'Hello, Developers!', data: ['Alice', 'Bob', 'Charlie'] });
});

// Endpoint for 'testers'
app.get('/testers', (req, res) => {
  res.json({ message: 'Hello, Testers!', data: ['Diana', 'Eve', 'Frank'] });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
