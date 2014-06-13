<?php 
	
	require 'php/db.php';
	$cle = md5(uniqid(rand(), true)); //creation d'une clée unique

	$db->exec("INSERT INTO members(login, mail, password, cle) VALUES('$login', '$mail', '$password', '$cle')"); //ajouter les données sur la base de données
	include 'php/sendmail.php';
?>