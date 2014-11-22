window.onload = initAll;
var imgDiv = "";

function initAll() {
	document.getElementById("pictureBar").innerHTML = imgDiv;
}

function movies(flickrData) {
	for (var i=0; i<flickrData.items.length; i++) {
		imgDiv += "<img src='";
		imgDiv += flickrData.items[i].media.m;
		imgDiv += "' alt='" + flickrData.items[i].title + "'>";
	}
}

