'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CountrySchema extends Schema {
  up() {
    this.create('countries', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.integer('confirmed').defaultTo(0)
      table.integer('recovered').defaultTo(0)
      table.integer('deaths').defaultTo(0)
      table.timestamps()
    })
  }

  down() {
    this.drop('countries')
  }
}

module.exports = CountrySchema
