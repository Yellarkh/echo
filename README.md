Echo TFE
====

Les défis:

Il y en a deux, le premier étant l'inscription d'un membre avec activation/confirmation par mail et le deuxième l'upload de fichiers sur la base de donnée.

L'inscription:

Elle se fait en plusieurs étapes, d'abord je vérife si les champs sont vides, s'il ne le sont pas je vérifie si le login et l'email ne sont pas déjà dans ma table "members". Si tout est bon je préviens l'utilisateur qu'il va recevoir un mail de confirmation.

Le lien qu'il reçoit l'envoit vers la page de connexion et active son compte si les données passées dans l'url sont les mêmes que celles dans la db. L'utilisateur peut donc se connecter.

Plusieurs messages d'erreurs différents sont prévus pour expliquer pourquoi les données ne sont pas acceptées.



L'upload de fichier:

On peut faire quatre grande choses, à savoir l'enregistrement en ligne, ouvrir un fichier, le mettre à jour et l'écraser.
J'utilise AJAX en methode POST pour ne pas à devoir recharger la page.

D'abord je stock dans une variable $_SESSION l'id de l'utilisateur.
Pour enregistrer je demande de remplir un input, je vérifie qu'il n'est pas vide et je le trim() (partie en javascript),
ensuite j'envois la requête vers ma table "tracks" ou je mets le nom, l'id de l'utilisateur (pour pouvoir tout retrouver par la suite) et le BLOB d'un json contenant toute les données de la timeline. Un message apparaît en haut à droit de l'écran pour dire que le fichier à bien été enregistré.

Ensuite, dans le menu du compte utilisateur, on retrouve une liste des fichiers qui ont été sauvergardés. On peut les ouvrir avec une requête ou je récupère le BLOB grâce à l'id et le nom du morceau. J'utilise ensuite le javascript pour retranscrire le BLOB en Json.

La mise à jour est le même type de requête sauf que je cible un fichier existant sur la db pour ensuite l'écraser avec ce que contient la timeline.

La suppression se fait de la même manière, j'utilise l'id et le nom de la piste et je supprime grâce à une requête sql.
