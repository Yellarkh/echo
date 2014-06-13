var ctx;
var recorder;
var listSounds;
var listConvolvers;
var bufferLoader;
var tempo;
var tempoRate;
var interTime;
var trackLength;
var src;
var mainsrc;
var compressor;
// var convolver;
var readyClient;
var readyServer;

function init(){

	var contextClass = (window.AudioContext || 
	window.webkitAudioContext || 
	window.mozAudioContext || 
	window.oAudioContext || 
	window.msAudioContext);


	if (contextClass) {

		ctx = new contextClass();
		compressor = ctx.createDynamicsCompressor();
		// convolver = ctx.createConvolver();
		recorder = new Recorder(compressor);
		loadSounds();
		loadConvolvers();
		console.log("Fais péter le son Kupo!");
	} 

	else {

	  console.log("Télécharge un bon navigateur kupo!");
	}

};

function checkLoad(){

	if(readyServer == 1 && readyClient == 1){

		document.getElementsByClassName("homePage")[0].style.opacity = 0;

		setTimeout(function(){

			document.getElementsByClassName("homePage")[0].style.display = "none";
			document.addEventListener("keydown",eventPlay,false);

		},800);

		if(localStorage.getItem("see") == 1){

				document.getElementById("tuto").style.display = "none";
			}

	}

	else if(readyClient == 1){

		document.getElementById("form").style.display = "none";
		loading();
		center();

	}
};


function checktempo(){

	
	var setTempo = document.getElementById("setTempo");


	if(setTempo.value == "" || isNaN(setTempo.value)){

		setTempo.classList.add("error");
		
	}

	else{

		if(setTempo.value >= 80){

			if(setTempo.value <= 300){

				setTempo.classList.remove("error");
			}

			else{

				setTempo.classList.add("error");
			}
		}

		else{

			setTempo.classList.add("error");
		}
	
	}
};

function checktime(){

	var timelaps = document.getElementById("timelaps");

	if(timelaps.value == "" || isNaN(timelaps.value)){

		timelaps.classList.add("error");
	}

	else{

		if(timelaps.value <= 0){

			timelaps.classList.add("error");
		}

		else{
			
			timelaps.classList.remove("error");	}

		}

};

function createInterface(){

	trackTime = parseFloat(timelaps.value);
	tempo = parseFloat(setTempo.value);

	if(!tempo == "" && !trackTime == ""){

		readyClient = 1;
		tempoRate = tempo/60; //bps
		interTime = 1/tempoRate; 
		trackLength= (trackTime/interTime) +1;
		document.getElementsByClassName("content")[0].style.display = "block";
		setNote();
		checkLoad();
	}

	else{

		checktime();
		checktempo();
	}
};
		

	

function loadSounds(){

	bufferLoader = new BufferLoader(
    ctx,
    [

	    'sounds/bell.wav',
	    'sounds/bongo1.wav',
	    'sounds/hithat.wav',
	    'sounds/broke.wav',
	    'sounds/claque.wav',
	    'sounds/xylophone.wav',
	    'sounds/bass.wav',
	    'sounds/siffle.wav',
      // '../sounds/bell.wav',
      // '../sounds/bongo1.wav',
      // '../sounds/hithat.wav',
      // '../sounds/broke.wav',
      // '../sounds/claque.wav',
      // '../sounds/xylophone.wav',
      // '../sounds/kick.wav',
      // '../sounds/siffle.wav',
  
    ],
    trackSounds
    );

  bufferLoader.load();
};

function loadConvolvers(){

	bufferLoader = new BufferLoader(
    ctx,
    [
      'sounds/convolver/dragon.wav',
      'sounds/convolver/drum-ambiance.wav',
      'sounds/convolver/flamBeat.wav',
      'sounds/convolver/flutterous.wav',
      'sounds/convolver/longTube.wav',
      'sounds/convolver/multiTap.wav',
      'sounds/convolver/reverseGate.wav',
      'sounds/convolver/festival.wav',
      // '../sounds/convolver/dragon.wav',
      // '../sounds/convolver/drum-ambiance.wav',
      // '../sounds/convolver/flamBeat.wav',
      // '../sounds/convolver/flutterous.wav',
      // '../sounds/convolver/longTube.wav',
      // '../sounds/convolver/multiTap.wav',
      // '../sounds/convolver/reverseGate.wav',
      // '../sounds/convolver/festival.wav',
    ],
    convolvers
    );

  bufferLoader.load();
};

