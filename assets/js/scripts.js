// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
	$(".toggle-open").click(function() {
		$("body").toggleClass("nav-open");
		$("nav").toggleClass("open");
		$(".wrapper").toggleClass("open");
		$(this).toggleClass("open");
	});
	$('a.page-scroll').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1480);

		event.preventDefault();
	});
});
