<?php
		// $erreur; //initialisation du tableau pour reconnaissance//
		$validation = false;
		error_reporting(E_WARNING);
		function valid_mail($mail){

			return filter_var($mail, FILTER_VALIDATE_EMAIL);
			//!filter_var($email, FILTER_VALIDATE_EMAIL)
		};

		if( (count($_POST)) > 0){


			extract($_POST);
			$login = trim(strip_tags($login));
			$mailExp = trim(strip_tags($mail));
			$password = trim(strip_tags($password));


			if($login==""){ // si le nom est vide, on affiche le message d'erreur//

				$erreur['login']= "Pas de login?";			
			}
			
			if(valid_mail($mailExp) == false){ // si valid mail est faux, on affiche le message d'erreur//

				$erreur['mail']= "Ton mail n'est pas valide";
			}		

			if($password==""){ // si le message est vide, on affiche le message d'erreur//

				$erreur['password']= "Tu dois définir un mot de passe";
			}

			else{

				include 'php/verif2.php';
			}


		}

	?>	