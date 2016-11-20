'use strict'

const Database = use('Database')
const Category = use('App/Model/Category')
const Card = use('App/Model/Card')
const Favorite = use('App/Model/Favorite')
const Validator = use('Validator')

class CardController {

  * index(request, response) {
    const categories = yield Category.all()

    for (let category of categories) {
      const topCards = yield category.cards().limit(30).fetch()
      category.topCards = topCards.toJSON()
    }

    yield response.sendView('main', {
      categories: categories.toJSON()
    })
  }

  * create (request, response) {
    const categories = yield Category.all()
    yield response.sendView('cardCreate', {
      categories: categories.toJSON()
    });
  }

  * doCreate (request, response) {
    const cardData = request.except('_csrf');

    const rules = {
      first_name: 'required',
      last_name: 'required',
      email: 'required',
      address: 'required',
      category_id: 'required'
    };

    const validation = yield Validator.validateAll(cardData, rules)

    if (validation.fails()) {
      yield request
        .withAll()
        .andWith({errors: validation.messages()})
        .flash()
      response.redirect('back')
      return
    }

    cardData.user_id = request.currentUser.id
    const card = yield Card.create(cardData)
    response.redirect('/')
  }

  * edit (request, response) {
    const categories = yield Category.all()
    const id = request.param('id');
    const card = yield Card.find(id);

    if (request.currentUser.username != "admin") {
      response.unauthorized('Access denied.')
      return
    }


    yield response.sendView('cardEdit', {
      categories: categories.toJSON(),
      card: card.toJSON()
    });
  }

  * doEdit (request, response) {
    const cardData = request.except('_csrf');

    const rules = {
      first_name: 'required',
      last_name: 'required',
      email: 'required',
      address: 'required',
      category_id: 'required'
    };

    const validation = yield Validator.validateAll(cardData, rules)

    if (validation.fails()) {
      yield request
        .withAll()
        .andWith({errors: validation.messages()})
        .flash()
      response.redirect('back')
      return
    }

    const id = request.param('id');
    const card = yield Card.find(id);
    
    card.first_name = cardData.first_name;
    card.last_name = cardData.last_name;
    card.email = cardData.email;
    card.address = cardData.address;
    card.category_id = cardData.category_id;

    yield card.save()
    
    response.redirect('/')
  }

  * show (request, response) {
    const cardId = request.param('id');
    const card = yield Card.find(cardId);
    yield card.related('category').load();

    var isFavorite = false;
    
    if (request.currentUser != null){
      const query = yield Database.from('favorites').whereRaw('card_id = ? and user_id = ?', [cardId, request.currentUser.id])
      if (query.length > 0){
          isFavorite = true
      }
    }
    
    yield response.sendView('cardShow', {
      card: card.toJSON(),
      isFav: isFavorite
    })
  }

  * addFavorite(request,response){
    const uid = request.currentUser.id
    const cid = request.param('id')

    const favorite = new Favorite();

    favorite.user_id = uid
    favorite.card_id = cid

    yield favorite.save();

    response.redirect('/')
  }

  * showFavorites (request, response) {
    const subQuery = Database
                    .from('favorites')
                    .where('user_id', request.currentUser.id)
                    .select('card_id')

    const favorites = yield Database.from('cards').whereIn('id',subQuery)

    yield response.sendView('favoriteShow', {
      favorites: favorites
    })
  }

  * removeFavorite(request,response){
    const uid = request.currentUser.id
    const cid = request.param('id')

    const favToDelete = yield Database
      .table('favorites')
      .whereRaw('user_id = ? and card_id = ?',[uid,cid])
      .delete()

    response.redirect('/')
  }

  * doDelete (request, response) {
    const id = request.param('id');
    const card = yield Card.find(id);

    if (request.currentUser.username !== "admin") {
      response.unauthorized('Access denied.')
      return
    }

    yield card.delete()
    response.redirect('/')
  }

  * cards (request, response) {
    const page = Math.max(1, request.input('p'))
    const filters = {
      firstName: request.input('first_name') || '',
      lastName: request.input('last_name') || '',
      category: request.input('category') || 0,
    }

    const cards = yield Card.query()
      .where(function () {
        if (filters.category > 0) this.where('category_id', filters.category)
        if (filters.firstName.length > 0) this.where('first_name', 'LIKE', `%${filters.firstName}%`)
        if (filters.lastName.length > 0) this.where('last_name', 'LIKE', `%${filters.lastName}%`)
      })
      .with('user')
      .paginate(page, 30)

    const categories = yield Category.all()

    yield response.sendView('cardSearch', {
      cards: cards.toJSON(),
      categories: categories.toJSON(),
      filters
    })
  }

}

module.exports = CardController
