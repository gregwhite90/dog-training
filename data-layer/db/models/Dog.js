const db = require('../pool');

class Dog {
    async create_one({name, picture}) {
        const { rows } = await db.query(
            'INSERT INTO dogs(name, picture) VALUES ($1, $2) RETURNING *',
            [name, picture]
        );
        // TODO: error-handling code?
        return rows[0];
    }

    async add_to_user({dog_id, user_id, user_role}) {
        const { rows } = await db.query(
            'INSERT INTO user_dogs(dog_id, user_id, user_role) VALUES ($1, $2, $3)',
            [dog_id, user_id, user_role]
        );
        // TODO: figure out return value
    }

    async get_all_users({id}) {
        const { rows } = await db.query(
            'SELECT user_id FROM user_dogs WHERE dog_id=$1',
            [id]
        );
        // TODO: error-handling code?
        return rows;
    }

    async check_authorization_for_dog({dog_id, user_id}) {
        const { rows } = await db.query(
            'SELECT user_role FROM user_dogs WHERE dog_id=$1 AND user_id=$2',
            [dog_id, user_id]
        );
        // TODO: could add check for the user role type to be future
        // proof for the enum expanding (or to add to the context)
        return rows.length === 1;
    }

    async get_one({id}) {
        const { rows } = await db.query(
            'SELECT * FROM dogs WHERE id=$1',
            [id]
        );
        // TODO: error-handling code?
        return rows[0];
    }

    async remove_one({id}) {
        const { rows } = await db.query(
            'DELETE FROM dogs WHERE id=$1',
            [id]
        );
        // TODO: error-handling code?
        return rows[0];
    }

    async get_all_dogs_for_user({id}) {
        const { rows } = await db.query(
            'SELECT * FROM dogs WHERE id IN (SELECT dog_id AS id FROM user_dogs WHERE user_id=$1)',
            [id]
        );
        // TODO: error-handling code?
        return rows;
    }
}

module.exports = {
    Dog,
};
