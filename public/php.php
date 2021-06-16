 //Code à ajouter dès le model de site terminer

<?php
$username = readline("Entrez votre nom d'utilisateur :");
$password = readline('Entrez votre Mot De Passe :');
session_start();
?>

<?php
echo $username . $password;
?>

// oui je m'entraine mdr