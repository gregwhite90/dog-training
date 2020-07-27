const { ManagementClient } = require('auth0');

const auth0 = new ManagementClient({
    domain: process.env.AUTH0_DOMAIN,
    clientId: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    scope: 'read:users',
});

class User {

    async get_one({id}) {
        console.log('Calling out to Auth0');
        const user = auth0.getUser({id});
        // TODO: figure out return value
        return user;
    }
}

module.exports = {
    User,
}
