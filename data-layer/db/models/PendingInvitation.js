const db = require('../pool');

class PendingInvitation {

    // TODO: can the interface be imported (requires knowledge of the GQL schema)
    /**
     * Generate GraphQL-layer-friendly object from raw persistence layer output
     */

    static create_object(raw_pending_invitation) {
        return {
            _node_type: 'PendingInvitation',
            ...raw_pending_invitation,
        };
    }


    /**
     * Authorization operations
     */

    /**
     * Read PendingInvitation-only operations
     */

    static async get_one({id}) {
        const { rows } = await db.query(
            'SELECT * FROM pending_invitations WHERE id=$1',
            [id]
        );
        // TODO: error-handling code?
        return rows[0];
    }

    static async get_received_by_email({email}) {
        const { rows } = await db.query(
            'SELECT * FROM pending_invitations WHERE invitee_email=lower($1)',
            [email]
        );
        // TODO: error-handling code?
        return rows;
    }

    static async get_sent_by_id({id}) {
        const { rows } = await db.query(
            'SELECT * FROM pending_invitations WHERE invited_by=$1',
            [id]
        );
        // TODO: error-handling code?
        return rows;
    }


    /**
     * Read PendingInvitation and other operations
     */

    /**
     * Create PendingInvitation-only operations
     */

    static async create_one({invitee_email, invited_by, dog_id, user_role}) {
        const { rows } = await db.query(
            'INSERT INTO pending_invitations(invitee_email, invited_by, dog_id, user_role) VALUES (lower($1), $2, $3, $4) RETURNING *',
            [invitee_email, invited_by, dog_id, user_role]
        );
        // TODO: error-handling code?
        // TODO: confirm that only one row was returned
        return rows[0];
    }

    /**
     * Create PendingInvitation and other operations
     */

    /**
     * Update PendingInvitation-only operations
     */

    /**
     * Update PendingInvitation and other operations
     */

    static async accept_invitation({invitation_id, user_id}) {
        const client = await db.connect();
        try {
            await client.query('BEGIN');

            // Find the pending_transactions
            const find_res = await client.query(
                'SELECT * FROM pending_transactions WHERE id=$1',
                [invitation_id]
            );

            // Add to user_dogs
            const add_res = await client.query(
                'INSERT INTO user_dogs(dog_id, user_id, user_role) VALUES ($1, $2, $3)',
                [find_res.rows[0].dog_id, user_id, find_res.rows[0].user_role]
            );

            // Delete from pending_transactions
            const delete_res = await client.query(
                'DELETE FROM pending_transactions WHERE id=$1',
                [invitation_id]
            );

            await client.query('COMMIT');
        } catch (e) {
            await client.query('ROLLBACK');
            throw e;
        } finally {
            client.release();
        }

        // TODO: figure out return value

    }

    /**
     * Delete operations
     */

}

module.exports = {
    PendingInvitation,
};
