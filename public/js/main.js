console.log('main.js loaded...')

$('.delete').on('click', function (e) {
  e.preventDefault()
  const $thisElement = $(this)
  const url = $thisElement.attr('href')
  console.log(url)
  const method = 'DELETE'

  $.ajax({ url, method })
    .done(response => {
      console.log(response)
      $thisElement.parent().remove()
    })
})