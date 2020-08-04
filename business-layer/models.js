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
        return User.get_one({id})
                   .then(User.create_object);
    }

    async get_viewer() {
        return this.get_one({id: this.user_id});
    }

    async get_all_dogs({id}) {
        if (id !== this.user_id) {
            throw new Error('Attempted unauthorized access.');
        }
        return Dog.get_all_dogs_for_user({id})
                  .then(dogs => dogs.map(Dog.create_object));
    }

    async get_all_dogs_for_viewer() {
        return this.get_all_dogs({id: this.user_id})
                   .then(dogs => dogs.map(Dog.create_object));
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
        const user_dog_relation = await Dog.add_to_user({
            dog_id: new_dog.id,
            user_id: this.user_id,
            user_role: 'OWNER',
        });
        return Dog.create_object(new_dog);
        // TODO: figure out return value
    }

    async get_one({id}) {
        const auth = await Dog.check_authorization_for_dog({
            dog_id: id,
            user_id: this.user_id,
        });
        // TODO: handle authorization failure
        return Dog.get_one({id})
                  .then(Dog.create_object);
    }

    async get_all_users({id}) {
        const auth = await Dog.check_authorization_for_dog({
            dog_id: id,
            user_id: this.user_id,
        });
        // TODO: handle authorization failure
        const ids = await Dog.get_all_user_ids({id});
        return Promise.all(ids.map(id => User.get_one({id})))
                      .then(raw_users => raw_users.map(User.create_object));
    }

    async edit_one({id, name, picture}) {
        return Dog.edit_one({id, name, picture})
                  .then(Dog.create_object)
    }
}

module.exports = {
    AuthUser,
    AuthDog,
};
