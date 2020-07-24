const db = require('../db');

// TODO: error handling code
// TODO: authorization

/**
 * Human object types
 */
const greg = {
    id: '0',
    name: 'Greg',
};

const kylie = {
    id: '1',
    name: 'Kylie',
};

const tona = {
    id: '2',
    name: 'Tona',
};

const robyn = {
    id: '3',
    name: 'Robyn',
};

const dana = {
    id: '4',
    name: 'Dana'
};

let nextHuman = 5;
createHuman = (name) => {
    const { rows } = await db.query('INSERT INTO humans(name) VALUES ($1) RETURNING *', [name]);
    return rows[0];
}

addBreedToDog = (dogId, breedId) => {
    await db.query('INSERT INTO dogBreeds(dogId, breedId) VALUES ($1, $2)', [dogId, breedId]);
}

/**
 * Dog object types
 */
const rookie = {
    id: '0',
    name: 'Rookie',
    breeds: ['0'],
};

const paisley = {
    id: '1',
    name: 'Paisley',
    breeds: ['0'],
}

const nala = {
    id: '2',
    name: 'Nala',
    breeds: ['1'],
}

const twizzler = {
    id: '3',
    name: 'Twizzler',
    breeds: ['2', '3'],
}

/**
 * Breed object types
 */
const berneseMountainDog = {
    id: '0',
    name: 'Bernese Mountain Dog',
    infoUrl: 'https://www.akc.org/dog-breeds/bernese-mountain-dog/',
};

const goldenRetriever = {
    id: '1',
    name: 'Golden Retriever',
    infoUrl: 'https://www.akc.org/dog-breeds/golden-retriever/',
};

const pointer = {
    id: '2',
    name: 'Pointer',
    infoUrl: 'https://www.akc.org/dog-breeds/pointer/',
}

const saintBernard = {
    id: '3',
    name: 'Saint Bernard',
    infoUrl: 'https://www.akc.org/dog-breeds/st-bernard/',
};

const data = {
    Humans: {
        '0': greg,
        '1': kylie,
        '2': tona,
        '3': robyn,
        '4': dana,
    },
    Dogs: {
        '0': rookie,
        '1': paisley,
        '2': nala,
        '3': twizzler,
    },
    Breeds: {
        '0': berneseMountainDog,
        '1': goldenRetriever,
        '2': pointer,
        '3': saintBernard,
    },
};

getNode = (id, tableName) => {
    const { rows } = await db.query('SELECT * FROM $1 WHERE id=$2', [tableName, id]);
    return rows[0];
}

getDog = (id) => {
    return getNode(id, "dogs");
}

getHuman = (id) => {
    return getNode(id, "humans");
}

getBreed = (id) => {
    return getNode(id, "breeds");
}

getNodes = (tableName) => {
    const { rows } = await db.query('SELECT * FROM $1', [tableName]);
    return rows;
}

getDogs = () => {
    return getNodes("dogs");
}

getHumans = () => {
    return getNodes("humans");
}

getBreeds = () => {
    return getNodes("breeds");
}

module.exports = {
    getDog,
    getDogs,
    getHuman,
    getHumans,
    getBreed,
    getBreeds,
    createHuman,
    addBreedToDog,
};
