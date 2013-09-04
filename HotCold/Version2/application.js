var theRandomNumber = Math.floor(Math.random()*101);

$(document).ready(function() {
  // Handler for .ready() called.
  $("#upArrow, #downArrow, #correct").hide();
});

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
};

/*function highLow (theirNumber) {
	if (theirNumber > 100) {
		highLowStatus = "Please pick from 1-100 only."
	} else if (theirNumber > theRandomNumber) {
		highLowStatus = "Too High";
	} else if (theirNumber < theRandomNumber) {
		highLowStatus = "Too Low";
	} else {
		highLowStatus = "You Got It!"
	}
	return highLowStatus;
}*/

function highLow (theirNumber) {

	$("#upArrow, #downArrow, #correct").hide();

	if (theirNumber > theRandomNumber) {
		$("#downArrow").show();
	} else if (theirNumber < theRandomNumber) {
		$("#upArrow").show();
	} else {
		$("#correct").show();
	} 
};

function testNumber() {
	
	var theirNumber = document.getElementById('theNumber').value;
	var difference = Math.abs(theRandomNumber - theirNumber);
	var status = "cold";
	var highLowStatus = "Too High";

	highLow(theirNumber);
	//document.getElementById("randNumber").innerHTML= "The Random Number is: " + theRandomNumber;
	//document.getElementById("aNumber").innerHTML= "Their Number is: " + theirNumber;
	//document.getElementById("numberDifference").innerHTML= "Difference: " + difference;
	//document.getElementById("currentStatus").innerHTML= highLow(theirNumber);	
};