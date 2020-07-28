const { ManagementClient } = require('auth0');

const auth0 = new ManagementClient({
    domain: process.env.AUTH0_DOMAIN,
    clientId: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    scope: 'read:users',
});

class User {

    // TODO: can the interface be imported (requires knowledge of the GQL schema)
    /**
     * Generate GraphQL-layer-friendly object from raw persistence layer output
     */
    static create_object(raw_user) {
        return {
            _node_type: 'User',
            id: raw_user.user_id,
            name: raw_user.name,
            picture: raw_user.picture, // TODO: confirm treatment if null
        };
    }


    /**
     * Read User-only operations
     */

    static async get_one({id}) {
        return auth0.getUser({id});
    }
}

module.exports = {
    User,
}
