// TODO: all connection types
// TODO: confirm all types from lower layers
// TODO: type all lower layers
// TODO: behavior and pending invitation types
// TODO: camelCase for pending invitations sent and received?

import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLEnumType,
    GraphQLBoolean,
    GraphQLInt,
} from 'graphql';

import {
    nodeDefinitions,
    fromGlobalId,
    globalIdField,
    connectionArgs,
    connectionDefinitions,
    connectionFromPromisedArray,
} from 'graphql-relay';

import {
    GraphQLDateTime,
} from 'graphql-scalars';

import {
    AuthUser,
    AuthDog,
    AuthPendingInvitation,
    AuthBehavior,
    AuthTrainingStage,
    AuthTrainingSession,
} from '../../../business-layer/models';

import type {
    User,
    Dog,
} from '../../../generated/graphql';

import {
    Context,
} from '../../../context';

const { nodeInterface, nodeField } = nodeDefinitions<Context>(
    // Resolve a global ID to its object
    (globalID, context) => {
        const { type, id } = fromGlobalId(globalID);
        let model;
        switch (type) {
            case 'User':
                model = new AuthUser(context);
                break;
            case 'Dog':
                model = new AuthDog(context);
                break;
            case 'PendingInvitation':
                model = new AuthPendingInvitation(context);
                break;
            case 'Behavior':
                model = new AuthBehavior(context);
                break;
            case 'TrainingStage':
                model = new AuthTrainingStage(context);
                break;
            case 'TrainingSession':
                model = new AuthTrainingSession(context);
                break;
            default:
                console.log(`Unknown type in node resolver: ${type}`);
                break;
        }
        return model.get_one({ id });
    },
    // TODO: Believe may be possible to have each type resolve its own type.
    // otherwise, need to put an resolveType here
    /**
    (obj) => {
        switch (obj._node_type) {
            case 'User':
                return userType;
            case 'Dog':
                return dogType;
            case 'PendingInvitation':
                return pendingInvitationType;
            case 'Behavior':
                return behaviorType;
            default:
                console.log(`Unknown obj in obj -> type node resolver: ${obj}`);
                break;
        }
    },
    */
);

/**
 * Concrete types implementing Node
 */
// TODO: add training sessions connection
const userType = new GraphQLObjectType({
    name: 'User',
    interfaces: [nodeInterface],
    fields: () => ({
        id: globalIdField(),
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        picture: {
            type: GraphQLString,
            description: 'URL of the profile image of this user.',
        },
        dogs: {
            type: userToDogConnection,
            args: connectionArgs,
            resolve: (user: User, args, context: Context) => {
                const user_model = new AuthUser(context);
                return connectionFromPromisedArray(user_model.get_all_dogs({ id: user.id }), args);
            },
        },
        pending_invitations_sent: {
            type: pendingInvitationConnection,
            args: connectionArgs,
            resolve: (user: User, args, context: Context) => {
                const pending_invitation_model = new AuthPendingInvitation(context);
                return connectionFromPromisedArray(
                    pending_invitation_model.get_all_sent({ id: user.id }), args
                );
            },
        },
        pending_invitations_received: {
            type: pendingInvitationConnection,
            args: connectionArgs,
            resolve: (user: User, args, context: Context) => {
                const pending_invitation_model = new AuthPendingInvitation(context);
                return connectionFromPromisedArray(
                    pending_invitation_model.get_all_received({ id: user.id }), args
                );
            }
        },
        training_sessions: {
            type: new GraphQLNonNull(userToTrainingSessionConnection),
            args: connectionArgs,
            resolve: (user: User, args, context: Context) => {
                const user_model = new AuthUser(context);
                return connectionFromPromisedArray(
                    user_model.get_all_training_sessions({ id: user.id }), args
                );
            },
        },
    }),
});

const dogTypeOwnedScalarFields = {
    name: {
        type: new GraphQLNonNull(GraphQLString),
    },
    picture: {
        type: GraphQLString,
        description: 'URL of the profile image of this dog.'
    },
};

