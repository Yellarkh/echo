var buttonNav = document.getElementById("soundMenu").children;

var soundSelect = null;

function checkConvolver(){

	if(soundSelect != null){
		console.log(soundSelect);

		for(var i = 0; i < effects.length; i++){

			effects[i].classList.remove("active");
		}

		var soundSelectEffect = soundSelect.getAttribute("effect");

		if(soundSelectEffect > 0){

			effects[soundSelectEffect].classList.add("active");

		}

	}

};

function setConvolver(){

	for(var i = 0; i < effects.length; i++){

		effects[i].classList.remove("active");
	}

	var thisConvolver = this.getAttribute("son");
	this.classList.add("active");
	soundSelect.setAttribute("effect",thisConvolver);
	if(soundSelect.className !== ""){

		var indexcolor = parseFloat(soundSelect.getAttribute("colored")) -1;
		playEffect(indexcolor,(thisConvolver -1));
	};
	soundSelect.classList.add("effect");

	


};

function reset(){

	for(var i = 0;i<track.length;i++){

		for(var a = 0;a<9;a++){

			track[i].children[a].className = "";
			track[i].children[a].setAttribute("effect", 0);
			track[i].children[a].setAttribute("volume", 1);
			track[i].children[a].setAttribute("colored", 0);

		}
	}

};

function resetVol(){

	for(var i = 0;i<track.length;i++){

		for(var a = 0;a<9;a++){
			
			track[i].children[a].setAttribute("volume", 1);

		}
	}
	originalRange.value = 100;
	checkValue();

};

document.getElementsByClassName("gomme")[0].addEventListener("click",reset,false);
document.getElementsByClassName("resetvolume")[0].addEventListener("click",resetVol,false);

function initEffects(){

	soundSelect = this;
	console.log(soundSelect);
};

function navTrans(e){

	var posSection = null;

	if(e.type == "click"){

		posSection = parseFloat(this.getAttribute("posSound"));
		
	}

	else{
		
		posSection = 4;
		checkConvolver();

	}

	var soundContent = document.getElementById("soundContent").children;
	
	//var larg = soundContent[0].clientWidth || soundContent[0].offsetWidth;
	var matrix = getComputedStyle(soundContent[posSection], null).webkitTransform || getComputedStyle(soundContent[posSection], null).MozTransform || getComputedStyle(soundContent[posSection], null).msTransform || getComputedStyle(soundContent[posSection], null).OTransform || getComputedStyle(soundContent[posSection], null).transform;	
	var tabMatrix = matrix.split(',');
	var oldPos = parseFloat(tabMatrix[4]);

	for(var i = 0;i <buttonNav.length; i++){

		buttonNav[i].classList.remove("active");
		matrix = getComputedStyle(soundContent[i], null).webkitTransform || getComputedStyle(soundContent[i], null).MozTransform || getComputedStyle(soundContent[i], null).msTransform || getComputedStyle(soundContent[i], null).OTransform || getComputedStyle(soundContent[i], null).transform;	
		tabMatrix = matrix.split(',');
		var thisPos = parseFloat(tabMatrix[4]);

		soundContent[i].style.MozTransform = "translate(" + (thisPos - oldPos) + "px,0)";
		soundContent[i].style.webkitTransform = "translate(" + (thisPos - oldPos) + "px,0)";
		soundContent[i].style.msTransform = "translate(" + (thisPos - oldPos) + "px,0)";
		soundContent[i].style.OTransform = "translate(" + (thisPos - oldPos) + "px,0)";
		soundContent[i].style.transform = "translate(" + (thisPos - oldPos) + "px,0)";
	};	

	buttonNav[posSection].classList.add("active");

};

for( var i = 0; i < 4; i++ ){

	buttonNav[i].addEventListener("click",navTrans,false);

};