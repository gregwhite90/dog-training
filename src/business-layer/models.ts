import { User } from '../data-layer/auth0/models/User';
import { Dog } from '../data-layer/db/models/Dog';
import { PendingInvitation } from '../data-layer/db/models/PendingInvitation';
import { Behavior } from '../data-layer/db/models/Behavior';
import type { Context } from '../context';
import type {
    PrismaClient,
    dogs,
    dogsCreateInput,
    user_dog_role,
    behaviors,
    behaviorsCreateWithoutDogsInput,
} from '@prisma/client';

// TODO: clean up the plural throughout
// TODO: clean up prisma typing
// TODO: figure out if want to send GQL objects or what up layers

interface IAuthModel {
    user_id: string,
    prisma: PrismaClient,
    graphql_typename: string;
}

type GraphQLObj<T extends object> = T & { __typename: string }

class AuthModel implements IAuthModel {

    declare user_id: string;
    declare prisma: PrismaClient;
    declare graphql_typename: string;

    constructor(context: Context) {
        this.user_id = context.user.id;
        this.prisma = context.prisma;
    }

    to_GraphQL_object<T extends object>(raw_obj: T): GraphQLObj<T> {
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

    async create_one(
        input: dogsCreateInput
    ): Promise<GraphQLObj<dogs> | null> {
        // TODO: only needs authentication
        // TODO: take the return value of dog and insert a row into the user_dogs table for current user
        return this.prisma.user_dogs.create({
            data: {
                dogs: {
                    create: {
                        ...input
                    },
                },
                user_id: this.user_id,
                user_role: 'OWNER',
            },
            select: {
                dogs: true,
            }
        }).then(dogs => {
            return dogs && dogs.dogs ? this.to_GraphQL_object(dogs.dogs) : null
        });
        // TODO: confirm return value
    }

    async get_one({ id }: { id: string }): Promise<GraphQLObj<dogs> | null> {
        // TODO: convert auth to prisma as well. implement auth
        // TODO: handle authorization failure
        return this.prisma.dogs.findOne({
            where: {
                id: parseInt(id),
            }
        }).then(dog => {
            // TODO: handle null dog
            return dog ? this.to_GraphQL_object(dog) : null;
        });
        // TODO: catch rejected promise
        // TODO: reject promise if no matching ID?
    }

    // TODO: confirm the return value
    async get_all_users(
        { id }: { id: string }
    ): Promise<{ id: string, user_role: user_dog_role }[] | null> {
        // TODO: figure out auth
        // TODO: handle authorization failure
        return this.prisma.user_dogs.findMany({
            where: {
                dog_id: parseInt(id),
            },
            select: {
                user_id: true,
                user_role: true,
            }
        }).then(users => {
            return users.map(({ user_id, user_role }) => ({
                id: user_id,
                user_role,
            }));
        });
        // TODO: deal with null return value
    }

    async edit_one(
        { id, name, picture }: {
            id: string,
            name?: string | null,
            picture: string | null
        }): Promise<GraphQLObj<dogs> | null> {
        // TODO: convert to prisma
        return await this.prisma.dogs.update({
            where: {
                id: parseInt(id),
            },
            data: {
                name,
                picture,
            },
        }).then(dog => {
            return dog ? this.to_GraphQL_object(dog) : null;
        });
    }

    async get_all_behavior_ids(
        { id }: { id: string }
    ): Promise<{ id: number }[] | null> {
        return await this.prisma.behaviors.findMany({
            where: {
                dog_id: parseInt(id),
            },
            select: {
                id: true,
            },
        });
    }
}

// TODO: figure out the email situation/context
// TODO: figure out all the connections situations
class AuthPendingInvitation extends AuthModel {
    constructor(context: Context) {
        super(context);
        this.graphql_typename = 'PendingInvitation';
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

    // TODO: note that these are user ids
    async get_all_sent({ id }) {
        return PendingInvitation.get_sent_by_id({ id });
    }

    async get_all_received({ id }) {
        const { email, email_verified } = await User.get_email({ id });
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

    async create_one({
        dog_id,
        input,
    }: {
        dog_id: string,
        input: behaviorsCreateWithoutDogsInput,
    }): Promise<GraphQLObj<behaviors> | null> {
        return this.prisma.behaviors.create({
            data: {
                dogs: {
                    connect: {
                        id: parseInt(dog_id)
                    }
                },
                ...input
            },
        }).then(behavior => {
            return behavior
                ? this.to_GraphQL_object(behavior)
                : null;
        });
    }

    // TODO: authentication and authorization strategy
    async get_one({ id }: { id: string }): Promise<GraphQLObj<behaviors> | null> {
        // TODO: confirm error handling strategy
        return this.prisma.behaviors.findOne({
            where: {
                id: parseInt(id),
            }
        }).then(behavior => {
            return behavior
                ? this.to_GraphQL_object(behavior)
                : null;
        });
    }
}

export {
    AuthUser,
    AuthDog,
    AuthPendingInvitation,
    AuthBehavior,
};