const dogType = new GraphQLObjectType({
    name: 'Dog',
    interfaces: [nodeInterface],
    fields: () => ({
        id: globalIdField(),
        users: {
            type: dogToUserConnection,
            args: connectionArgs,
            resolve: (dog: Dog, args, context: Context) => {
                const dog_model = new AuthDog(context);
                // TODO: turn into getting all user ids
                // TODO: fix to match type returned from lower layers
                return connectionFromPromisedArray<{
                    id: string,
                    user_role: string,
                }>(
                    dog_model.get_all_users({ id: dog.id }),
                    args
                );
            },
        },
        behaviors: {
            type: behaviorConnection,
            args: connectionArgs,
            resolve: (dog: Dog, args, context: Context) => {
                const dog_model = new AuthDog(context);
                // TODO: confirm that IDs vs objects works correctly
                return connectionFromPromisedArray(
                    dog_model.get_all_behavior_ids({ id: dog.id }),
                    args
                );
            },
        },
        trainingSessions: {
            type: trainingSessionConnection,
            args: connectionArgs,
            resolve: (dog: Dog, args, context: Context) => {
                const dog_model = new AuthDog(context);
                return connectionFromPromisedArray(
                    dog_model.get_all_training_session_ids({ id: dog.id }),
                    args
                );
            },
        },
        ...dogTypeOwnedScalarFields,
    }),
});

const userDogRoleType = new GraphQLEnumType({
    name: 'UserDogRole',
    values: {
        OWNER: { value: 'OWNER' },
        TRAINER: { value: 'TRAINER' },
        VIEWER: { value: 'VIEWER' },
    }
});

const userRoleDescAndType = {
    description: 'The role the user plays for the dog.',
    type: userDogRoleType,
};

// TODO: make the node type non-null to get rid of chaining workaround
// TODO: figure out the edge type
const { connectionType: dogToUserConnection } = connectionDefinitions({
    name: 'DogToUser',
    nodeType: userType,
    resolveNode: (edge: { node: { id: string, user_role: string } }, args, context: Context) => {
        const user_model = new AuthUser(context);
        return user_model.get_one({ id: edge.node.id });
    },
    edgeFields: () => ({
        user_role: {
            ...userRoleDescAndType,
            resolve: (edge: { node: { id: string, user_role: string } }) => {
                console.log('in dog to user edge resolver');
                console.log(edge);
                // TODO: the edge types are wrong, they're not actually these
                return edge.node.user_role;
            },
        },
    }),
});

const { connectionType: userToDogConnection, edgeType: userToDogEdge } = connectionDefinitions({
    name: 'UserToDog',
    nodeType: dogType,
    resolveNode: (edge, args, context) => {
        console.log('in user to dog node resolver');
        console.log(edge);
        const dog_model = new AuthDog(context);
        return dog_model.get_one({ id: edge.node.id });
    },
    edgeFields: () => ({
        user_role: {
            ...userRoleDescAndType,
            resolve: (edge) => {
                console.log('in user to dog edge resolver');
                console.log(edge);
                return edge.node.user_role;
            },
        },
    }),
});


const pendingInvitationType = new GraphQLObjectType({
    name: 'PendingInvitation',
    interfaces: [nodeInterface],
    fields: () => ({
        id: globalIdField(),
        invitee_email: {
            type: new GraphQLNonNull(GraphQLString),
        },
        invited_by: {
            type: new GraphQLNonNull(userType),
            resolve: (pending_invitation, args, context: Context) => {
                const user_model = new AuthUser(context);
                return user_model.get_one({ id: pending_invitation.invited_by });
            }
        },
        user_role: {
            type: new GraphQLNonNull(userDogRoleType),
        },
        dog: {
            type: dogType,
            resolve: (pending_invitation, args, context: Context) => {
                const dog_model = new AuthDog(context);
                return dog_model.get_one({ id: pending_invitation.dog_id });
            }
        }
    }),
});

const {
    connectionType: pendingInvitationConnection,
    edgeType: pendingInvitationEdge
} = connectionDefinitions({
    name: 'PendingInvitation',
    nodeType: pendingInvitationType,
    resolveNode: (edge, args, context) => {
        const pending_invitation_model = new AuthPendingInvitation(context);
        // TODO: figure out return value
        return pending_invitation_model.get_one({ id: edge.node.id });
    },
    // TODO: decide if anything should go on the edge.
});

const incentiveMethodType = new GraphQLEnumType({
    name: 'IncentiveMethod',
    values: {
        LURE: { value: 'LURE' },
        SHAPE: { value: 'SHAPE' },
    }
});

const incentiveMethodDescAndType = {
    description: 'The method of incentivizing used to entice behavior before commands or hand signals are used.',
    type: incentiveMethodType,
};

