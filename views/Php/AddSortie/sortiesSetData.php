<?php
include("../../../php/connectDb.php"); // $connect = new PDO("mysql:host=localhost; dbname=testing", "root", "");


$Nom = $_GET["Nom"];
$SecteurEvolution = $_GET["SecteurEvolution"];
$Duree = $_GET["Duree"];
$Observations = $_GET["Observations"];
$DPT = $_GET["DPT"];
$HeureDebut = $_GET["HeureDebut"];

$queryInsert = "insert into sorties (ID, Nom, SecteurEvolution, Duree, 
 Observations, DPT, HeureDebut, HeureSortie) values (null, '$Nom', '$SecteurEvolution', '$Duree', '$Observations', '$DPT', '$HeureDebut', '');
 ";

if (mysqli_query($connect, $queryInsert)) {
    echo 'success';
}
