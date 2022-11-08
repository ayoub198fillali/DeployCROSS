<!-- OK Le 28/05/2022   -->
<!-- FILE Charged By Updating Data Base Called By GETSorties(XMLHttpRequest) -->

<?php
include("../../../php/connectDb.php");

$query = "select * from secteurs";
$resultMoyens = mysqli_query($connect, $query);

foreach ($resultMoyens as $row) :
?>
    <tr id="Sector-<?php echo $row["ID"] ?>" Style="cursor:pointer" class=" active-row">

        <td class="dt-body" data-testidsector=<?php echo $row["ID"] ?> id="IDSector-<?php echo $row["ID"] ?>"> <?php echo $row["ID"] ?> </td>
        <td data-testidsector=<?php echo $row["ID"] ?> id="DepartementSector-<?php echo $row["ID"] ?>"><?php echo $row["departement"] ?></td>
        <td data-testidsector=<?php echo $row["ID"] ?> id="SectorSector-<?php echo $row["ID"] ?>"><?php echo $row["secteur"] ?></td>

        <td class="controleTd">
            <span class="btnControl btnControlDelete" data-testidsector=<?php echo $row["ID"] ?> id="delete-Sector-<?php echo $row["ID"] ?>"><i class="icon-TRASH "></i></span>
            <span class="btnControl btnControlSave disabled" data-testidsector=<?php echo $row["ID"] ?> id="save-Sector-<?php echo $row["ID"] ?>"><i class="icon-SAVE "></i></span>
            <span class="btnControl btnControlCancel hidden" data-testidsector=<?php echo $row["ID"] ?> id="cancel-Sector-<?php echo $row["ID"] ?>"><i class="icon-CLOSE "></i></span>
            <span class="btnControl btnControlConfirm hidden" data-testidsector=<?php echo $row["ID"] ?> id="confirm-Sector-<?php echo $row["ID"] ?>"><i class="icon-CHECK "></i></span>
        </td>
    </tr>

    <script>
        $(`#delete-Sector-<?php echo $row["ID"] ?>`).off("click").on('click', deleteSector)
        $(`#cancel-Sector-<?php echo $row["ID"] ?>`).off("click").on('click', cancelDeletionSector)
        $(`#confirm-Sector-<?php echo $row["ID"] ?>`).off("click").on('click', confirmDeletionSector)
        $(`#save-Sector-<?php echo $row["ID"] ?>`).off("click").on('click', saveUpdateSector)
        $(`#DepartementSector-<?php echo $row["ID"] ?>`).off("click").on('click', editResultSector)
        $(`#SectorSector-<?php echo $row["ID"] ?>`).off("click").on('click', editResultSector)
    </script>

<?php
endforeach;
?>