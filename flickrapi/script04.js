window.onload = initAll;
var imgDiv = "";

function initAll() {
	document.getElementById("pictureBar").innerHTML = imgDiv;
}

function w3r_callback(data) {
	for (var i=0; i<data.movies.length; i++) {
		imgDiv += data.movies[i].title;
	}
}