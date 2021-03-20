/*global $,  document,  window, Swiper */
jQuery.noConflict();

jQuery(document).ready(function ($) {

	// setTimeout(function () {
	// 	$('html, body').animate(
	// 		{
	// 			scrollTop: $('#bottom').offset().top
	// 		},
	// 		1000
	// 	);
	// }, 3000);

	$(window).scroll(function () {
		$('.top-header__account-dropdown').removeClass('show');

		if ($(window).scrollTop() + $(window).height() == $(document).height()) {
			// setTimeout(function () {
			// 	$('#video')
			// 		.fancybox({
			// 			youtube: {
			// 				controls: 1,
			// 				showinfo: 0,
			// 				autoplay: 1 // enable autoplay
			// 			},
			// 			afterShow: function () {
			// 				console.log('played');
			// 				setTimeout(function () {
			// 					$.fancybox.close();
			// 					window.scrollTo(0, 0);
			// 					$('#video').remove();

			// 				}, 162000 + 2000); //video time now is 25 sec and 2 sec to start video
			// 			}
			// 		})
			// 		.trigger('click');
			// }, 2000);
		}
	});

	// document.getElementById('myVideo').addEventListener('ended', myHandler, false);
	// function myHandler(e) {
	// 	$.fancybox.close();
	// }


	$('.A-show-password').on('click', (e)=>{
		e.preventDefault();
		e.target.parentElement.nextElementSibling.setAttribute('type', 'text')
	})

	$('[data-fancybox="images"]').fancybox({
		transitionEffect: "zoom-in-out",
		animationEffect: "zoom-in-out",
		thumbs: {
		  autoStart: true,
		  axis: "x"
		},
	  });

	  let isAdvancedSearchOpened = false;
	  $('#advancedSearch').on('click', (e)=>{
		  e.preventDefault();
			isAdvancedSearchOpened = !isAdvancedSearchOpened;

		  $('#advancedSearchContainer').toggleClass('showAdvancedSearchContainer');
		  $('#normal-search-select + .nice-select').toggle();

		  if (isAdvancedSearchOpened) {
			  e.target.innerHTML = '- بحث عادي'
		  }else {
			e.target.innerHTML = '+ بحث متقدم'
		  }
	  })

	  $('#closeLangSectionBtn').on('click', function(e){
		  e.preventDefault()
		  $('#languageOptions').hide()
	  })

	  $('#openLangSectionBtn').on('click', function(e){
		  e.preventDefault()
		$('#languageOptions').show()
	})
});