function trackSounds(bufferList){

	listSounds = bufferList;
	readyServer = 1;
	checkLoad();
	console.log(sounds);

};

function convolvers(bufferList){

	listConvolvers = bufferList;
	// console.log(listConvolvers);
};

function checkTime(ele){

	return (ele*interTime) + (2.5*interTime);

};

function getSpeed(ele){

	var obj = parseFloat(ele);

	switch(obj){

		case 1:

			return 1.4;
			break;

		case 2:

			return 1.3;
			break;

		case 3:

			return 1.2;
			break;

		case 4:

			return 1.1;
			break;

		case 5:

			return 1;
			break;

		case 6:

			return 0.9;
			break;

		case 7:

			return 0.8;
			break;

		case 8:

			return 0.7;
			break;

		case 9:

			return 0.6;
			break;
	}
};


function playAll(ele,ele2,ele3,ele4,ele5){


	var index = ele; 
	var index2 = ele4;
	var src = ctx.createBufferSource(); 
	var duration = (listSounds[index].duration);
	var timeToPlay = checkTime(ele2); //durée du morceau
	var gainNode = ctx.createGain(); 
	var convolver = ctx.createConvolver();
	gainNode.gain.value = parseFloat(ele5);
	src.playbackRate.value = getSpeed(ele3); //vitesse de lecture, deforme le son :)
	src.buffer = listSounds[index];     
	convolver.buffer = listConvolvers[index2];   
	src.connect(convolver);
	convolver.connect(gainNode);
	gainNode.connect(compressor);
	compressor.connect(ctx.destination);
	// recorder.clear();
	// recorder.record();
	src.start(ctx.currentTime + timeToPlay);
	src.stop((ctx.currentTime + timeToPlay ) + duration);

};

function recAll(){


	findSound();
	recorder.clear();
	recorder.record();
	lance();
};

function playSample(ele, ele2, ele3, ele5){

	var index = ele; 
	var src = ctx.createBufferSource();
	var duration = (listSounds[index].duration);
	var timeToPlay = checkTime(ele2); //durée du morceau
	var gainNode = ctx.createGain(); 
	gainNode.gain.value = parseFloat(ele5);
	src.playbackRate.value = getSpeed(ele3); //vitesse de lecture, deforme le son :)
	src.buffer = listSounds[index]; 
	src.connect(gainNode);
	gainNode.connect(compressor);
	compressor.connect(ctx.destination);
	// recorder.clear();
	// recorder.record();
	src.start(ctx.currentTime + timeToPlay);
	src.stop((ctx.currentTime + timeToPlay ) + duration);

};


function playEar(ele){

	var index = ele;
	var src = ctx.createBufferSource();
	var duration = (listSounds[index].duration);
	var gainNode = ctx.createGain(); 
	gainNode.gain.value = 0.6;
	src.buffer = listSounds[index];
	src.connect(gainNode);
	gainNode.connect(ctx.destination);
	src.start(ctx.currentTime);
	src.stop(ctx.currentTime + duration);
};

function playEffect(ele,ele2){

	var index = ele;
	var index2 = ele2;
	var src = ctx.createBufferSource();
	var duration = (listSounds[index].duration);
	var gainNode = ctx.createGain(); 
	gainNode.gain.value = 0.6;
	var convolver = ctx.createConvolver();
	convolver.buffer = listConvolvers[index2];
	src.buffer = listSounds[index];   
	src.connect(gainNode);
	gainNode.connect(convolver);
	convolver.connect(ctx.destination);
	src.start(ctx.currentTime);
	src.stop(ctx.currentTime + duration);
};


