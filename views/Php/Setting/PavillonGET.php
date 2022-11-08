<!-- OK Le 28/05/2022   -->
<!-- FILE Charged By Updating Data Base Called By GETSorties(XMLHttpRequest) -->

<?php
include("../../../php/connectDb.php");

$query = "select * from pavillon";
$resultMoyens = mysqli_query($connect, $query);

foreach ($resultMoyens as $row) :
?>
    <tr id="Pavillon-<?php echo $row["ID"] ?>" Style="cursor:pointer" class=" active-row">

        <td class="dt-body" data-testidpavillon=<?php echo $row["ID"] ?> id="IDPavillon-<?php echo $row["ID"] ?>"> <?php echo $row["ID"] ?> </td>
        <td data-testidpavillon=<?php echo $row["ID"] ?> id="GradePavillon-<?php echo $row["ID"] ?>"><?php echo $row["Abrv"] ?></td>
        <td data-testidpavillon=<?php echo $row["ID"] ?> id="NomPavillon-<?php echo $row["ID"] ?>"><?php echo $row["Nom"] ?></td>

        <td class="controleTd">
            <span class="btnControl btnControlDelete" data-testidpavillon=<?php echo $row["ID"] ?> id="delete-Pavillon-<?php echo $row["ID"] ?>"><i class="icon-TRASH "></i></span>
            <span class="btnControl btnControlSave disabled" data-testidpavillon=<?php echo $row["ID"] ?> id="save-Pavillon-<?php echo $row["ID"] ?>"><i class="icon-SAVE "></i></span>
            <span class="btnControl btnControlCancel hidden" data-testidpavillon=<?php echo $row["ID"] ?> id="cancel-Pavillon-<?php echo $row["ID"] ?>"><i class="icon-CLOSE "></i></span>
            <span class="btnControl btnControlConfirm hidden" data-testidpavillon=<?php echo $row["ID"] ?> id="confirm-Pavillon-<?php echo $row["ID"] ?>"><i class="icon-CHECK "></i></span>
        </td>
    </tr>

    <script>
        $(`#delete-Pavillon-<?php echo $row["ID"] ?>`).off("click").on('click', deletePavillon)
        $(`#cancel-Pavillon-<?php echo $row["ID"] ?>`).off("click").on('click', cancelDeletionPavillon)
        $(`#confirm-Pavillon-<?php echo $row["ID"] ?>`).off("click").on('click', confirmDeletionPavillon)
        $(`#save-Pavillon-<?php echo $row["ID"] ?>`).off("click").on('click', saveUpdatePavillon)
        $(`#GradePavillon-<?php echo $row["ID"] ?>`).off("click").on('click', editResultPavillon)
        $(`#NomPavillon-<?php echo $row["ID"] ?>`).off("click").on('click', editResultPavillon)
    </script>

<?php
endforeach;
?>