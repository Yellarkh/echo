var echoJson = new Array();

function recupTrack(){

	console.log('envoi');
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", "php/recupDb.php?owner=1", true);
	xmlhttp.onreadystatechange = function () {
	  if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
		var chiffre = xmlhttp.responseText;
		var error = parseInt(chiffre);
	    if(1 == error){

	    		console.log("boom");
	    		var ulerror = document.getElementById("yourtracks");
	    		ulerror.innerHTML = "";
		  		var lierror = document.createElement("li");
		  		var perror = document.createElement('p');
		  		lierror.appendChild(perror);
		  		ulerror.appendChild(lierror);
		  		perror.innerHTML = "Tu n'as pas encore sauvergardé de morceaux.";
		  		perror.className = "error";
	  	}

	  	else{

	  		var blobRp = xmlhttp.responseText.split(",");
		    showEchoes(blobRp);

	  	}
	  }
	};
	xmlhttp.send(null);
};

function LoadMusic(ele, ele2){

	// console.log(ele);
	trackTime = parseFloat(ele.trackTime);
	tempo = parseFloat(ele.tempo);
	tempoRate = tempo/60; //bps
	interTime = 1/tempoRate; 
	trackLength= (trackTime/interTime) +1;
	var tampon = document.getElementsByClassName("tampon")[0];
	tampon.innerHTML = "";
	var tLine = document.createElement("ul");
	tLine.className = "timeLine";
	tampon.appendChild(tLine);


		for(var i=0; i<trackLength; i++){

			track = document.createElement("ul");
			var trackClass = "time" + (i+1) + "";
			track.classList.add(trackClass, "tracks");
			tampon.appendChild(track);

			var line = document.createElement("li");
			tLine.appendChild(line);

			if(i == 0){

				line.className = "interTime";
				line.innerHTML = 0 + "s";
			}

			if((parseFloat((i)/2) == parseInt((i)/2))){

				line.className = "interTime";
				line.innerHTML = (parseInt(interTime*100)*i/100) + "s";
			}

			var idtrack = "track" + (i+1);
			var thisTrack = ele[idtrack];

			for(value in thisTrack){

				var thissound = thisTrack[value];
				var span = document.createElement("span");
				var liSound = document.createElement("li");
				liSound.appendChild(span);
				liSound.setAttribute("position", thissound.pos);
				liSound.className = thissound.cla;
				liSound.setAttribute("volume",thissound.vol);
				liSound.setAttribute("effect",thissound.effect);
				liSound.setAttribute("colored",thissound.colored);
				track.appendChild(liSound);
			}

			putSound = track.children;

			for(var b = 0; b < putSound.length;b++){

				putSound[b].addEventListener("click",colorSound,false);
				putSound[b].addEventListener("click",initEffects,false);
				putSound[b].addEventListener("mousedown",initDrag,false);
				putSound[b].addEventListener("mouseup",initDrop,false);
				putSound[b].addEventListener("mouseover",setHoverColor,false);
				putSound[b].addEventListener("mouseout",setHoverColor,false);
			}
		}

		track = document.getElementsByClassName("tracks");
		document.getElementsByClassName("tampon")[0].style.width = (3.333333333333 * (track.length + 4)) + (1.666666666667*(track.length + 3)) + "vw";
		 callmess(2,ele2);
		// document.getElementsByClassName("subContent")[0].style.width = (document.getElementsByClassName("tracks")[0].offsetWidth * 50) + (document.getElementsByClassName("tracks")[0].style.marginRight * 49) + "px";

};

function getJson(){

	var index = this.getAttribute("order");
	var jsonText = atob(echoJson[index]);
	var echo = JSON.parse(jsonText);
	var name2 = this.getAttribute("nameoft");
	LoadMusic(echo, name2); 
};

function launchAnalyser(){

	analyser2(this.getAttribute("nameoft"));
};

function deleteOfDb(ele){

	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
	  if (xhr.readyState == 4 && xhr.status == 200){
	    console.log("suppression réussie");
	    recupTrack();
	  }
	};

	xhr.open("POST", "php/deleteofDb.php", true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send("name=" + ele);

};

function launchDelete(){

	deleteOfDb(this.getAttribute("nameoft"));
}

function showEchoes(echoes){

		var echoes = echoes;
		var echoLenght = (echoes.length -1) /2;
		var ul = document.getElementById("yourtracks");
		ul.innerHTML ="";
		echoJson = new Array();

		for(var i = 0; i<echoLenght; i++){

			// var jsonText = atob(echoes[2*i+1]);
			echoJson.push(echoes[2*i+1]);
			var name = echoes[2*i];
			var li = document.createElement("li");
			var span = document.createElement("span");
			var spanDelete = document.createElement("span");
			var p = document.createElement("p");
			var open = document.createElement("button");
			var maj = document.createElement("button");
			span.innerHTML = i+1;
			p.innerHTML = name;
			open.innerHTML = "charger";
			open.setAttribute("order",i);
			open.setAttribute("nameoft",name.trim());
			open.addEventListener("click",getJson,false);
			maj.innerHTML = "écraser";
			maj.setAttribute("nameoft",name.trim());
			maj.addEventListener("click",launchAnalyser,false);
			spanDelete.className = "delete";
			spanDelete.setAttribute("nameoft",name.trim());
			spanDelete.addEventListener("click",launchDelete,false);
			p.appendChild(span);
			li.appendChild(p);
			li.appendChild(open);
			li.appendChild(maj);
			li.appendChild(spanDelete);
			ul.appendChild(li);

		}
};

document.getElementById('logo').addEventListener('click',recupTrack,false);