module.exports = {
  development: {
    client: 'pg',
    connection: `postgres://root:password@${process.env.DB_HOST}:5432/catsdb`,
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
  },
}
