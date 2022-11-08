<!-- OK Le 28/05/2022   -->
<!-- FILE Charged By Updating Data Base Called By GETSorties(XMLHttpRequest) -->

<?php
include("../../../php/connectDb.php");

$query = "select * from sorties";
$resultMoyens = mysqli_query($connect, $query);

foreach ($resultMoyens as $row) :
?>
    <tr class="test-row-<?php echo $row["ID"] ?> active-row">
        <td class="dt-body" data-testid=<?php echo $row["ID"] ?> id="ID-<?php echo $row["ID"] ?>"> <?php echo $row["ID"] ?> </td>
        <td data-testid=<?php echo $row["ID"] ?> id="STATUE-<?php echo $row["ID"] ?>" class="status <?php if ($row["HeureSortie"] == "") echo ("on"); ?>"></td>
        <td data-testid=<?php echo $row["ID"] ?> id="Nom-<?php echo $row["ID"] ?>"><?php echo $row["Nom"] ?></td>
        <td data-testid=<?php echo $row["ID"] ?> id="SecteurEvolution-<?php echo $row["ID"] ?>"><?php echo $row["SecteurEvolution"] ?></td>
        <td data-testid=<?php echo $row["ID"] ?> id="Duree-<?php echo $row["ID"] ?>"><?php echo $row["Duree"] ?></td>
        <td data-testid=<?php echo $row["ID"] ?> id="Observations-<?php echo $row["ID"] ?>"><?php echo $row["Observations"] ?></td>
        <td data-testid=<?php echo $row["ID"] ?> id="DPT-<?php echo $row["ID"] ?>"><?php echo $row["DPT"] ?></td>
        <td data-testid=<?php echo $row["ID"] ?> id="HeureDebut-<?php echo $row["ID"] ?>"><?php echo $row["HeureDebut"] ?></td>
        <td data-testid=<?php echo $row["ID"] ?> id="HeureSortie-<?php echo $row["ID"] ?>"><?php echo $row["HeureSortie"] ?></td>
        <td class="controleTd">
            <span class="btnControl btnControlDelete" data-testid=<?php echo $row["ID"] ?> id="delete-<?php echo $row["ID"] ?>"><i class="icon-TRASH "></i></span>
            <span class="btnControl btnControlSave disabled" data-testid=<?php echo $row["ID"] ?> id="save-<?php echo $row["ID"] ?>"><i class="icon-SAVE "></i></span>
            <span class="btnControl btnControlCancel hidden" data-testid=<?php echo $row["ID"] ?> id="cancel-<?php echo $row["ID"] ?>"><i class="icon-CLOSE "></i></span>
            <span class="btnControl btnControlConfirm hidden" data-testid=<?php echo $row["ID"] ?> id="confirm-<?php echo $row["ID"] ?>"><i class="icon-CHECK "></i></span>
        </td>
        <script>
            $(`#delete-<?php echo $row["ID"] ?>`).off("click").on('click', deleteTest)
            $(`#cancel-<?php echo $row["ID"] ?>`).off("click").on('click', cancelDeletion)
            $(`#confirm-<?php echo $row["ID"] ?>`).off("click").on('click', confirmDeletion)
            $(`#save-<?php echo $row["ID"] ?>`).off("click").on('click', saveUpdate)

            // $(`#ID-<?php echo $row["ID"] ?>`).off("click").on('click', editResult)
            $(`#Nom-<?php echo $row["ID"] ?>`).off("click").on('click', editResult)
            $(`#SecteurEvolution-<?php echo $row["ID"] ?>`).off("click").on('click', editResult)
            $(`#Duree-<?php echo $row["ID"] ?>`).off("click").on('click', editResult)
            $(`#Observations-<?php echo $row["ID"] ?>`).off("click").on('click', editResult)
            $(`#DPT-<?php echo $row["ID"] ?>`).off("click").on('click', editResult)
            $(`#HeureDebut-<?php echo $row["ID"] ?>`).off("click").on('click', editResult)
            $(`#HeureSortie-<?php echo $row["ID"] ?>`).off("click").on('click', editResult)
        </script>
    </tr>

<?php
endforeach;
?>