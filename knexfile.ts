module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://root:password@localhost:5432/catsdb',
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
  },
}
