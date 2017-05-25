$(document).ready(function () {
	
	$('#add').on("click" , function(e){
	// e.preventDefault();
	console.log('jijji')
	// var toAdd gets the value of the input field
    var toAdd = $('input[name=task]').val()
        // Append list item in its own div with a class of item into the list div
        // It also changes the cursor on hover of the appended item
    $('.list').append('<div class="task">' + toAdd + '</div>')
        // fade in clear button when the add button is clicked
    $('#clear').fadeIn('fast')
        // Clear input field when add button is pressed
    $('input').val('')})
  
})