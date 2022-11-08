<?php
include("../../../php/connectDb.php");

// $cmain = utf8_decode($_GET["c1"]);
$c1 = $_GET['c1'];
$c2 = $_GET['c2'];
$c3 = $_GET['c3'];
$c4 = $_GET['c4'];


// $queryUpdate = "UPDATE config SET confValue	= '$c1' WHERE ID = 1;UPDATE config SET confValue	= '$c2' WHERE ID = 2; UPDATE config SET confValue	= '$c3' WHERE ID = 3;UPDATE config SET confValue	= '$c4' WHERE ID = 4;";
$queryUpdate = "UPDATE config SET confValue	= '$c1' WHERE ID = 1; ";
$execute = mysqli_query($connect, $queryUpdate);

$queryUpdate = "UPDATE config SET confValue	= '$c2' WHERE ID = 2; ";
$execute = mysqli_query($connect, $queryUpdate);

$queryUpdate = "UPDATE config SET confValue	= '$c3' WHERE ID = 3; ";
$execute = mysqli_query($connect, $queryUpdate);

$queryUpdate = "UPDATE config SET confValue	= '$c4' WHERE ID = 4; ";
$execute = mysqli_query($connect, $queryUpdate);
