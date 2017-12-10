$(document).ready(function() {
	$("#slide-right").hide();
	$("#img").on("click", function() {
		$("#slide-right").show();
	    $("#slide-right").addClass('magictime slideRight');
	});
})