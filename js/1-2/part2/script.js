var arr = [];

for (var i = 0; i < 5; i++) {
	arr[i] = prompt ("Name", "");
	console.log(arr[i]);
}

var flag = 0;
var flag_name = 0;

for (var i = 0; i < arr.length; i++) {
	if (arr[i] == "") {
		flag_name = 1;
	}	
}

if (flag_name == 1) {
	alert ("Enter five names, please");
	reload();	
} else {
	var userName = prompt("User name", "");
		for (var i = 0; i < arr.length; i++) {
		if (arr[i] == userName) {
			flag = 1;
		}
	}
}

if (flag == 1) {
	alert(userName + ", You have successfully logged!");
} else {
	alert("Error");
}

function reload() {
	location.reload();
}