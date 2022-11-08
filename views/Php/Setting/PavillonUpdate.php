<?php
include("../../../php/connectDb.php");

$ID = $_GET["theID"];
$DATA = $_GET["DATA"];
$oneData = explode("-", $DATA);

$queryUpdate = "UPDATE pavillon SET Abrv= '$oneData[0]', Nom = '$oneData[1]' WHERE ID = ${ID};";

$execute = mysqli_query($connect, $queryUpdate);
