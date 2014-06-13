window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    var b = 0;
    var sequence;
    var lanceIndex = 0;

	function draw() {

	    sequence = setTimeout(function() {
	        requestAnimationFrame(draw);
	        
	        var track = document.getElementsByClassName("tracks");
	       	for(var i = 0; i < track.length;i++){

	       		track[i].classList.remove("repere");
	       	}
	        track[b].classList.add("repere");
	     	
	        b++;
	    },1000/tempoRate);

	    lanceIndex = 1;

	    if(b>=track.length){

			clearTimeout(sequence);
			b = 0;
			lanceIndex = 0;
		}
	};

	function lance(){

		if(lanceIndex == 0){

			draw();
		}

		else{

			clearTimeout(sequence);
			b = 0;
			lanceIndex = 0;
			for(var i = 0; i < track.length;i++){

	       		track[i].classList.remove("repere");
	       	}
	       	lance();
		}

	};



