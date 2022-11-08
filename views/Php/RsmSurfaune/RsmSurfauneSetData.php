<?php
include("../../../php/connectDb.php"); // $connect = new PDO("mysql:host=localhost; dbname=testing", "root", "");




$I = (int)mysqli_real_escape_string($connect, $_GET["i"]);
$ID = (int)mysqli_real_escape_string($connect, $_GET["id"]);
$update = mysqli_real_escape_string($connect, $_GET["update"]);

$AlertType = mysqli_real_escape_string($connect, $_GET["AlertType"]);
$INFOquartDe = mysqli_real_escape_string($connect, $_GET["INFOquartDe"]);
$INFOdu = mysqli_real_escape_string($connect, $_GET["INFOdu"]);
$INFOaUTC = mysqli_real_escape_string($connect, $_GET["INFOaUTC"]);

$IEQofficierDePermanance = mysqli_real_escape_string($connect, $_GET["IEQofficierDePermanance"]);
$IEQchefDeQuart = mysqli_real_escape_string($connect, $_GET["IEQchefDeQuart"]);
$IEQadjointDeQuart = mysqli_real_escape_string($connect, $_GET["IEQadjointDeQuart"]);
$IEQevenement = mysqli_real_escape_string($connect, $_GET["IEQevenement"]);
$IEQle = mysqli_real_escape_string($connect, $_GET["IEQle"]);

$TOLaUTC = mysqli_real_escape_string($connect, $_GET["TOLaUTC"]);
$TOLpar = mysqli_real_escape_string($connect, $_GET["TOLpar"]);
$TOLcontre = mysqli_real_escape_string($connect, $_GET["TOLcontre"]);
$TOLmoyenTr = mysqli_real_escape_string($connect, $_GET["TOLmoyenTr"]);

$TOLnatureDanger = "";
if ($AlertType == "SURFAUNE") {
    $TOLobjet = mysqli_real_escape_string($connect, $_GET["TOLobjet"]);
    $TOLetat = mysqli_real_escape_string($connect, $_GET["TOLetat"]);
    $TOLstatus = mysqli_real_escape_string($connect, $_GET["TOLstatus"]);
    $TOLnatureDanger =  $TOLobjet . ":" . $TOLetat . ":" . $TOLstatus;
} else
    $TOLnatureDanger = mysqli_real_escape_string($connect, $_GET["TOLnatureDanger"]);

$TOLnatureDangerAutre = mysqli_real_escape_string($connect, $_GET["TOLnatureDangerAutre"]);

$TOLdescription = mysqli_real_escape_string($connect, $_GET["TOLdescription"]);
$TOLsecteur = mysqli_real_escape_string($connect, $_GET["TOLsecteur"]);
$TOLzoneGeographique = mysqli_real_escape_string($connect, $_GET["TOLzoneGeographique"]);
$TOLazimut = mysqli_real_escape_string($connect, $_GET["TOLazimut"]);
$TOLpointRemarquable = mysqli_real_escape_string($connect, $_GET["TOLpointRemarquable"]);
$TOLdistance = mysqli_real_escape_string($connect, $_GET["TOLdistance"]);
$TOLpositionN = mysqli_real_escape_string($connect, $_GET["TOLpositionN"]);
$TOLpositionE = mysqli_real_escape_string($connect, $_GET["TOLpositionE"]);

$Navirenom = mysqli_real_escape_string($connect, $_GET["Navirenom"]);
$Naviretype = mysqli_real_escape_string($connect, $_GET["Naviretype"]);
$NAVIREpavillon = mysqli_real_escape_string($connect, $_GET["NAVIREpavillon"]);
$NAVIRECS = mysqli_real_escape_string($connect, $_GET["NAVIRECS"]);
$NAVIREMMSI = mysqli_real_escape_string($connect, $_GET["NAVIREMMSI"]);

$NAVIREIndicatif = mysqli_real_escape_string($connect, $_GET["NAVIREIndicatif"]);
$NavireImmatriculation = mysqli_real_escape_string($connect, $_GET["NavireImmatriculation"]);
$NavireProprietaire = mysqli_real_escape_string($connect, $_GET["NavireProprietaire"]);
$NavirePort = mysqli_real_escape_string($connect, $_GET["NavirePort"]);
$NAVIREtelephone = mysqli_real_escape_string($connect, $_GET["NAVIREtelephone"]);

