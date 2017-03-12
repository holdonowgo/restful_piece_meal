'use strict';

module.exports = {
    development: {
        client: 'pg',
        connection: 'postgres://localhost/piece_meal_dev',
        migrations: {
            tableName: 'knex_migrations'
        }
    },

    test: {
        client: 'pg',
        connection: 'postgres://localhost/piece_meal_test',
        migrations: {
            tableName: 'knex_migrations'
        }
    },

    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        migrations: {
            tableName: 'knex_migrations'
        }
    }
};
