const sslRedirect = require('heroku-ssl-redirect');
const express = require('express');
const path = require('path');
const { graphqlHTTP } = require('express-graphql');
const DogTrainingSchema = require('./schema');
const db = require('./db');

const app = express();

app.use(sslRedirect());

// Serve the static React files.
app.use(express.static(path.join(__dirname, 'client/build')));

// Set up the API route
app.use('/graphql', graphqlHTTP({
    schema: DogTrainingSchema,
    graphiql: true,
}));

// TODO: remove starter code and delete
app.get('/db', async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM test_table');
        res.send(rows[0]);
    } catch (err) {
        console.error(err);
        res.send("Error " + err);
    }
});

app.listen(process.env.PORT || 5000);
