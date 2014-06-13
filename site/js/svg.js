function center(){

	var preset = document.getElementsByClassName("homePage")[0].children[0];
	var height = preset.offsetHeight - 38;
	preset.style.marginTop = -(height/2) + "px";
};

center();

if(document.getElementById("alerte")){

	document.getElementById("alerte").classList.add('mouve');
}


window.addEventListener("resize",center,false);
var loadindex = 0;
function loading(){

	var svg = document.getElementById("svg");
	setInterval(function(){

		if(loadindex == 0){

			svg.classList.add("rotate");
			loadindex++;
		}

		else{

			svg.classList.remove("rotate");
			loadindex = 0;
		}

	},800);
};

