const sslRedirect = require('heroku-ssl-redirect');
const express = require('express');
const path = require('path');
const { graphqlHTTP } = require('express-graphql');
const DogTrainingSchema = require('./graphql/schema');
const {
    checkAPIJwt,
    checkAPIScopes,
}= require('./validate');
const aws = require('aws-sdk');
aws.config.region = process.env.AWS_REGION;

const app = express();

app.use(sslRedirect());

// Serve the static React files.
app.use(express.static(path.join(__dirname, 'client/build')));

// Set up the API route
app.use('/graphql',
        checkAPIJwt,
        checkAPIScopes(['read:viewer']),
        graphqlHTTP((req, res, graphQLParams) => ({
            schema: DogTrainingSchema,
            graphiql: {
                headerEditorEnabled: true,
            },
            context: { user: { id: req.user.sub } },
        }))
);

function getS3SignedUrl(file_name, file_type, operation) {
    const s3 = new aws.S3();
    if (!operation || operation !== 'getObject' || operation !== 'putObject') {
        // TODO: handle failure. send something back?
        return {error: `Invalid operation: ${operation}`};
    }
    const s3_common_params = {
        Bucket: process.env.S3_BUCKET,
        Key: file_name,
    };
    const s3_put_params = {
        ...s3_common_params,
        Expires: 60,
        ContentType: file_type,
    };
    const s3_get_params = {
        ...s3_common_params,
        Expires: 24 * 60,
    };

    const s3_params = operation === 'getObject' ? s3_get_params : s3_put_params;

    let signedRequests = {};

    s3.getSignedUrl(operation, s3_params, (err, data) => {
        if (err) {
            // TODO: error-handling code
            console.log(err);
            return {error: err};
        }
        signedRequests[operation] = data;
    });

    if (operation === 'putObject') {
        s3.getSignedUrl('getObject', s3_get_params, (err, data) => {
            if (err) {
                // TODO: error-handling code
                console.log(err);
                return {error: err};
            }
            signedRequests['getObject'] = data;
        });
    }

    return {signedRequests};
}

// TODO: authentication and authorization for this route
app.get('/sign-s3', (req, res) => {
    const { file_name, file_type, operation } = req.query;
    if (!operation || operation !== 'getObject' || operation !== 'putObject') {
        // TODO: send something back?
        res.end();
    }
    // TODO: prefix file name with user_id/ ?
    // TODO: check that the user is asking for access to the right image
    const { error, signedRequests } = getS3SignedURL(file_name, file_type, operation);
    if (error) {
        res.end();
    }
    if (signedRequests) {
        res.json(signedRequests);
    }
});

app.listen(process.env.PORT || 5000);
