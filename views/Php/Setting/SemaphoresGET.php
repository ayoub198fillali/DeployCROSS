<!-- OK Le 28/05/2022   -->
<!-- FILE Charged By Updating Data Base Called By GETSorties(XMLHttpRequest) -->



<?php
include("../../../php/connectDb.php");

$query = "select * from semaphores";
$resultMoyens = mysqli_query($connect, $query);

foreach ($resultMoyens as $row) :
?>
    <tr id="Semaphore-<?php echo $row["ID"] ?>" Style="cursor:pointer" class=" active-row">

        <td class="dt-body" data-testidsemaphore=<?php echo $row["ID"] ?> id="IDSemaphore-<?php echo $row["ID"] ?>"> <?php echo $row["ID"] ?> </td>
        <td data-testidsemaphore=<?php echo $row["ID"] ?> id="NomSemaphore-<?php echo $row["ID"] ?>"><?php echo $row["semaphore"] ?></td>

        <td class="controleTd">
            <span class="btnControl btnControlDelete" data-testidsemaphore=<?php echo $row["ID"] ?> id="delete-Semaphore-<?php echo $row["ID"] ?>"><i class="icon-TRASH "></i></span>
            <span class="btnControl btnControlSave disabled" data-testidsemaphore=<?php echo $row["ID"] ?> id="save-Semaphore-<?php echo $row["ID"] ?>"><i class="icon-SAVE "></i></span>
            <span class="btnControl btnControlCancel hidden" data-testidsemaphore=<?php echo $row["ID"] ?> id="cancel-Semaphore-<?php echo $row["ID"] ?>"><i class="icon-CLOSE "></i></span>
            <span class="btnControl btnControlConfirm hidden" data-testidsemaphore=<?php echo $row["ID"] ?> id="confirm-Semaphore-<?php echo $row["ID"] ?>"><i class="icon-CHECK "></i></span>
        </td>
    </tr>

    <script>
        $(`#delete-Semaphore-<?php echo $row["ID"] ?>`).off("click").on('click', deleteSemaphore)
        $(`#cancel-Semaphore-<?php echo $row["ID"] ?>`).off("click").on('click', cancelDeletionSemaphore)
        $(`#confirm-Semaphore-<?php echo $row["ID"] ?>`).off("click").on('click', confirmDeletionSemaphore)
        $(`#save-Semaphore-<?php echo $row["ID"] ?>`).off("click").on('click', saveUpdateSemaphore)
        $(`#NomSemaphore-<?php echo $row["ID"] ?>`).off("click").on('click', editResultSemaphore)
    </script>

<?php
endforeach;
?>