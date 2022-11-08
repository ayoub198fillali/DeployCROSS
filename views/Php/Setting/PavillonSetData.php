<?php
include("../../../php/connectDb.php"); // CMT $connect = new PDO("mysql:host=localhost; dbname=testing", "root", "");


$Abrv = $_GET["Pavillongrade"];
$Nom = $_GET["Pavillonname"];
mysqli_query($connect, "ALTER TABLE pavillon AUTO_INCREMENT = 1;");

$queryInsert = "insert into pavillon (ID, Abrv, Nom) values (null, '$Abrv', '$Nom');
 ";

if (mysqli_query($connect, $queryInsert)) {
    echo 'success';
}
