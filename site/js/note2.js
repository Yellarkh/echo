var track = null;
var sounds = document.getElementById("sounds").children;
var putSound = null;
var color = 1;
var dragdrop = null;
var lastdrag = null;
var dragEffect = null;



function setNote(){

		var li = null;

		for(var i=0; i<trackLength; i++){

			track = document.createElement("ul");
			var trackClass = "time" + (i+1) + "";
			track.classList.add(trackClass, "tracks");
			document.getElementsByClassName("tampon")[0].appendChild(track);

			var line = document.createElement("li");
			document.getElementsByClassName("timeLine")[0].appendChild(line);

			if(i == 0){

				line.className = "interTime";
				line.innerHTML = 0 + "s";
			}

			if((parseFloat((i)/2) == parseInt((i)/2))){

				line.className = "interTime";
				line.innerHTML = (parseInt(interTime*100)*i/100) + "s";
			}

			for(var a=0; a<9; a++){

				li = document.createElement("li");
				var span = document.createElement("span");
				track.appendChild(li);
				li.appendChild(span);
				li.setAttribute("position", a + 1);
				li.setAttribute("colored", 0);
				li.setAttribute("effect", 0);
				li.setAttribute("volume", 1);

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
		// document.getElementsByClassName("subContent")[0].style.width = (document.getElementsByClassName("tracks")[0].offsetWidth * 50) + (document.getElementsByClassName("tracks")[0].style.marginRight * 49) + "px";

};

function initDrag(){

	if(this.className !== null){

		dragdrop = this.className;
		dragEffect = this.getAttribute("effect");
		lastdrag = this;
		this.className = "";
	}
};

function initDrop(){

	if(this.className !== null){
		
		
		lastdrag.setAttribute("effect",this.getAttribute("effect"));
		this.setAttribute("effect", dragEffect);
		lastdrag.className = this.className;
		this.className = dragdrop;	
		dragdrop = null;
		lastdrag = null;
	}
};

function setHoverColor(e){

	var e = e.type;

	if(e == "mouseover"){

		switch(color){

			case 1:

				this.children[0].classList.add("jaune");
				break;

			case 2:

				this.children[0].classList.add("orange");
				break;

			case 3:

				this.children[0].classList.add("rouge");
				break;


			case 4:

				this.children[0].classList.add("mauve");
				break;

			case 5:

				this.children[0].classList.add("bleu");
				break;

			case 6:

				this.children[0].classList.add("turquoise");
				break;

			case 7:

				this.children[0].classList.add("sky");
				break;

			case 8:

				this.children[0].classList.add("vert");
				break;

		}
	}


	else{

		this.children[0].className = "";

	}


};

function soundToLoadKey(ele){
	// console.log(ele);

	for(var i=0;i<sounds.length;i++){

		sounds[i].classList.remove("active");
	}


	var cle = ele;

	switch(cle){

		case 81:
			var sou = sounds[0];
			sou.classList.add("active");
			color =  parseFloat(sou.getAttribute("son"));
			playEar(color - 1);
			break;

		case 83:
			var sou = sounds[1];
			sou.classList.add("active");
			color =  parseFloat(sou.getAttribute("son"));
			playEar(color - 1);
			break;
		case 68:
			var sou = sounds[2];
			sou.classList.add("active");
			color =  parseFloat(sou.getAttribute("son"));
			playEar(color - 1);
			break;

		case 70:
			var sou = sounds[3];
			sou.classList.add("active");
			color =  parseFloat(sou.getAttribute("son"));
			playEar(color - 1);
			break;
		case 71:
			var sou = sounds[4];
			sou.classList.add("active");
			color =  parseFloat(sou.getAttribute("son"));
			playEar(color - 1);
			break;

		case 72:
			var sou = sounds[5];
			sou.classList.add("active");
			color =  parseFloat(sou.getAttribute("son"));
			playEar(color - 1);
			break;
		case 74:
			var sou = sounds[6];
			sou.classList.add("active");
			color =  parseFloat(sou.getAttribute("son"));
			playEar(color - 1);
			break;

		case 75:
			var sou = sounds[7];
			sou.classList.add("active");
			color =  parseFloat(sou.getAttribute("son"));
			playEar(color - 1);
			break;


	}
};

function soundToLoad(){

		for(var i=0;i<sounds.length;i++){

			sounds[i].classList.remove("active");
		}

		this.classList.add("active");
		color =  parseFloat(this.getAttribute("son"));
		playEar(color - 1);

};

function testColor(ele){

	switch(color){

			case 1:
			 	 
				ele.classList.add("jaune");
				ele.setAttribute("colored", 1);
				break;

			case 2:

			  	ele.classList.add("orange");
			  	ele.setAttribute("colored", 2);
				break;

			case 3:

				ele.classList.add("rouge");
				ele.setAttribute("colored", 3);
				break;

			case 4:

				ele.classList.add("mauve");
				ele.setAttribute("colored", 4);
				break;

			case 5:

				ele.classList.add("bleu");
				ele.setAttribute("colored", 5);
				break;

			case 6:

				ele.classList.add("turquoise");
				ele.setAttribute("colored", 6);
				break;

			case 7:

				ele.classList.add("sky");
				ele.setAttribute("colored", 7);
				break;

			case 8:

				ele.classList.add("vert");
				ele.setAttribute("colored", 8);
				break;
		}
};


function colorSound(){

	var colored = parseFloat(this.getAttribute("colored"));

	if(colored == 0){

		if(this.getAttribute("effect") > 0){

			this.classList.add("effect");
		}
		testColor(this);

	}

	else if(colored == color){

		this.className = "";
		this.setAttribute("colored","0")
		this.setAttribute("effect",0);
	}
	
	else{

		this.className = "";

		if(this.getAttribute("effect") > 0){

			this.classList.add("effect");
		}

		testColor(this);
	}
};

function checkParam(ele,ele2,ele3,ele4,ele5){

	// console.log(playindex);

	if(ele4 == 0){

		playSample(ele,ele2,ele3,ele5);
	}

	else{

		var el4 = ele4 - 1;
		playAll(ele,ele2,ele3,el4,ele5);
	}
};

function findSound(){

	for(var i=0;i<track.length;i++){

		putSound = track[i].children;

		for(var a=0;a<putSound.length;a++){

			if(putSound[a].classList.contains("jaune")){

				var indexSound = 0;
				var timePlay = (i-1);
				var speed = (a+1);
				var impulseResponse = putSound[a].getAttribute('effect');
				var volume = putSound[a].getAttribute("volume");
				checkParam(indexSound, timePlay, speed, impulseResponse, volume);


			}

			else if(putSound[a].classList.contains("orange")){

				var indexSound = 1;
				var timePlay = (i-1);
				var speed = (a+1);
				var impulseResponse = putSound[a].getAttribute('effect');
				var volume = putSound[a].getAttribute("volume");
				checkParam(indexSound, timePlay, speed, impulseResponse, volume);

			}
			else if(putSound[a].classList.contains("rouge")){

				var indexSound = 2;
				var timePlay = (i-1);
				var speed = (a+1);
				var impulseResponse = putSound[a].getAttribute('effect');
				var volume = putSound[a].getAttribute("volume");
				checkParam(indexSound, timePlay, speed, impulseResponse, volume);

			}
			else if(putSound[a].classList.contains("mauve")){

				var indexSound = 3;
				var timePlay = (i-1);
				var speed = (a+1);
				var impulseResponse = putSound[a].getAttribute('effect');
				var volume = putSound[a].getAttribute("volume");
				checkParam(indexSound, timePlay, speed, impulseResponse, volume);

			}
			else if(putSound[a].classList.contains("bleu")){

				var indexSound = 4;
				var timePlay = (i-1);
				var speed = (a+1);
				var impulseResponse = putSound[a].getAttribute('effect');
				var volume = putSound[a].getAttribute("volume");
				checkParam(indexSound, timePlay, speed, impulseResponse, volume);

			}
			else if(putSound[a].classList.contains("turquoise")){

				var indexSound = 5;
				var timePlay = (i-1);
				var speed = (a+1);
				var impulseResponse = putSound[a].getAttribute('effect');
				var volume = putSound[a].getAttribute("volume");
				checkParam(indexSound, timePlay, speed, impulseResponse, volume);

			}
			else if(putSound[a].classList.contains("sky")){

				var indexSound = 6;
				var timePlay = (i-1);
				var speed = (a+1);
				var impulseResponse = putSound[a].getAttribute('effect');
				var volume = putSound[a].getAttribute("volume");
				checkParam(indexSound, timePlay, speed, impulseResponse, volume);

			}
			else if(putSound[a].classList.contains("vert")){

				var indexSound = 7;
				var timePlay = (i-1);
				var speed = (a+1);
				var impulseResponse = putSound[a].getAttribute('effect');
				var volume = putSound[a].getAttribute("volume");
				checkParam(indexSound, timePlay, speed, impulseResponse, volume);

			}

		}
	}
};




