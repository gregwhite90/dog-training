const { getS3SignedGetUrl } = require('./aws');
const sgMail = require('@sendgrid/mail');

function sendInvitation({user, dog, invitee}) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    dog.picture = getS3SignedGetUrl(dog.picture, {Expires: 60 * 60 * 24 * 7});
    // body of request needs to be:
    // user {name, picture?}
    // dog {name, picture}
    // invitee
    // Then request picture URL, update picture, send off to sendgrid template
    // Recommended to async call this from the client with a fetch
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
}

module.exports = {
    sendInvitation,
};
