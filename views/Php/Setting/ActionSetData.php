<?php
include("../../../php/connectDb.php"); // $connect = new PDO("mysql:host=localhost; dbname=testing", "root", "");


$Nom = $_GET["ACTIONname"];

mysqli_query($connect, "ALTER TABLE actions AUTO_INCREMENT = 1;");

$queryInsert = "insert into actions (ID, description) values (null, '$Nom');
 ";

if (mysqli_query($connect, $queryInsert)) {
    echo 'success';
}
