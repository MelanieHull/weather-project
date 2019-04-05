$(document).ready(function() {

var API = "58f56b8e1f4e536e1b354c77e3963896"

  $('form').on('submit', function(weatherResults) {
    $.get('https://api.openweathermap.org/data/2.5/weather?units=metric&q=London&appid='+API, function(data) {
      console.log(data)
      $('#results').append('<p>'+ data.name + '</p>' + '<p>'+ data.name + '</p>')
    })
  })

//  $('temp')val(data.temp)
  // build a bunch of html elements and then this jquery will replace them with the data


  $('form').on('submit', function(event) {
  event.preventDefault()
  $(this).slideUp(2000)
  $('#results').fadeIn(2000)
  var userInput = $('input').val()
  console.log(userInput)
})

$('form input').on('focus', function() {
  $('input').addClass('formFocus')
})

$('form input').on('blur', function() {
  $('input').removeClass('formFocus')
})

$('form button').on('submit', function() {
  $(this).addClass('formFocus')
})

});
