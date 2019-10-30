module.exports = {
  development: {
    client: 'pg',
    connection: `postgres://root:password@${process.env.DB_HOST ||
      'localhost'}:5432/catsdb`,
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
      password: 'password',
      socketPath: `/cloudsql/${process.env.CLOUD_SQL_CONNECTION_NAME}`,
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