const behaviorTypeOwnedScalarFields = {
    name: {
        type: new GraphQLNonNull(GraphQLString),
    },
    explanation: {
        type: GraphQLString,
        description: 'Explanation of the desired behavior in clear, plain language.'
    },
    incentive_method: incentiveMethodDescAndType,
    incentive_description: {
        type: GraphQLString,
        description: 'Description of the incentive method used in training.'
    },
    verbal_command: {
        type: GraphQLString,
        description: 'The verbal command used to cue this behavior.'
    },
    hand_signal: {
        type: GraphQLString,
        description: 'The hand signal used to cue this behavior.'
    },
    has_duration: {
        type: new GraphQLNonNull(GraphQLBoolean),
        description: 'Description of the shape used in training.'
    },
    release_command: {
        type: GraphQLString,
        description: 'The verbal command used to release this behavior.'
    },
};

// TODO: behavior from lower levels has just a dog_id
const behaviorType = new GraphQLObjectType({
    name: 'Behavior',
    interfaces: [nodeInterface],
    fields: () => ({
        id: globalIdField(),
        dog: {
            type: dogType,
            resolve: (behavior, args, context: Context) => {
                const dog_model = new AuthDog(context);
                return dog_model.get_one({ id: behavior.dog_id });
            }
        },
        trainingStages: {
            type: trainingStageConnection,
            args: connectionArgs,
            resolve: (behavior, args, context: Context) => {
                const behavior_model = new AuthBehavior(context);
                // TODO: confirm that IDs vs objects works correctly
                return connectionFromPromisedArray(
                    behavior_model.get_all_training_stage_ids({ id: behavior.id }),
                    args
                );
            },
        },
        ...behaviorTypeOwnedScalarFields,
    }),
});

const {
    connectionType: behaviorConnection,
    edgeType: behaviorEdge
} = connectionDefinitions({
    name: 'Behavior',
    nodeType: behaviorType,
    resolveNode: (edge, args, context) => {
        const behavior_model = new AuthBehavior(context);
        // TODO: figure out return value
        return behavior_model.get_one({ id: edge.node.id });
    },
    // TODO: decide if anything should go on the edge.
});

const rewardFrequencyType = new GraphQLEnumType({
    name: 'RewardFrequency',
    values: {
        CONTINUOUS: { value: 'CONTINUOUS' },
        INTERMITTENT: { value: 'INTERMITTENT' },
    }
});

const rewardFrequencyDescAndType = {
    description: 'How frequently successful behavior is rewarded.',
    type: rewardFrequencyType,
};

const trainingStageTypeOwnedScalarFields = {
    seq: {
        type: new GraphQLNonNull(GraphQLInt),
        description: 'The order within the sequence of training stages for this behavior',
    },
    incentive: {
        type: new GraphQLNonNull(GraphQLBoolean),
        description: 'Whether this stage includes an incentive method',
    },
    verbal: {
        type: new GraphQLNonNull(GraphQLBoolean),
        description: 'Whether this stage includes a verbal command',
    },
    hand: {
        type: new GraphQLNonNull(GraphQLBoolean),
        description: 'Whether this stage includes a hand signal',
    },
    reward_frequency: rewardFrequencyDescAndType,
};

// TODO: add training session connection? with data on the edge
const trainingStageType = new GraphQLObjectType({
    name: 'TrainingStage',
    interfaces: [nodeInterface],
    fields: () => ({
        id: globalIdField(),
        behavior: {
            type: behaviorType,
            resolve: (trainingStage, _args, context: Context) => {
                const behavior_model = new AuthBehavior(context);
                return behavior_model.get_one({ id: trainingStage.behavior_id });
            }
        },
        ...trainingStageTypeOwnedScalarFields,
    }),
});

const {
    connectionType: trainingStageConnection,
    edgeType: trainingStageEdge
} = connectionDefinitions({
    name: 'TrainingStage',
    nodeType: trainingStageType,
    resolveNode: (edge, _args, context) => {
        const training_stage_model = new AuthTrainingStage(context);
        // TODO: figure out return value
        return training_stage_model.get_one({ id: edge.node.id });
    },
    // TODO: decide if anything should go on the edge.
});

const trainingSessionTypeOwnedScalarFields = {
    minutes_long: {
        type: GraphQLInt,
        description: 'The length of the training session, in minutes',
    },
    start_timestamp: {
        type: new GraphQLNonNull(GraphQLDateTime),
        description: 'When this training session was started',
    },
};

