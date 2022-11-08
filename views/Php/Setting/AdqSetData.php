<?php
include("../../../php/connectDb.php"); // $connect = new PDO("mysql:host=localhost; dbname=testing", "root", "");


$Grade = $_GET["ADQgrade"];
$Nom = $_GET["ADQname"];
mysqli_query($connect, "ALTER TABLE adjointdequart AUTO_INCREMENT = 1;");

$queryInsert = "insert into adjointdequart (ID, Grade, Nom) values (null, '$Grade', '$Nom');
 ";

if (mysqli_query($connect, $queryInsert)) {
    echo 'success';
}
