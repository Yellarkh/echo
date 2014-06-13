
	document.getElementById("timelaps").addEventListener("input",checktime,false);
	document.getElementById("setTempo").addEventListener("input",checktempo,false);
	document.getElementById("button").addEventListener("click",createInterface,false);

	document.getElementById('play').addEventListener("click",eventPlay,false);
	document.getElementById("record").addEventListener("click",recAll,false);
	document.getElementById("stopRecord").addEventListener("click",stop,false);
	piste.addEventListener(mouseEvent,scrollHorizontal,false);