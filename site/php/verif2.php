<?php 
	
	require 'php/db.php';

	$already = false;
	$sql = 'SELECT mail, login FROM members';    
  	$req = $db->query($sql);  

  	while ($data = $req->fetch()){
		
		if($data['mail'] == $mailExp){ //verfie si il existe deja cette adresse mail

			$already = true;
			$erreur['dmail']= "Cette adresse mail est déjà inscrite";
		}

		if($data['login'] == $login){ // verifie si ce login existe deja

			$already = true;
  			$erreur['dlogin']= "Ce login n'est pas libre";	
		}
	} 
  	
  	$req->closeCursor();   

  	if($already == false){

  		include 'php/ajout.php';
  	}
 ?>