const { User } = require('../data-layer/auth0/models/User');
const { Dog } = require('../data-layer/db/models/Dog');

class AuthModel {
    constructor(context) {
        this.user_id = context.user.id;
    }
}

class AuthUser extends AuthModel {
    constructor(context) {
        super(context);
        console.log('creating auth user');
        // TODO: propagate the error if necessary.
    }

    // TODO: wrap the User methods that require authentication and authorization
    async get_one({id}) {
        // TODO: confirm error handling strategy
        if (id !== this.user_id) {
            throw new Error('Attempted unauthorized access.');
        }
        return User.get_one({id});
    }

    async get_viewer() {
        // TODO: error handling code if unauthenticated?
        return User.get_one({id: this.user_id});
    }

    async get_all_dogs({id}) {
        if (id !== this.user_id) {
            throw new Error('Attempted unauthorized access.');
        }
        return Dog.get_all_dogs_for_user({id});
    }
}

class AuthDog extends AuthModel {
    constructor(context) {
        super(context);
        console.log('creating auth dog');
    }

    async create_one({name, picture}) {
        // TODO: only needs authentication
        const new_dog = await Dog.create_one({name, picture});
        // TODO: take the return value of dog and insert a row into the user_dogs table for current user
        const user_dog_relation = Dog.add_to_user({
            dog_id: new_dog.id,
            user_id: this.user_id,
            user_role: 'OWNER',
        });
        // TODO: figure out return value
    }

    async get_one({id}) {
        const auth = await Dog.check_authorization_for_dog({
            dog_id: id,
            user_id: this.user_id,
        });
        // TODO: handle authorization failure
        return Dog.get_one({id});
    }

    async get_all_users({id}) {
        const auth = Dog.check_authorization_for_dog({
            dog_id: id,
            user_id: this.user_id,
        });
        // TODO: handle authorization failure
        return Dog.get_all_users({id});
    }
}

module.exports = {
    AuthUser,
    AuthDog,
};