$Navirenum1 = mysqli_real_escape_string($connect, $_GET["Navirenum1"]);
$Navirenum2 = mysqli_real_escape_string($connect, $_GET["Navirenum2"]);
$NAVIRElongueur = mysqli_real_escape_string($connect, $_GET["NAVIRElongueur"]);
$NAVIRELargeur = mysqli_real_escape_string($connect, $_GET["NAVIRELargeur"]);
$NAVIRECouleur = mysqli_real_escape_string($connect, $_GET["NAVIRECouleur"]);

$NAVIREMaterial = mysqli_real_escape_string($connect, $_GET["NAVIREMaterial"]);
$NAVIREdescriptionGenerale = mysqli_real_escape_string($connect, $_GET["NAVIREdescriptionGenerale"]);

$MTOorigine = mysqli_real_escape_string($connect, $_GET["MTOorigine"]);
$MTOventDirection = mysqli_real_escape_string($connect, $_GET["MTOventDirection"]);
$MTOventVitesse = mysqli_real_escape_string($connect, $_GET["MTOventVitesse"]);
$MTOventRafales = mysqli_real_escape_string($connect, $_GET["MTOventRafales"]);
$MTOmerMer = mysqli_real_escape_string($connect, $_GET["MTOmerMer"]);
$MTOmerVisibilite = mysqli_real_escape_string($connect, $_GET["MTOmerVisibilite"]);
$MTOmerNebulosite = mysqli_real_escape_string($connect, $_GET["MTOmerNebulosite"]);
$MTOmerPlafond = mysqli_real_escape_string($connect, $_GET["MTOmerPlafond"]);
$MTOcourantDirection = mysqli_real_escape_string($connect, $_GET["MTOcourantDirection"]);
$MTOcourantForce = mysqli_real_escape_string($connect, $_GET["MTOcourantForce"]);
$MTOtemperaturesEau = mysqli_real_escape_string($connect, $_GET["MTOtemperaturesEau"]);
$MTOtemperaturesAir = mysqli_real_escape_string($connect, $_GET["MTOtemperaturesAir"]);

$eventsrsmsurfaune = mysqli_real_escape_string($connect, $_GET["events"]);
$eventsrsmsurfaune = explode("!;!", $eventsrsmsurfaune);

//Grp Résultat
$RESautre = mysqli_real_escape_string($connect, $_GET["RESautre"]);
$RESresOperation = mysqli_real_escape_string($connect, $_GET["RESresOperation"]);
$RESpersTirees = mysqli_real_escape_string($connect, $_GET["RESpersTirees"]);
$RESpersRetr = mysqli_real_escape_string($connect, $_GET["RESpersRetr"]);
$RESpersSec = mysqli_real_escape_string($connect, $_GET["RESpersSec"]);
$RESpersAss = mysqli_real_escape_string($connect, $_GET["RESpersAss"]);
$RESpersDisp = mysqli_real_escape_string($connect, $_GET["RESpersDisp"]);
$RESpersDecede = mysqli_real_escape_string($connect, $_GET["RESpersDecede"]);
$RESpersImpl = mysqli_real_escape_string($connect, $_GET["RESpersImpl"]);
//
$RESpro1 = mysqli_real_escape_string($connect, $_GET["RESpro1"]);
$RESpro2 = mysqli_real_escape_string($connect, $_GET["RESpro2"]);
$RESpro3 = mysqli_real_escape_string($connect, $_GET["RESpro3"]);
$RESpro4 = mysqli_real_escape_string($connect, $_GET["RESpro4"]);


if ($update == "Update") {
    $queryInsertDelete = "delete from rsmsurfaune WHERE i = ${I}";
    mysqli_query($connect, $queryInsertDelete);
}
mysqli_query($connect, "ALTER TABLE rsmsurfaune AUTO_INCREMENT = 1;");


