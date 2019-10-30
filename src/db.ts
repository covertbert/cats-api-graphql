import Knex from 'knex'
import { knexSnakeCaseMappers } from 'objection'

// tslint:disable-next-line:no-var-requires
const knexfile = require('../knexfile')

const environment = process.env.NODE_ENV || 'development'

const db = Knex({
  ...knexfile[environment],
  ...knexSnakeCaseMappers(),
})

export default () => db
