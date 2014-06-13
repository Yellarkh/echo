<?php 
	
 	try
	{
	    $db = new PDO('mysql:host=mysql51-99.perso;dbname=antoinedvzmod1', 'antoinedvzmod1', 'AV9BmNJZnjPb');
	    
	}
	catch (Exception $e)
	{
	        die('Erreur : ' . $e->getMessage());
	}

 ?>