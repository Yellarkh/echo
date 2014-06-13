var morceau;

function sound(cla,pos,colored,effect,vol){
		
	this.cla = cla;
	this.pos = pos;
	this.colored = colored;
	this.effect = effect;
	this.vol = vol;
};

function callmess(ele,ele2){

	var txt = document.getElementById("calltxt");
	console.log(ele,ele2);

	if(ele == 1){//enregistrer
		txt.children[0].innerHTML = "<span>" + ele2 +"</span> enregistré";
	}

	if(ele == 2){//ouvrir

		txt.children[0].innerHTML = "<span>" + ele2 +"</span> chargé";
	}

	if(ele == 3){//maj

		txt.children[0].innerHTML = "<span>" + ele2 +"</span> écrasé";
	}
	txt.classList.add("deplace");

	var appear = setTimeout(function(){
		
		txt.classList.remove("deplace");

	}, 2000);

};

function sendToDb(ele, ele2){
	
	var xhr = new XMLHttpRequest();
	var blob = btoa(ele);
	xhr.onreadystatechange = function () {
	  if (xhr.readyState == 4 && xhr.status == 200){
	    // console.log("enregistrer");
	    recupTrack();
	    callmess(1,ele2);
	   
	  }
	};

	xhr.open("POST", "php/sendToDb.php", true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send("echo=" + blob +"&name=" + ele2);

};

function majToDb(ele,ele2){
	
	var xhr = new XMLHttpRequest();
	var blob = btoa(ele);
	xhr.onreadystatechange = function () {
	  if (xhr.readyState == 4 && xhr.status == 200){
	    // console.log("mise a jour ok");
	    recupTrack();
	    callmess(3,ele2);
	  }
	};

	xhr.open("POST", "php/majTrack.php", true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send("echo=" + blob +"&name=" + ele2);

};

function analyser(){

	var trackName = (document.getElementById("trackName").value).trim();
	// console.log(trackName);
	if(trackName != ""){

		document.getElementById('trackName').classList.remove("err2");
		var tampon = document.getElementsByClassName("tampon")[0];
		var longueurValue = tampon.children;
		morceau = new Object();

		for(var i=1;i<longueurValue.length;i++){

			
			var numTrack = 'track' + i;
			var sounds = new Object();

			for(var a = 0; a<9;a++){


				var s = longueurValue[i].children[a];
				var son = "son" + a;
				var thisSon = new sound(s.className, s.getAttribute("position"), s.getAttribute("colored"), s.getAttribute("effect"), s.getAttribute("volume"));
				sounds[son] = thisSon;

			}
			morceau[numTrack] = sounds;
		}
		morceau.trackTime = trackTime;
		morceau.tempo = tempo;
		var json = JSON.stringify(morceau);
		sendToDb(json, trackName);

	}

	else{

		document.getElementById('trackName').classList.add("err2");
	}

};

function analyser2(ele){

	var trackName = ele;
	if(trackName != ""){

		var tampon = document.getElementsByClassName("tampon")[0];
		var longueurValue = tampon.children;
		morceau = new Object();

		for(var i=1;i<longueurValue.length;i++){

			
			var numTrack = 'track' + i;
			var sounds = new Object();

			for(var a = 0; a<9;a++){


				var s = longueurValue[i].children[a];
				var son = "son" + a;
				var thisSon = new sound(s.className, s.getAttribute("position"), s.getAttribute("colored"), s.getAttribute("effect"), s.getAttribute("volume"));
				sounds[son] = thisSon;

			}
			morceau[numTrack] = sounds;
		}
		morceau.trackTime = trackTime;
		morceau.tempo = tempo;
		var json = JSON.stringify(morceau);
		majToDb(json, trackName);

	}

	else{

		console.log("Drôle d'erreur");
	}

};

document.getElementById('encodeJson').addEventListener("click",analyser,false);