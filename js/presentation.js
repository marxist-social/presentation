// Check what the current state is. If it's different from this page, then change the URL accordingly to the next slide.

// Get URL which slide are we on?

var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/')+1);
var current_slide = filename.substring(0, filename.lastIndexOf('.'));




// Loop every 3s. What slide is in the API?
time = setInterval(function(){
	console.log("beep!");
	$.get(
		'../api.php'
	).done(function( data ) {
		console.log("beeeeeeeeep!");
		// Is it different from current?
		if (data != current_slide) {
			// Go to that slide.
			window.location = data+'.html';
		}
	});
}, 3000);