<?php
include("../../../php/connectDb.php"); // $connect = new PDO("mysql:host=localhost; dbname=testing", "root", "");

mysqli_query($connect, "ALTER TABLE typeoperation AUTO_INCREMENT = 1;");

$operation = $_GET["TOname"];
$queryInsert = "insert into typeoperation (ID, operation) values (null, '$operation');
 ";

if (mysqli_query($connect, $queryInsert)) {
    echo 'success';
}
