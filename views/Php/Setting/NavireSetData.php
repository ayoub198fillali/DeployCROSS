<?php
include("../../../php/connectDb.php"); // $connect = new PDO("mysql:host=localhost; dbname=testing", "root", "");


$nom = $_GET["Navirenom"];
$type = $_GET["Naviretype"];
$pavillon = $_GET["NAVIREpavillon"];
$CS = $_GET["NAVIRECS"];
$MMSI = $_GET["NAVIREMMSI"];
$OMI = $_GET["NAVIREOMI"];
$longueur = $_GET["NAVIRElongueur"];
$jaugeBrut = $_GET["NAVIREjaugeBrut"];
$nombreEquipages = $_GET["NAVIREnombreEquipages"];
$TE = $_GET["NAVIRETE"];

mysqli_query($connect, "ALTER TABLE navires AUTO_INCREMENT = 1;");

$queryInsert = "insert into navires (ID, Nom, Type, Pavillon, CS, MMSI, OMI, Longueur, JaugeBrut, NombreEquipage, TE) 
values (null, '$nom', '$type', '$pavillon', '$CS', '$MMSI', '$OMI', '$longueur', '$jaugeBrut', '$nombreEquipages', '$TE');
 ";

if (mysqli_query($connect, $queryInsert)) {
    echo 'success';
}
