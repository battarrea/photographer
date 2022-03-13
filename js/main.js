$('document').ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('.fullscreen__link').click(function(){
		$('html, body').animate({
			scrollTop: $('.about').offset().top
		}, 400);
	});

});