<?php
include("../../../php/connectDb.php"); // $connect = new PDO("mysql:host=localhost; dbname=testing", "root", "");


$Grade = $_GET["CDQgrade"];
$Nom = $_GET["CDQname"];
mysqli_query($connect, "ALTER TABLE chefdequart AUTO_INCREMENT = 1;");

$queryInsert = "insert into chefdequart (ID, Grade, Nom) values (null, '$Grade', '$Nom');
 ";

if (mysqli_query($connect, $queryInsert)) {
    echo 'success';
}
