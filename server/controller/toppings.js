import { pool } from '../config/database.js';

const getToppings = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM toppings ORDER BY id ASC');
        res.status(200).json(results.rows);

    } catch(error) {
        res.status(409).json( { error: error.message});
    }
}
 export default getToppings;
