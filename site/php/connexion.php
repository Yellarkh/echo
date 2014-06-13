<?php 
	
	// $error =[];
	$log = false;

	if( (count($_POST)) > 0){


		extract($_POST);
		$login = trim(strip_tags($log));
		$password = trim(strip_tags($pass));

		if($login==""){ // si le nom est vide, on affiche le message d'erreur//

			$error['login']= "Login vide";			
		}

		if($password==""){ // si le message est vide, on affiche le message d'erreur//

			$error['password']= "Mot de passe vide";
		}

		else{

			require 'php/db.php';

			$sql = 'SELECT login FROM members';
			$req = $db->query($sql);  

			while ($data = $req->fetch()){
				
				if($data['login'] == $login){

					$log = true;
				}
			} 

  			$req->closeCursor();  

			if($log == true){

				$sql2 = 'SELECT password, status, id, login FROM members WHERE login="'.$login.'"';
				$req2 = $db->query($sql2);  
				while ($data2 = $req2->fetch()){
				
					if($data2['password'] == $password && $data2['status'] == 1){ //regarde si le mot de passe est le même et si son compte est activé

						
						$_SESSION['login'] = $data2['login'];
						$_SESSION['owner'] = $data2['id'];

						 header('Location: echo.php'); 
						 exit;
					}

					elseif($data2['status'] == 0 && $data2['password'] == $password) { //regarde si le mot de passe est correct et mais que le compte n'est pas activé
						
						$error['state'] = "Ton compte n'est pas activé, vérifie tes mails";
					}

					else{ // le mot de passe n'est pas juste

						$error['log'] = "Login ou mot de passe incorrect";
					}
				} 

				$req2->closeCursor(); 
			}

			else{  // le login n'existe pas

				$error['log'] = "Login ou mot de passe incorrect";
			}
		}
	}
 ?>