// TODO: add users connection
// TODO: finish training stages connection with data on the edge
const trainingSessionType = new GraphQLObjectType({
    name: 'TrainingSession',
    interfaces: [nodeInterface],
    fields: () => ({
        id: globalIdField(),
        dog: {
            type: dogType,
            resolve: (trainingSession, _args, context: Context) => {
                const dog_model = new AuthDog(context);
                return dog_model.get_one({ id: trainingSession.dog_id });
            }
        },
        trainingStages: {
            type: trainingStageConnection,
            args: connectionArgs,
            resolve: (trainingSession, args, context: Context) => {
                const training_session_model = new AuthTrainingSession(context);
                // TODO: put progress data onto the edge
                return connectionFromPromisedArray(
                    training_session_model.get_all_training_stage_ids({ id: trainingSession.id }),
                    args
                );
            },
        },
        ...trainingSessionTypeOwnedScalarFields,
    }),
});

const {
    connectionType: trainingSessionConnection,
    edgeType: trainingSessionEdge
} = connectionDefinitions({
    name: 'TrainingSession',
    nodeType: trainingSessionType,
    resolveNode: (edge, _args, context) => {
        const training_session_model = new AuthTrainingSession(context);
        return training_session_model.get_one({ id: edge.node.id });
    },
});

const userTrainingSessionRoleType = new GraphQLEnumType({
    name: 'UserTrainingSessionRole',
    values: {
        MAINTAINER: { value: 'MAINTAINER' },
        PARTICIPANT: { value: 'PARTICIPANT' },
    }
});

const userTrainingSessionRoleDescAndType = {
    description: 'The role the user plays for the training session.',
    type: userTrainingSessionRoleType,
};

const {
    connectionType: trainingSessionToUserConnection,
    edgeType: trainingSessionToUserEdge
} = connectionDefinitions({
    name: 'TrainingSessionToUser',
    nodeType: userType,
    resolveNode: (edge: { node: { id: string, user_role: string } }, args, context: Context) => {
        const user_model = new AuthUser(context);
        return user_model.get_one({ id: edge.node.id });
    },
    edgeFields: () => ({
        user_role: {
            ...userTrainingSessionRoleDescAndType,
            resolve: (edge: { node: { id: string, user_role: string } }) => {
                return edge.node.user_role;
            },
        },
    }),
});

const {
    connectionType: userToTrainingSessionConnection,
    edgeType: userToTrainingSessionEdge,
} = connectionDefinitions({
    name: 'UserToTrainingSession',
    nodeType: trainingSessionType,
    resolveNode: (edge, args, context) => {
        const training_session_model = new AuthTrainingSession(context);
        return training_session_model.get_one({ id: edge.node.id });
    },
    edgeFields: () => ({
        user_role: {
            ...userTrainingSessionRoleDescAndType,
            resolve: (edge) => {
                return edge.node.user_role;
            },
        },
    }),
});

const qualitativeLevelType = new GraphQLEnumType({
    name: 'QualitativeLevel',
    values: {
        LOW: { value: 'LOW' },
        MEDIUM: { value: 'MEDIUM' },
        HIGH: { value: 'HIGH' },
    }
});

const trainingProgressTypeOwnedScalarFields = {
    seq: {
        type: new GraphQLNonNull(GraphQLInt),
        description: 'Order within the sequence of training progresses in this training session',
    },
    successes: {
        type: GraphQLInt,
        description: 'The number of successful attempts of this training stage',
    },
    attempts: {
        type: GraphQLInt,
        description: 'The number of total attempts of this training stage',
    },
    distance: {
        type: qualitativeLevelType,
        description: 'A qualitative assessment of the distance between human and dog while training this stage',
    },
    distractions: {
        type: qualitativeLevelType,
        description: 'A qualitative assessment of the amount of distractions for the dog while training this stage',
    },
    duration: {
        type: qualitativeLevelType,
        description: 'A qualitative assessment of the duration of the behavior attempted while training this stage',
    },
};

