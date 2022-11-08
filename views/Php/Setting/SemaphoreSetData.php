<?php
include("../../../php/connectDb.php"); // $connect = new PDO("mysql:host=localhost; dbname=testing", "root", "");


$Nom = $_GET["SEMAname"];

mysqli_query($connect, "ALTER TABLE semaphores AUTO_INCREMENT = 1;");

$queryInsert = "insert into semaphores (ID, semaphore) values (null, '$Nom');
 ";

if (mysqli_query($connect, $queryInsert)) {
    echo 'success';
}
