const sslRedirect = require('heroku-ssl-redirect');
const express = require('express');
const path = require('path');
const { graphqlHTTP } = require('express-graphql');
const DogTrainingSchema = require('./graphql/schema');
const isTokenValid = require('./validate');

const app = express();

const context = req => {
    console.log('In server context function req => user_id');
    const { authorization: token } = req.headers;
    const user_id = isTokenValid(token)
        .then( ({decoded, error}) => {
            console.log(decoded);
            console.log(error);
            return decoded.sub;
        });
    console.log('Got token and user_id');
    console.log(user_id);
    // TODO: error handling logic
    return { user: user_id };
}

app.use(sslRedirect());

// Serve the static React files.
app.use(express.static(path.join(__dirname, 'client/build')));

// Set up the API route
app.use('/graphql', graphqlHTTP((req, res, graphQLParams) => {
    console.log('In gql top-level handler');
    var value = {
        schema: DogTrainingSchema,
        graphiql: {
            headerEditorEnabled: true,
        },
        context: () => context(req),
    };
    console.log(value);
    return value;
}));

app.listen(process.env.PORT || 5000);
