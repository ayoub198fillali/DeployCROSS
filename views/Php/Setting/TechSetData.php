<?php
include("../../../php/connectDb.php"); // CMT $connect = new PDO("mysql:host=localhost; dbname=testing", "root", "");


$Grade = $_GET["Techgrade"];
$Nom = $_GET["Techname"];
mysqli_query($connect, "ALTER TABLE technicien AUTO_INCREMENT = 1;");

$queryInsert = "insert into technicien (ID, Grade, Nom) values (null, '$Grade', '$Nom');
 ";

if (mysqli_query($connect, $queryInsert)) {
    echo 'success';
}
