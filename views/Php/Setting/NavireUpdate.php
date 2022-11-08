<?php
include("../../../php/connectDb.php");

$ID = $_GET["theID"];
$DATA = $_GET["DATA"];
$oneData = explode("-", $DATA);

$queryUpdate = "UPDATE navires SET Nom= '$oneData[0]', `Type` = '$oneData[1]' ,Pavillon = '$oneData[2]' ,CS = '$oneData[3]' ,MMSI = '$oneData[4]' ,OMI = '$oneData[5]' ,Longueur = '$oneData[6]' ,JaugeBrut = '$oneData[7]' ,NombreEquipage = '$oneData[8]' ,TE = '$oneData[9]' WHERE ID = ${ID};";


$execute = mysqli_query($connect, $queryUpdate);
