<?php
include("../../../php/connectDb.php");

$ID = $_GET["theID"];
$DATA = $_GET["DATA"];
$oneData = explode("-", $DATA);

$queryUpdate = "UPDATE typeoperation SET operation= '$oneData[0]' WHERE ID = ${ID};";

$execute = mysqli_query($connect, $queryUpdate);
