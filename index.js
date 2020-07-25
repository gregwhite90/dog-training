const sslRedirect = require('heroku-ssl-redirect');
const express = require('express');
const path = require('path');
const { graphqlHTTP } = require('express-graphql');
const DogTrainingSchema = require('./schema');
const db = require('./db');
const isTokenValid = require('./validate');

const app = express();

const context = req => {
    const { authorization: token } = req.headers;
    return { token };
}

app.use(sslRedirect());

// Serve the static React files.
app.use(express.static(path.join(__dirname, 'client/build')));

// Set up the API route
app.use('/graphql', graphqlHTTP((req, res, graphQLParams) => ({
    schema: DogTrainingSchema,
    graphiql: {
        headerEditorEnabled: true,
    },
    context: (req) => {
        const { authorization: token } = req.headers;
        const user = isTokenValid(token);
        return { user };
    },
})));

app.listen(process.env.PORT || 5000);
