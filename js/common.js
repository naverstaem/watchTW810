
head.ready(function() {

	//$('#thumbnails li').click(function(){
	//	var srcLink = $(this).attr('data-src');
	//	$('.active').removeClass('active');
	//	$(this).addClass('active');
	//	$('.slider img').attr('src', srcLink);
	//});

	var checker = document.getElementById('check');
	var sendbtn = document.getElementById('send');
	sendbtn.disabled = true;
	jQuery(document).ready(function($){
		checker.onchange = function(){
			if(this.checked){
				sendbtn.disabled = false;
			} else {
				sendbtn.disabled = true;
			}

		};
	});



	// Counter

	var d = [1, 7, 6, 5, 4, 3, 2];
	var today = new Date();
	var end = new Date(today.getFullYear(), today.getMonth(), today.getDate() + d[today.getDay()], 23, 59, 59);
	var _second = 1000;
	var _minute = _second * 60;
	var _hour = _minute * 60;
	var _day = _hour * 24;
	var timer;

	function showRemaining() {
		var now = new Date();
		var distance = end - now;
		var days = Math.floor(distance / _day);
		if (days < 10) days = '0' + days;
		var hours = Math.floor((distance % _day) / _hour);
		if (hours < 10) hours = '0' + hours;
		var minutes = Math.floor((distance % _hour) / _minute);
		if (minutes < 10) minutes = '0' + minutes;
		var seconds = Math.floor((distance % _minute) / _second);
		if (seconds < 10) seconds = '0' + seconds;

		$(".counter .h").html(hours);
		$(".counter .m").html(minutes);
		$(".counter .s").html(seconds);
	}

	timer = setInterval(showRemaining, 1000);

	$('#form1').validate();
	$('#form2').validate();
	$('#form3').validate();
	$('#form4').validate();
	$('#form5').validate();
	$('#form6').validate();
	$('#form7').validate();


	$('.navbar-nav a').on('click',function (e) {
		e.preventDefault();

		var target = this.hash,
			$target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top - 20
		}, 500, 'swing', function () {
			// window.location.hash = target;
		});
	});

});