<!-- OK Le 28/05/2022   -->
<!-- FILE Charged By Updating Data Base Called By GETSorties(XMLHttpRequest) -->


<?php
include("../../../php/connectDb.php");

$query = "select * from chefdequart";
$resultMoyens = mysqli_query($connect, $query);

foreach ($resultMoyens as $row) :
?>
    <tr id="Cdq-<?php echo $row["ID"] ?>" Style="cursor:pointer" class=" active-row">

        <td class="dt-body" data-testidcdq=<?php echo $row["ID"] ?> id="IDCdq-<?php echo $row["ID"] ?>"> <?php echo $row["ID"] ?> </td>
        <td data-testidcdq=<?php echo $row["ID"] ?> id="GradeCdq-<?php echo $row["ID"] ?>"><?php echo $row["Grade"] ?></td>
        <td data-testidcdq=<?php echo $row["ID"] ?> id="NomCdq-<?php echo $row["ID"] ?>"><?php echo $row["Nom"] ?></td>

        <td class="controleTd">
            <span class="btnControl btnControlDelete" data-testidcdq=<?php echo $row["ID"] ?> id="delete-Cdq-<?php echo $row["ID"] ?>"><i class="icon-TRASH "></i></span>
            <span class="btnControl btnControlSave disabled" data-testidcdq=<?php echo $row["ID"] ?> id="save-Cdq-<?php echo $row["ID"] ?>"><i class="icon-SAVE "></i></span>
            <span class="btnControl btnControlCancel hidden" data-testidcdq=<?php echo $row["ID"] ?> id="cancel-Cdq-<?php echo $row["ID"] ?>"><i class="icon-CLOSE "></i></span>
            <span class="btnControl btnControlConfirm hidden" data-testidcdq=<?php echo $row["ID"] ?> id="confirm-Cdq-<?php echo $row["ID"] ?>"><i class="icon-CHECK "></i></span>
        </td>
    </tr>

    <script>
        $(`#delete-Cdq-<?php echo $row["ID"] ?>`).off("click").on('click', deleteCdq)
        $(`#cancel-Cdq-<?php echo $row["ID"] ?>`).off("click").on('click', cancelDeletionCdq)
        $(`#confirm-Cdq-<?php echo $row["ID"] ?>`).off("click").on('click', confirmDeletionCdq)
        $(`#save-Cdq-<?php echo $row["ID"] ?>`).off("click").on('click', saveUpdateCdq)
        $(`#GradeCdq-<?php echo $row["ID"] ?>`).off("click").on('click', editResultCdq)
        $(`#NomCdq-<?php echo $row["ID"] ?>`).off("click").on('click', editResultCdq)
    </script>

<?php
endforeach;
?>