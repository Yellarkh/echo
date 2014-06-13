<?php 

	$to      = $mailExp;
    $subject = 'Echo | Confirmation de votre inscription';
    $message ='Bonjour à toi utilisateur d\'echo,'."\n\n";
    $message .='voici le lien d\'activation de ton compte: ' . "http://antoine-dekens.be/tfe/echo/index.php?log=" . urlencode($login) . "&cle=" . urlencode($cle) ."\n\n"; 
    $message .= 'et tes identifiants:' . "\n";
    $message .= 'login > ' . $login . "\n";
    $message .= 'mot de passe > ' . $password;

    $headers = 'From: <antoinedvz@start.ovh.net>'."\n";
     $headers ='Reply-To: yellarkh@gmail.com'."\n";
     $headers .='Content-Type: text/plain; charset="iso-8859-1"'."\n";
     $headers .='Content-Transfer-Encoding: 8bit'."\n"; 
     $headers .= 'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);   

    $send = "Tu es bien inscris, tu vas bientôt recevoir un mail de confirmation.";

?>