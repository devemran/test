(function($){

	$(".toggle-bar").click(function(){

		$("header .col2 .menu").slideToggle(500);


	});

	$(".top").click(function(){
		$("html, body").animate({
			scrollTop:0
		}, 1000);
	});

	$('.menu li a').click(function(e) {
	  	
	  	let tt = $(this).attr('href');

		$('html, body').animate({
			scrollTop: $(tt).offset().top
		}, 1000);
	    
	    e.preventDefault();
	});




})(jQuery)