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
$OBSobservateur = mysqli_real_escape_string($connect, $_GET["OBSobservateur"]);
$OBSnom = mysqli_real_escape_string($connect, $_GET["OBSnom"]);
$OBSaUTC = mysqli_real_escape_string($connect, $_GET["OBSaUTC"]);

$DIpassageSatDu = mysqli_real_escape_string($connect, $_GET["DIpassageSatDu"]);
$DIa1UTC = mysqli_real_escape_string($connect, $_GET["DIa1UTC"]);
$DIreceptionDu = mysqli_real_escape_string($connect, $_GET["DIreceptionDu"]);
$DIa2UTC = mysqli_real_escape_string($connect, $_GET["DIa2UTC"]);

$classification = "";
if (isset($_GET["classification"])) {
    $classification = mysqli_real_escape_string($connect, $_GET["classification"]);
}
$connecte = "";
if (isset($_GET["connecte"])) {
    $connecte = mysqli_real_escape_string($connect, $_GET["connecte"]);
}

$autreNappe = mysqli_real_escape_string($connect, $_GET["autreNappe"]);
$organismeConfirmation = mysqli_real_escape_string($connect, $_GET["organismeConfirmation"]);
$moyenConf = mysqli_real_escape_string($connect, $_GET["moyenConf"]);
$dateConf = mysqli_real_escape_string($connect, $_GET["dateConf"]);
$heureConf = mysqli_real_escape_string($connect, $_GET["heureConf"]);



$TOLpositionN1 = mysqli_real_escape_string($connect, $_GET["TOLpositionN1"]);
$TOLpositionE1 = mysqli_real_escape_string($connect, $_GET["TOLpositionE1"]);
$TOLzoneGeographique1 = mysqli_real_escape_string($connect, $_GET["TOLzoneGeographique1"]);
$TOLazimut1 = mysqli_real_escape_string($connect, $_GET["TOLazimut1"]);
$TOLdistance1 = mysqli_real_escape_string($connect, $_GET["TOLdistance1"]);
$TOLpointRemarquable = mysqli_real_escape_string($connect, $_GET["TOLpointRemarquable"]);
$TOLpositionN2 = mysqli_real_escape_string($connect, $_GET["TOLpositionN2"]);
$TOLpositionE2 = mysqli_real_escape_string($connect, $_GET["TOLpositionE2"]);
$TOLzoneGeographique2 = mysqli_real_escape_string($connect, $_GET["TOLzoneGeographique2"]);
$TOLazimut2 = mysqli_real_escape_string($connect, $_GET["TOLazimut2"]);
$TOLdistance2 = mysqli_real_escape_string($connect, $_GET["TOLdistance2"]);
$TOLpointRemarquable2 = mysqli_real_escape_string($connect, $_GET["TOLpointRemarquable2"]);



$DESCforme1 = mysqli_real_escape_string($connect, $_GET["DESCforme1"]);
$DESCprecision1 = mysqli_real_escape_string($connect, $_GET["DESCprecision1"]);
$DESCrayon1 = mysqli_real_escape_string($connect, $_GET["DESCrayon1"]);
$DESClongueur1 = mysqli_real_escape_string($connect, $_GET["DESClongueur1"]);
$DESClargeur1 = mysqli_real_escape_string($connect, $_GET["DESClargeur1"]);
$DESCorientation1 = mysqli_real_escape_string($connect, $_GET["DESCorientation1"]);
$DESCtauxOrientation1 = mysqli_real_escape_string($connect, $_GET["DESCtauxOrientation1"]);
$DESCepaisseur1 = mysqli_real_escape_string($connect, $_GET["DESCepaisseur1"]);
$DESCsuperficie1 = mysqli_real_escape_string($connect, $_GET["DESCsuperficie1"]);
$DESCaspect1 = mysqli_real_escape_string($connect, $_GET["DESCaspect1"]);
$DESCprecisionAspect1 = mysqli_real_escape_string($connect, $_GET["DESCprecisionAspect1"]);
$DESCodeur1 = mysqli_real_escape_string($connect, $_GET["DESCodeur1"]);
$DESCautreOdeur1 = mysqli_real_escape_string($connect, $_GET["DESCautreOdeur1"]);
$DESCcouleur1 = mysqli_real_escape_string($connect, $_GET["DESCcouleur1"]);
$DESCgrisArgent1 = mysqli_real_escape_string($connect, $_GET["DESCgrisArgent1"]);
$DESCarcEnCiel1 = mysqli_real_escape_string($connect, $_GET["DESCarcEnCiel1"]);
$DESCmetalique1 = mysqli_real_escape_string($connect, $_GET["DESCmetalique1"]);
$DESCvreaieColorDis1 = mysqli_real_escape_string($connect, $_GET["DESCvreaieColorDis1"]);
$DESCvreaieColorCon1 = mysqli_real_escape_string($connect, $_GET["DESCvreaieColorCon1"]);

