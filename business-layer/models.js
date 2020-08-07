const { User } = require('../data-layer/auth0/models/User');
const { Dog } = require('../data-layer/db/models/Dog');
const { PendingInvitation } = require('../data-layer/db/models/PendingInvitation');

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
        return Dog.get_all_dog_ids_and_roles_for_user({id});
    }

    async get_all_dogs_for_viewer() {
        return this.get_all_dogs({id: this.user_id});
    }

    async get_all_users_by_email({email}) {
        return User.get_all_by_email({email})
                   .then(users => {
                       if (users.length === 1 && users[0].email_verified) {
                           // Found the user
                       }
                   });
    }

    async get_email({id}) {
        return User.get_email({id});
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
        return Dog.get_all_user_ids_and_roles({id});
    }

    async edit_one({id, name, picture}) {
        return Dog.edit_one({id, name, picture})
                  .then(Dog.create_object)
    }
}

class AuthPendingInvitation extends AuthModel {
    constructor(context) {
        super(context);
        this.context = context;
        console.log(`creating auth pending invitation with id ${this.user_id}, email ${this.user_email}`);
    }

    // TOOD: authorization checks

    async create_one({invitee_email, invited_by, dog_id, user_role}) {
        return PendingInvitation.create_one({invitee_email, invited_by, dog_id, user_role});
    }

    async get_one({id}) {
        return PendingInvitation.get_one({id});
    }

    async get_all_sent({id}) {
        return PendingInvitation.get_sent_by_id({id});
    }

    async get_all_received({id}) {
        const user_model = new AuthUser(this.context);
        const { email, email_verified } = await user_model.get_email({id});
        // TODO: use email_verified
        return PendingInvitation.get_received_by_email({email});
    }

    async get_all_sent_viewer() {
        return this.get_all_sent({id: this.user_id})
    }

    async get_all_received_viewer() {
        return this.get_all_received({email: this.user_email});
    }
}

module.exports = {
    AuthUser,
    AuthDog,
    AuthPendingInvitation,
};
