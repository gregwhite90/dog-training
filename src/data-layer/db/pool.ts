import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'development' ? false : { rejectUnauthorized: false },
});

// TODO: fix any typing
export = {
    query: <ResultType = any>(text, params) => pool.query<ResultType>(text, params),
    connect: () => pool.connect(),
}
