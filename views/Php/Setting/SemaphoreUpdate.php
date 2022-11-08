<?php
include("../../../php/connectDb.php");

$ID = $_GET["theID"];
$DATA = $_GET["DATA"];

$queryUpdate = "UPDATE semaphores SET semaphore = '$DATA' WHERE ID = ${ID};";

$execute = mysqli_query($connect, $queryUpdate);
