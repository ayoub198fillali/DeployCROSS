
<?php
include("../../../php/connectDb.php");
$thisdate = $_GET["thisdate"];


$query = "select MAX(ID) from surpol where year(IEQle) = $thisdate";
$resultMoyens = mysqli_query($connect, $query);
foreach ($resultMoyens as $row) :
    echo ($row["MAX(ID)"]);
endforeach;
echo ("/");
$query = "select MAX(i) from surpol";
$resultMoyens = mysqli_query($connect, $query);
foreach ($resultMoyens as $row) :
    echo ($row["MAX(i)"]);
endforeach;
