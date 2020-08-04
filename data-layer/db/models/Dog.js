const db = require('../pool');

class Dog {

    // TODO: can the interface be imported (requires knowledge of the GQL schema)
    /**
     * Generate GraphQL-layer-friendly object from raw persistence layer output
     */

    static create_object(raw_user) {
        return {
            _node_type: 'Dog',
            ...raw_user, // TODO: confirm treatment if name or picture is null
        };
    }


    /**
     * Authorization operations
     */

    static async check_authorization_for_dog({dog_id, user_id}) {
        const { rows } = await db.query(
            'SELECT user_role FROM user_dogs WHERE dog_id=$1 AND user_id=$2',
            [dog_id, user_id]
        );
        // TODO: could add check for the user role type to be future
        // proof for the enum expanding (or to add to the context)
        return rows.length === 1;
    }


    /**
     * Read Dog-only operations
     */

    static async get_one({id}) {
        const { rows } = await db.query(
            'SELECT * FROM dogs WHERE id=$1',
            [id]
        );
        // TODO: error-handling code?
        return rows[0];
    }


    /**
     * Read Dog and other operations
     */

    static async get_all_user_ids({id}) {
        const { rows } = await db.query(
            'SELECT user_id FROM user_dogs WHERE dog_id=$1',
            [id]
        );
        // TODO: error-handling code?
        return rows;
    }

    static async get_all_dogs_for_user({id}) {
        const { rows } = await db.query(
            'SELECT * FROM dogs WHERE id IN (SELECT dog_id AS id FROM user_dogs WHERE user_id=$1)',
            [id]
        );
        // TODO: error-handling code?
        return rows;
    }


    /**
     * Create Dog-only operations
     */

    static async create_one({name, picture}) {
        const { rows } = await db.query(
            'INSERT INTO dogs(name, picture) VALUES ($1, $2) RETURNING *',
            [name, picture]
        );
        // TODO: error-handling code?
        // TODO: confirm that only one row was returned
        return rows[0];
    }

    /**
     * Create Dog and other operations
     */

    /**
     * Update Dog-only operations
     */

    static async edit_one({id, name, picture}) {
        console.log(`in Dog.edit_one with id ${id}, name ${name}, picture ${picture}`);
        const { updated } = await db.query(
            'UPDATE dogs SET name=COALESCE($1, name), picture=COALESCE($2, picture) WHERE id=$3 RETURNING *',
            [name, picture, id]
        );
        const { rows } = await db.query(
            'SELECT * FROM dogs WHERE id=$1',
            [id]
        );
        // TODO: error-handling code
        return rows[0];
    }

    /**
     * Update Dog and other operations
     */

    static async add_to_user({dog_id, user_id, user_role}) {
        const { rows } = await db.query(
            'INSERT INTO user_dogs(dog_id, user_id, user_role) VALUES ($1, $2, $3)',
            [dog_id, user_id, user_role]
        );
        // TODO: figure out return value
    }

    /**
     * Delete operations
     */

    static async remove_one({id}) {
        const { rows } = await db.query(
            'DELETE FROM dogs WHERE id=$1',
            [id]
        );
        // TODO: error-handling code?
        return rows[0];
    }

}

module.exports = {
    Dog,
};
