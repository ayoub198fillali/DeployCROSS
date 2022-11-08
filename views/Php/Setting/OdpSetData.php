<?php
include("../../../php/connectDb.php"); // $connect = new PDO("mysql:host=localhost; dbname=testing", "root", "");


$Grade = $_GET["ODPgrade"];
$Nom = $_GET["ODPname"];
mysqli_query($connect, "ALTER TABLE officierdepermanance AUTO_INCREMENT = 1;");

$queryInsert = "insert into officierdepermanance (ID, Grade, Nom) values (null, '$Grade', '$Nom');
 ";

if (mysqli_query($connect, $queryInsert)) {
    echo 'success';
}
