import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import toppingData from '../data/toppings.js';
import getToppings from '../controller/toppings.js';

// Convert import.meta.url to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Endpoint to retrieve all toppings
router.get('/', getToppings);

// Endpoint to retrieve a specific topping's HTML page
router.get('/:toppingId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/topping.html'));
});


export default router;
