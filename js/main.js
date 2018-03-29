$(document).ready(function() {
	var height = $(window).height();
    $('#header').css('height', height);
    // $('body').scrollspy({ target: '.navbar-spy'});
});

// JQuery for scrolling menu
$(document).on('click', 'a.page-scroll', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
				scrollTop: ($($anchor.attr('href')).offset().top - 30)
		}, 1450, 'easeInOutExpo');
		event.preventDefault();
});

// Submitting info from the contact form to e-mail
$('#form').submit(function(e){
	var name = document.getElementById('inputName'),
			email = document.getElementById('inputEmail'),
			subject = document.getElementById('inputSubject'),
			message = document.getElementById('inputMessage');

	if(!name.value || !email.value || !subject.value || !message.value){
		alertify.error("Please check your entries")
	} else {
		$.ajax({
			url: "//formspree.io/gkatashima@gmail.com",
			method: "POST",
			data: $(this).serialize(),
			dataType: "json"
		});
		e.preventDefault()
		$(this).get(0).reset()
		alertify.success("Message sent!");
		return false;
	}
});
