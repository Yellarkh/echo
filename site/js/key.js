
var check = true;

function checkSpace(evt, ele){

	console.log(evt);
	if(ele == 103){

		evt.preventDefault();
		var grille = document.getElementsByClassName("grille")[0];
		
		if(check){

			check = false;
			grille.style.display = "block";

		}

		else{

			check = true;
			grille.style.display = "none";
		}


	}
};	

function key(e){

	 e = e || window.event;
	 var space = null;

	 if(e.keyCode){

	 	space = e.keyCode;
	 	checkSpace(e, space);
	 }

	 else{

	 	space = e.which;
	 	checkSpace(e, space);
	 }			
};