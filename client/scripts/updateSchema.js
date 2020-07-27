const fs = require('fs');
const path = require('path');
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const DogTrainingSchema = require('../../graphql/schema');
const { printSchema } = require('../../node_modules/graphql');

const schemaPath = path.resolve(__dirname, '../data/schema.graphql');
fs.writeFileSync(schemaPath, printSchema(DogTrainingSchema));
console.log('Wrote ' + schemaPath);
