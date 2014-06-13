<?php 

session_start();

if(!$_SESSION['login']){

	header('Location: index.php');
	exit;
}


 ?><!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Echo</title>
	<link rel="icon" type="image/png" href="favicon.png" />
	<link rel="stylesheet" href="stylesheets/reset.css">
	<link rel="stylesheet" href="stylesheets/font.css">
	<link rel="stylesheet" href="stylesheets/main3.css">
</head>
<body>

	<div class="grille"></div>

	<div class="container">

	<ul id="calltxt">
			
		<li>
			
	</ul>

	<div id="tuto">
		
		<ul id="backTuto">
			<li id="step1">
				<h2>Les sons</h2>
				<p>Voici les différents sons, tu peux les selectionner avec les touches <span>q</span>,<span>s</span>,<span>d</span>,<span>f</span>,<span>g</span>,<span>h</span>,<span>j</span>,<span>k</span>.
				Pour l'instant clique sur un son.</p>
				<p class="submenu">Suivant <span class="pages">1/9</span></p>
			</li>

			<li id="step2">
				<h2>Les pistes</h2>
				<p>Au dessus il y la timeline, elle te renseigne sur le rythme.</p>
				<p>Au milieu, les ronds sont les emplacements pour les sons, essaye d'en placer un.</p>
				<p><span>N.B:</span> tu peux utiliser le drag&amp;drop sur deux sons pour les intervertir.</p>
				
				<p class="submenu">Suivant <span class="pages">2/9</span></p>
			</li>

			<li id="step3">
				<h2>Les effets</h2>
				<p>Tu peux ajouter un effet au dernier son que tu as placé. Appuye sur la touche <span>e</span> pour faire apparaître le menu et en ajouter.</p>
				<p class="submenu">Suivant <span class="pages">3/9</span></p>
			</li>

			<li id="step4">
				<h2>La lecture</h2>
				<p>Placer des sons c'est bien, écouter le résultat c'est mieux. Clique sur le bouton play.</p>
				<p><span>N.B:</span> par la suite tu n'auras qu'à appuyer sur la <span>barre d'espace</span>.</p>
				<p class="submenu">Suivant <span class="pages">4/9</span></p>
			</li>

			<li id="step5">
				<h2>Le volume</h2>
				<p>Les pistes sont numérotés de <span>1 à 9</span>, tu peux les sélectionner pour changer le volume. Ouvre le menu pour en modifier la valeur.</p>
				<p class="submenu">Suivant <span class="pages">5/9</span></p>
			</li>

			<li id="step6">
				<h2>Enregistrer en ligne</h2>
				<p>Pour sauvergarder un morceau sur ton compte il suffit de le nommer et de le sauvegarder. Essaye d'enregistrer ton morceau.</p>
				<p class="submenu">Suivant <span class="pages">6/9</span></p>
			</li>

			<li id="step7">
				<h2>Exporter</h2>
				<p>Si tu veux récupérer ton morceau, le menu <span>exporter</span> est ce qu'il te faut. Tu appuyes sur <span>rec</span> pour lancer l'enregistrement et puis sur <span>stop</span> pour générer un fichier wav.</p>
				<p class="submenu">Suivant <span class="pages">7/9</span></p>
			</li>

			<li id="step8">
				<h2>Menu rapide</h2>
				<p>Il y a quatre boutons importants, le premier te donne accès à ton compte, le deuxième efface tout les sons sur la timeline. Le dernier remet tout les volumes à la normale.</p>
				<p>Ouvre ton compte.</p>
				<p class="submenu">Suivant <span class="pages">8/9</span></p>
			</li>

			<li id="step9">
				<h2>Ton compte</h2>
				<p>Ici se trouve tout les morceaux que tu as enregistré, tu peux les charger, les supprimer et les mettre à jour. Pour ce dernier, le morceau qui est actuellement sur la timeline remplacera l'ancien, fais donc bien attention.</p>
				<p>Pour te déconnecter tu n'as qu'à appuyer sur le bouton du même nom. Tout morceau non-enregistré sera perdu.</p>
				<p>Ce didacticiel est terminé, tu vas pouvoir enfin composer, bon amusement !</p>
				<p class="submenu">Commencer<span class="pages">9/9</span></p>
			</li>

		</ul>
	</div>
 
	<div class="homePage"> 

			
		
			<section class="subcontent">

				<div class="logoPlace">
						
						<svg id="svg" width="54px" height="54px">
							<g>
								<path class="svgLogo" fill="#27ABA4" d="M27,4.5L49.5,27L27,49.5L4.5,27L27,4.5 M27,0l-2.25,2.25l-22.5,22.5L0,27l2.25,2.25l22.5,22.5L27,54
									l2.25-2.25l22.5-22.5L54,27l-2.25-2.25l-22.5-22.5L27,0L27,0z"/>
							<g>
							<polygon class="svgLogo" fill="#27ABA4" points="27,18 27,22.5 31.5,27 36,27 "/>
							<polygon class="svgLogo" fill="#27ABA4" points="18,27 27,36 27,31.5 22.5,27 "/>
							<polygon class="svgLogo" fill="#27ABA4" points="27,13.5 29.25,15.75 38.25,24.75 40.5,27 45,27 27,9 "/>
							<polygon class="svgLogo" fill="#27ABA4" points="27,40.5 24.75,38.25 15.75,29.25 13.5,27 9,27 27,45 "/>
							</g>
							</g>
					</svg>

				</div>
			
				<section id="form">

				<p class="min">

					<?php 

						if($_GET['reset']){

							echo "Pour recommencer indique les informations dont <span>echo</span> a besoin :";
						}

						else{
							

							echo "Maintenant que tu es connecté <span>".$_SESSION['login']."</span>, indique les informations dont <span>echo</span> a besoin :";
						
							
						}

					 ?>

				</p>
				<!-- 	<p class="min">Maintenant que tu es connecté <?php echo "<span>".$_SESSION['login']."</span>" ?>, indique les informations dont <span>echo</span> a besoin :</p>
						 -->
					<div>
					
					<label for="timelaps">la durée en secondes</label>
					<input type="text" id="timelaps" class="removeEvent" name="timelaps">

					</div>

					<div>
						
						<label for="setTempo">le tempo (80 à 300)</label>
						<input type="text" id="setTempo" class="removeEvent" name="setTempo">
						
					</div>

					<div>
						
						<button id="button">Composer</button>
					</div>

				</section>

			</section>

			<footer>
			
				<a href="http://antoine-dekens.be/" target="blank">Antoine Dekens | 2013-2014</a>
			</footer>
	</div>
		
		<aside>
			
			<ul class="rapidMenu">
				
				<li class="logo ex" id="logo" ex="8"><p>

					<?php 

						echo $_SESSION['login'];

					?>


				</li>
				<li class="gomme">Paramètres par défauts</li>
				<li class="resetvolume">Tout les volumes à 1</li>
				<li class="reset"><a href="echo.php?reset=true">reset</a></li>
			</ul>

			<section class="profilContent">

				<ul class="navSec">

					<li class="active"><p>Morceaux</p></li>
					<li class="unable"><p>Profil</p></li>
					<li id="deconnexion"><a href="php/deconnexion.php">Déconnexion</a></li>

				</ul>

				<ul id="yourtracks" class="yourtracks">

				</ul>
			</section>
		</aside>

		<div class="content">

			<section class="trackContent">
					
				<ul class="trackNumber">
					
					<li><p>1</p></li>
					<li><p>2</p></li>
					<li><p>3</p></li>
					<li><p>4</p></li>
					<li class="active"><p>5</p></li>
					<li><p>6</p></li>
					<li><p>7</p></li>
					<li><p>8</p></li>
					<li><p>9</p></li>

				</ul>

				<section class="subContent">

					<section class="tampon ex" ex="2">
						
						<ul class="timeLine">
							<!-- <li class="interTime">0s</li>
							<li></li>
							<li></li>
							<li class="interTime">1s</li>
							<li></li>
							<li></li>
							<li class="interTime">2s</li> -->
						</ul>

					</section>

				</section>


			</section>

			<section class="control">
				
				<ul class="controlMenu">
					
					<li><h2>Lecture</h2></li>
					<li id="play" class="ex" ex="4"><span></span>play</li>
				</ul>

				<section>
					
					<ul class="soundMenu" id="soundMenu">
						
						<li class="active" posSound="0"><h2>Sons</h2></li>
						<li posSound="1"><h2>Volume</h2></li>
						<li posSound="2"><h2>Enregistrer</h2></li>
						<li posSound="3"><h2>Exporter</h2></li>

						<li posSound="4" class="convolver"><h2>Effects</h2></li>
					</ul>

					<div class="soundContent" id="soundContent" >
						
						<ul class="sounds ex" id="sounds" ex="1">
							
							<li class="un active" son="1"><span></span>Bell</li>
							<li class="deux" son="2"><span></span>Bongo</li>
							<li class="trois" son="3"><span></span>Hithat</li>
							<li class="quat" son="4"><span></span>Glass</li>
							<li class="cinq" son="5"><span></span>Clap</li>
							<li class="six" son="6"><span></span>Xylophone</li>
							<li class="sept" son="7"><span></span>Bass</li>
							<li class="huit" son="8"><span></span>Aigu</li>
						</ul>

						<ul class="volume">
							
							
							<li><p id="numPiste">Piste 5</p>
								<p id="vol">100%</p>

								<input type="range" id="leo" min="0" max="300" value="100" step="1" class="ex" ex="5">

								<ul id="range">
									
									<li class="tumb"></li>
									<li class="selector"></li>

								</ul>

							</li>
							

						</ul>

						<ul class="save">
							
							<li>
								
								<input type="text" id="trackName" class="removeEvent" name="trackName" maxlength="17">
								<label id='labelName' for="trackName">Nom</label>
							</li>
							<li id="encodeJson" class="ex" ex="6">

								Sauvergarder

							</li>

						</ul>

						<ul class="export">
							
							<li id="record">Rec</li>
							<li id="stopRecord">Stop</li>

						</ul>

						

						<ul class="effets3 ex" ex="3">
							
							<li son="1"><span></span>Dragon</li>
							<li son="2"><span></span>Drums</li>
							<li son="3"><span></span>Flambeat</li>
							<li son="4"><span></span>Flutterous</li>
							<li son="5"><span></span>Longtube</li>
							<li son="6"><span></span>MultiTap</li>
							<li son="7"><span></span>Reverse</li>
							<li son="8"><span></span>Festival</li>

						</ul>

					</div>

				</section>


			</section>
			
		</div>

	</div>
<script src="js/bufferLoader.js"></script>
<script src="js/audio2.js"></script>
<script src="js/recorder.js"></script>
<script src="js/svg.js"></script>
<script src="js/navTrans.js"></script>
<script src="js/note2.js"></script>
<script src="js/horizontalScroll.js"></script>
<script src="js/animateTimeline.js"></script>
<script src="js/losange.js"></script>
<script src="js/setRecord.js"></script>
<script src="js/keyEvent.js"></script>
<script src="js/listener.js"></script>
<script src="js/fade.js"></script>
<script src="js/showparam.js"></script>
<script src="js/analyser.js"></script>
<script src="js/recuptrack.js"></script>



</body>
</html>