<?php
include("../../../php/connectDb.php"); // CMT $connect = new PDO("mysql:host=localhost; dbname=testing", "root", "");

$Delete = $_GET["Delete"];
$Abrv = $_GET["Pavillongrade"];
$Nom = $_GET["Pavillonname"];
if ($Delete == "1") {
    mysqli_query($connect, "TRUNCATE TABLE `pavillon`");
} else {
    mysqli_query($connect, "insert into pavillon (ID, Abrv, Nom) values (null, '$Abrv', '$Nom'); ");
}
