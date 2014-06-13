function showParam(){

	var content = document.getElementsByClassName("content")[0];
	if(this.classList.contains("active")){

		this.classList.remove("active");
		content.classList.remove("onright");
	}

	else{

		this.classList.add("active");
		content.classList.add("onright");
	}

};

function normalState(){

	var content = document.getElementsByClassName("content")[0];
	var logo = document.getElementById("logo");
	if(logo.classList.contains("active")){

		logo.classList.remove("active");
		content.classList.remove("onright");

	}

};

document.getElementById('logo').addEventListener('click',showParam,false);
document.getElementsByClassName("content")[0].addEventListener("mouseover",normalState,false);