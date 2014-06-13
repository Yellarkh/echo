<?php
	session_start();
	unset($_SESSION['login']);
	unset($_SESSION['id']);	
	unset($_SESSION['hack']);	
	session_destroy();
	header('Location: ../index.php');


 ?>