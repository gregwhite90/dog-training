import db from '../pool';

class Behavior {

    // TODO: can the interface be imported (requires knowledge of the GQL schema)
    /**
     * Generate GraphQL-layer-friendly object from raw persistence layer output
     */

    // TODO: abstract out boilerplate shared code?
    static create_object(raw_behavior) {
        console.log(`Creating object from raw behavior`);
        console.log(raw_behavior);
        return {
            _node_type: 'Behavior',
            ...raw_behavior, // TODO: confirm treatment of nulls
        };
    }


    /**
     * Authorization operations
     */


    /**
     * Read Behavior-only operations
     */

    static async get_one({ id }) {
        const { rows } = await db.query(
            'SELECT * FROM behaviors WHERE id=$1',
            [id]
        );
        // TODO: error-handling code?
        return rows[0];
    }


    /**
     * Read Behavior and other operations
     */

    /**
     * Create Behavior-only operations
     */

    static async create_one({
        dog_id,
        name,
        explanation,
        lure_description,
        shape_description,
        verbal_command,
        hand_signal,
        has_duration,
        release_command,
    }) {
        const { rows } = await db.query(
            'INSERT INTO behaviors(dog_id, name, explanation, lure_description, shape_description, verbal_command, hand_signal, has_duration, release_command) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
            [dog_id,
                name,
                explanation,
                lure_description,
                shape_description,
                verbal_command,
                hand_signal,
                has_duration,
                release_command]
        );
        // TODO: error-handling code?
        // TODO: confirm that only one row was returned
        return rows[0];
    }

    /**
     * Create Behavior and other operations
     */

    /**
     * Update Behavior-only operations
     */

    /**
     * Update Behavior and other operations
     */

    /**
     * Delete operations
     */

}

export {
    Behavior,
};
