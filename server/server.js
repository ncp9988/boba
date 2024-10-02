import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import toppingsRouter from './routes/toppings.js';

const app = express();

// Serve static files from the client/public directory
app.use('/public', express.static('./public'));

// Serve files from the client/public/scripts directory
app.use('/scripts', express.static('./public/scripts'));

// Use the /toppings route
app.use('/toppings', toppingsRouter);

// Define a simple route for the root URL
app.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Lion Tiger API</h1>');
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
