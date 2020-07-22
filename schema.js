const {
    buildSchema, // to delete
    GraphQLSchema
} = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'This will be a dog training tracking application!';
  },
};

module.exports = {
    DogTrainingSchema: schema,
    DogTrainingRoot: root,
};
