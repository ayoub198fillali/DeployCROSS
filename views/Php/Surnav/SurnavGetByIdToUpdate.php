<?php
include("../../../php/connectDb.php");
$ID = (int)$_GET["ID"];
$query = "select * from surnav where i= ${ID} ";

$resultMoyens = mysqli_query($connect, $query);

foreach ($resultMoyens as $row) :

    // if (mysqli_query($connect, $query)) {
    print $row["ID"] . ",;," . $row["INFOquartDe"] .
        ",;," . $row["INFOdu"] . ",;," . $row["INFOaUTC"] .
        ",;," . $row["IEQofficierDePermanance"] . ",;," . $row["IEQchefDeQuart"] .
        ",;," . $row["IEQadjointDeQuart"] . ",;," . $row["IEQevenement"] .
        ",;," . $row["IEQle"] . ",;," . $row["TOLtypeDoperation"] .

        ",;," . $row["TOLmotif"] . ",;," . $row["TOLsecteur"] .
        ",;," . $row["TOLzoneGeographique"] . ",;," . $row["TOLsemaphore"] .
        ",;," . $row["TOLazimut"] . ",;," . $row["TOLpointRemarquable"] .
        ",;," . $row["TOLdistance"] . ",;," . $row["TOLpositionN"] .
        ",;," . $row["TOLpositionE"] . ",;," . $row["TOLGDHUTC"] .

        ",;," . $row["Navirenom"] . ",;," . $row["Naviretype"] .
        ",;," . $row["NAVIREpavillon"] . ",;," . $row["NAVIRECS"] .
        ",;," . $row["NAVIREMMSI"] . ",;," . $row["NAVIREOMI"] .
        ",;," . $row["NAVIRElongueur"] . ",;," . $row["NAVIREjaugeBrut"] .
        ",;," . $row["NAVIREnombreEquipages"] . ",;," . $row["NAVIRETE"] .

        ",;," . $row["NAVIREprovenance"] . ",;," . $row["NAVIREdestination"] .
        ",;," . $row["NAVIRERteVit"] . ",;," . $row["NAVIREHPA"] .
        ",;," . $row["NAVIREcargaison"] . ",;," . $row["NAVIREdescriptionGenerale"] .
        ",;," . $row["MTOorigine"] . ",;," . $row["MTOventDirection"] .
        ",;," . $row["MTOventVitesse"] . ",;," . $row["MTOventRafales"] .

        ",;," . $row["MTOmerMer"] . ",;," . $row["MTOmerVisibilite"] .
        ",;," . $row["MTOmerNebulosite"] . ",;," . $row["MTOmerPlafond"] .
        ",;," . $row["MTOcourantDirection"] . ",;," . $row["MTOcourantForce"] .
        ",;," . $row["MTOtemperaturesEau"] . ",;," . $row["MTOtemperaturesAir"] . "!;!";
endforeach;

$query2 = "select * from eventssurnav where IDsurnav = ${ID} ";
$resultMoyens = mysqli_query($connect, $query2);

foreach ($resultMoyens as $row) :
    print  $row["Date"] . ",;," . $row["Heure"] .
        ",;," . $row["TphVHF"] . ",;," . $row["description"] . ":;:";
endforeach;
