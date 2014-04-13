var seconds = 30;

function secondPassed(){
	var minutes = Math.round((seconds - 30)/60);
	var remainingSeconds = seconds % 60;
	if (remainingSeconds < 10){
		remainingSeconds = "0" + remainingSeconds;
	}
	$('#countdown').innerHtml = minutes + ":" + remainingSeconds;
	if (seconds == 0){
		clearInterval(countdownTimer);
		$('#countdown').innerHtml = "Times up!";
	} else {
		seconds --;
	}

}

var countdownTimer = setInterval('secondPassed()', 1000);