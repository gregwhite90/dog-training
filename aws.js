const aws = require('aws-sdk');
aws.config.region = process.env.AWS_REGION;

function getS3SignedUrl(key, file_type, operation) {
    console.log(`In getS3SignedUrl for operation ${operation} with key ${key} of type ${file_type}`);
    const s3 = new aws.S3();
    const s3_common_params = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: key,
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

    console.log(`Going for signed requests`);

    // TODO: error-handling code
    return { signedRequest: s3.getSignedUrl(operation, s3_params) };
}

function signS3Handler(req, res) {
    // TODO: implement stricter authorization mechanism? issue is if the
    // dog is shared among multiple users for example, they need to see the images

    const { file_name, file_type, operation } = req.query;
    let key = file_name;

    // If user is uploading a new file, prefix the path to avoid collisions
    if (operation === 'putObject') {
        const user_id = encodeURIComponent(req.user.sub);
        key =`/user_uploads/${user_id}/${file_name}`;
    }

    if (!operation || !(operation === 'getObject' || operation === 'putObject')) {
        console.log(`Invalid operation: ${operation}`);
        // TODO: send something back?
        res.end();
    }
    // TODO: check that the user is asking for access to the right image
    const { error, signedRequest } = getS3SignedUrl(key, file_type, operation);

    if (error) {
        console.log(error);
        res.end();
    }
    if (signedRequests) {
        console.log({signedRequest});
        res.json({signedRequest, key});
    }

}

module.exports = {
    signS3Handler,
};
