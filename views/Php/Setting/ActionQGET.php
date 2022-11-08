<!-- OK Le 28/05/2022   -->
<!-- FILE Charged By Updating Data Base Called By GETSorties(XMLHttpRequest) -->



<?php
include("../../../php/connectDb.php");

$query = "select * from actionsq ORDER BY description ASC";
$resultMoyens = mysqli_query($connect, $query);

foreach ($resultMoyens as $row) :
?>
    <tr id="ActionQ-<?php echo $row["ID"] ?>" Style="cursor:pointer" class=" active-row">

        <td data-testidactionq=<?php echo $row["ID"] ?> id="NomActionQ-<?php echo $row["ID"] ?>"><?php echo $row["description"] ?></td>

        <td class="controleTd">
            <span class="btnControl btnControlDelete" data-testidactionq=<?php echo $row["ID"] ?> id="delete-ActionQ-<?php echo $row["ID"] ?>"><i class="icon-TRASH "></i></span>
            <span class="btnControl btnControlSave disabled" data-testidactionq=<?php echo $row["ID"] ?> id="save-ActionQ-<?php echo $row["ID"] ?>"><i class="icon-SAVE "></i></span>
            <span class="btnControl btnControlCancel hidden" data-testidactionq=<?php echo $row["ID"] ?> id="cancel-ActionQ-<?php echo $row["ID"] ?>"><i class="icon-CLOSE "></i></span>
            <span class="btnControl btnControlConfirm hidden" data-testidactionq=<?php echo $row["ID"] ?> id="confirm-ActionQ-<?php echo $row["ID"] ?>"><i class="icon-CHECK "></i></span>
        </td>
    </tr>

    <script>
        $(`#delete-ActionQ-<?php echo $row["ID"] ?>`).off("click").on('click', deleteActionQ)
        $(`#cancel-ActionQ-<?php echo $row["ID"] ?>`).off("click").on('click', cancelDeletionActionQ)
        $(`#confirm-ActionQ-<?php echo $row["ID"] ?>`).off("click").on('click', confirmDeletionActionQ)
        $(`#save-ActionQ-<?php echo $row["ID"] ?>`).off("click").on('click', saveUpdateActionQ)
        $(`#NomActionQ-<?php echo $row["ID"] ?>`).off("click").on('click', editResultActionQ)
    </script>

<?php
endforeach;
?>