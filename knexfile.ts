module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'catsdb',
      host: `/cloudsql/${process.env.CLOUD_SQL_CONNECTION_NAME}`,
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
      host: `/cloudsql/${process.env.CLOUD_SQL_CONNECTION_NAME}`,
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
