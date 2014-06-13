function createDownloadLink(){
 		recorder && recorder.exportWAV(function(blob) {
 			window.URL = window.URL || window.webkitURL;
 			var thisblob = window.URL.createObjectURL(blob);
 			var parentLink = document.createElement("li");
 			parentLink.innerHTML = "Telecharger";
 			parentLink.classList.add("file");
 			var link = document.createElement("a");
 			document.getElementsByClassName("export")[0].appendChild(parentLink);
 			parentLink.appendChild(link);
 			link.setAttribute("href",thisblob);
 			link.setAttribute("target","blank");
 			link.download = 'echo.wav';

 		});
 	};

 	function stop(){

 		if(document.getElementsByClassName("file")[0]){

 			document.getElementsByClassName("file")[0].style.opacity = 0;

 			setTimeout(function(){

 				document.getElementsByClassName("file")[0].remove();

 			},500);

 		} 		

		recorder && recorder.stop();

		setTimeout(function(){

			createDownloadLink();
			recorder.clear();

		},500);
	};