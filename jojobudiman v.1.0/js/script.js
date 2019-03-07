var enterskip = $('#username-input').val();

$('.enter-button').hide();

$('#username-input').click(function(event) {
	$('html').one('click',function() {
		if($('#username-input').val() == '') {
			console.log('ok1');
			$('.skip-button').show('fast');
			$('.enter-button').hide('fast');
		}
		else if($('#username-input').val() != '') {
			$('.skip-button').hide('fast');
			$('.enter-button').show('fast');
		}
		else {
			$('.skip-button').hide('fast');
		}
	});
	$('.skip-button').hide('fast');
	$('.enter-button').show('fast');
	event.stopPropagation();
});

var enter = function() {
	var enterskip = $('#username-input').val();

	if($('#username-input').val() == '') {
		$('.username-display').text("Anonymous");
		enterskip = 'Anonymous';
	}
	else {
		$('.username-display').text(enterskip);
	}

window.name = value;
console.log(window.name);

	  	$('.your-name').addClass('animated fadeOutDown');
	    $('.howru').addClass('animated fadeInUp');
	};

	$('#username-input').keypress(function (e) {
		$('.enter-button').show('fast');
		if(e.which == 13) enter();
	});

	var clickEnter = $('.enter-button').click(enter);

	$('.skip-button').click(function() {
		value = 'Anonymous';
		window.name = value;
	 	window.location = 'break';
	});


	$('.username-display').text(window.name);

	$(".animsition").animsition({

	inClass               :   'fade-in',
	outClass              :   'fade-out',
	inDuration            :    1500,
	outDuration           :    800,
	linkElement           :   '.animsition-link',
	// e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
	loading               :    true,
	loadingParentElement  :   'body', //animsition wrapper element
	loadingClass          :   'animsition-loading',
	unSupportCss          : [ 'animation-duration',
	                          '-webkit-animation-duration',
	                          '-o-animation-duration'
	                        ],
	//"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
	//The default setting is to disable the "animsition" in a browser that does not support "animation-duration".

	overlay               :   false,

	overlayClass          :   'animsition-overlay-slide',
	overlayParentElement  :   'body'
	});

	var header = $('#header');

	var nibs-black = $('.roasted-nibba');
	if (nibs-black.length) {
	  $(document).scroll(function() {
	    if ($(document).scrollTop() >= nibs-black.offset().top){
	      // user scrolled 50 pixels or more;
	      // do stuff
	      header.addClass('nibba');
	    } 
	    else {
	      header.removeClass('nibba');
	    }
	  });
	}