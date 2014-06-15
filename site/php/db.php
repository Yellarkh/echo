<?php 
	
 	try
	{
	    $db = new PDO('mysql:host=host;dbname=dbname', 'login', 'password');
	    
	}
	catch (Exception $e)
	{
	        die('Erreur : ' . $e->getMessage());
	}

 ?>