$queryInsert =
    " insert into rsmsurfaune (i,type, ID, INFOquartDe, INFOdu, INFOaUTC, IEQofficierDePermanance, IEQchefDeQuart, IEQadjointDeQuart, IEQevenement, IEQle, TOLaUTC, 
    TOLpar, TOLcontre, TOLmoyenTr, TOLnatureDanger, TOLnatureDangerAutre, TOLdescription, TOLsecteur, TOLzoneGeographique, TOLazimut, TOLpointRemarquable, TOLdistance, TOLpositionN, TOLpositionE, 
    Navirenom, Naviretype, NAVIREpavillon, NAVIRECS, NAVIREMMSI,NAVIREIndicatif, NavireImmatriculation,NavireProprietaire,NavirePort, NAVIREtelephone,Navirenum1,Navirenum2,NAVIRElongueur, 
    NAVIRELargeur, NAVIRECouleur, NAVIREMaterial, NAVIREdescriptionGenerale, MTOorigine, MTOventDirection, MTOventVitesse, MTOventRafales, 
MTOmerMer, MTOmerVisibilite, MTOmerNebulosite, MTOmerPlafond, MTOcourantDirection, MTOcourantForce, MTOtemperaturesEau, MTOtemperaturesAir
,RESautre,RESresOperation,RESpersTirees,RESpersRetr,RESpersSec,RESpersAss,RESpersDisp,RESpersDecede,RESpersImpl,RESpro1,RESpro2,RESpro3,RESpro4
) VALUES 
($I, '$AlertType', $ID, '$INFOquartDe', '$INFOdu', '$INFOaUTC', '$IEQofficierDePermanance', '$IEQchefDeQuart', '$IEQadjointDeQuart', '$IEQevenement', '$IEQle', '$TOLaUTC',
'$TOLpar','$TOLcontre' , '$TOLmoyenTr', '$TOLnatureDanger', '$TOLnatureDangerAutre', '$TOLdescription' , '$TOLsecteur', '$TOLzoneGeographique', '$TOLazimut', '$TOLpointRemarquable', '$TOLdistance', '$TOLpositionN', '$TOLpositionE', '$Navirenom', 
'$Naviretype', '$NAVIREpavillon', '$NAVIRECS', '$NAVIREMMSI', '$NAVIREIndicatif', '$NavireImmatriculation','$NavireProprietaire','$NavirePort','$NAVIREtelephone','$Navirenum1','$Navirenum2','$NAVIRElongueur', 
'$NAVIRELargeur', '$NAVIRECouleur', '$NAVIREMaterial', '$NAVIREdescriptionGenerale', '$MTOorigine', '$MTOventDirection', '$MTOventVitesse', '$MTOventRafales', 
'$MTOmerMer', '$MTOmerVisibilite', '$MTOmerNebulosite', '$MTOmerPlafond', '$MTOcourantDirection', '$MTOcourantForce', '$MTOtemperaturesEau', '$MTOtemperaturesAir',
'$RESautre', '$RESresOperation','$RESpersTirees', '$RESpersRetr','$RESpersSec', '$RESpersAss','$RESpersDisp', '$RESpersDecede','$RESpersImpl', '$RESpro1',
'$RESpro2', '$RESpro3','$RESpro4')
";

$flag = true;
$test2 = mysqli_query($connect, $queryInsert);
if ($test2) {
    if ($update == "Update") {
        $queryInsertDelete = "delete from eventsrsmsurfaune WHERE IDrsmsurfaune = ${I}";
        mysqli_query($connect, $queryInsertDelete);
    }

    mysqli_query($connect, "ALTER TABLE eventsrsmsurfaune AUTO_INCREMENT = 1;");
    $flag = true;
    if ($eventsrsmsurfaune[0] != "")
        for ($i = 0; $i < count($eventsrsmsurfaune); $i++) {
            // CMT echo (' ******************        ' . $eventsrsmsurfaune[$i]);

            $valueArr = explode("!,;", $eventsrsmsurfaune[$i]);
            $queryInsert2 = " insert into eventsrsmsurfaune (ID, Date, Heure, TphVHF,description, IDrsmsurfaune) VALUES (null, '$valueArr[0]', '$valueArr[1]', '$valueArr[2]','$valueArr[3]', $I);";
            $test3 = mysqli_query($connect, $queryInsert2);
            if (!$test3) {
                $flag = false;
                echo 'Error RSMSURFAUNE 1::';
                echo mysqli_error($connect);
                break;
            }
        }

    if ($flag)
        echo ("success");
} else {
    echo 'Error RSMSURFAUNE 2::';
    echo mysqli_error($connect);
}
