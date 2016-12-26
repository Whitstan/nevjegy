'use strict'

const Schema = use('Schema')

class FavoritesSchema extends Schema {

  up () {
    this.create('favorites', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('card_id').unsigned().references('id').inTable('cards')
      table.timestamps()
    })
  }

  down () {
    this.drop('favorites')
  }

}

module.exports = FavoritesSchema
