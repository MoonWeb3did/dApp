$(document).ready(function() {

	$('.menu li a').click(function (e) {
		//e.preventDefault();
		var target = $(this).attr('data-id');
		if (target !== '')
		{	
			$('.menu .active').removeClass('active');
			$(this).parent().addClass('active');
			$('html, body').stop().animate({
				scrollTop: $(target).offset().top - 120
			}, 1000, function () {
				location.hash = target;
			});
			return false;
		}
	});
	$('.click-menu').click(function(){
		$('.click-menu').toggleClass('active');
		$('.menu').toggleClass('active');
		$('.text-mg-right').toggleClass('active');
		$('body').toggleClass('active');
	});

	$(".faqs-title").click(function(){
		if($(this).next().is(':visible'))
		{
			$(this).next().slideUp(500);
		}
		else
		{
			$(".faqs-des").slideUp(500);
			$(this).next().slideDown(500);	
		}
	});
	$('.faqs-title').click( function(){
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
		} else {
			$('.faqs-title.active').removeClass('active');
			$(this).addClass('active');    
		}
	});

	if ($(window).width() > 1000) {
		var $isAnimatedSecond = $('.second .is-animated'),
		$isAnimatedSecondSingle = $('.second .is-animated__single');
		var $isAnimatedThird = $('.third .is-animated'),
		$isAnimatedThirdSingle = $('.third .is-animated__single');
		var $isAnimatedTwo = $('.two .is-animated'),
		$isAnimatedTwoSingle = $('.two .is-animated__single');
		var $isAnimatedThree = $('.three .is-animated'),
		$isAnimatedSevenThree = $('.three .is-animated__single');
		var $isAnimatedFourth = $('.fourth .is-animated'),
		$isAnimatedFourthSingle = $('.fourth .is-animated__single');
		var $isAnimatedFive = $('.five .is-animated'),
		$isAnimatedFiveSingle = $('.five .is-animated__single');
		
		$('#fullpage').fullpage({
			anchors: ['home', 'docs', 'ecosytem', 'features', 'roadmap', 'faq', 'nft'],
			menu: '#menu',
			slidesNavigation: true,
			onLeave: function(index, nextIndex, direction){
				if( index == 1 && nextIndex == 2 ) {
					$isAnimatedSecond.eq(0).addClass('animated fadeInLeft').css('animation-delay', '.3s');
					$isAnimatedSecond.eq(1).addClass('animated fadeInLeft').css('animation-delay', '.6s');
					$isAnimatedSecond.eq(2).addClass('animated zoomIn').css('animation-delay', '.5s');
				}
				else if( ( index == 1 || index == 2 ) && nextIndex == 3 ) {
					$isAnimatedThird.eq(0).addClass('animated fadeInDown').css('animation-delay', '.3s'); 
					$isAnimatedThird.eq(1).addClass('animated fadeInUp').css('animation-delay', '.5s');
					$isAnimatedThird.eq(2).addClass('animated fadeInUp').css('animation-delay', '.7s'); 
					$isAnimatedThird.eq(3).addClass('animated fadeInUp').css('animation-delay', '.9s');
					$isAnimatedThird.eq(4).addClass('animated fadeInUp').css('animation-delay', '1.1s'); 
					$isAnimatedThird.eq(5).addClass('animated fadeInUp').css('animation-delay', '1.3s');
					$isAnimatedThird.eq(6).addClass('animated fadeInUp').css('animation-delay', '1.5s');
					$isAnimatedThird.eq(7).addClass('animated fadeInUp').css('animation-delay', '1.7s');
					$isAnimatedThird.eq(8).addClass('animated fadeInUp').css('animation-delay', '1.9s');
				}
				else if( ( index == 1 || index == 2 || index == 3 ) && nextIndex == 4 ) {
					$isAnimatedTwo.eq(0).addClass('animated fadeInLeft').css('animation-delay', '.3s'); 
					$isAnimatedTwo.eq(1).addClass('animated fadeInLeft').css('animation-delay', '.5s'); 
					$isAnimatedTwo.eq(2).addClass('animated zoomIn').css('animation-delay', '.5s');
					$isAnimatedTwo.eq(3).addClass('animated zoomIn').css('animation-delay', '.7s');
					$isAnimatedTwo.eq(4).addClass('animated zoomIn').css('animation-delay', '.9s');
				}
				else if( ( index == 1 || index == 2 || index == 3 || index == 4 ) && nextIndex == 5 ) {
					$isAnimatedThree.eq(0).addClass('animated fadeInDown').css('animation-delay', '.3s'); 
					$isAnimatedThree.eq(1).addClass('animated zoomIn').css('animation-delay', '.5s');
					$isAnimatedThree.eq(2).addClass('animated zoomIn').css('animation-delay', '.7s'); 
					$isAnimatedThree.eq(3).addClass('animated zoomIn').css('animation-delay', '.9s');
					$isAnimatedThree.eq(4).addClass('animated zoomIn').css('animation-delay', '1.1s');
				}
				else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 ) && nextIndex == 6 ) {
					$isAnimatedFourth.eq(0).addClass('animated fadeInDown').css('animation-delay', '.3s'); 
					$isAnimatedFourth.eq(1).addClass('animated fadeInUp').css('animation-delay', '.5s');
				}
				else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 ) && nextIndex == 7 ) {
					$isAnimatedFive.eq(0).addClass('animated fadeInDown').css('animation-delay', '.3s'); 
					$isAnimatedFive.eq(1).addClass('animated fadeInUp').css('animation-delay', '.5s');
				}
			}
		});
	};
	
});