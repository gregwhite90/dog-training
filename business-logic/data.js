const db = require('../db');

// TODO: error handling code
// TODO: authorization

/**
 * Mutation functions
 */
async function createHuman(name) {
    const { rows } = await db.query('INSERT INTO humans(name) VALUES ($1) RETURNING *', [name]);
    return rows[0];
}

async function addBreedToDog(dog_id, breed_id) {
    await db.query('INSERT INTO dog_breeds(dog_id, breed_id) VALUES ($1, $2)', [dog_id, breed_id]);
}

/**
 * Query single node functions
 */
async function getNode(id, tableName) {
    const { rows } = await db.query(`SELECT * FROM ${tableName} WHERE id=$1`, [id]);
    return rows[0];
}

// TODO: just return the dog here?
async function getDog(id) {
    return await getNode(id, "dogs");
}

async function getHuman(id) {
    return await getNode(id, "humans");
}

async function getBreed(id) {
    return await getNode(id, "breeds");
}

/**
 * Query all nodes functions
 */
async function getNodes(tableName) {
    const { rows } = await db.query(`SELECT * FROM ${tableName}`);
    return rows;
}

async function getDogs() {
    return await getNodes("dogs");
}

async function getHumans() {
    return await getNodes("humans");
}

async function getBreeds() {
    return await getNodes("breeds");
}

/**
 * Query relations (connections) functions
 */
async function getDogBreeds(id) {
    const { rows } = await db.query(`SELECT breed_id FROM dog_breeds WHERE dog_id=$1`, [id]);
    return rows;
}

module.exports = {
    getDog,
    getDogs,
    getHuman,
    getHumans,
    getBreed,
    getBreeds,
    getDogBreeds,
    createHuman,
    addBreedToDog,
};
