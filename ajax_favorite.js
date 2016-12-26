function ajaxFav(url) {
  const headers = {
    'csrf-token': $('[name="_csrf"]').val()
  }
  return Promise.resolve(
    $.ajax({
      url,
      method: 'POST',
      dataType: 'json',
      headers
    })
  )
}

$('#btnFavorite').on('click', function (e) {
  e.preventDefault()
    const url = '/ajax' + $(this).attr('href')
    ajaxFav(url)
        .then(data => {
            location.assign(url.slice(12, url.length - 13))
        })
        .catch(xhr => {
        $('.help-block').text(xhr.responseText)
        })
})

$('#btnFavoriteDelete').on('click', function (e) {
  e.preventDefault()
    const url = '/ajax' + $(this).attr('href')
    ajaxFav(url)
        .then(data => {
            location.assign(url.slice(12, url.length - 16))
        })
        .catch(xhr => {
        $('.help-block').text(xhr.responseText)
        })
})