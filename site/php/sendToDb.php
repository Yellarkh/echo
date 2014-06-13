<?php 
	session_start();
	$echo = $_POST['echo'];
	$name = $_POST['name'];
	require 'db.php';
	$owner = $_SESSION['owner']; 
	$db->exec("INSERT INTO tracks(name, echo, owner) VALUES('$name','$echo', '$owner')");
 ?>