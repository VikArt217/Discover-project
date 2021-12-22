$(function () {
	$('.mini-menu').click(function () {
		if ($('nav ul').css('display') == 'none') {
			$('nav ul').slideDown();
		} else {
			$('nav ul').slideUp();
		}
	});

	$('.service-slider').slick({
		arrows: false,
		dots: true,
		responsive: [{
				breakpoint: 700,
				settings: {
					dots: false,
					centerMode: true,
					centerPadding: '35px'
				}
			}
		]

	});

	AOS.init({
		offset: 200,
		duration: 800,
		easing: 'ease-in-quad',
		delay: 100,
		once: true,
	});

});