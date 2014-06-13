function fadeIn(ele){


	ele.style.display = "block";

	setTimeout(function(){

		ele.style.opacity = 1;
	},100);


};

function fadeOut(ele){


	ele.style.opacity = 0;

	setTimeout(function(){

		ele.style.display = "none";

	},400);
};

var tutoIndex = 1;
var bck;

function fadeTuto(){

	setTimeout(function(){

				fadeIn(document.getElementById("tuto"));
				fadeIn(bck.children[tutoIndex]);
				tutoIndex++;
			},400);

}


function tutoTest(){

	var numEx = this.getAttribute("ex");
	// console.log(numEx);

	if(numEx == "1" && tutoIndex == 1){

		fadeTuto();
	}

	if(numEx == "2" && tutoIndex == 2){

		fadeTuto();
	}

	if(numEx == "3" && tutoIndex == 3){

		fadeTuto();
	}

	if(numEx == "4" && tutoIndex == 4){

		fadeTuto();
	}

	if(numEx == "5" && tutoIndex == 5){

		fadeTuto();
	}

	if(numEx == "6" && tutoIndex == 6){

		fadeTuto();
	}

	if(numEx == "8" && tutoIndex == 8){

		fadeTuto();
	}

};

function tuto(){

	if(tutoIndex >= 9){

		fadeOut(document.getElementById("tuto"));
		var see = localStorage.setItem("see", 1);
		for(var i = 0; i<9;i++){

			document.getElementsByClassName("ex")[i].removeEventListener("click",tutoTest,false);
		}
	}


	else{

		var see = localStorage.setItem("see", 0);
		for(var i= 0; i<7;i++){

			document.getElementsByClassName("ex")[i].addEventListener("click",tutoTest,false);
		}



		bck = document.getElementById("backTuto");
		for(var i = 0;i<8;i++){

			fadeOut(document.getElementById("tuto"));
			fadeOut(bck.children[i]);
		}

		if(tutoIndex == 7){

			fadeTuto();
		}

	}
	
};

for(var i = 0; i<9;i++){

	document.getElementsByClassName("submenu")[i].addEventListener("click",tuto,false);

};


console.log(document.getElementsByClassName("submenu")[0])

