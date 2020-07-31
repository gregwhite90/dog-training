const sslRedirect = require('heroku-ssl-redirect');
const express = require('express');
const path = require('path');
const { graphqlHTTP } = require('express-graphql');
const DogTrainingSchema = require('./graphql/schema');
const {
    checkJwt,
    checkScopes,
}= require('./validate');
const { signS3PutHandler, signS3GetHandler } = require('./aws');

const app = express();

app.use(sslRedirect());

// Serve the static React files.
app.use(express.static(path.join(__dirname, 'client/build')));

// Set up the API route
app.use('/graphql',
        checkJwt,
        checkScopes(['read:viewer']),
        graphqlHTTP((req, res, graphQLParams) => ({
            schema: DogTrainingSchema,
            graphiql: {
                headerEditorEnabled: true,
            },
            context: { user: { id: req.user.sub } },
        }))
);

app.get('/sign-s3/put', checkJwt, checkScopes(['write:assets']), signS3PutHandler);
app.get('/sign-s3/get', checkJwt, checkScopes(['read:assets']), signS3GetHandler);

app.listen(process.env.PORT || 5000);
