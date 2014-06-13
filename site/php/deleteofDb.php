<?php 
	session_start();
	require 'db.php';
	$name = $_POST['name'];
	$owner = $_SESSION['owner']; 

  	$db->exec("DELETE from tracks WHERE name='$name' AND owner='$owner'");

?>

