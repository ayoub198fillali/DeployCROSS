<!-- OK Le 28/05/2022   -->
<!-- FILE Charged By Updating Data Base Called By GETSorties(XMLHttpRequest) -->



<?php
include("../../../php/connectDb.php");

$query = "select * from actions ORDER BY description ASC";
$resultMoyens = mysqli_query($connect, $query);

foreach ($resultMoyens as $row) :
?>
    <tr id="Action-<?php echo $row["ID"] ?>" Style="cursor:pointer" class=" active-row">

        <td data-testidaction=<?php echo $row["ID"] ?> id="NomAction-<?php echo $row["ID"] ?>"><?php echo $row["description"] ?></td>

        <td class="controleTd">
            <span class="btnControl btnControlDelete" data-testidaction=<?php echo $row["ID"] ?> id="delete-Action-<?php echo $row["ID"] ?>"><i class="icon-TRASH "></i></span>
            <span class="btnControl btnControlSave disabled" data-testidaction=<?php echo $row["ID"] ?> id="save-Action-<?php echo $row["ID"] ?>"><i class="icon-SAVE "></i></span>
            <span class="btnControl btnControlCancel hidden" data-testidaction=<?php echo $row["ID"] ?> id="cancel-Action-<?php echo $row["ID"] ?>"><i class="icon-CLOSE "></i></span>
            <span class="btnControl btnControlConfirm hidden" data-testidaction=<?php echo $row["ID"] ?> id="confirm-Action-<?php echo $row["ID"] ?>"><i class="icon-CHECK "></i></span>
        </td>
    </tr>

    <script>
        $(`#delete-Action-<?php echo $row["ID"] ?>`).off("click").on('click', deleteAction)
        $(`#cancel-Action-<?php echo $row["ID"] ?>`).off("click").on('click', cancelDeletionAction)
        $(`#confirm-Action-<?php echo $row["ID"] ?>`).off("click").on('click', confirmDeletionAction)
        $(`#save-Action-<?php echo $row["ID"] ?>`).off("click").on('click', saveUpdateAction)
        $(`#NomAction-<?php echo $row["ID"] ?>`).off("click").on('click', editResultAction)
    </script>

<?php
endforeach;
?>