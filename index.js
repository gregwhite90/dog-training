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

app.get('/sign-s3', (req, res) => {
    const s3 = new aws.S3();
    const { file_name, file_type } = req.query;
    // TODO: prefix file name with user_id/ ?
    const s3_bucket = process.env.S3_BUCKET;
    const s3_params = {
        Bucket: s3_bucket,
        Key: file_name,
        Expires: 60,
        ContentType: file_type,
    };

    s3.getSignedUrl('putObject', s3_params, (err, data) => {
        if (err) {
            // TODO: error-handling code
            console.log(err);
            return res.end();
        }
        const returnData = {
            signedRequest: data,
            url: `https://${s3_bucket}.s3.amazonaws.com/${fileName}`,
        };
        res.write(JSON.stringify(returnData));
        res.end();
    });
});

app.listen(process.env.PORT || 5000);
