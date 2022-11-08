<?php

include("../../../php/connectDb.php");
$thisdate = $_GET["thisdate"];
$ID = $_GET["theID"];
$oneData = explode("-", $ID);
if ($oneData[0] == "RSM" || $oneData[0] == "SURFAUNE") {
    $oneData[0] = "rsmsurfaune";
}

$query = "delete from $oneData[0] WHERE i = $oneData[2]";
$execute = mysqli_query($connect, $query);

$query2 = "delete from events" . $oneData[0] . " WHERE ID" . $oneData[0] . " = $oneData[2]";
$execute = mysqli_query($connect, $query2);

$oneData[1] = (int)$oneData[1];
if ($oneData[1] != 0) {
    $query3 = "UPDATE $oneData[0] SET ID = ID - 1 WHERE ID > $oneData[1] and  year(IEQle)  = $thisdate";
    mysqli_query($connect, $query3);
}
