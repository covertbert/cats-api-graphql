import Knex from 'knex'
import { knexSnakeCaseMappers } from 'objection'

// tslint:disable-next-line:no-var-requires
const knexfile = require('../../knexfile')

const integrationTools = () => {
  let knex: Knex

  knex = Knex({
    ...knexfile.development,
    ...knexSnakeCaseMappers(),
  })

  const teardown = () => knex.destroy()

  return {
    teardown,
  }
}

export default integrationTools
