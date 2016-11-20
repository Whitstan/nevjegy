'use strict'

const Lucid = use('Lucid')

class User extends Lucid {

  apiTokens () {
    return this.hasMany('App/Model/Token')
  }

  cards () {
    return this.hasMany('App/Model/Card')
  }

  favorites(){
    return this.hasMany('App/Model/Favorite')
  }

}

module.exports = User
