	var piste = document.getElementsByClassName("tampon")[0];
	var mouseEvent = (/Firefox/i.test(navigator.userAgent))? 'DOMMouseScroll' : 'mousewheel';

	function scrollHorizontal(e){

		e.preventDefault();
		var delta = (e.wheelDelta/50) || -e.detail;
		var left = piste.offsetLeft;
		var windowWidth = window.innerWidth || document.body.offsetWidth;
		var pisteWidth = piste.offsetWidth;
		// console.log(pisteWidth);

		if(delta < 0){

			// console.log("mog vers la gauche");

			if((left - (10*delta)) >= 0){

				piste.style.left = 0;
			}

			else{

				piste.style.left = left - (10*delta) + "px";
			}
		}

		else{

			// console.log("mog vers la droite");
			// console.log(left);
			piste.style.left = left + (-10*delta) + "px";

			if(-(left + (-10*delta)) >= (pisteWidth-windowWidth)){

				piste.style.left = -(pisteWidth-windowWidth) + "px";
			}

		}

	};