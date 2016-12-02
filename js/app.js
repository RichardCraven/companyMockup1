AOS.init({
  duration: 800,
  easing: 'ease-in-out-back'
});

// window.onload = function(){
// 	console.log('loaded')
// }
window.setTimeout(function(){
  // console.log("Boom!");
  // console.log($('.section-heading.one'))
  $('.section-heading.one').removeClass('typewriter1')
  $('.section-heading.two').addClass('typewriter2')
  $('.section-heading.two').css('display','inline-block')
	  setTimeout(function(){
	  $('.section-heading.two').removeClass('typewriter2')	
	  $('.section-heading.three').addClass('typewriter3')
	  $('.section-heading.three').css('display','inline-block')
	  		setTimeout(function(){
	  		$('.section-heading.three').removeClass('typewriter3')	
	  		$('.section-heading.four').addClass('typewriter4')
	  		$('.section-heading.four').css('display','inline-block')
	  		},650)
	  },650);
}, 600);
