module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'catsdb',
      host: process.env.DB_HOST || 'localhost',
      password: 'password',
      user: 'root',
    },
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: {
      database: 'catsdb',
      host: process.env.INSTANCE_CONNECTION_NAME,
      password: 'password',
      user: 'root',
    },
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
  },
}
