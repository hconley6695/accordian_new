// Javascript Entry Point
import $ from 'jquery';

//$('.box1').css('color', 'red');
//$('.box2').css('color', 'gray');
//$('.box3').css('color', 'gray');

//$('h2').addClass('#box3')

//$('#header3').on('click', function() {
	//$(".box3").addClass('moveup');
//	$('.box3').css('opacity','0');
//});

//$('#header3').on('click', function() {
//	$('.box3').addClass('moveup');
//});

$('#header3').on('click', function () {
	//$('.box3').addClass('box3');
	$('.box1').addClass('moveup');
	$('.box2').addClass('moveup');

});


$('#header2').on('click', function () {
	$('.box1').addClass('moveup');
	$('.box3').addClass('moveup');

});

$('#header1').on('click', function () {
	$('.box2').addClass('moveup');
	$('.box3').addClass('moveup');

});

	

//$( "p" ).click(function() {
  //$( this ).slideUp();
//});