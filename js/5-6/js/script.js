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




var status = 0; //0:stop 1:running
var time = 0;
var msec = 0;
var sec = 0;
var min = 0;
var hr = 0;
var t;
var start_button = document.getElementById('start_button')
var stop_button = document.getElementById('stop_button')
var reset_button = document.getElementById('reset_button')
var split_button = document.getElementById('split_button')

start_button.style.width = '300px';
stop_button.style.display = "none";
reset_button.style.display = "none";
split_button.style.display = "none";


function start() {
    status = 1;
    timer();
    start_button.style.display = 'none';
    stop_button.style.display = "block";
    split_button.style.display = "block";
    reset_button.style.display = "none";
}

start_button.addEventListener('click', start);

function stop() {
    status = 0;
    start_button.style.display = 'block';
    start_button.innerHTML = 'RESUME';
    start_button.style.width = '150px';
    stop_button.style.display = "none";
    reset_button.style.display = "block";
    split_button.style.display = "none";
}

stop_button.addEventListener('click', stop);

function reset() {
    status = 0;
    time = 0;
    document.getElementById('showTime').innerHTML = '00:00:00.00';
    start_button.innerHTML = "START";
    start_button.style.width = '300px';
stop_button.style.display = "none";
reset_button.style.display = "none";
split_button.style.display = "none";
}

reset_button.addEventListener('click', reset);


function split() {
    var newtext = document.getElementById('showTime').innerHTML;
    document.getElementById('text').innerHTML = document.getElementById('text').innerHTML + newtext + "\n";
}

split_button.addEventListener('click', split);

document.getElementById('text');
text.style.width = '50px';

function timer() {
    if (status == 1) {
        setTimeout(function() {
          msec++;
	if (msec >= 100) {
		msec = 0;
		sec++;
	}	

	if (sec >= 60) {
		sec = 0;
		min++;

	if (min >= 60) {
		min = 0;
		hr++;
	}
}

document.getElementById("showTime").innerHTML = (hr ? (hr > 9 ? hr : "0" + hr) : "00") + ":" 
												+ (min ? (min > 9 ? min : "0" + min) : "00") + ":" 	
												+ (sec ? (sec > 9 ? sec : "0" + sec) : "00") + "." 
												+ (msec > 9 ? msec: "0" + msec);
            timer();
        }, 10);
    }
}
