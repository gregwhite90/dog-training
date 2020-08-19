import { User } from '../data-layer/auth0/models/User';
import { Dog } from '../data-layer/db/models/Dog';
import { PendingInvitation } from '../data-layer/db/models/PendingInvitation';
import { Behavior } from '../data-layer/db/models/Behavior';
import type { Context } from '../context';
import type {
    PrismaClient,
    dogsWhereUniqueInput,
    dogs,
} from '@prisma/client';

interface IAuthModel {
    user_id: string,
    prisma: PrismaClient,
    graphql_typename: string;
}

class AuthModel implements IAuthModel {

    declare user_id: string;
    declare prisma: PrismaClient;
    declare graphql_typename: string;

    constructor(context: Context) {
        this.user_id = context.user.id;
        this.prisma = context.prisma;
    }

    to_GraphQL_object<T extends object>(raw_obj: T): T & { __typename: string } {
        return {
            __typename: this.graphql_typename,
            ...raw_obj,
        };
    }
}

class AuthUser extends AuthModel {
    constructor(context: Context) {
        super(context);
        this.graphql_typename = 'User';
        console.log('creating auth user');
        // TODO: propagate the error if necessary.
    }

    // TODO: wrap the User methods that require authentication and authorization
    async get_one({ id }) {
        // TODO: confirm error handling strategy
        return User.get_one({ id })
            .then(User.create_object);
    }

    async get_viewer() {
        return this.get_one({ id: this.user_id });
    }

    async get_all_dogs({ id }) {
        if (id !== this.user_id) {
            throw new Error('Attempted unauthorized access.');
        }
        return Dog.get_all_dog_ids_and_roles_for_user({ id });
    }

    async get_all_dogs_for_viewer() {
        return this.get_all_dogs({ id: this.user_id });
    }

    async get_all_by_email({ email }) {
        return User.get_all_by_email({ email });
    }

    async get_email({ id }) {
        return User.get_email({ id });
    }
}

class AuthDog extends AuthModel {
    constructor(context: Context) {
        super(context);
        this.graphql_typename = 'Dog';
        console.log('creating auth dog');
    }

    async create_one({ name, picture }) {
        // TODO: only needs authentication
        const new_dog = await Dog.create_one({ name, picture });
        // TODO: take the return value of dog and insert a row into the user_dogs table for current user
        const user_dog_relation = await Dog.add_to_user({
            dog_id: new_dog.id,
            user_id: this.user_id,
            user_role: 'OWNER',
        });
        return Dog.create_object(new_dog);
        // TODO: figure out return value
    }

    async get_one(where: dogsWhereUniqueInput): Promise<dogs | null> {
        const auth = await Dog.check_authorization_for_dog({
            dog_id: where.id,
            user_id: this.user_id,
        });
        // TODO: handle authorization failure
        return this.prisma.dogs.findOne({
            where,
        }).then(dog => {
            // TODO: handle null dog
            return dog ? this.to_GraphQL_object(dog) : null;
        });
        // TODO: catch rejected promise
        // TODO: reject promise if no matching ID?
    }

    async get_all_users({ id }) {
        const auth = await Dog.check_authorization_for_dog({
            dog_id: id,
            user_id: this.user_id,
        });
        // TODO: handle authorization failure
        return Dog.get_all_user_ids_and_roles({ id });
    }

    async edit_one({ id, name, picture }) {
        return Dog.edit_one({ id, name, picture })
            .then(Dog.create_object)
    }

    async get_all_behavior_ids({ id }) {
        return Dog.get_all_behavior_ids({ id });
    }
}

// TODO: figure out the email situation/context
class AuthPendingInvitation extends AuthModel {

    declare context: Context;

    constructor(context: Context) {
        super(context);
        this.graphql_typename = 'PendingInvitation';
        this.context = context;
    }

    // TOOD: authorization checks

    async create_one({ invitee_email, dog_id, user_role }) {
        return PendingInvitation.create_one({
            invitee_email,
            invited_by: this.user_id,
            dog_id,
            user_role
        });
    }

    async get_one({ id }) {
        return PendingInvitation.get_one({ id });
    }

    async get_all_sent({ id }) {
        return PendingInvitation.get_sent_by_id({ id });
    }

    async get_all_received({ id }) {
        const user_model = new AuthUser(this.context);
        const { email, email_verified } = await user_model.get_email({ id });
        // TODO: use email_verified
        return PendingInvitation.get_received_by_email({ email });
    }

    async get_all_sent_viewer() {
        return this.get_all_sent({ id: this.user_id })
    }

    async get_all_received_viewer() {
        return this.get_all_received({ id: this.user_id });
    }

    async accept_invitation({ invitation_id, user_id }) {
        return PendingInvitation.accept_invitation({ invitation_id, user_id });
    }
}

class AuthBehavior extends AuthModel {
    constructor(context: Context) {
        super(context);
        this.graphql_typename = 'Behavior';
        console.log('creating auth behavior');
        // TODO: propagate the error if necessary.
    }

    async create_one(input) {
        console.log(`Creating behavior`);
        console.log(input);
        return Behavior.create_one(input).then(Behavior.create_object);
    }

    // TODO: authentication and authorization strategy
    async get_one({ id }) {
        // TODO: confirm error handling strategy
        return Behavior.get_one({ id })
            .then(Behavior.create_object);
    }
}

export {
    AuthUser,
    AuthDog,
    AuthPendingInvitation,
    AuthBehavior,
};
