const express = require('express');
const path = require('path');
const { graphqlHTTP } = require('express-graphql');
const DogTrainingSchema = require('./schema');

const app = express();

// Serve the static React files.
app.use(express.static(path.join(__dirname, 'client/build')));

// Set up the API route
app.use('/graphql', graphqlHTTP({
    schema: DogTrainingSchema,
    graphiql: true,
}));

app.listen(process.env.PORT || 5000);
