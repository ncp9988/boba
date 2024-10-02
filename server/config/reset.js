import { pool } from './database.js';
import './dotenv.js';
import toppingData from '../data/toppings.js';

const createToppingsTable = async () => {
    const createTableQuery = `
    DROP TABLE IF EXISTS toppings;

    CREATE TABLE IF NOT EXISTS toppings (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        pricePoint VARCHAR(10) NOT NULL,
        image VARCHAR(255) NOT NULL,
        audience VARCHAR(255) NOT NULL
    );
    `;
    try {
        const res = await pool.query(createTableQuery);
        console.log('🎉 toppings table created successfully');
    } catch (err) {
        console.error('⚠️ error creating toppings table', err);
    }
};

const seedToppingsTable = async () => {
    await createToppingsTable();
    for (const topping of toppingData) {
        const insertQuery = {
            text: `INSERT INTO toppings (name, pricePoint, image, audience) VALUES ($1, $2, $3, $4)`,
            values: [topping.name, topping.pricePoint, topping.image, topping.audience]
        };
        try {
            await pool.query(insertQuery);
            console.log(`✅ ${topping.name} added successfully`);
        } catch (err) {
            console.error(`⚠️ error inserting topping ${topping.name}`, err);
        }
    }
};

// Call the seed function
seedToppingsTable();