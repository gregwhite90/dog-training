const { User } = require('../data-layer/auth0/models/User');
const { Dog } = require('../data-layer/db/models/Dog');

// TODO: decide if want to do these as static methods (these classes don't hold meaningful state).

function getUserId(context) {
    console.log('In get user id helper in business layer');
    console.log(context);
    return context.user;
}

class AuthUser {
    constructor(context) {
        console.log('creating auth user');
        this.user_model = new User();
        this.user_id = getUserId(context);
        // TODO: propagate the error if necessary.
    }

    // TODO: wrap the User methods that require authentication and authorization
    async get_one({id}) {
        // TODO: confirm error handling strategy
        if (id !== await this.user_id) {
            throw new Error('Attempted unauthorized access.');
        }
        return this.user_model.get_one({id});
    }

    async get_viewer() {
        // TODO: error handling code if unauthenticated?
        return this.user_model.get_one({id: await this.user_id});
    }

    async get_all_dogs({id}) {
        if (id !== await this.user_id) {
            throw new Error('Attempted unauthorized access.');
        }
        var dog_model = new Dog();
        return dog_model.get_all_dogs_for_user({id});
    }
}

class AuthDog {
    constructor(context) {
        console.log('creating auth dog');
        this.dog_model = new Dog();
        this.user_id = getUserId(context);
    }

    async create_one({name, picture}) {
        // TODO: only needs authentication
        const new_dog = await this.dog_model.create_one({name, picture});
        // TODO: take the return value of dog and insert a row into the user_dogs table for current user
        const user_dog_relation = this.dog_model.add_to_user({
            dog_id: new_dog.id,
            user_id: await this.user_id,
            user_role: 'OWNER',
        });
        // TODO: figure out return value
    }

    async get_one({id}) {
        const auth = await this.dog_model.check_authorization_for_dog({
            dog_id: id,
            user_id: await this.user_id,
        });
        // TODO: handle authorization failure
        return this.dog_model.get_one({id});
    }

    async get_all_users({id}) {
        const auth = await this.dog_model.check_authorization_for_dog({
            dog_id: id,
            user_id: await this.user_id,
        });
        // TODO: handle authorization failure
        return this.dog_model.get_all_users({id});
    }
}

module.exports = {
    AuthUser,
    AuthDog,
};