jQuery(document).ready(function ($) {
	//  ------------------------------------------ Scroll To Top Animate --------------------------------------
	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	$('.scrollToTop').click(function () {
		$('html, body').animate(
			{
				scrollTop: 0
			},
			1000
		);
		return false;
	});

	//  ------------------------------------------ Modal Animate --------------------------------------

	function testAnim(x) {
		$('.modal .modal-dialog').attr('class', 'modal-dialog  ' + x + '  animated');
	}
	$('.modal').on('show.bs.modal', function (e) {
		testAnim('bounceInDown');
	});
	$('.modal').on('hide.bs.modal', function (e) {
		testAnim('slideOutUp');
	});

	//   ------------------------------------------ tooltip  --------------------------------------
	$('[data-toggle="tooltip"]').tooltip();

	//   ------------------------------------------ tooltip  --------------------------------------
	if ($('select').length) {
		$('select').niceSelect();
	}

	if ($('.hvr-tabs').length) {
		$('.hvr-tabs-items li').on('mouseover click', function () {
			$(this).addClass('active').siblings().removeClass('active');
			//hide all divs
			$('.hvr-tab-content > div').hide();
			//show
			$($(this).data('tab')).show();
		});
	}

	//   ------------------------------------------ Carosuel Init  --------------------------------------

	// if ($('.news-carousel').length) {
	// 	var newsCarousel = new Swiper('.news-carousel .swiper-container', {
	// 		speed: 2000,
	// 		loop: false,
	// 		effect: 'cube',
	// 		cubeEffect: {
	// 			slideShadows: false,
	// 			shadow: false
	// 		},
	// 		autoplay: {
	// 			delay: 5000
	// 		},
	// 		pagination: {
	// 			el: '.news-carousel .swiper-pagination',
	// 			clickable: true
	// 		}
	// 	});
	// 	$('.news-carousel').hover(
	// 		function () {
	// 			newsCarousel.autoplay.stop();
	// 		},
	// 		function () {
	// 			newsCarousel.autoplay.start();
	// 		}
	// 	);
	// }

	if ($('.graduate-carousel').length) {
		var graduateCarousel = new Swiper('.graduate-carousel .swiper-container', {
			speed: 2000,
			loop: true,
			effect: 'cube',
			cubeEffect: {
				slideShadows: false,
				shadow: false
			},
			autoplay: {
				delay: 5000
			},
			pagination: {
				el: '.graduate-carousel .swiper-pagination',
				clickable: true
			}
		});
		$('.graduate-carousel').hover(
			function () {
				graduateCarousel.autoplay.stop();
			},
			function () {
				graduateCarousel.autoplay.start();
			}
		);
	}

	var galleryThumbs = new Swiper('.gallery-thumbs', {
		spaceBetween: 15,
		slidesPerView: 1,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		loop: true,
		freeMode: true,
		loopedSlides: 4, //looped slides should be the same
		speed: 2000,
		navigation: {
			nextEl: '.gallery-thumbs-container .swiper-button-next',
			prevEl: '.gallery-thumbs-container .swiper-button-prev'
		},
		pagination: {
			el: '.gallery-thumbs-container .swiper-pagination',
			type: 'fraction',

			renderFraction: function (currentClass, totalClass) {
				return (
					'<span class="' + totalClass + '"></span>' + ' / ' + '<span class="' + currentClass + '"></span>'
				);
			}
		}
	});
	var galleryTop = new Swiper('.gallery-top', {
		speed: 2000,
		loop: true,
		spaceBetween: 10,
		loopedSlides: 4, //looped slides should be the same
		effect: 'cube',
		grabCursor: true,
		cubeEffect: {
			shadow: true,
			slideShadows: false,
			shadowOffset: 20,
			shadowScale: 0.44
		},
		autoplay: {
			delay: 7000
		},
		pagination: {
			el: '.gallery-top-container .swiper-pagination',
			clickable: true
		},
		navigation: {
			nextEl: '.gallery-thumbs-container .swiper-button-next',
			prevEl: '.gallery-thumbs-container .swiper-button-prev'
		},
		thumbs: {
			swiper: galleryThumbs
		}
	});
	// $('.gallery-thumbs-container .swiper-button-next').on('click', function() {
	// 	$('.gallery-top-container .swiper-button-next').click();
	// });
	// $('.gallery-thumbs-container .swiper-button-prev').on('click', function() {
	// 	$('.gallery-top-container .swiper-button-prev').click();
	// });

	//   ------------------------------------------ TimeLine Init  --------------------------------------
	if ($('.timeline-events').length) {
		var timelineCarousel = new Swiper('.timeline-events .swiper-container', {
			speed: 2000,
			slidesPerView: 4,
			loop: false,
			spaceBetween: 10,
			simulateTouch: false,
			navigation: {
				nextEl: '.timeline-events .swiper-button-next',
				prevEl: '.timeline-events .swiper-button-prev'
			},
			breakpoints: {
				480: {
					slidesPerView: 6
				},
				768: {
					slidesPerView: 9
				},
				991: {
					slidesPerView: 12
				}
			}
		});
	}
	// Looping throw 12 monthes
	var monthNumbers = 12;
	for (var i = 1; i <= monthNumbers; i++) {
		var carusel = new Swiper('.carousel-' + i + ' .swiper-container', {
			speed: 2000,
			slidesPerView: 1,
			loop: false,
			spaceBetween: 15,
			navigation: {
				nextEl: '.carousel-' + i + ' .swiper-button-next',
				prevEl: '.carousel-' + i + ' .swiper-button-prev'
			}
		});
	}

	//   ------------------------------------------ Fixed item Func --------------------------------------
	$(window).scroll(function () {
		var sticky = $('.fixed-menu'),
			stickyTop = $('.middel-section').offset().top - 200,
			scroll = $(window).scrollTop();

		if (scroll > 729) sticky.addClass('fixed');
		else sticky.removeClass('fixed');
	});

	// document.getElementById('wrapper').scrollIntoView();
});
