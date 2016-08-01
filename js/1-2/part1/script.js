var newNum = 0;
var a = prompt("Enter your number");

if (a === "") {
	alert("Enter the number, please");
	reload();
} else {
	var p = prompt("Enter the exponent");
} 
 
if (p === "") {
	alert("Enter the exponent, please");
	reload();
} else if (parseInt(p) != p && p != "" && a != "") {
    alert("Exponent should be integer");
    reload(); 
} else if (p == 0) {
	console.log ("Number raised to the power zero is equal to 1")
} else {
	if (p > 0) {
		newNum = pow(a, p);
		console.log("New number is ", newNum);
	} else {
		newNum = pow(a, -p);
		console.log("New number is ", 1/newNum);
	}		
}

/*
 * Returns x to the power n
 * @param {number} a The number which will be raised to some power.
 * @param {number} p Exponent.
 * @return {number} a^p.
 */

function pow(a, p) {
	var result = a;

  	for (var i = 1; i < p; i++) {
   		result *= a;
   	}

   return result;
}

// Reload the page

function reload() {
	location.reload();
}


