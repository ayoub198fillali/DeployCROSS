

<?php
include("../../../php/connectDb.php");

$query = "select * from officierdepermanance";
$resultMoyens = mysqli_query($connect, $query);
foreach ($resultMoyens as $row) :
    print $row["Grade"] . " " . $row["Nom"] . ",";
endforeach;
print(";!;");

$query = "select * from chefdequart"; //officierDeGarde
$resultMoyens = mysqli_query($connect, $query);
foreach ($resultMoyens as $row) :
    print $row["Grade"] . " " . $row["Nom"] . ",";
endforeach;
print(";!;");

$query = "select * from technicien";  //technicien
$resultMoyens = mysqli_query($connect, $query);
foreach ($resultMoyens as $row) :
    print $row["Grade"] . " " . $row["Nom"] . ",";
endforeach;
print(";!;");

//--------------------------------------------------
$query = "select * from adjointdequart";  //technicien
$resultMoyens = mysqli_query($connect, $query);
foreach ($resultMoyens as $row) :
    print $row["Grade"] . " " . $row["Nom"] . ",";
endforeach;
print(";!;");

$query = "select * from actionsq";  //technicien
$resultMoyens = mysqli_query($connect, $query);
foreach ($resultMoyens as $row) :
    print $row["description"] . ",";
endforeach;
print(";!;");
