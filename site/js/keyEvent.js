window.addEventListener("load",init,false);
	// window.addEventListener("load",setNote,false);


	var effects = document.getElementsByClassName("effets3")[0].children;

	for(var i = 0; i < effects.length; i++){

		effects[i].addEventListener("click",setConvolver,false);
	}
	
	
	
	for(var i = 0; i<pisteNumber.length; i++){

		pisteNumber[i].addEventListener("click",losange,false);

	}

	for(var i = 0; i < sounds.length;i++){

		sounds[i].addEventListener("click",soundToLoad,false);
	};

	function eventPlay(e){

		if(e.type == "click"){

			findSound();
			lance();
		}

		if(e.type == "keydown"){

			 console.log(e);
			e = e || window.event;
			if(e.keycode == 32 || e.which == 32){

				findSound();
				lance();

			}

			if(e.keycode == 69 || e.which == 69){

				navTrans(e);

			}
			if(e.keycode == 81 || e.which == 81){

				var code = e.keycode || e.which;
				soundToLoadKey(code);

			}

			if(e.keycode == 83 || e.which == 83){

				var code = e.keycode || e.which;
				soundToLoadKey(code);

			}

			if(e.keycode == 68 || e.which == 68){

				var code = e.keycode || e.which;
				soundToLoadKey(code);

			}

			if(e.keycode == 70 || e.which == 70){

				var code = e.keycode || e.which;
				soundToLoadKey(code);

			}

			if(e.keycode == 71 || e.which == 71){

				var code = e.keycode || e.which;
				soundToLoadKey(code);

			}

			if(e.keycode == 72 || e.which == 72){

				var code = e.keycode || e.which;
				soundToLoadKey(code);

			}

			if(e.keycode == 74 || e.which == 74){

				var code = e.keycode || e.which;
				soundToLoadKey(code);

			}

			if(e.keycode == 75 || e.which == 75){

				var code = e.keycode || e.which;
				soundToLoadKey(code);

			}

		}
	};

	function removeEvents(){

		document.removeEventListener('keydown',eventPlay,false);
	};

	function addEvents(){

		document.addEventListener("keydown",eventPlay,false);
	};

	var remover = document.getElementsByClassName("removeEvent");

	for(var i = 0; i<remover.length;i++){

		remover[i].addEventListener('focus',removeEvents,false);
		remover[i].addEventListener('blur',addEvents,false);
	}
