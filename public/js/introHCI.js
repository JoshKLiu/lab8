'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

function initializePage() {
	// your code here
	$(".likeBtn").click(sendLike);
}

function sendLike(e){
	e.preventDefault();
	ga('send', 'event', 'like', 'click');
}
