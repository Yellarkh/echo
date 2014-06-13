<?php 
	session_start();
	include 'php/connexion.php';
	include 'php/verif3.php';
	include 'php/verif.php';

	if($_SESSION['login']){

		header('Location: echo.php');
		exit;
	}


 ?><!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title><?php 

						if($_GET['ins']){
	
							echo "Echo | inscription";
						}

						else{
						
							echo "Echo | connexion";

						}

					 ?></title>
	<link rel="icon" type="image/png" href="favicon.png" />
	<link rel="stylesheet" href="stylesheets/reset.css" />
	<link rel="stylesheet" href="stylesheets/font.css" />
	<link rel="stylesheet" href="stylesheets/main3.css" />
</head>
<body>

<div class="container">

	<ul id="alerte">
		
			
				
				<?php 

					if($activate == true){

						echo "<li>Ton compte a bien été activé</li>";
					}

					if($alreadyIns == true){

						echo "<li>Ton compte a déjà été activé</li>";
					}


					if($fatalError ){

						echo "<li class='err3'>".$fatalError."</li>";
					}

					if($send){
						echo "<li>".$send."</li>";
					}

 ?>
			
		</ul>


	<div class="homePage">

	

		<section class="formConnect">

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

			
					
					<?php 

						if($_GET['ins']){

							include 'form-inscription.php';
						}

						else{
							
							include 'form-connexion.php';

						}

					 ?>



				
					

					

		</section>

		<footer>
			
			<a href="http://antoine-dekens.be/" target="blank">Antoine Dekens | 2013-2014</a>
		</footer>
	</div>

</div>

<script src="js/svg.js"></script>
<script src="js/listener.js"></script>

	
</body>
</html>