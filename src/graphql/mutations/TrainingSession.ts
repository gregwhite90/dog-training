import {
    GraphQLNonNull,
    GraphQLID,
} from 'graphql';

import {
    mutationWithClientMutationId,
    cursorForObjectInConnection,
    fromGlobalId,
} from 'graphql-relay';

import {
    trainingSessionTypeOwnedScalarFields,
    trainingSessionEdge,
} from '../types/objects/Nodes';

import {
    AuthDog,
    AuthTrainingSession,
} from '../../business-layer/models';

const createTrainingSessionMutation = mutationWithClientMutationId({
    name: 'CreateTrainingSession',
    description: `Create a training session for the specified dog`,
    inputFields: {
        user_id: {
            type: new GraphQLNonNull(GraphQLID),
        },
        dog_id: {
            type: new GraphQLNonNull(GraphQLID),
        },
        ...trainingSessionTypeOwnedScalarFields,
    },
    outputFields: {
        // TODO: confirm if want to return additional info
        trainingSessionEdge: {
            type: trainingSessionEdge,
            resolve: ({ training_session, dog_model }) => { // TODO: figure out resolver
                return dog_model.get_all_training_session_ids({ id: training_session.dog_id }).then(
                    training_sessions => {
                        return {
                            cursor: cursorForObjectInConnection(training_sessions, training_session),
                            node: training_session
                        };
                    }
                );
            },
        },
    },
    mutateAndGetPayload: async ({
        user_id,
        dog_id,
        minutes_long,
        start_timestamp,
    }, context) => {
        const user_type_and_id = fromGlobalId(user_id);
        const dog_type_and_id = fromGlobalId(dog_id);
        const training_session_model = new AuthTrainingSession(context);
        const dog_model = new AuthDog(context);
        const training_session = await training_session_model.create_one({
            user_id: user_type_and_id.id,
            dog_id: dog_type_and_id.id,
            input: {
                minutes_long,
                start_timestamp,
            }
        });
        return { training_session, dog_model };
    },
});

export {
    createTrainingSessionMutation,
};
