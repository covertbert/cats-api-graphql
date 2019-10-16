import Knex from 'knex'
import { knexSnakeCaseMappers } from 'objection'

// tslint:disable-next-line:no-var-requires
const knexfile = require('../knexfile')

const db = Knex({
  ...knexfile.development,
  ...knexSnakeCaseMappers(),
})

export default () => db
