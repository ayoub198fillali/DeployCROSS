<?php
include("../../../php/connectDb.php");
$date = $_GET["date"];
$query = "select * from journaldequart where DATE= '${date}' ";

$resultMoyens = mysqli_query($connect, $query);

foreach ($resultMoyens as $row) :

    // if (mysqli_query($connect, $query)) {
    print $row["DATE"] . ",;," . $row["OFP"] .
        ",;," . $row["OFR"] . ",;," . $row["OFG"] .
        ",;," . $row["TECH"] . ",;," . $row["Q1"] .
        ",;," . $row["Q2"] . ",;," . $row["Q3"] .
        ",;," . $row["Q4"] . ",;," . $row["Q5"] .
        ",;," . $row["Q6"] . "!;!";

endforeach;

$query2 = "select * from eventsjq where dateJQ = '${date}' ";
$resultMoyens = mysqli_query($connect, $query2);

foreach ($resultMoyens as $row) :
    print  $row["Quart"] . ",;," . $row["Date"] . ",;," . $row["Heure"] .
        ",;," . $row["description"] . ":;:";
endforeach;
