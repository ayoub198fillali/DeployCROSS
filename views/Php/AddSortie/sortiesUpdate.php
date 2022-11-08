<?php
include("../../../php/connectDb.php");

$ID = $_GET["theID"];
$DATA = $_GET["DATA"];
$oneData = explode("-", $DATA);


$queryUpdate = "UPDATE sorties SET Nom = '$oneData[0]', SecteurEvolution = '$oneData[1]',
Duree = '$oneData[2]', Observations = '$oneData[3]', DPT = '$oneData[4]', HeureDebut = '$oneData[5]',
HeureSortie = '$oneData[6]' WHERE ID = ${ID};";

// $queryUpdate = "delete from sorties WHERE ID = ${ID}";

$execute = mysqli_query($connect, $queryUpdate);
