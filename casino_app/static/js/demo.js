$(function(){
	var p = {
		startCallback : function() {
			$('#speed, #duration').slider('disable');
			$('#stopImageNumber').spinner('disable');
			$('.start').attr('disabled', 'true');
			$('.stop').removeAttr('disabled');
		},
		slowDownCallback : function() {
			$('.stop').attr('disabled', 'true');
		},
		stopCallback : function($stopElm) {
			$('#speed, #duration').slider('enable');
			$('#stopImageNumber').spinner('enable');
			$('.start').removeAttr('disabled');
			$('.stop').attr('disabled', 'true');
		}
	}

	var rouletter = $('div.roulette');
	rouletter.roulette(p);

	$('.stop').click(function(){
		var stopImageNumber = Math.floor(Math.random() * 9);; //$('.stopImageNumber').val();
		if(stopImageNumber == "") {
			stopImageNumber = null;
		}
		rouletter.roulette('stop');	
	});
	$('.stop').attr('disabled', 'true');
	$('.start').click(function(){
		rouletter.roulette('start');	
	});
});

