$(document).ready(function() {
  // Handler for .ready() called.

  var theirNumber = 33;
  var numberStatus = Number(theirNumber);

  var myCars=new Array(); 
	myCars[0]="Saab";       
	myCars[1]="Volvo";
	myCars[2]="BMW";

  //document.getElementById("something").innerHTML= Number(theirNumber);
  if (Number(theirNumber)) {
  	document.getElementById("something").innerHTML= "Yo";
  }
});