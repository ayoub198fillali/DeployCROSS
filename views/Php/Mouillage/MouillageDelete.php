<?php

include("../../../php/connectDb.php");
$I = $_GET["i"];
$thisdate = $_GET["thisdate"];

$query0 = "select ID from surnav WHERE i = ${I} and  year(IEQle)  = $thisdate ";
$ID = (int) mysqli_query($connect, $query0);

$query1 = "delete from surnav WHERE i = ${I}";
mysqli_query($connect, $query1);

$query2 = "delete from eventssurnav WHERE IDsurnav = ${I}";
mysqli_query($connect, $query2);
echo "UPDATE surnav SET ID = ID - 1 WHERE ID > ${ID}  and  year(IEQle)  = $thisdate";
if ($ID != 0) {
    echo "pass";
    $query3 = "UPDATE surnav SET ID = ID - 1 WHERE ID > ${ID}  and  year(IEQle)  = $thisdate";
    $ex = mysqli_query($connect, $query3);
}
