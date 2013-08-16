$(document).ready(function() {

	/*$("#basecamp").on("mouseenter", function() {
		$(".section-header").text("Basecamp is the project management tool you wish you had on your last project.");
		$(".body-text").text("Are you still managing projects with emails? Are you still using Excel for your to-do lists? It's time to upgrade to Basecamp. Manage projects and collaborate with your team and clients the modern way.");
		$("#basecamp-arrow").css("visibility","visible");
	});

	$("#highrise").on("mouseenter", function() {
		$(".section-header").text("Highrise remembers the important things about people you'd normally forget.");
		$(".body-text").text("Keep a permanent record of people you do business with. Know who you talked to, when you talked to them, what was said, and when to follow up next. Over 20.000.000 contacts are tracked using Highrise.");
		$("#highrise-arrow").css("visibility","visible");
	});

	$("#campfire").on("mouseenter", function() {
		$(".section-header").text("From near to far, Campfire helps teams work together over the web in real-time.");
		$(".body-text").text("Share ideas, discussions, concepts, images, code samples, videos, mockups, and documents in a real-time private chat room. It's game changing. We couldn't run our own business without Campfire.");
		$("#campfire-arrow").css("visibility","visible");
	});
	*/

	$("#basecamp-header, #highrise-header, #campfire-header").hide();

	$("#basecamp-arrow, #highrise-arrow, #campfire-arrow").hide();

	$("#basecamp").on("mouseenter", function() {
		$("#main-header").hide();
		$("#basecamp-arrow, #basecamp-header").show();
	});

	$("#highrise").on("mouseenter", function() {
		$("#main-header").hide();
		$("#highrise-arrow, #highrise-header").show();
	});

	$("#campfire").on("mouseenter", function() {
		$("#main-header").hide();
		$("#campfire-arrow, #campfire-header").show();
	});

/*
	function replaceHeader () {
 		$(".section-header").text("Making collaboration productive and enjoyable for people every day.");
		$(".body-text").text("Frustration-free web-based apps for collaboration, sharing information, and making decisions.");
	}
*/	
	$("#basecamp").on("mouseleave", function() {
		$("#basecamp-arrow, #basecamp-header").hide();
		$("#main-header").show();
	});

	$("#highrise").on("mouseleave", function() {
		$("#highrise-arrow, #highrise-header").hide();
		$("#main-header").show();
	});

	$("#campfire").on("mouseleave", function() {
		$("#campfire-arrow, #campfire-header").hide();
		$("#main-header").show();
	});

});