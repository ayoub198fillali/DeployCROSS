<!-- OK Le 28/05/2022   -->
<!-- FILE Charged By Updating Data Base Called By GETSorties(XMLHttpRequest) -->


<?php
include("../../../php/connectDb.php");

$query = "select * from officierdepermanance";
$resultMoyens = mysqli_query($connect, $query);

foreach ($resultMoyens as $row) :
?>
    <tr id="Odp-<?php echo $row["ID"] ?>" Style="cursor:pointer" class=" active-row">

        <td class="dt-body" data-testidodp=<?php echo $row["ID"] ?> id="IDOdp-<?php echo $row["ID"] ?>"> <?php echo $row["ID"] ?> </td>
        <td data-testidodp=<?php echo $row["ID"] ?> id="GradeOdp-<?php echo $row["ID"] ?>"><?php echo $row["Grade"] ?></td>
        <td data-testidodp=<?php echo $row["ID"] ?> id="NomOdp-<?php echo $row["ID"] ?>"><?php echo $row["Nom"] ?></td>

        <td class="controleTd">
            <span class="btnControl btnControlDelete" data-testidodp=<?php echo $row["ID"] ?> id="delete-Odp-<?php echo $row["ID"] ?>"><i class="icon-TRASH "></i></span>
            <span class="btnControl btnControlSave disabled" data-testidodp=<?php echo $row["ID"] ?> id="save-Odp-<?php echo $row["ID"] ?>"><i class="icon-SAVE "></i></span>
            <span class="btnControl btnControlCancel hidden" data-testidodp=<?php echo $row["ID"] ?> id="cancel-Odp-<?php echo $row["ID"] ?>"><i class="icon-CLOSE "></i></span>
            <span class="btnControl btnControlConfirm hidden" data-testidodp=<?php echo $row["ID"] ?> id="confirm-Odp-<?php echo $row["ID"] ?>"><i class="icon-CHECK "></i></span>
        </td>
    </tr>

    <script>
        $(`#delete-Odp-<?php echo $row["ID"] ?>`).off("click").on('click', deleteOdp)
        $(`#cancel-Odp-<?php echo $row["ID"] ?>`).off("click").on('click', cancelDeletionOdp)
        $(`#confirm-Odp-<?php echo $row["ID"] ?>`).off("click").on('click', confirmDeletionOdp)
        $(`#save-Odp-<?php echo $row["ID"] ?>`).off("click").on('click', saveUpdateOdp)
        $(`#GradeOdp-<?php echo $row["ID"] ?>`).off("click").on('click', editResultOdp)
        $(`#NomOdp-<?php echo $row["ID"] ?>`).off("click").on('click', editResultOdp)
    </script>

<?php
endforeach;
?>