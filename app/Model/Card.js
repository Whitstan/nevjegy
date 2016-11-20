'use strict'

const Lucid = use('Lucid')

class Card extends Lucid {
  category () {
    return this.belongsTo('App/Model/Category')
  }

  user () {
    return this.belongsTo('App/Model/User')
  }

  favorite(){
    return this.belongsToMany('App/Model/Favorite')
  }
}

module.exports = Card
