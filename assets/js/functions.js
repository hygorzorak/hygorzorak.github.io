// @codekit-prepend "/vendor/CSSPlugin.min.js";
// @codekit-prepend "/vendor/CSSRulePlugin.min.js";
// @codekit-prepend "/vendor/ScrollToPlugin.min.js";
// @codekit-prepend "/vendor/jquery.gsap.min.js";
// @codekit-prepend "/vendor/animation.gsap.min.js";

$(document).ready(function() {
	
	/***************** Splashscreen ******************/
	
	$(window).load(function() {
		$('.splashscreen').addClass('splashscreen--is-hidden');
	});
	
	/***************** Responsive Nav ******************/

  $('.navigation__burger').click(function() {
	  navigationToggle();
  });
  
  function navigationToggle() {
	  
	  $('.navigation__burger').toggleClass('navigation__burger--is-open');
	  $('.navigation__container').toggleClass('navigation__container--is-open');
	  $('html, body').toggleClass('scroll-lock');
	  
  }
  
});
