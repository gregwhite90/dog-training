const {
    GraphQLEnumType,
} = require('graphql');

const {
    connectionArgs,
    connectionDefinitions,
} = require('graphql-relay');

const { dogType } = require('../objects/Dog');
const { userType } = require('../objects/User');

const userDogRoleType = new GraphQLEnumType({
    name: 'UserDogRole',
    values: {
        OWNER: { value: 'owner' },
        TRAINER: { value: 'trainer' },
        VIEWER: { value: 'viewer' },
    }
});

const userRoleDescAndType = {
    description: 'The role the user plays for the dog.',
    type: userDogRoleType,
};

const { connectionType: dogToUserConnection } = connectionDefinitions({
    name: 'DogToUser',
    nodeType: userType,
    /**
    edgeFields: () => ({
        user_role: {
            ...userRoleDescAndType,
            resolve: () => null // TODO: implement the function that pulls from the DB
        },
    }),
    */
});

const { connectionType: userToDogConnection } = connectionDefinitions({
    name: 'UserToDog',
    nodeType: dogType,
    /**
    edgeFields: () => ({
        user_role: {
            ...userRoleDescAndType,
            resolve: () => null // TODO: implement the function that pulls from the DB
        },
    }),
    */
});

module.exports = {
    dogToUserConnection,
    userToDogConnection,
};