$DESCforme2 = mysqli_real_escape_string($connect, $_GET["DESCforme2"]);
$DESCprecision2 = mysqli_real_escape_string($connect, $_GET["DESCprecision2"]);
$DESCrayon2 = mysqli_real_escape_string($connect, $_GET["DESCrayon2"]);
$DESClongueur2 = mysqli_real_escape_string($connect, $_GET["DESClongueur2"]);
$DESClargeur2 = mysqli_real_escape_string($connect, $_GET["DESClargeur2"]);
$DESCorientation2 = mysqli_real_escape_string($connect, $_GET["DESCorientation2"]);
$DESCtauxOrientation2 = mysqli_real_escape_string($connect, $_GET["DESCtauxOrientation2"]);
$DESCepaisseur2 = mysqli_real_escape_string($connect, $_GET["DESCepaisseur2"]);
$DESCsuperficie2 = mysqli_real_escape_string($connect, $_GET["DESCsuperficie2"]);
$DESCaspect2 = mysqli_real_escape_string($connect, $_GET["DESCaspect2"]);
$DESCprecisionAspect2 = mysqli_real_escape_string($connect, $_GET["DESCprecisionAspect2"]);
$DESCodeur2 = mysqli_real_escape_string($connect, $_GET["DESCodeur2"]);
$DESCautreOdeur2 = mysqli_real_escape_string($connect, $_GET["DESCautreOdeur2"]);
$DESCcouleur2 = mysqli_real_escape_string($connect, $_GET["DESCcouleur2"]);
$DESCgrisArgent2 = mysqli_real_escape_string($connect, $_GET["DESCgrisArgent2"]);
$DESCarcEnCiel2 = mysqli_real_escape_string($connect, $_GET["DESCarcEnCiel2"]);
$DESCmetalique2 = mysqli_real_escape_string($connect, $_GET["DESCmetalique2"]);
$DESCvreaieColorDis2 = mysqli_real_escape_string($connect, $_GET["DESCvreaieColorDis2"]);
$DESCvreaieColorCon2 = mysqli_real_escape_string($connect, $_GET["DESCvreaieColorCon2"]);

$infoCompl = mysqli_real_escape_string($connect, $_GET["infoCompl"]);

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


