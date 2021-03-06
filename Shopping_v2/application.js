var shoppingList = new Array();
var itemNumber = 0;
var checkedList = new Array();

$(document).ready(function() {
	$("#newItem").keyup(function(){
    	if(event.keyCode == 13){
        	$("#button").click();
    	}
	});
	$("#duplicateEntry").hide();
});

//Takes an item as imput from the form, adds it to the array
//sends array contents to screen.

function addItemToList () {

	$( "#duplicateEntry" ).slideUp( function() {
    	// Animation complete.
    });

	$("#newItem").text(function(){
    	this.select();
	});

	var Item = document.getElementById('newItem').value;

	if (Item.length > 0 && isAlreadyListed(Item) != true) {
		shoppingList[itemNumber] = Item;
		itemNumber++;
	} else {
		//$("#duplicateEntry").show();
    	$( "#duplicateEntry" ).slideDown( function() {
    	// Animation complete.
    	});
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
    			checkedList[i] = shoppingList[i];
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
    	checkedList = [];
	});
}

function createShoppingList () {
	for (var i=0; i < shoppingList.length; i++) {
		if (typeof shoppingList[i] != 'undefined') {
			$("#shoppingList").append("<input type='checkbox' id='checkbox"+i+"'><span id='shoppingListItem"+i+"'>"+shoppingList[i]+"</span> <br>");
		}

		if (isChecked (shoppingList[i]) === true) {
			$("#shoppingListItem"+i).css ("text-decoration", "line-through");
			$("#checkbox"+i).prop("checked", true);
		}
	}
}

function isChecked (someListItem){
	for (var i=0; i < checkedList.length; i++) {
		if (someListItem === checkedList[i]) {
			return true;
		} 
	}
}

function isAlreadyListed(item) {
	for (var i=0; i < shoppingList.length; i++) {
		if (item === shoppingList[i]) {
			return true;
		} 
	}
}


