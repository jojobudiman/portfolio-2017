$(document).ready(function() {
    $(".preloader").delay(1000).fadeOut(2000, function() {
        $(".index").delay(1000).fadeIn(1000);        
    });
});

  $(document).ready(function(){
      $('.index').onepage_scroll({
        sectionContainer: 'section',
        loop: true,
        responsiveFallback: false
      });
		});

  $(document).ready(function(){
    $('#scroll-down').on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
  });

  $(document).ready(function(){
  	if ($(window).scrollTop() > 10 ) {
   $('.navbar-menu').css('position', 'sticky');
 }
 else {
   $('.navbar-menu').css('position', 'relative');
 }
  });