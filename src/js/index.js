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
	//$('.box1').addClass('moveup').removeClass('moveup');
	//$('.box2').addClass('moveup').removeClass('moveup');
	//$('.box1').removeClass('moveup');
	//$('.box2').removeClass('moveup');
});


$('#header2').on('click', function () {
	$('.box1').addClass('moveup');
	$('.box3').addClass('moveup');
	//$('.box1').addClass('moveup').removeClass('moveup');
	//$('.box3').addClass('moveup').removeClass('moveup');
	//$('.box1').removeClass('moveup');
	//$('.box3').removeClass('moveup');
});

$('#header1').on('click', function () {
	$('.box2').addClass('moveup');
	$('.box3').addClass('moveup');
	//$('.box2').addClass('moveup').removeClass('moveup');
	//$('.box3').addClass('moveup').removeClass('moveup');
	//$('.box2').removeClass('moveup');
	//$('.box3').removeClass('moveup');
});

//var boxes = document.query.Selector('.app');

//boxes.addEventListener('click', function(move) {
//	var upanddown = move.target.textContent;
	//return upanddown;
//});

	

//$( "p" ).click(function() {
  //$( this ).slideUp();
//});