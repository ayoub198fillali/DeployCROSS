<!-- OK Le 28/05/2022   -->
<!-- FILE Charged By Updating Data Base Called By GETSorties(XMLHttpRequest) -->

<?php
include("../../../php/connectDb.php");

$query = "select * from typeoperation";
$resultMoyens = mysqli_query($connect, $query);

foreach ($resultMoyens as $row) :
?>
    <tr id="To-<?php echo $row["ID"] ?>" Style="cursor:pointer" class=" active-row">

        <td class="dt-body" data-testidto=<?php echo $row["ID"] ?> id="IDTo-<?php echo $row["ID"] ?>"> <?php echo $row["ID"] ?> </td>
        <td data-testidto=<?php echo $row["ID"] ?> id="NomTo-<?php echo $row["ID"] ?>"><?php echo $row["operation"] ?></td>

        <td class="controleTd">
            <span class="btnControl btnControlDelete" data-testidto=<?php echo $row["ID"] ?> id="delete-To-<?php echo $row["ID"] ?>"><i class="icon-TRASH "></i></span>
            <span class="btnControl btnControlSave disabled" data-testidto=<?php echo $row["ID"] ?> id="save-To-<?php echo $row["ID"] ?>"><i class="icon-SAVE "></i></span>
            <span class="btnControl btnControlCancel hidden" data-testidto=<?php echo $row["ID"] ?> id="cancel-To-<?php echo $row["ID"] ?>"><i class="icon-CLOSE "></i></span>
            <span class="btnControl btnControlConfirm hidden" data-testidto=<?php echo $row["ID"] ?> id="confirm-To-<?php echo $row["ID"] ?>"><i class="icon-CHECK "></i></span>
        </td>
    </tr>

    <script>
        $(`#delete-To-<?php echo $row["ID"] ?>`).off("click").on('click', deleteTo)
        $(`#cancel-To-<?php echo $row["ID"] ?>`).off("click").on('click', cancelDeletionTo)
        $(`#confirm-To-<?php echo $row["ID"] ?>`).off("click").on('click', confirmDeletionTo)
        $(`#save-To-<?php echo $row["ID"] ?>`).off("click").on('click', saveUpdateTo)
        $(`#NomTo-<?php echo $row["ID"] ?>`).off("click").on('click', editResultTo)
    </script>

<?php
endforeach;
?>