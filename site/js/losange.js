var pisteNumber = document.getElementsByClassName("trackNumber")[0].children;
var originalRange = document.getElementById("leo");
var newSelector = document.getElementById("range").children[1];
var thisPiste = 5;
var thisVolume = 1;
var maxVol = originalRange.getAttribute("max");

function losange(){

	for(var i = 0; i<pisteNumber.length; i++){

		pisteNumber[i].className = "";

	}

	this.className = "active";
	thisPiste = parseFloat(this.children[0].innerHTML);
	thisVolume = track[0].children[thisPiste-1].getAttribute("volume");
	originalRange.value = (thisVolume*100);
	document.getElementById("vol").innerHTML = thisVolume*100 + "%";
	document.getElementById("numPiste").innerHTML = "Piste " + thisPiste;
	newSelector.style.left = ((thisVolume*100)/maxVol)*100 + "%";
};

function checkValue(){

	var pourcentage = Math.round((originalRange.value / maxVol)*100);
	newSelector.style.left = pourcentage + "%";
	for(var i = 0; i < track.length;i++){

		track[i].children[thisPiste - 1].setAttribute("volume",originalRange.value/100);
	}

	document.getElementById("vol").innerHTML = originalRange.value + "%";

};

newSelector.style.left = (originalRange.value/maxVol)*100 + "%";

originalRange.addEventListener("input",checkValue,false);
