<!-- OK Le 28/05/2022   -->
<!-- FILE Charged By Updating Data Base Called By GETSorties(XMLHttpRequest) -->

<?php
include("../../../php/connectDb.php");

$query = "select * from technicien";
$resultMoyens = mysqli_query($connect, $query);

foreach ($resultMoyens as $row) :
?>
    <tr id="Tech-<?php echo $row["ID"] ?>" Style="cursor:pointer" class=" active-row">

        <td class="dt-body" data-testidtech=<?php echo $row["ID"] ?> id="IDTech-<?php echo $row["ID"] ?>"> <?php echo $row["ID"] ?> </td>
        <td data-testidtech=<?php echo $row["ID"] ?> id="GradeTech-<?php echo $row["ID"] ?>"><?php echo $row["Grade"] ?></td>
        <td data-testidtech=<?php echo $row["ID"] ?> id="NomTech-<?php echo $row["ID"] ?>"><?php echo $row["Nom"] ?></td>

        <td class="controleTd">
            <span class="btnControl btnControlDelete" data-testidtech=<?php echo $row["ID"] ?> id="delete-Tech-<?php echo $row["ID"] ?>"><i class="icon-TRASH "></i></span>
            <span class="btnControl btnControlSave disabled" data-testidtech=<?php echo $row["ID"] ?> id="save-Tech-<?php echo $row["ID"] ?>"><i class="icon-SAVE "></i></span>
            <span class="btnControl btnControlCancel hidden" data-testidtech=<?php echo $row["ID"] ?> id="cancel-Tech-<?php echo $row["ID"] ?>"><i class="icon-CLOSE "></i></span>
            <span class="btnControl btnControlConfirm hidden" data-testidtech=<?php echo $row["ID"] ?> id="confirm-Tech-<?php echo $row["ID"] ?>"><i class="icon-CHECK "></i></span>
        </td>
    </tr>

    <script>
        $(`#delete-Tech-<?php echo $row["ID"] ?>`).off("click").on('click', deleteTech)
        $(`#cancel-Tech-<?php echo $row["ID"] ?>`).off("click").on('click', cancelDeletionTech)
        $(`#confirm-Tech-<?php echo $row["ID"] ?>`).off("click").on('click', confirmDeletionTech)
        $(`#save-Tech-<?php echo $row["ID"] ?>`).off("click").on('click', saveUpdateTech)
        $(`#GradeTech-<?php echo $row["ID"] ?>`).off("click").on('click', editResultTech)
        $(`#NomTech-<?php echo $row["ID"] ?>`).off("click").on('click', editResultTech)
    </script>

<?php
endforeach;
?>