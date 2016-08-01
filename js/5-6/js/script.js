var start = document.getElementById('button');
var sec = document.getElementById('hour');
var sec = document.getElementById('min');
var sec = document.getElementById('sec');
var msec = document.getElementById('msec');


	min.style.fontSize = '100px';
	sec.style.fontSize = '100px';
	msec.style.fontSize = '100px';



var countUpMsec = function() {
	var currentTime = parseFloat(msec.textContent);
		if (currentTime >= 0 && currentTime < 100) {
			msec.textContent = currentTime + 1;
		} else {
			window.clearInterval(timer);
		}
} 
var stopwatchMsec = window.setInterval(countUpMsec, 10);

if (stopwatchMse = 100) {
	var countUpSec = function() {
	var currentTime = parseFloat(sec.textContent);
		if (currentTime >= 0) {
			sec.textContent = currentTime + 1;
		} else {
			window.clearInterval(timer);
		}
} 

var stopwatchSec = window.setInterval(countUpSec, 1000);

var countUpMsec = function() {
	var currentTime = parseFloat(msec.textContent);
		if (currentTime == 100) {
			currentTime = 0;
			msec.textContent = currentTime + 1;
		} else {
			window.clearInterval(timer);
		}
} 

var stopwatchMsec = window.setInterval(countUpMsec, 10);

}

if (stopwatchSec = 60) {
	var countUpMin = function() {
	var currentTime = parseFloat(min.textContent);
		if (currentTime >= 0) {
			min.textContent = currentTime + 1;
		} else {
			window.clearInterval(timer);
		}
} 

var stopwatchMin = window.setInterval(countUpMin, 100000);

var countUpMsec = function() {
	var currentTime = parseFloat(sec.textContent);
		if (currentTime == 60) {
			currentTime = 0;
			sec.textContent = currentTime + 1;
		} else {
			window.clearInterval(timer);
		}
} 

var stopwatchSec = window.setInterval(countUpSec, 1000);

}



// if (stopwatch == 60) {
// 	var countUpMin = function() {
// 		var currentTime = parseFloat(min.textContent);
// 			if (currentTime >= 0) {
// 				min.textContent = currentTime + 1;
// 			} else {
// 				window.clearInterval(timer);
// 			}
// 	} 
// var stopwatch = window.setInterval(countUpMin, 1000);
// }