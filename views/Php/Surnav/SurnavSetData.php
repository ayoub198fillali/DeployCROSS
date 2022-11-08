<?php
include("../../../php/connectDb.php"); // $connect = new PDO("mysql:host=localhost; dbname=testing", "root", "");

$I = (int)mysqli_real_escape_string($connect, $_GET["i"]);
$ID = (int)mysqli_real_escape_string($connect, $_GET["id"]);
$update = mysqli_real_escape_string($connect, $_GET["update"]);


$INFOquartDe = mysqli_real_escape_string($connect, $_GET["INFOquartDe"]);
$INFOdu = mysqli_real_escape_string($connect, $_GET["INFOdu"]);
$INFOaUTC = mysqli_real_escape_string($connect, $_GET["INFOaUTC"]);

$IEQofficierDePermanance = mysqli_real_escape_string($connect, $_GET["IEQofficierDePermanance"]);
$IEQchefDeQuart = mysqli_real_escape_string($connect, $_GET["IEQchefDeQuart"]);
$IEQadjointDeQuart = mysqli_real_escape_string($connect, $_GET["IEQadjointDeQuart"]);
$IEQevenement = mysqli_real_escape_string($connect, $_GET["IEQevenement"]);
$IEQle = mysqli_real_escape_string($connect, $_GET["IEQle"]);

$TOLtypeDoperation = mysqli_real_escape_string($connect, $_GET["TOLtypeDoperation"]);
$TOLmotif = mysqli_real_escape_string($connect, $_GET["TOLmotif"]);
$TOLsecteur = mysqli_real_escape_string($connect, $_GET["TOLsecteur"]);
$TOLzoneGeographique = mysqli_real_escape_string($connect, $_GET["TOLzoneGeographique"]);
$TOLsemaphore = mysqli_real_escape_string($connect, $_GET["TOLsemaphore"]);
$TOLazimut = mysqli_real_escape_string($connect, $_GET["TOLazimut"]);
$TOLpointRemarquable = mysqli_real_escape_string($connect, $_GET["TOLpointRemarquable"]);
$TOLdistance = mysqli_real_escape_string($connect, $_GET["TOLdistance"]);
$TOLpositionN = mysqli_real_escape_string($connect, $_GET["TOLpositionN"]);
$TOLpositionE = mysqli_real_escape_string($connect, $_GET["TOLpositionE"]);
$TOLGDHUTC = mysqli_real_escape_string($connect, $_GET["TOLGDHUTC"]);

$Navirenom = mysqli_real_escape_string($connect, $_GET["Navirenom"]);
$Naviretype = mysqli_real_escape_string($connect, $_GET["Naviretype"]);
$NAVIREpavillon = mysqli_real_escape_string($connect, $_GET["NAVIREpavillon"]);
$NAVIRECS = mysqli_real_escape_string($connect, $_GET["NAVIRECS"]);
$NAVIREMMSI = mysqli_real_escape_string($connect, $_GET["NAVIREMMSI"]);
$NAVIREOMI = mysqli_real_escape_string($connect, $_GET["NAVIREOMI"]);
$NAVIRElongueur = mysqli_real_escape_string($connect, $_GET["NAVIRElongueur"]);
$NAVIREjaugeBrut = mysqli_real_escape_string($connect, $_GET["NAVIREjaugeBrut"]);
$NAVIREnombreEquipages = mysqli_real_escape_string($connect, $_GET["NAVIREnombreEquipages"]);
$NAVIRETE = mysqli_real_escape_string($connect, $_GET["NAVIRETE"]);
$NAVIREprovenance = mysqli_real_escape_string($connect, $_GET["NAVIREprovenance"]);
$NAVIREdestination = mysqli_real_escape_string($connect, $_GET["NAVIREdestination"]);
$NAVIRERteVit = mysqli_real_escape_string($connect, $_GET["NAVIRERteVit"]);
$NAVIREHPA = mysqli_real_escape_string($connect, $_GET["NAVIREHPA"]);
$NAVIREcargaison = mysqli_real_escape_string($connect, $_GET["NAVIREcargaison"]);
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

$events = mysqli_real_escape_string($connect, $_GET["events"]);
$events = explode("!;!", $events);

$updateNavire = mysqli_real_escape_string($connect, $_GET["updateNavire"]);

$queryInsertNavire = "";
mysqli_query($connect, "ALTER TABLE navires AUTO_INCREMENT = 1;");

if ($updateNavire == "true")
    $queryInsertNavire = "UPDATE navires SET `Nom` = '$Navirenom' ,`Type` = '$Naviretype',`Pavillon` = '$NAVIREpavillon',`CS` = '$NAVIRECS',
    `MMSI` = '$NAVIREMMSI',`OMI` = '$NAVIREOMI',`Longueur` = '$NAVIRElongueur',`JaugeBrut` = '$NAVIREjaugeBrut',`NombreEquipage` = '$NAVIREnombreEquipages',`TE` = '$NAVIRETE'
     WHERE `OMI` = '$NAVIREOMI'; ";
