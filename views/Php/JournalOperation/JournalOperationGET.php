<!-- OK Le 28/05/2022   -->
<!-- FILE Charged By Updating Data Base Called By GetJournalOperation(XMLHttpRequest) -->


<?php
include("../../../php/connectDb.php");
$Conf = $_GET["conf"];
$thisdate = $_GET["thisdate"];

$query[1] = "SELECT * FROM `surnav` WHERE `IEQevenement` = 'ARCHIVÉ' order by IEQle;";/*and year(IEQle)  = $thisdate";*/
$query[2] = "SELECT * FROM `surpol` WHERE `IEQevenement` = 'ARCHIVÉ' order by IEQle;";/*and year(IEQle)  = $thisdate";*/
$query[3] = "SELECT * FROM `rsmsurfaune` WHERE `IEQevenement` = 'ARCHIVÉ' order by IEQle;";/*and year(IEQle)  = $thisdate";*/
$toApply = "";
if ($Conf == 0)
    $toApply = $query[1] . "!!!" . $query[2] . "!!!" . $query[3];
else if ($Conf == 1)
    $toApply = $query[1];
else if ($Conf == 2)
    $toApply = $query[2];
else if ($Conf == 3)
    $toApply = $query[3];


foreach (explode("!!!", $toApply) as $queryL) :
    if ($queryL == $query[1])       $id = "surnav";
    else if ($queryL == $query[2])       $id = "surpol";
    else if ($queryL == $query[3])       $id = "rsmsurfaune";


    $resultMoyens = mysqli_query($connect, $queryL);
    foreach ($resultMoyens as $row) :
        if ($queryL == $query[3])
            $id = $row["type"];
?>
        <tr id="JournalOperation-<?php echo $id . "-" . $row["ID"] . "-" . $row["i"]; ?>" Style="cursor:pointer" class=" active-row">


            <td class="dt-body" data-testidjournaloperation=<?php echo $id . "-" . $row["ID"] . "-" . $row["i"];; ?>><STRONG> <?php echo $id . " / " . $row["ID"]  ?> </STRONG></td>



            <td data-testidjournaloperation=<?php echo $id . "-" . $row["ID"] . "-" . $row["i"]; ?>> <?php if ($id == "surnav" || $id == "surpol") echo $row["TOLtypeDoperation"];
                                                                                                        else if ($id == "RSM" || $id == "SURFAUNE") echo str_replace(":", " ", $row["TOLnatureDanger"]); ?> </td>



            <td data-testidjournaloperation=<?php echo $id . "-" . $row["ID"] . "-" . $row["i"]; ?>><?php if ($id == "surpol") echo $row["OBSnom"];
                                                                                                    else echo $row["Navirenom"] ?></td>


            <td data-testidjournaloperation=<?php echo $id . "-" . $row["ID"] . "-" . $row["i"]; ?>><?php if ($id == "surpol") echo $row["TOLazimut1"]  . " " . $row["TOLpointRemarquable"] . " " . $row["TOLdistance1"] . " Nq";
                                                                                                    else echo $row["TOLpointRemarquable"] . "/" . $row["TOLsecteur"] ?></td>


            <td data-testidjournaloperation=<?php echo $id . "-" . $row["ID"] . "-" . $row["i"]; ?>><?php echo $row["IEQevenement"] ?></td>


            <td data-testidjournaloperation=<?php echo $id . "-" . $row["ID"] . "-" . $row["i"]; ?>><?php echo $row["IEQle"] ?></td>

            <td class="controleTd">
                <span class="btnControl btnControlDelete" data-testidjournaloperation=<?php echo $id . "-" . $row["ID"] . "-" . $row["i"]; ?> id="delete-JournalOperation-<?php echo $id . "-" . $row["ID"] . "-" . $row["i"]; ?>"><i class="icon-TRASH "></i></span>
                <span class="btnControl btnControlCancel hidden" data-testidjournaloperation=<?php echo $id . "-" . $row["ID"] . "-" . $row["i"]; ?> id="cancel-JournalOperation-<?php echo $id . "-" . $row["ID"] . "-" . $row["i"]; ?>"><i class="icon-CLOSE "></i></span>
                <span class="btnControl btnControlConfirm hidden" data-testidjournaloperation=<?php echo $id . "-" . $row["ID"] . "-" . $row["i"]; ?> id="confirm-JournalOperation-<?php echo $id . "-" . $row["ID"] . "-" . $row["i"]; ?>"><i class="icon-CHECK "></i></span>
            </td>
        </tr>

        <script>
            $(`#delete-JournalOperation-<?php echo $id . "-" . $row["ID"] . "-" . $row["i"]; ?>`).off("click").on('click', deleteJournalOperation)
            $(`#cancel-JournalOperation-<?php echo $id . "-" . $row["ID"] . "-" . $row["i"]; ?>`).off("click").on('click', cancelDeletionJournalOperation)
            $(`#confirm-JournalOperation-<?php echo $id . "-" . $row["ID"] . "-" . $row["i"]; ?>`).off("click").on('click', confirmDeletionJournalOperation)

            $(`#JournalOperation-<?php echo $id . "-" . $row["ID"] . "-" . $row["i"]; ?>`).off("click").on('click', clickRowJournalOperation)
        </script>


<?php
    endforeach;
endforeach;
?>