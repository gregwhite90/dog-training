const { getS3SignedGetUrl } = require('./aws');
const sgMail = require('@sendgrid/mail');

async function sendInvitation({user, dog, invitee}) {
    console.log(`In sendInvitation with user ${JSON.stringify(user)} dog ${JSON.stringify(dog)} invitee ${JSON.stringify(invitee)}`);
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // body of request needs to be:
    // user {name}
    // dog {name}
    // invitee
    // Then request picture URL, update picture, send off to sendgrid template
    // Recommended to async call this from the client with a fetch
    const msg = {
        to: invitee,
        from: process.env.SENDGRID_SENDER,
        asm: {
            group_id: process.env.SENDGRID_UNSUBSCRIBE_GROUP_ID,
        },
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
