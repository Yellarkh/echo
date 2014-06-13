<?php 
	
	require 'php/db.php';

	$loginVerif = $_GET["log"];
	$cleVerif = $_GET["cle"];
	$activate = false;
	$alreadyIns = false;

	$comp = 'SELECT cle,status FROM members WHERE login="'.$loginVerif.'"';

	$req2 = $db->query($comp);
	

	while ($data2 = $req2->fetch()){


		if($data2['status'] == 1){ //regarde si deja active

			$alreadyIns = true;
		}
		
		elseif($data2['cle'] == $cleVerif){// si non on active si la cle est la meme que celle dans la base de donnée pour ce login

			$activate = true;
		}

		else{ // si aucunes correspondance affiche une erreur

			$fatalError = "Une erreure serveur est survenue."; 
		}

	} 
  	
  	$req2->closeCursor();  

  	if($activate == true){ // on active le compte

  		$db->exec('UPDATE members SET status=1 WHERE login="'.$loginVerif.'"');


  	}  
?>