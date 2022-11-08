<!-- OK Le 28/05/2022   -->
<!-- FILE Charged By Updating Data Base Called By GETSorties(XMLHttpRequest) -->


<?php
include("../../../php/connectDb.php");
$Conf = $_GET["conf"];
$thisdate = $_GET["thisdate"];

$query = "SELECT * FROM `surnav` WHERE `TOLtypeDoperation` = 'MOUILLAGE' and `IEQevenement` != 'ARCHIVÉ' and year(IEQle)  = $thisdate order by IEQle;";
if ($Conf == 1) {
    $query = "SELECT * FROM `surnav` WHERE `TOLtypeDoperation`= 'MOUILLAGE' and `Naviretype` != 'YAC' and `IEQevenement` != 'ARCHIVÉ' and year(IEQle)  = $thisdate order by IEQle;";
} else if ($Conf == 2) {
    $query = "SELECT * FROM `surnav` WHERE `TOLtypeDoperation`= 'MOUILLAGE' and `Naviretype` = 'YAC' and `IEQevenement` != 'ARCHIVÉ'  and year(IEQle)  = $thisdate order by IEQle;";
} else if ($Conf == 3) {
    $query = "SELECT * FROM `surnav` WHERE `TOLtypeDoperation`= 'MOUILLAGE' and `Naviretype` = 'NULL'and `IEQevenement` != 'ARCHIVÉ'  and year(IEQle)  = $thisdate order by IEQle;";
}

$resultMoyens = mysqli_query($connect, $query);

