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
    console.log(`In getS3SignedUrl for operation ${operation} with file ${file_name} of type ${file_type}`);
    const s3 = new aws.S3();
    const s3_common_params = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: file_name,
    };
    const s3_put_params = {
        Expires: 60,
        ContentType: file_type,
        ...s3_common_params,
    };
    const s3_get_params = {
        ...s3_common_params,
    };

    const s3_params = (operation === 'getObject' ? s3_get_params : s3_put_params);

    let signedRequests = {};

    console.log(`Going for signed requests`);

    // TODO: error-handling code
    signedRequests[operation] = s3.getSignedUrl(operation, s3_params);
    if (operation === 'putObject') {
        signedRequests['getObject'] = s3.getSignedUrl('getObject', s3_get_params);
    }

    console.log('going to return from getS3SignedUrl');
    console.log({signedRequests});

    return {signedRequests};
}

// TODO: authentication and authorization for this route
app.get('/sign-s3', (req, res) => {
    let { file_name, file_type, operation } = req.query;
    operation = operation.trim();
    if (!operation || !(operation === 'getObject' || operation === 'putObject')) {
        console.log(`Invalid operation: ${operation}`);
        // TODO: send something back?
        res.end();
    }
    // TODO: prefix file name with user_id/ ?
    // TODO: check that the user is asking for access to the right image
    const { error, signedRequests } = getS3SignedUrl(file_name, file_type, operation);

    if (error) {
        console.log(error);
        res.end();
    }
    if (signedRequests) {
        console.log({signedRequests});
        res.json({signedRequests});
    }
});

app.listen(process.env.PORT || 5000);
