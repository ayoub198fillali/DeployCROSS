<?php
include("../../../php/connectDb.php");
$ID = (int)$_GET["ID"];
$query = "select * from rsmsurfaune where i= ${ID} ";

$resultMoyens = mysqli_query($connect, $query);

foreach ($resultMoyens as $row) :

    // if (mysqli_query($connect, $query)) {
    print $row["type"] . ",;," . $row["INFOquartDe"] .
        ",;," . $row["INFOdu"] . ",;," . $row["INFOaUTC"] .
        ",;," . $row["IEQofficierDePermanance"] . ",;," . $row["IEQchefDeQuart"] .
        ",;," . $row["IEQadjointDeQuart"] . ",;," . $row["IEQevenement"] .
        ",;," . $row["IEQle"] . ",;," . $row["TOLaUTC"] .
        ",;," . $row["TOLpar"] . ",;," . $row["TOLcontre"] . ",;," . $row["TOLmoyenTr"] .
        ",;," . $row["TOLnatureDanger"] . ",;," . $row["TOLnatureDangerAutre"] .

        ",;," . $row["TOLdescription"] . ",;," . $row["TOLsecteur"] .
        ",;," . $row["TOLzoneGeographique"] . ",;," . $row["TOLazimut"] .
        ",;," . $row["TOLpointRemarquable"] . ",;," . $row["TOLdistance"] .
        ",;," . $row["TOLpositionN"] . ",;," . $row["TOLpositionE"] .

        ",;," . $row["Navirenom"] . ",;," . $row["Naviretype"] .
        ",;," . $row["NAVIREpavillon"] . ",;," . $row["NAVIRECS"] .
        ",;," . $row["NAVIREMMSI"] . ",;," . $row["NAVIREIndicatif"] .
        ",;," . $row["NavireImmatriculation"] .
        ",;," . $row["NavireProprietaire"] . ",;," . $row["NavirePort"] .
        ",;," . $row["NAVIREtelephone"] . ",;," . $row["Navirenum1"] .
        ",;," . $row["Navirenum2"] . ",;," . $row["NAVIRElongueur"] .
        ",;," . $row["NAVIRELargeur"] . ",;," . $row["NAVIRECouleur"] .
        ",;," . $row["NAVIREMaterial"] . ",;," . $row["NAVIREdescriptionGenerale"] .

        ",;," . $row["MTOorigine"] . ",;," . $row["MTOventDirection"] .
        ",;," . $row["MTOventVitesse"] . ",;," . $row["MTOventRafales"] .

        ",;," . $row["MTOmerMer"] . ",;," . $row["MTOmerVisibilite"] .
        ",;," . $row["MTOmerNebulosite"] . ",;," . $row["MTOmerPlafond"] .
        ",;," . $row["MTOcourantDirection"] . ",;," . $row["MTOcourantForce"] .
        ",;," . $row["MTOtemperaturesEau"] . ",;," . $row["MTOtemperaturesAir"] .

        ",;," . $row["RESautre"] . ",;," . $row["RESresOperation"] .
        ",;," . $row["RESpersTirees"] . ",;," . $row["RESpersRetr"] .
        ",;," . $row["RESpersSec"] . ",;," . $row["RESpersAss"] .
        ",;," . $row["RESpersDisp"] . ",;," . $row["RESpersDecede"] .
        ",;," . $row["RESpersImpl"] . ",;," . $row["RESpro1"] .
        ",;," . $row["RESpro2"] . ",;," . $row["RESpro3"] .
        ",;," . $row["RESpro4"] .   "!;!";
endforeach;

//Grp Résultat

$query2 = "select * from eventsrsmsurfaune where IDrsmsurfaune = ${ID} ";
$resultMoyens = mysqli_query($connect, $query2);

foreach ($resultMoyens as $row) :
    print  $row["Date"] . ",;," . $row["Heure"] .
        ",;," . $row["TphVHF"] . ",;," . $row["description"] . ":;:";
endforeach;
