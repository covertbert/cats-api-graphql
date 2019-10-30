module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'catsdb',
      // host: process.env.DB_HOST || 'localhost',
      password: 'password',
      socketPath: `/cloudsql/${process.env.APP_DB_HOST}`,
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
