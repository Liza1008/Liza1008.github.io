// var msec = 0;
// var sec = 0;
// var min = 0;
// var hr = 0;
// var t;

// //START/STOP
// var start_button = document.getElementById('start');
// var stop_button = document.getElementById('stop');

// function stopwatch(event) {
// 	msec++;
// 	if (msec >= 100) {
// 		msec = 0;
// 		sec++;
// 	}	
// 	if (sec >= 60) {
// 		sec = 0;
// 		min++;
// 	if(min >= 60) {
// 		min = 0;
// 		hr++;
// 	}
// }

// document.getElementById("showtime").innerHTML = (hr ? (hr > 9 ? hr : "0" + hr) : "00") + ":" 
// 												+ (min ? (min > 9 ? min : "0" + min) : "00") + ":" 	
// 												+ (sec ? (sec > 9 ? sec : "0" + sec) : "00") + "." 
// 												+ (msec > 9 ? msec: "0" + msec);
// timer();

// }

// start_button.addEventListener('click', stopwatch);
// if (event.which == 1) {
// 	document.replaceChild(stop_button, start_button);
// }

// function timer() {
// 	t = setTimeout(stopwatch, 10);
// }

// function stopTimer() {
// 	clearTimeout(t);
// }

// //RESET
// var reset_button = document.getElementById('reset');

// function reset(event) {
// 	msec = 0;
// 	hr = 0;
// 	min = 0;
// 	sec = 0;
// document.getElementById('showtime').innerHTML = "00:00:00.00";
// }

// reset_button.addEventListener('click', reset);

// //SPLIT
// var split_button = document.getElementById('split');

// function split() {
// 	var newtext = document.getElementById('showtime').innerHTML;
// 	document.getElementById('text').innerHTML = document.getElementById('text').innerHTML + newtext + "\n"; 
// }

// split_button.addEventListener('click', split);

// document.getElementById('text');
// 	text.style.width = '50px';






































