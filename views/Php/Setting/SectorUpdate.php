<?php
include("../../../php/connectDb.php");

$ID = $_GET["theID"];
$DATA = $_GET["DATA"];
$oneData = explode("-", $DATA);

$queryUpdate = "UPDATE secteurs SET departement= '$oneData[0]', secteur = '$oneData[1]' WHERE ID = ${ID};";

$execute = mysqli_query($connect, $queryUpdate);
