const sslRedirect = require('heroku-ssl-redirect');
const express = require('express');
const path = require('path');
const { graphqlHTTP } = require('express-graphql');
const bodyParser = require('body-parser');
const DogTrainingSchema = require('./graphql/schema');
const {
    checkJwt,
    checkScopes,
}= require('./validate');
const { signS3PutHandler, signS3GetHandler, getS3SignedGetUrl } = require('./aws');

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
            context: { user: { id: req.user.sub, email: req.user.email } },
        }))
);

app.get('/sign-s3/put', checkJwt, checkScopes(['write:assets']), signS3PutHandler);
app.get('/sign-s3/get', checkJwt, checkScopes(['read:assets']), signS3GetHandler);

app.get('/login', (req, res) => res.redirect(`https://${process.env.AUTH0_DOMAIN}/authorize`));

app.post('/invite', checkJwt, bodyParser, (req, res) => {
    const { user, dog, invitee } = req.body;
    dog.picture = getS3SignedGetUrl(dog.picture, {Expires: 60 * 60 * 24 * 7});
    // body of request needs to be:
    // user {name, picture?}
    // dog {name, picture}
    // invitee
    // Then request picture URL, update picture, send off to sendgrid template
    // Recommended to async call this from the client with a fetch
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: invitee,
        from: process.env.SENDGRID_SENDER,
        templateId: process.env.SENDGRID_TEMPLATE_ID,
        dynamicTemplateData: {
            user,
            dog,
        }
    };
    sgMail.send(msg);
});

app.listen(process.env.PORT || 5000);