const {
    connectionType: trainingSessionToTrainingStageConnection,
    edgeType: trainingSessionToTrainingStageEdge
} = connectionDefinitions({
    name: 'TrainingSessionToTrainingStage',
    nodeType: trainingStageType,
    resolveNode: (edge: { node: { id: string, training_progress: typeof trainingProgressTypeOwnedScalarFields } }, args, context: Context) => {
        const training_stage_model = new AuthTrainingStage(context);
        return training_stage_model.get_one({ id: edge.node.id });
    },
    edgeFields: () => ({
        seq: {
            ...trainingProgressTypeOwnedScalarFields.seq,
            resolve: (
                edge: {
                    node: {
                        id: string,
                        training_progress: typeof trainingProgressTypeOwnedScalarFields
                    }
                }
            ) => {
                return edge.node.training_progress.seq;
            },
        },
        successes: {
            ...trainingProgressTypeOwnedScalarFields.successes,
            resolve: (
                edge: {
                    node: {
                        id: string,
                        training_progress: typeof trainingProgressTypeOwnedScalarFields
                    }
                }
            ) => {
                return edge.node.training_progress.successes;
            },
        },
        attempts: {
            ...trainingProgressTypeOwnedScalarFields.attempts,
            resolve: (
                edge: {
                    node: {
                        id: string,
                        training_progress: typeof trainingProgressTypeOwnedScalarFields
                    }
                }
            ) => {
                return edge.node.training_progress.attempts;
            },
        },
        distance: {
            ...trainingProgressTypeOwnedScalarFields.distance,
            resolve: (
                edge: {
                    node: {
                        id: string,
                        training_progress: typeof trainingProgressTypeOwnedScalarFields
                    }
                }
            ) => {
                return edge.node.training_progress.distance;
            },
        },
        duration: {
            ...trainingProgressTypeOwnedScalarFields.duration,
            resolve: (
                edge: {
                    node: {
                        id: string,
                        training_progress: typeof trainingProgressTypeOwnedScalarFields
                    }
                }
            ) => {
                return edge.node.training_progress.duration;
            },
        },
        distractions: {
            ...trainingProgressTypeOwnedScalarFields.distractions,
            resolve: (
                edge: {
                    node: {
                        id: string,
                        training_progress: typeof trainingProgressTypeOwnedScalarFields
                    }
                }
            ) => {
                return edge.node.training_progress.distractions;
            },
        },
    }),
});

const {
    connectionType: trainingStageToTrainingSessionConnection,
    edgeType: trainingStageToTrainingSessionEdge,
} = connectionDefinitions({
    name: 'TrainingStageToTrainingSession',
    nodeType: trainingSessionType,
    resolveNode: (edge, args, context) => {
        const training_session_model = new AuthTrainingSession(context);
        return training_session_model.get_one({ id: edge.node.id });
    },
    edgeFields: () => ({
        seq: {
            ...trainingProgressTypeOwnedScalarFields.seq,
            resolve: (
                edge: {
                    node: {
                        id: string,
                        training_progress: typeof trainingProgressTypeOwnedScalarFields
                    }
                }
            ) => {
                return edge.node.training_progress.seq;
            },
        },
        successes: {
            ...trainingProgressTypeOwnedScalarFields.successes,
            resolve: (
                edge: {
                    node: {
                        id: string,
                        training_progress: typeof trainingProgressTypeOwnedScalarFields
                    }
                }
            ) => {
                return edge.node.training_progress.successes;
            },
        },
        attempts: {
            ...trainingProgressTypeOwnedScalarFields.attempts,
            resolve: (
                edge: {
                    node: {
                        id: string,
                        training_progress: typeof trainingProgressTypeOwnedScalarFields
                    }
                }
            ) => {
                return edge.node.training_progress.attempts;
            },
        },
        distance: {
            ...trainingProgressTypeOwnedScalarFields.distance,
            resolve: (
                edge: {
                    node: {
                        id: string,
                        training_progress: typeof trainingProgressTypeOwnedScalarFields
                    }
                }
            ) => {
                return edge.node.training_progress.distance;
            },
        },
        duration: {
            ...trainingProgressTypeOwnedScalarFields.duration,
            resolve: (
                edge: {
                    node: {
                        id: string,
                        training_progress: typeof trainingProgressTypeOwnedScalarFields
                    }
                }
            ) => {
                return edge.node.training_progress.duration;
            },
        },
        distractions: {
            ...trainingProgressTypeOwnedScalarFields.distractions,
            resolve: (
                edge: {
                    node: {
                        id: string,
                        training_progress: typeof trainingProgressTypeOwnedScalarFields
                    }
                }
            ) => {
                return edge.node.training_progress.distractions;
            },
        },
    }),
});



export {
    dogType,
    dogTypeOwnedScalarFields,
    userType,
    nodeField,
    userToDogEdge,
    pendingInvitationType,
    userDogRoleType,
    userRoleDescAndType,
    behaviorType,
    behaviorEdge,
    behaviorTypeOwnedScalarFields,
    trainingStageType,
    trainingStageEdge,
    trainingStageTypeOwnedScalarFields,
    trainingSessionType,
    trainingSessionEdge,
    trainingSessionTypeOwnedScalarFields,
    qualitativeLevelType,
    trainingProgressTypeOwnedScalarFields,
    trainingSessionToTrainingStageEdge,
};
