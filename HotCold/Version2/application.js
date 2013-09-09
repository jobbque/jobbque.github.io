var theRandomNumber = Math.floor(Math.random()*101);
var previousNumbers = new Array(); 
var guessNumber = 0;

$(document).ready(function() {
  // Handler for .ready() called.
 	$("#upArrow, #downArrow, #correct").hide();
 	$("#theNumber").keyup(function(){
    	if(event.keyCode == 13){
        	$("#button").click();
    	}
	});
});

/*function getStatus (difference) {
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

function highLow (theirNumber) {
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

/*function logPreviousGuesses () {
	document.getElementById("numbersGuessed").innerHTML= "Previous Guesses: " + getPreviousGuesses(theirNumber,guessNumber);
};*/

function highLow (theirNumber) {

	$("#upArrow, #downArrow, #correct").hide();
	document.getElementById("invalidEntry").innerHTML= "";

	function logValidGuesses () { 
		document.getElementById("numbersGuessed").innerHTML= "Previous Guesses: " + getPreviousGuesses(theirNumber,guessNumber);
	}

	if (theirNumber < 1 || theirNumber > 100) {
		document.getElementById("invalidEntry").innerHTML= "Invalid Entry";
	} else if (Number(theirNumber) && theirNumber > theRandomNumber) {
		$("#downArrow").animate({height:'toggle'});
		logValidGuesses();
	} else if (Number(theirNumber) && theirNumber < theRandomNumber) {
		$("#upArrow").animate({height:'toggle'});
		logValidGuesses();
	} else if (Number(theirNumber)) {
		$("#correct").show();
		logValidGuesses();
	} 
};

function getPreviousGuesses(theirNumber) {
	var count = guessNumber;

	previousNumbers[count]=theirNumber;
	guessNumber++;

	return previousNumbers;
};

function testNumber() {
	
	var theirNumber = document.getElementById('theNumber').value;
	var difference = Math.abs(theRandomNumber - theirNumber);
	var status = "cold";
	var highLowStatus = "Too High";
	var guessNumber = 0;

	if (Number(theirNumber)) { //ensures that the person entered a number, and not text
		highLow(theirNumber);
	} else {
		$("#upArrow, #downArrow, #correct").hide();
		document.getElementById("invalidEntry").innerHTML= "Numbers Only Please";
	}

	//selects the text in the number text field so the user 
	//doesn't have to click in the field to enter a new number

	$("#theNumber").text(function(){
    	this.select();
	});

	//highLow(theirNumber);
	//document.getElementById("randNumber").innerHTML= "The Random Number is: " + theRandomNumber;
	//document.getElementById("aNumber").innerHTML= "Their Number is: " + theirNumber;
	//document.getElementById("numberDifference").innerHTML= "Difference: " + difference;
	//document.getElementById("currentStatus").innerHTML= highLow(theirNumber);	
};