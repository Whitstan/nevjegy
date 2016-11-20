'use strict'

const Lucid = use('Lucid')

class Favorite extends Lucid {

    user () {
        return this.hasOne('App/Model/User')
    }

    card () {
        return this.hasOne('App/Model/Card')
    }
}

module.exports = Favorite
