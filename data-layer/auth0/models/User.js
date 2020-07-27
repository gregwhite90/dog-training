const { ManagementClient } = require('auth0');

const auth0 = new ManagementClient({
    domain: process.env.AUTH0_DOMAIN,
    clientId: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    scope: 'read:users',
});

class User {

    async get_one_by_email({email}) {
        const users = await auth0.getUsersByEmail(email);
        // TODO: error-handling code
        return users[0];
    }

    async get_one({id}) {
        const user = await auth0.getUser({id});
    }
}

module.exports = {
    User,
}
