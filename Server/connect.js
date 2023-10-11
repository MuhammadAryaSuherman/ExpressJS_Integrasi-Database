const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'rentel',
    password: '2002',
    port: 5432,
});

pool.connect()
    .then(() => console.log('Connected to the database successfully'))
    .catch(err => console.error('Failed to connect to the database', err.stack));

module.exports = pool;
