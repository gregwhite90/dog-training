const fs = require('fs');
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

function updateGraphQLSchema(schemaPath) {
    const { DogTrainingSchema } = require('../graphql/schema.ts');
    const { printSchema } = require('graphql');

    fs.writeFileSync(schemaPath, printSchema(DogTrainingSchema));
    console.log('Wrote ' + schemaPath);
}

module.exports = {
    updateGraphQLSchema
};
