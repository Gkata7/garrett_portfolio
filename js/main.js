$(document).ready(function() {
	var height = $(window).height();
    $('#header').css('height', height);
    //Scrollspy plugin
    $('body').scrollspy({ target: '.navbar-spy'});
});

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
