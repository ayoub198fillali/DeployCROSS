
<?php
include("../../../php/connectDb.php");
$thisdate = $_GET["thisdate"];

$query = "select MAX(ID) from surnav where year(IEQle) = $thisdate";
$resultMoyens = mysqli_query($connect, $query);
foreach ($resultMoyens as $row) :
    echo ($row["MAX(ID)"]);
endforeach;
echo ("/");
$query = "select MAX(i) from surnav";
$resultMoyens = mysqli_query($connect, $query);
foreach ($resultMoyens as $row) :
    echo ($row["MAX(i)"]);
endforeach;
