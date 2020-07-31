const aws = require('aws-sdk');
aws.config.region = process.env.AWS_REGION;
const S3 = new aws.S3();

function getS3SignedGetUrl(key, params = {}) {
    const s3_params = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: key,
        ...params,
    };
    // TODO: error-handling code
    return { signedRequest: S3.getSignedUrl('getObject', s3_params) };
}

function getS3SignedPutUrl(key, params = {}) {
    const s3_params = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: key,
        Expires: 60,
        ...params,
    };
    // TODO: error-handling code
    return { signedRequest: S3.getSignedUrl('putObject', s3_params) };
}

function signS3GetHandler(req, res) {
    // TODO: implement stricter authorization mechanism? issue is if the
    // dog is shared among multiple users for example, they need to see the images

    const { file_name } = req.query;
    const key = decodeURIComponent(file_name);

    // TODO: check that the user is asking for access to the right image
    const { signedRequest } = getS3SignedGetUrl(key);

    // TODO: error-handling
    if (signedRequest) {
        console.log({signedRequest});
        res.json({signedRequest});
    }
}

function signS3PutHandler(req, res) {
    // TODO: implement stricter authorization mechanism? issue is if the
    // dog is shared among multiple users for example, they need to see the images

    const { file_name, file_type, hash } = req.query;
    const params = {
        'ContentType': decodeURIComponent(file_type),
        'ContentMD5': hash,
    };

    // Prefix the path to avoid collisions
    const user_id = encodeURIComponent(req.user.sub);
    const date = new Date()
    const timestamp = encodeURIComponent(date.toISOString());
    const key =`user_uploads/${user_id}/${timestamp}/${file_name}`;

    // TODO: check that the user is asking for access to the right image
    const { signedRequest } = getS3SignedPutUrl(key, params);

    // TODO: error-handling
    if (signedRequest) {
        console.log({signedRequest});
        res.json({signedRequest, key});
    }
}

module.exports = {
    signS3PutHandler,
    signS3GetHandler,
};
