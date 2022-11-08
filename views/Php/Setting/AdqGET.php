<!-- OK Le 28/05/2022   -->
<!-- FILE Charged By Updating Data Base Called By GETSorties(XMLHttpRequest) -->

<?php
include("../../../php/connectDb.php");

$query = "select * from adjointdequart";
$resultMoyens = mysqli_query($connect, $query);

foreach ($resultMoyens as $row) :
?>
    <tr id="Adq-<?php echo $row["ID"] ?>" Style="cursor:pointer" class=" active-row">

        <td class="dt-body" data-testidadq=<?php echo $row["ID"] ?> id="IDAdq-<?php echo $row["ID"] ?>"> <?php echo $row["ID"] ?> </td>
        <td data-testidadq=<?php echo $row["ID"] ?> id="GradeAdq-<?php echo $row["ID"] ?>"><?php echo $row["Grade"] ?></td>
        <td data-testidadq=<?php echo $row["ID"] ?> id="NomAdq-<?php echo $row["ID"] ?>"><?php echo $row["Nom"] ?></td>

        <td class="controleTd">
            <span class="btnControl btnControlDelete" data-testidadq=<?php echo $row["ID"] ?> id="delete-Adq-<?php echo $row["ID"] ?>"><i class="icon-TRASH "></i></span>
            <span class="btnControl btnControlSave disabled" data-testidadq=<?php echo $row["ID"] ?> id="save-Adq-<?php echo $row["ID"] ?>"><i class="icon-SAVE "></i></span>
            <span class="btnControl btnControlCancel hidden" data-testidadq=<?php echo $row["ID"] ?> id="cancel-Adq-<?php echo $row["ID"] ?>"><i class="icon-CLOSE "></i></span>
            <span class="btnControl btnControlConfirm hidden" data-testidadq=<?php echo $row["ID"] ?> id="confirm-Adq-<?php echo $row["ID"] ?>"><i class="icon-CHECK "></i></span>
        </td>
    </tr>

    <script>
        $(`#delete-Adq-<?php echo $row["ID"] ?>`).off("click").on('click', deleteAdq)
        $(`#cancel-Adq-<?php echo $row["ID"] ?>`).off("click").on('click', cancelDeletionAdq)
        $(`#confirm-Adq-<?php echo $row["ID"] ?>`).off("click").on('click', confirmDeletionAdq)
        $(`#save-Adq-<?php echo $row["ID"] ?>`).off("click").on('click', saveUpdateAdq)
        $(`#GradeAdq-<?php echo $row["ID"] ?>`).off("click").on('click', editResultAdq)
        $(`#NomAdq-<?php echo $row["ID"] ?>`).off("click").on('click', editResultAdq)
    </script>

<?php
endforeach;
?>