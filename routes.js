'use strict'

const Route = use('Route')

Route.get('/', 'CardController.index')

Route.get('/cards/create', 'CardController.create').middleware('auth')
Route.post('/cards/create', 'CardController.doCreate').middleware('auth')

Route.get('/cards/:id/edit', 'CardController.edit').middleware('auth')
Route.post('/cards/:id/edit', 'CardController.doEdit').middleware('auth')

Route.get('/cards/:id/delete', 'CardController.doDelete').middleware('auth')

Route.get('/cards/:id/add_favorite/', 'CardController.addFavorite')
Route.get('/cards/favorites/', 'CardController.showFavorites')
Route.get('/cards/:id/remove_favorite/', 'CardController.removeFavorite')

Route.get('/cards', 'CardController.cards')

Route.get('/cards/:id', 'CardController.show')

Route.get('/register', 'UserController.register')
Route.post('/register', 'UserController.doRegister')

Route.get('/login', 'UserController.login')
Route.post('/login', 'UserController.doLogin')
Route.get('/logout', 'UserController.doLogout')

Route.group('ajax', function () {
  Route.delete('/cards/:id/delete', 'CardController.ajaxDelete').middleware('auth')
  Route.post('/cards/:id/add_favorite', 'CardController.ajaxFavorite').middleware('auth')
  Route.post('/cards/:id/remove_favorite', 'CardController.ajaxRemoveFavorite').middleware('auth')
  Route.post('/login', 'UserController.ajaxLogin')
}).prefix('/ajax')