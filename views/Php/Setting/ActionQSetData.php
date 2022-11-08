<?php
include("../../../php/connectDb.php"); // $connect = new PDO("mysql:host=localhost; dbname=testing", "root", "");


$Nom = $_GET["ACTIONQname"];

mysqli_query($connect, "ALTER TABLE actionsq AUTO_INCREMENT = 1;");

$queryInsert = "insert into actionsq (ID, description) values (null, '$Nom');
 ";

if (mysqli_query($connect, $queryInsert)) {
    echo 'success';
}
