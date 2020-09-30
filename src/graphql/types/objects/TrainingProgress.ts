import {
    GraphQLObjectType,
    GraphQLEnumType,
    GraphQLNonNull,
    GraphQLInt,
} from 'graphql';

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
        description: 'The number of successful attempts of this stage in this session',
    },
    attempts: {
        type: GraphQLInt,
        description: 'The number of total attempts of this stage in this session',
    },
    distance: {
        type: qualitativeLevelType,
        description: 'A qualitative assessment of the distance between human and dog while training this stage in this session',
    },
    distractions: {
        type: qualitativeLevelType,
        description: 'A qualitative assessment of the amount of distractions for the dog while training this stage in this session',
    },
    duration: {
        type: qualitativeLevelType,
        description: 'A qualitative assessment of the duration of the behavior attempted while training this stage in this session',
    },
};

const trainingProgressType = new GraphQLObjectType({
    name: 'TrainingProgress',
    fields: trainingProgressTypeOwnedScalarFields,
});

export {
    trainingProgressTypeOwnedScalarFields,
    trainingProgressType,
};
