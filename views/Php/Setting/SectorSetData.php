<?php
include("../../../php/connectDb.php"); // $connect = new PDO("mysql:host=localhost; dbname=testing", "root", "");


$Departement = $_GET["SECTORdepartement"];
$Sector = $_GET["SECTORname"];
mysqli_query($connect, "ALTER TABLE secteurs AUTO_INCREMENT = 1;");

$queryInsert = "insert into secteurs (ID, departement, secteur) values (null, '$Departement', '$Sector');
 ";

if (mysqli_query($connect, $queryInsert)) {
    echo 'success';
}
