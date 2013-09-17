var shoppingList = new Array();
var itemNumber = 0;

$(document).ready(function() {
	$("#newItem").keyup(function(){
    	if(event.keyCode == 13){
        	$("#button").click();
    	}
	});
});


function createShoppingList () {
	for (var i=0; i < shoppingList.length; i++) {
		if (typeof shoppingList[i] != 'undefined') {
			$("#shoppingList").append("<input type='checkbox' id='checkbox"+i+"'><span id='shoppingListItem"+i+"'>"+shoppingList[i]+"</span> <br>");
		}
	}
}


//Takes an item as imput from the form, adds it to the array
//sends array contents to screen.

function addItemToList () {

	$("#newItem").text(function(){
    	this.select();
	});

	var Item = document.getElementById('newItem').value;

	if (Item.length > 0) {
		shoppingList[itemNumber] = Item;
		itemNumber++;
	}

	manageShoppingList ();
}

function manageShoppingList () {

	$("#shoppingList").empty();

	createShoppingList ();
		
	//If you click anywhere on the shoppingList form, a check is done to see which of the checkboxes for the form
	//elements are checked, if a checkbox is checked, then the corresponding item to that checkbox is lined through
		
	$("#shoppingList").click(function() {
		for (var i=0; i < shoppingList.length; i++) {
			if ($('#checkbox'+i).is(':checked')) {
    			$("#shoppingListItem"+i).css ("text-decoration", "line-through");
			} else {
				$("#shoppingListItem"+i).css ("text-decoration", "none");
			}
		}
	});

	$("#clearCheckedItems").click(function() {

		for (var i=0; i < shoppingList.length; i++) {
			if ($('#checkbox'+i).is(':checked')) {
    			delete shoppingList[i];
			}
		}
		$("#shoppingList").empty();
    	createShoppingList ();
		//$("#justTesting").text(shoppingList);
	});
}