foreach ($resultMoyens as $row) :
?>
    <?php if ($row["Naviretype"]) {
        echo "Style=background:red; ";
    } ?>

    <tr id="Mouillage-<?php echo $row["ID"] . "-" . $row["i"] ?>" Style="cursor:pointer" class=" active-row">
        <td class="dt-body" data-testidmouillage=<?php echo $row["ID"] . "-" . $row["i"] ?>> <?php echo $row["INFOdu"] ?> </td>
        <td data-testidmouillage=<?php echo $row["ID"] . "-" . $row["i"] ?>><?php echo $row["TOLsemaphore"] ?></td>
        <td data-testidmouillage=<?php echo $row["ID"] . "-" . $row["i"] ?>><?php echo $row["Navirenom"] ?></td>
        <td data-testidmouillage=<?php echo $row["ID"] . "-" . $row["i"] ?>><?php echo $row["Naviretype"] ?></td>
        <td data-testidmouillage=<?php echo $row["ID"] . "-" . $row["i"] ?>><?php echo $row["NAVIREpavillon"] ?></td>
        <td data-testidmouillage=<?php echo $row["ID"] . "-" . $row["i"] ?>><?php echo $row["NAVIREcargaison"] ?></td>
        <td data-testidmouillage=<?php echo $row["ID"] . "-" . $row["i"] ?>><?php echo $row["TOLpositionN"] . " N - " . $row["TOLpositionE"] . " E" ?></td>
        <td data-testidmouillage=<?php echo $row["ID"] . "-" . $row["i"] ?>><?php echo $row["TOLsecteur"] ?></td>
        <td data-testidmouillage=<?php echo $row["ID"] . "-" . $row["i"] ?>><?php echo $row["IEQevenement"] ?></td>
        <td data-testidmouillage=<?php echo $row["ID"] . "-" . $row["i"] ?>><?php echo $row["TOLmotif"] ?></td>

        <script>
            var date1 = new Date('<?php echo $row["INFOdu"] . " " . $row["INFOaUTC"] . ":00" ?>');
            var thisDate = new Date().toISOString();
            var date2 = new Date(thisDate.split("T")[0] + " " + thisDate.split("T")[1].split(".")[0]);
            var reste = dateDiff(date1, date2);
            var restH = reste["day"] * 24 + reste["hour"] + reste["min"] / 60;
            var progressval = (restH / 24) * 100;
            // console.log("date1  " + date1 +
            //     "    date2 " + date2);
            // console.log(reste);
        </script>


        <td data-testidmouillage=<?php echo $row["ID"] . "-" . $row["i"] ?>>
            <div class='progressBarContent'>
                <em style="font-size: 25px;" class="bx bx-info-circle bx-tada"></em>
                <div>
                    <div>Mouillage id= <?php echo $row["ID"] ?> / <?php echo $row["Naviretype"] ?></div>
                    <div class="progressa" data-date1="<?php echo $row["INFOdu"] . " " . $row["INFOaUTC"] ?>" data-dateF="">
                        <div id="progress-Mouillage-<?php echo $row["ID"] . "-" . $row["i"] ?>" class="progressab" style="    background-color: rgb(178, 222, 75);"></div>
                    </div>
                </div>
            </div>
        </td>

        <td class="controleTd">
            <span class="btnControl btnControlDelete" data-testidmouillage=<?php echo $row["ID"] . "-" . $row["i"] ?> id="delete-Mouillage-<?php echo $row["ID"] . "-" . $row["i"] ?>"><em class="icon-TRASH "></em></span>
            <span class="btnControl btnControlCancel hidden" data-testidmouillage=<?php echo $row["ID"] . "-" . $row["i"] ?> id="cancel-Mouillage-<?php echo $row["ID"] . "-" . $row["i"] ?>"><em class="icon-CLOSE "></em></span>
            <span class="btnControl btnControlConfirm hidden" data-testidmouillage=<?php echo $row["ID"] . "-" . $row["i"] ?> id="confirm-Mouillage-<?php echo $row["ID"] . "-" . $row["i"] ?>"><em class="icon-CHECK "></em></span>
        </td>
    </tr>

    <script>
        $(`#delete-Mouillage-<?php echo $row["ID"] . "-" . $row["i"] ?>`).off("click").on('click', deleteMouillage)
        $(`#cancel-Mouillage-<?php echo $row["ID"] . "-" . $row["i"] ?>`).off("click").on('click', cancelDeletionMouillage)
        $(`#confirm-Mouillage-<?php echo $row["ID"] . "-" . $row["i"] ?>`).off("click").on('click', confirmDeletionMouillage)

        $(`#Mouillage-<?php echo $row["ID"] . "-" . $row["i"] ?>`).off("click").on('click', clickRowMouillage)

        var elm = $(`#progress-Mouillage-<?php echo $row["ID"] . "-" . $row["i"] ?>`)[0];
        elm.style.width = ((progressval < 100) ? progressval : 100) + "%";
        elm.innerText = " ";
        elm.setAttribute("data-DateReste", Dec2Time(((24 * progressval) / 100).toFixed(2)) + " H  /  " + Dec2Time((24 - (24 * progressval) / 100).toFixed(2)) + " H");

        var dateF = date1;
        dateF.setUTCHours(dateF.getUTCHours() + 26);
        dateF = dateF.toISOString();
        elm.parentElement.setAttribute("data-dateF", dateF.split("T")[0] + " " + dateF.split("T")[1].split(".")[0].split(":", 2).join(":"));

        if (progressval > 90 && progressval <= 100) {
            elm.style.backgroundColor = "red";
        } else if (progressval > 50 && progressval < 90) {
            elm.style.backgroundColor = "orange";
        } else if (progressval <= 50) {
            elm.style.backgroundColor = "green";
        } else {
            elm.style.backgroundColor = "black";
            elm.setAttribute("data-DateReste", "⚠️ " + Dec2Time((restH - 24).toFixed(2)) + " H");
        }


        $(".progressBarContent")
            .off("mouseenter")
            .on("mouseenter", function() {
                // console.log("show");
                window.sessionStorage.validatioNbMouillage++;
            });
        $(".progressBarContent")
            .off("mouseleave")
            .on("mouseleave ", function() {
                // console.log("hide");
                window.sessionStorage.validatioNbMouillage--;
            });
    </script>


<?php
endforeach;
?>