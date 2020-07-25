const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'development' ? false : { rejectUnauthorized: false },
});

module.exports = {
    query: (text, params) => pool.query(text, params),
}
