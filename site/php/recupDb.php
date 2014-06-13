
<?php 
	session_start();
	require 'db.php';
	// $owner = $_GET['owner'];
	$owner = $_SESSION['owner'];
	$sql = 'SELECT echo, name FROM tracks WHERE owner="'.$owner.'"';
	$req = $db->query($sql);  

	while ($data = $req->fetch()){
	

			$json[] = $data['name'];
			$json[] = $data['echo'];
	
	} 

	$req->closeCursor(); 

	if($json){

		foreach ($json as $value) {

		    echo $value.",";
		}	
	}

	else{

		$chiffre = 1;
		echo $chiffre;
	}
	
?>

