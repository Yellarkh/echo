<?php 
	session_start();
	require 'db.php';
	$echo = $_POST['echo'];
	$name = $_POST['name'];
	$owner = $_SESSION['owner']; 

  	$db->exec("UPDATE tracks SET echo='$echo' WHERE name='$name' AND owner='$owner'");

?>