else
    $queryInsertNavire = "insert ignore into navires (ID, Nom, Type, Pavillon, CS, MMSI, OMI, Longueur, JaugeBrut, NombreEquipage, TE) 
values (null, '$Navirenom', '$Naviretype', '$NAVIREpavillon', '$NAVIRECS', '$NAVIREMMSI', '$NAVIREOMI', '$NAVIRElongueur', '$NAVIREjaugeBrut', '$NAVIREnombreEquipages', '$NAVIRETE');
 ";

// echo $queryInsertNavire;
$test1 = mysqli_query($connect, $queryInsertNavire);

if ($test1) {
    if ($update == "Update") {
        $queryInsertDelete = "delete from surnav WHERE i = ${I}";
        mysqli_query($connect, $queryInsertDelete);
    }
    mysqli_query($connect, "ALTER TABLE surnav AUTO_INCREMENT = 1;");

    $queryInsert =
        " insert into surnav (i, ID, INFOquartDe, INFOdu, INFOaUTC, IEQofficierDePermanance, IEQchefDeQuart, IEQadjointDeQuart, IEQevenement, IEQle, TOLtypeDoperation, 
TOLmotif, TOLsecteur, TOLzoneGeographique, TOLsemaphore, TOLazimut, TOLpointRemarquable, TOLdistance, TOLpositionN, TOLpositionE, TOLGDHUTC, Navirenom, 
Naviretype, NAVIREpavillon, NAVIRECS, NAVIREMMSI, NAVIREOMI, NAVIRElongueur, NAVIREjaugeBrut, NAVIREnombreEquipages, NAVIRETE, NAVIREprovenance, 
NAVIREdestination, NAVIRERteVit, NAVIREHPA, NAVIREcargaison, NAVIREdescriptionGenerale, MTOorigine, MTOventDirection, MTOventVitesse, MTOventRafales, 
MTOmerMer, MTOmerVisibilite, MTOmerNebulosite, MTOmerPlafond, MTOcourantDirection, MTOcourantForce, MTOtemperaturesEau, MTOtemperaturesAir) VALUES 

($I, $ID, '$INFOquartDe', '$INFOdu', '$INFOaUTC', '$IEQofficierDePermanance', '$IEQchefDeQuart', '$IEQadjointDeQuart', '$IEQevenement', '$IEQle', '$TOLtypeDoperation',
'$TOLmotif', '$TOLsecteur', '$TOLzoneGeographique', '$TOLsemaphore', '$TOLazimut', '$TOLpointRemarquable', '$TOLdistance', '$TOLpositionN', '$TOLpositionE', '$TOLGDHUTC', '$Navirenom', 
'$Naviretype', '$NAVIREpavillon', '$NAVIRECS', '$NAVIREMMSI', '$NAVIREOMI', '$NAVIRElongueur', '$NAVIREjaugeBrut', '$NAVIREnombreEquipages', '$NAVIRETE', '$NAVIREprovenance', 
'$NAVIREdestination', '$NAVIRERteVit', '$NAVIREHPA', '$NAVIREcargaison', '$NAVIREdescriptionGenerale', '$MTOorigine', '$MTOventDirection', '$MTOventVitesse', '$MTOventRafales', 
'$MTOmerMer', '$MTOmerVisibilite', '$MTOmerNebulosite', '$MTOmerPlafond', '$MTOcourantDirection', '$MTOcourantForce', '$MTOtemperaturesEau', '$MTOtemperaturesAir')
";

    $test2 = mysqli_query($connect, $queryInsert);
    if ($test2) {
        if ($update == "Update") {
            $queryInsertDelete = "delete from eventssurnav WHERE IDsurnav = ${I}";
            mysqli_query($connect, $queryInsertDelete);
        }

        mysqli_query($connect, "ALTER TABLE eventssurnav AUTO_INCREMENT = 1;");
        $flag = true;
        if ($events[0] != "")
            for ($i = 0; $i < count($events); $i++) {
                // echo (' ******************        ' . $events[$i]);

                $valueArr = explode("!,;", $events[$i]);
                $queryInsert2 = " insert into eventssurnav (ID, Date, Heure, TphVHF,description, IDsurnav) VALUES (null, '$valueArr[0]', '$valueArr[1]', '$valueArr[2]','$valueArr[3]', $I);";
                $test3 = mysqli_query($connect, $queryInsert2);
                if (!$test3) {
                    $flag = false;
                    echo 'Error Surnav3::';
                    break;
                }
            }
    } else {
        echo 'Error Surnav2::';
        echo mysqli_error($connect);
    }
} else {
    echo 'Error Surnav1::';
    echo mysqli_error($connect);
}

if ($flag)
    echo ("success");
