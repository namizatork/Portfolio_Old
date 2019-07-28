$(function() {
		
	$('.parallax').parallax();

	$(document).ready(function(){
		$('.carousel').carousel(
		{
			dist: 0,
			padding: 0,
			fullWidth: true,
			indicators: true,
			duration: 100,
		}
		);
	});

	autoplay()   
	function autoplay() {
			$('.carousel').carousel('next');
			setTimeout(autoplay, 9000);
	}
	
  $(document).ready(function(){
    $('ul.tabs').tabs();
  });
	
	$(".button-collapse").sideNav();
	
	$('.carousel.carousel-slider').carousel({fullWidth: true});
	
  $('a[href^="#"]' + 'a:not([href *= "profile"])' + 'a:not([href*="goal"])' + 'a:not([href*="portfolio01"])' + 'a:not([href*="portfolio02"])' + 'a:not([href*="portfolio03"])' + 'a:not([href*="portfolio04"])' + 'a:not([href*="portfolio05"])').click(function(){
    var speed = 1500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });

  $(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });
	
  $(document).ready(function(){
		var n = $(document).height();
		var h = n - 650;
    $('.target').pushpin({
      top: 0,
      bottom: h,
      offset: 150
    });
  });

  $(document).ready(function(){
    $('.tooltipped').tooltip({delay: 50});
  });
	
});
