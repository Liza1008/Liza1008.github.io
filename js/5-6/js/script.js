var time = 0;
var status = 0; //0:stop 1:running

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

function stop() {
    status = 0;
    start_button.style.display = 'block';
    start_button.style.width = '100px';
    stop_button.style.display = "none";
    reset_button.style.display = "block";
   	split_button.style.display = "none";
    var stop_div = document.createElement('div');
	stop_div.className = 'stop';
	var text = document.getElementById('text');
    text.appendChild(stop_div);
    var allStops = document.getElementsByClassName('stop');
    var amountStops = allStops.length;
    var newtext = document.getElementById('showTime').innerHTML;
    stop_div.innerHTML = "<strong>STOP</strong> " + amountStops + ": " + newtext;
}

function reset() {
    status = 0;
    time = 0;
    document.getElementById('showTime').innerHTML = '00:00:00.00';
    start_button.style.display = "block";
    start_button.style.width = '300px';
    stop_button.style.display = "none";
    reset_button.style.display = "none";
    split_button.style.display = "none";
    text.innerHTML = "";
    amountSplits = 0;
    amountStops = 0;
}



function split() {
	var split_div = document.createElement('div');
	split_div.className = 'split';
	var text = document.getElementById('text');
    var allSplits = document.getElementsByClassName('split');
    var amountSplits = allSplits.length;
    var newtext = document.getElementById('showTime').innerHTML;
    split_div.innerHTML = "Spit " + (amountSplits + 1) + ": " + newtext;
    text.insertBefore(split_div, allSplits[0]);
}

function timer() {
    if (status == 1) {
        setTimeout (function() {
		time ++;		
		var hours = Math.floor(time/10/60/60);;
		var mins = Math.floor(time/100/60);
		var seconds = Math.floor(time/95 % 60);;
		var tenths = time % 100;

		if (hours < 10) {
		hours = '0' + hours;
		}

		if (mins < 10) {
			mins = '0' + mins;
		}
		if (seconds < 10) {
			seconds = '0' + seconds;
		}

		if (tenths < 10) {
		tenths = '0' + tenths;
		}

		document.getElementById('showTime').innerHTML = hours + ':' + mins + ':' + seconds + '.' + tenths;
		timer();
		}, 10);
    }
}


start_button.addEventListener('click', start);
stop_button.addEventListener('click', stop);
reset_button.addEventListener('click', reset);
split_button.addEventListener('click', split);