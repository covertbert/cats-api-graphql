import Knex from 'knex'

exports.up = (knex: Knex) => up(knex)
exports.down = (knex: Knex) => down(knex)

const up = (knex: Knex) => {
  return knex.schema.createTable('cats', table => {
    table.increments('id')
    table.integer('adaptability').notNullable()
    table.integer('affection_level').notNullable()
    table.specificType('alternative_names', 'text ARRAY').nullable()
    table.integer('child_friendliness').notNullable()
    table.string('country_code').notNullable()
    table.string('description', 1000).notNullable()
    table.integer('dog_friendliness').notNullable()
    table.integer('energy_level').notNullable()
    table.boolean('experimental').notNullable()
    table.integer('grooming').notNullable()
    table.boolean('hairless').notNullable()
    table.integer('health_issues').notNullable()
    table.boolean('hypoallergenic').notNullable()
    table.boolean('indoor').notNullable()
    table.integer('intelligence').notNullable()
    table.boolean('lap').nullable()
    table.specificType('life_span', 'integer ARRAY').notNullable()
    table
      .string('name')
      .notNullable()
      .unique()
    table.boolean('natural').notNullable()
    table.string('origin').notNullable()
    table.boolean('rare').notNullable()
    table.boolean('rex').notNullable()
    table.integer('shedding_level').notNullable()
    table.boolean('short_legs').notNullable()
    table.integer('social_needs').notNullable()
    table.integer('stranger_friendly').notNullable()
    table.boolean('suppressed_tail').notNullable()
    table.specificType('temperament', 'text ARRAY').notNullable()
    table.integer('vocalisation').notNullable()
    table.specificType('weight', 'integer ARRAY')
    table.string('wikipedia_url').nullable()
  })
}

const down = (knex: Knex) => {
  return knex.schema.dropTable('cats')
}
