<?php
include("../../../php/connectDb.php");

// 0
$query = "select * from officierdepermanance";
$resultMoyens = mysqli_query($connect, $query);
foreach ($resultMoyens as $row) :
    print $row["Grade"] . " " . $row["Nom"] . ",";
endforeach;
print(";!;");

// 1
$query = "select * from chefdequart";
$resultMoyens = mysqli_query($connect, $query);
foreach ($resultMoyens as $row) :
    print $row["Grade"] . " " . $row["Nom"] . ",";
endforeach;
print(";!;");

// 2
$query = "select * from adjointdequart";
$resultMoyens = mysqli_query($connect, $query);
foreach ($resultMoyens as $row) :
    print $row["Grade"] . " " . $row["Nom"] . ",";
endforeach;
print(";!;");

// 3
$query = "select * from pavillon";
$resultMoyens = mysqli_query($connect, $query);
foreach ($resultMoyens as $row) :
    print $row["Nom"] . " (" . $row["Abrv"] . "),";
endforeach;
print(";!;");

// 4
$query = "select * from secteurs";
$resultMoyens = mysqli_query($connect, $query);
foreach ($resultMoyens as $row) :
    print $row["departement"] . "!!" . $row["secteur"] . ",";
endforeach;
print("  ;!;");
// 


$query = "select * from semaphores";
$resultMoyens = mysqli_query($connect, $query);
foreach ($resultMoyens as $row) :
    print $row["semaphore"] . ",";
endforeach;
print(";!;");

$query = "select * from actions";
$resultMoyens = mysqli_query($connect, $query);
foreach ($resultMoyens as $row) :
    print $row["description"] . ",";
endforeach;
print(";!;");
