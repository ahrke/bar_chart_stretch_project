$(function() {
  alert("Ready!\nThis is from the index.js file")
})

$( "a" ).click(function( event ) {

  event.preventDefault();

  $( this ).hide( "slow" );

});

$("button.alert").click(function() {
  alert("You've clicked me...ahhh...thank you, my hero")
})
