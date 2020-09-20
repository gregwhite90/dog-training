import { User } from '../data-layer/auth0/models/User';
import { PendingInvitation } from '../data-layer/db/models/PendingInvitation';
import type { Context } from '../context';
import type {
    PrismaClient,
    dogs,
    dogsCreateInput,
    user_dog_role,
    user_training_session_role,
    behaviors,
    behaviorsCreateWithoutDogsInput,
    pending_invitations,
    pending_invitationsCreateWithoutDogsInput,
    training_stages,
    training_stagesCreateWithoutBehaviorsInput,
    training_sessions,
    training_sessionsCreateWithoutDogsInput,
    training_progress, // TODO: confirm
    training_progressCreateInput,
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

    async get_all_training_sessions(
        { id }: { id: string }
    ): Promise<{ id: number, user_role: user_training_session_role }[] | null> {
        // TODO: figure out auth
        if (id !== this.user_id) {
            throw new Error('Attempted unauthorized access.');
        }
        return this.prisma.user_training_sessions.findMany({
            where: {
                user_id: id,
            },
            select: {
                training_session_id: true,
                user_role: true,
            }
        }).then(training_sessions => {
            return training_sessions.map(({ training_session_id, user_role }) => ({
                id: training_session_id,
                user_role,
            }));
        });
        // TODO: deal with null return value
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

    async get_all_training_session_ids(
        { id }: { id: string }
    ): Promise<{ id: number }[] | null> {
        return await this.prisma.training_sessions.findMany({
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

    async get_all_training_stage_ids(
        { id }: { id: string }
    ): Promise<{ id: number }[] | null> {
        return await this.prisma.training_stages.findMany({
            where: {
                behavior_id: parseInt(id),
            },
            select: {
                id: true,
            },
            orderBy: {
                seq: 'asc'
            }
        });
    }
}

class AuthTrainingStage extends AuthModel {
    constructor(context: Context) {
        super(context);
        this.graphql_typename = 'TrainingStage';
        // TODO: propagate the error if necessary.
    }

    async create_one({
        behavior_id,
        input,
    }: {
        behavior_id: string,
        input: training_stagesCreateWithoutBehaviorsInput,
    }): Promise<GraphQLObj<training_stages> | null> {
        console.log('in AuthTrainingStage.create_one');
        console.log(input);
        return this.prisma.training_stages.create({
            data: {
                behaviors: {
                    connect: {
                        id: parseInt(behavior_id)
                    }
                },
                ...input
            },
        }).then(training_stage => {
            return training_stage
                ? this.to_GraphQL_object(training_stage)
                : null;
        });
    }

    // TODO: authentication and authorization strategy
    async get_one({ id }: { id: string }): Promise<GraphQLObj<training_stages> | null> {
        // TODO: confirm error handling strategy
        return this.prisma.training_stages.findOne({
            where: {
                id: parseInt(id),
            }
        }).then(training_stage => {
            return training_stage
                ? this.to_GraphQL_object(training_stage)
                : null;
        });
    }
}

class AuthTrainingSession extends AuthModel {
    constructor(context: Context) {
        super(context);
        this.graphql_typename = 'TrainingSession';
        // TODO: propagate the error if necessary.
    }

    async create_one({
        user_id,
        dog_id,
        input,
    }: {
        user_id: string,
        dog_id: string,
        input: training_sessionsCreateWithoutDogsInput,
    }): Promise<GraphQLObj<training_sessions> | null> {
        return this.prisma.training_sessions.create({
            data: {
                dogs: {
                    connect: {
                        id: parseInt(dog_id),
                    },
                },
                user_training_sessions: {
                    create: {
                        user_id: user_id,
                        user_role: 'MAINTAINER',
                    },
                },
                ...input,
            },
        }).then(training_session => {
            return training_session
                ? this.to_GraphQL_object(training_session)
                : null;
        });
    }

    // TODO: authentication and authorization strategy
    async get_one({ id }: { id: string }): Promise<GraphQLObj<training_sessions> | null> {
        // TODO: confirm error handling strategy
        return this.prisma.training_sessions.findOne({
            where: {
                id: parseInt(id),
            }
        }).then(training_session => {
            return training_session
                ? this.to_GraphQL_object(training_session)
                : null;
        });
    }

    // TODO: also include the data for the edge
    async get_all_training_stage_ids(
        { id }: { id: string }
    ): Promise<{
        id: number,
        training_progress: training_progress,
    }[] | null> {
        return await this.prisma.training_progress.findMany({
            where: {
                training_session_id: parseInt(id),
            },
            orderBy: {
                seq: 'asc'
            }
        }).then(training_progresses => training_progresses.map(training_progress => ({
            id: training_progress.training_stage_id,
            training_progress,
        })));
    }
}

class AuthTrainingProgress extends AuthModel {
    constructor(context: Context) {
        super(context);
        this.graphql_typename = 'TrainingProgress';
        // TODO: propagate the error if necessary.
    }

    // TODO: figure out where the type signature and type checking should live.
    async create_one({
        input,
    }: {
        input: training_progressCreateInput,
    }): Promise<GraphQLObj<training_progress> | null> {
        return this.prisma.training_progress.create({
            data: {
                ...input,
            },
        }).then(training_stage => {
            return training_stage
                ? this.to_GraphQL_object(training_stage)
                : null;
        });
    }

    // TODO: authentication and authorization strategy
    async get_one({ training_session_id, seq }: { training_session_id: string, seq: number }): Promise<GraphQLObj<training_progress> | null> {
        // TODO: confirm error handling strategy
        return this.prisma.training_progress.findOne({
            where: {
                training_session_id_seq: {
                    training_session_id: parseInt(training_session_id),
                    seq,
                },
            }
        }).then(training_progress => {
            return training_progress
                ? this.to_GraphQL_object(training_progress)
                : null;
        });
    }
}

export {
    AuthUser,
    AuthDog,
    AuthPendingInvitation,
    AuthBehavior,
    AuthTrainingStage,
    AuthTrainingSession,
    AuthTrainingProgress,
};
