const express = require('express');
const path = require('path');
const { graphqlHTTP } = require('express-graphql');
const DogTrainingSchema = require('./schema');
const { Pool } = require('pg');

const db_pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});
const app = express();

// Serve the static React files.
app.use(express.static(path.join(__dirname, 'client/build')));

// Set up the API route
app.use('/graphql', graphqlHTTP({
    schema: DogTrainingSchema,
    graphiql: true,
}));

// TODO: remove starter code and delete
app.get('/db', async(req, res) => {
    try {
        const client = await db_pool.connect();
        const result = await client.query('SELECT * FROM test_table');
        const results = { 'results': (result) ? result.rows : null};
        res.json(results);
        client.release();
    } catch (err) {
        console.error(err);
        res.send("Error " + err);
    }
});

app.listen(process.env.PORT || 5000);
