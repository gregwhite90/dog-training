import db from '../pool';

/**
 * This class is only used for complicated functionality that is poorly suited to prisma.
 */
class PendingInvitation {

    /**
     * Update PendingInvitation and other operations
     */

    static async accept_invitation({ invitation_id, user_id }) {
        const client = await db.connect();
        let dog_id;
        try {
            await client.query('BEGIN');

            // Find the pending_transactions
            const find_res = await client.query(
                'SELECT * FROM pending_invitations WHERE id=$1',
                [invitation_id]
            );

            dog_id = find_res.rows[0].dog_id;

            // Add to user_dogs
            const add_res = await client.query(
                'INSERT INTO user_dogs(dog_id, user_id, user_role) VALUES ($1, $2, $3)',
                [find_res.rows[0].dog_id, user_id, find_res.rows[0].user_role]
            );

            // Delete from pending_transactions
            const delete_res = await client.query(
                'DELETE FROM pending_invitations WHERE id=$1',
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
        return dog_id;
    }
}

export {
    PendingInvitation,
};