$RESnaturePollution = mysqli_real_escape_string($connect, $_GET["RESnaturePollution"]);
$RESclassificationOperation = mysqli_real_escape_string($connect, $_GET["RESclassificationOperation"]);
$RESprevisionDev = mysqli_real_escape_string($connect, $_GET["RESprevisionDev"]);
$ResultatTraitementSurpol = mysqli_real_escape_string($connect, $_GET["ResultatTraitementSurpol"]);


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
        $queryInsertDelete = "delete from surpol WHERE i = ${I}";
        mysqli_query($connect, $queryInsertDelete);
    }
    mysqli_query($connect, "ALTER TABLE surpol AUTO_INCREMENT = 1;");

    $queryInsert = "
    INSERT INTO `surpol` (`i`,`ID`, `INFOquartDe`, `INFOdu`, `INFOaUTC`, `IEQofficierDePermanance`, `IEQchefDeQuart`, `IEQadjointDeQuart`, `IEQevenement`, 
    `IEQle`, `TOLtypeDoperation`, `OBSobservateur`, `OBSnom`, `OBSaUTC`, `DIpassageSatDu`, `DIa1UTC`, `DIreceptionDu`, `DIa2UTC`, 
    `classification`, `connecte`, `autreNappe`, `organismeConfirmation`, `moyenConf`, `dateConf`, `heureConf`, `TOLpositionN1`, `TOLpositionE1`, 
    `TOLzoneGeographique1`, `TOLazimut1`, `TOLdistance1`, `TOLpointRemarquable`, `TOLpositionN2`, `TOLpositionE2`, `TOLzoneGeographique2`, `TOLazimut2`, 
    `TOLdistance2`, `TOLpointRemarquable2`, `DESCforme1`, `DESCprecision1`, `DESCrayon1`, `DESClongueur1`, `DESClargeur1`, `DESCorientation1`, 
    `DESCtauxOrientation1`, `DESCepaisseur1`, `DESCsuperficie1`, `DESCaspect1`, `DESCprecisionAspect1`, `DESCodeur1`, `DESCautreOdeur1`, `DESCcouleur1`,
     `DESCgrisArgent1`, `DESCarcEnCiel1`, `DESCmetalique1`, `DESCvreaieColorDis1`, `DESCvreaieColorCon1`, `DESCforme2`, `DESCprecision2`, `DESCrayon2`,
      `DESClongueur2`, `DESClargeur2`, `DESCorientation2`, `DESCtauxOrientation2`, `DESCepaisseur2`, `DESCsuperficie2`, `DESCaspect2`, `DESCprecisionAspect2`,
       `DESCodeur2`, `DESCautreOdeur2`, `DESCcouleur2`, `DESCgrisArgent2`, `DESCarcEnCiel2`, `DESCmetalique2`, `DESCvreaieColorDis2`, `DESCvreaieColorCon2`, `infoCompl`,
       `Navirenom`, `Naviretype`, `NAVIREpavillon`, `NAVIRECS`, `NAVIREMMSI`, `NAVIREOMI`, `NAVIRElongueur`, `NAVIREjaugeBrut`, `NAVIREnombreEquipages`, 
       `NAVIRETE`, `NAVIREprovenance`, `NAVIREdestination`, `NAVIRERteVit`, `NAVIREHPA`, `NAVIREcargaison`, `NAVIREdescriptionGenerale`, `MTOorigine`, 
       `MTOventDirection`, `MTOventVitesse`, `MTOventRafales`, `MTOmerMer`, `MTOmerVisibilite`, `MTOmerNebulosite`, `MTOmerPlafond`, `MTOcourantDirection`, 
       `MTOcourantForce`, `MTOtemperaturesEau`, `MTOtemperaturesAir`,`RESnaturePollution`,`RESclassificationOperation`,`RESprevisionDev`,`ResultatTraitementSurpol`) VALUES 

       ($I, $ID,'$INFOquartDe', '$INFOdu', '$INFOaUTC', '$IEQofficierDePermanance', '$IEQchefDeQuart', '$IEQadjointDeQuart', '$IEQevenement', 
       '$IEQle', '$TOLtypeDoperation', '$OBSobservateur', '$OBSnom', '$OBSaUTC', '$DIpassageSatDu', '$DIa1UTC', '$DIreceptionDu', '$DIa2UTC', 
       '$classification', '$connecte', '$autreNappe', '$organismeConfirmation', '$moyenConf', '$dateConf', '$heureConf', '$TOLpositionN1', '$TOLpositionE1', 
       '$TOLzoneGeographique1', '$TOLazimut1', '$TOLdistance1', '$TOLpointRemarquable', '$TOLpositionN2', '$TOLpositionE2', '$TOLzoneGeographique2', '$TOLazimut2', 
       '$TOLdistance2', '$TOLpointRemarquable2', '$DESCforme1', '$DESCprecision1', '$DESCrayon1', '$DESClongueur1', '$DESClargeur1', '$DESCorientation1', 
       '$DESCtauxOrientation1', '$DESCepaisseur1', '$DESCsuperficie1', '$DESCaspect1', '$DESCprecisionAspect1', '$DESCodeur1', '$DESCautreOdeur1', '$DESCcouleur1',
        '$DESCgrisArgent1', '$DESCarcEnCiel1', '$DESCmetalique1', '$DESCvreaieColorDis1', '$DESCvreaieColorCon1', '$DESCforme2', '$DESCprecision2', '$DESCrayon2',
         '$DESClongueur2', '$DESClargeur2', '$DESCorientation2', '$DESCtauxOrientation2', '$DESCepaisseur2', '$DESCsuperficie2', '$DESCaspect2', '$DESCprecisionAspect2',
          '$DESCodeur2', '$DESCautreOdeur2', '$DESCcouleur2', '$DESCgrisArgent2', '$DESCarcEnCiel2', '$DESCmetalique2', '$DESCvreaieColorDis2', '$DESCvreaieColorCon2', '$infoCompl',
          '$Navirenom', '$Naviretype', '$NAVIREpavillon', '$NAVIRECS', '$NAVIREMMSI', '$NAVIREOMI', '$NAVIRElongueur', '$NAVIREjaugeBrut', '$NAVIREnombreEquipages', 
          '$NAVIRETE', '$NAVIREprovenance', '$NAVIREdestination', '$NAVIRERteVit', '$NAVIREHPA', '$NAVIREcargaison', '$NAVIREdescriptionGenerale', '$MTOorigine', 
          '$MTOventDirection', '$MTOventVitesse', '$MTOventRafales', '$MTOmerMer', '$MTOmerVisibilite', '$MTOmerNebulosite', '$MTOmerPlafond', '$MTOcourantDirection', 
          '$MTOcourantForce', '$MTOtemperaturesEau', '$MTOtemperaturesAir' ,'$RESnaturePollution' ,'$RESclassificationOperation', '$RESprevisionDev', '$ResultatTraitementSurpol');
    ";

    $test2 = mysqli_query($connect, $queryInsert);
    if ($test2) {
        if ($update == "Update") {
            $queryInsertDelete = "delete from eventssurpol WHERE IDsurpol = ${I}";
            mysqli_query($connect, $queryInsertDelete);
        }

        mysqli_query($connect, "ALTER TABLE eventssurpol AUTO_INCREMENT = 1;");
        $flag = true;
        if ($events[0] != "")
            for ($i = 0; $i < count($events); $i++) {
                // echo (' ******************        ' . $events[$i]);

                $valueArr = explode("!,;", $events[$i]);
                $queryInsert2 = " insert into eventssurpol (ID, Date, Heure, TphVHF,description, IDsurpol) VALUES (null, '$valueArr[0]', '$valueArr[1]', '$valueArr[2]','$valueArr[3]', $I);";
                $test3 = mysqli_query($connect, $queryInsert2);
                if (!$test3) {
                    $flag = false;
                    echo 'Error surpol3::';
                    break;
                }
            }
    } else {
        echo 'Error surpol2::';
        echo mysqli_error($connect);
    }
} else {
    echo 'Error surpol1::';
    echo mysqli_error($connect);
}

if ($flag)
    echo ("success");
