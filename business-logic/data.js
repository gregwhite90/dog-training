const db = require('../db');

// TODO: error handling code
// TODO: authorization

/**
 * Mutation functions
 */
async function createHuman({name}, context) {
    console.log(await context.user.catch(e => throw new Error(e)));
    const { rows } = await db.query('INSERT INTO humans(name) VALUES ($1) RETURNING *', [name]);
    return rows[0];
}

async function addBreedToDog({dog_id, breed_id}, context) {
    console.log(await context.user.catch(e => throw new Error(e)));
    await db.query('INSERT INTO dog_breeds(dog_id, breed_id) VALUES ($1, $2)', [dog_id, breed_id]);
}

/**
 * Query single node functions
 */
async function getNode({id, tableName}, context) {
    console.log(await context.user.catch(e => throw new Error(e)));
    const { rows } = await db.query(`SELECT * FROM ${tableName} WHERE id=$1`, [id]);
    return rows[0];
}

/**
 * Query all nodes functions
 */
async function getNodes({tableName}, context) {
    console.log(await context.user.catch(e => throw new Error(e)));
    const { rows } = await db.query(`SELECT * FROM ${tableName}`);
    return rows;
}

/**
 * Query relations (connections) functions
 */
async function getDogBreeds({id}, context) {
    console.log(await context.user.catch(e => throw new Error(e)));
    const { rows } = await db.query(`SELECT breed_id FROM dog_breeds WHERE dog_id=$1`, [id]);
    return rows;
}

module.exports = {
    getNode,
    getNodes,
    getDogBreeds,
    createHuman,
    addBreedToDog,
};
