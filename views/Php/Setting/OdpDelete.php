<?php

include("../../../php/connectDb.php");
$ID = $_GET["theID"];
$query2 = "delete from officierdepermanance WHERE ID = ${ID}";
$execute = mysqli_query($connect, $query2);
