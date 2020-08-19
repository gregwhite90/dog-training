import { User } from '../data-layer/auth0/models/User';
import { PendingInvitation } from '../data-layer/db/models/PendingInvitation';
import type { Context } from '../context';
import type {
    PrismaClient,
    dogs,
    dogsCreateInput,
    user_dog_role,
    behaviors,
    behaviorsCreateWithoutDogsInput,
    pending_invitations,
    pending_invitationsCreateWithoutDogsInput,
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

    async get_all_dogs(
        { id }: { id: string }
    ): Promise<{ id: number, user_role: user_dog_role }[] | null> {
        // TODO: figure out auth
        if (id !== this.user_id) {
            throw new Error('Attempted unauthorized access.');
        }
        return this.prisma.user_dogs.findMany({
            where: {
                user_id: id,
            },
            select: {
                dog_id: true,
                user_role: true,
            }
        }).then(dogs => {
            return dogs.map(({ dog_id, user_role }) => ({
                id: dog_id,
                user_role,
            }));
        });
        // TODO: deal with null return value
    }

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
    // TODO: check at the call site for correct calling
    async create_one({
        dog_id,
        input
    }: {
        dog_id: string,
        input: pending_invitationsCreateWithoutDogsInput
    }): Promise<GraphQLObj<pending_invitations> | null> {
        // TODO: authorization check
        return this.prisma.pending_invitations.create({
            data: {
                dogs: {
                    connect: {
                        id: parseInt(dog_id),
                    }
                },
                ...input,
            },
        }).then(pending_invitation => {
            return pending_invitation
                ? this.to_GraphQL_object(pending_invitation)
                : null;
        });
    }

    // TODO: convert rest to prisma

    async get_one({ id }: { id: string }): Promise<GraphQLObj<pending_invitations> | null> {
        // TODO: implement auth
        return this.prisma.pending_invitations.findOne({
            where: {
                id: parseInt(id),
            }
        }).then(pending_invitation => {
            return pending_invitation ? this.to_GraphQL_object(pending_invitation) : null;
        });
        // TODO: catch rejected promise
        // TODO: handle null return
        // TODO: reject promise if no matching ID?
    }

    // TODO: clarify that these are user ids
    async get_all_sent(
        { id }: { id: string }
    ): Promise<GraphQLObj<pending_invitations>[] | null> {
        return this.prisma.pending_invitations.findMany({
            where: {
                invited_by: id
            },
        }).then(pending_invitations => {
            return pending_invitations.map(pending_invitation =>
                this.to_GraphQL_object(pending_invitation))
        });
    }

    async get_all_received(
        { id }: { id: string }
    ): Promise<GraphQLObj<pending_invitations>[] | null> {
        const { email } = await User.get_email({ id });
        // TODO: use email_verified?
        return this.prisma.pending_invitations.findMany({
            where: {
                invitee_email: email,
            },
        }).then(pending_invitations => {
            return pending_invitations.map(pending_invitation =>
                this.to_GraphQL_object(pending_invitation))
        });
    }

    async get_all_sent_viewer() {
        return this.get_all_sent({ id: this.user_id })
    }

    async get_all_received_viewer() {
        return this.get_all_received({ id: this.user_id });
    }

    async accept_invitation(
        { invitation_id, user_id }: { invitation_id: string, user_id: string }
    ) {
        return PendingInvitation.accept_invitation({ invitation_id, user_id });
    }
}

class AuthBehavior extends AuthModel {
    constructor(context: Context) {
        super(context);
        this.graphql_typename = 'Behavior';
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
