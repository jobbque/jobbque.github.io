$(document).ready(function() {
  // Handler for .ready() called.
});

function getNumber() {
	
	var theRandomNumber = Math.floor(Math.random()*101)
	//var theirNumber = 0
	//var theirNumber=prompt("Please Enter a Number")
		while (theRandomNumber != theirNumber) {
			var theirNumber=prompt("Please Try Another Number")
			var difference = Math.abs(theRandomNumber - theirNumber)
			var status = "cold"

			function getStatus (difference) {
				if (difference == 0) {
					status = "You Got It!"
				} else if (difference > 20) {
					status = "Cold! Try Again."
				} else if (difference <= 20 && difference >= 10) {
					status = "Warm! Try Again."
				} else {
					status = "Hot! Try Again."
				} 
				return status;
			}
			document.getElementById("randNumber").innerHTML= "The Random Number is: " + theRandomNumber
			document.getElementById("theNumber").innerHTML= "Their Number is: " + theirNumber
			document.getElementById("numberDifference").innerHTML= "Difference: " + difference
			document.getElementById("currentStatus").innerHTML= "Current Status: " + getStatus(difference)
		}
}

/*function getRandom(number, count) {
	var currentRandomNumber = number
	var	counter = count

	if (counter == 0) {
		newRandomNumber = Math.floor(Math.random()*101)
		return newRandomNumber
	} else {
		return someNumber;
	}
}*/