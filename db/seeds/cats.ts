import * as Knex from 'knex'

import allCats from '../data/cats.json'

exports.seed = (knex: Knex) => seed(knex)

const seed = (knex: Knex) =>
  knex('cats')
    .truncate()
    .then(() => knex('cats').insert(allCats))
