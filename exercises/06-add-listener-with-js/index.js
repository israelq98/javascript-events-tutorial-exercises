window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	// Some code here

};

// The listener function here
function listener() {
	const button = document.getElementById('theGreen')

	button.addEventListener('click', () => {
		alert("wooohoo!")
	})
}
listener()