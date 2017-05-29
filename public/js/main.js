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

$('.list.edit').on('click', function(e) {
  e.preventDefault();
  const $thisElement = $(this)
  $thisElement
    .parents('.list')
      .find("form input")
        .removeClass("hidden")
        .focus()
        .end()
      .find("li")
        .addClass("hidden")
})

$(".editTask").on("submit", function(e) {
  e.preventDefault();
  console.log('main.js loaded...')
  const $thisElement = $(this)
  const url = $thisElement.attr("action")
  console.log(url)
  const editedValue = $thisElement.find('input').val()
  const method = 'PUT'

  $.ajax({
    url,
    method,
    data: { editedValue }
  })
  .done( response => {
    $thisElement
      .siblings("li")
        .text(editedValue)
        .removeClass("hidden")
        .end()
      .find("input")
        .addClass("hidden")
    
  })
  .fail( () =>  alert("No se pudo editar!") );


})