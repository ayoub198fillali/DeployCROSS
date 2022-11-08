<?php
include("../../../php/connectDb.php");
$ID = (int)$_GET["ID"];
$query = "select * from surpol where i= ${ID} ";

$resultMoyens = mysqli_query($connect, $query);

foreach ($resultMoyens as $row) :

    // if (mysqli_query($connect, $query)) {
    print $row["ID"] . ",;," . $row["INFOquartDe"] .
        ",;," . $row["INFOdu"] . ",;," . $row["INFOaUTC"] .
        ",;," . $row["IEQofficierDePermanance"] . ",;," . $row["IEQchefDeQuart"] .
        ",;," . $row["IEQadjointDeQuart"] . ",;," . $row["IEQevenement"] .
        ",;," . $row["IEQle"] . ",;," . $row["TOLtypeDoperation"] .

        ",;," . $row["OBSobservateur"] . ",;," . $row["OBSnom"] .
        ",;," . $row["OBSaUTC"] . ",;," . $row["DIpassageSatDu"] .
        ",;," . $row["DIa1UTC"] . ",;," . $row["DIreceptionDu"] .
        ",;," . $row["DIa2UTC"] . ",;," . $row["classification"] .
        ",;," . $row["connecte"] . ",;," . $row["autreNappe"] .

        ",;," . $row["organismeConfirmation"] . ",;," . $row["moyenConf"] . ",;," . $row["dateConf"] .
        ",;," . $row["heureConf"] . ",;," . $row["TOLpositionN1"] .
        ",;," . $row["TOLpositionE1"] . ",;," . $row["TOLzoneGeographique1"] .
        ",;," . $row["TOLazimut1"] . ",;," . $row["TOLdistance1"] .

        ",;," . $row["TOLpointRemarquable"] . ",;," . $row["TOLpositionN2"] .
        ",;," . $row["TOLpositionE2"] . ",;," . $row["TOLzoneGeographique2"] .
        ",;," . $row["TOLazimut2"] . ",;," . $row["TOLdistance2"] .
        ",;," . $row["TOLpointRemarquable2"] . ",;," . $row["DESCforme1"] .


        ",;," . $row["DESCprecision1"] . ",;," . $row["DESCrayon1"] .
        ",;," . $row["DESClongueur1"] . ",;," . $row["DESClargeur1"] .
        ",;," . $row["DESCorientation1"] . ",;," . $row["DESCtauxOrientation1"] .
        ",;," . $row["DESCepaisseur1"] . ",;," . $row["DESCsuperficie1"] .
        ",;," . $row["DESCaspect1"] . ",;," . $row["DESCprecisionAspect1"] .
        ",;," . $row["DESCodeur1"] . ",;," . $row["DESCautreOdeur1"] .
        ",;," . $row["DESCcouleur1"] . ",;," . $row["DESCgrisArgent1"] .
        ",;," . $row["DESCarcEnCiel1"] . ",;," . $row["DESCmetalique1"] .
        ",;," . $row["DESCvreaieColorDis1"] . ",;," . $row["DESCvreaieColorCon1"] .

        ",;," . $row["DESCforme2"] .
        ",;," . $row["DESCprecision2"] . ",;," . $row["DESCrayon2"] .
        ",;," . $row["DESClongueur2"] . ",;," . $row["DESClargeur2"] .
        ",;," . $row["DESCorientation2"] . ",;," . $row["DESCtauxOrientation2"] .
        ",;," . $row["DESCepaisseur2"] . ",;," . $row["DESCsuperficie2"] .
        ",;," . $row["DESCaspect2"] . ",;," . $row["DESCprecisionAspect2"] .
        ",;," . $row["DESCodeur2"] . ",;," . $row["DESCautreOdeur2"] .
        ",;," . $row["DESCcouleur2"] . ",;," . $row["DESCgrisArgent2"] .
        ",;," . $row["DESCarcEnCiel2"] . ",;," . $row["DESCmetalique2"] .
        ",;," . $row["DESCvreaieColorDis2"] . ",;," . $row["DESCvreaieColorCon2"] .
        ",;," . $row["infoCompl"] .

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
        ",;," . $row["MTOtemperaturesEau"] . ",;," . $row["MTOtemperaturesAir"] .

        ",;," . $row["RESnaturePollution"] . ",;," . $row["RESclassificationOperation"] .
        ",;," . $row["RESprevisionDev"] . ",;," . $row["ResultatTraitementSurpol"]

        . "!;!";
endforeach;

$query2 = "select * from eventssurpol where IDsurpol = ${ID} ";
$resultMoyens = mysqli_query($connect, $query2);

foreach ($resultMoyens as $row) :
    print  $row["Date"] . ",;," . $row["Heure"] .
        ",;," . $row["TphVHF"] . ",;," . $row["description"] . ":;:";
endforeach;
