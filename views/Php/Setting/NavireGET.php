<!-- OK Le 28/05/2022   -->
<!-- FILE Charged By Updating Data Base Called By GETSorties(XMLHttpRequest) -->



<?php
include("../../../php/connectDb.php");

$query = "select * from navires";
$resultMoyens = mysqli_query($connect, $query);

foreach ($resultMoyens as $row) :
?>
    <tr id="Navire-<?php echo $row["ID"] ?>" Style="cursor:pointer" class=" active-row">

        <td data-testidnavire=<?php echo $row["ID"] ?> id="NomNavire-<?php echo $row["ID"] ?>"><?php echo $row["Nom"] ?></td>
        <td data-testidnavire=<?php echo $row["ID"] ?> id="TypeNavire-<?php echo $row["ID"] ?>"><?php echo $row["Type"] ?></td>
        <td data-testidnavire=<?php echo $row["ID"] ?> id="PavillonNavire-<?php echo $row["ID"] ?>"><?php echo $row["Pavillon"] ?></td>
        <td data-testidnavire=<?php echo $row["ID"] ?> id="CSNavire-<?php echo $row["ID"] ?>"><?php echo $row["CS"] ?></td>
        <td data-testidnavire=<?php echo $row["ID"] ?> id="MMSINavire-<?php echo $row["ID"] ?>"><?php echo $row["MMSI"] ?></td>
        <td data-testidnavire=<?php echo $row["ID"] ?> id="OMINavire-<?php echo $row["ID"] ?>"><?php echo $row["OMI"] ?></td>
        <td data-testidnavire=<?php echo $row["ID"] ?> id="LongueurNavire-<?php echo $row["ID"] ?>"><?php echo $row["Longueur"] ?></td>
        <td data-testidnavire=<?php echo $row["ID"] ?> id="JaugeBrutNavire-<?php echo $row["ID"] ?>"><?php echo $row["JaugeBrut"] ?></td>
        <td data-testidnavire=<?php echo $row["ID"] ?> id="NombreEquipageNavire-<?php echo $row["ID"] ?>"><?php echo $row["NombreEquipage"] ?></td>
        <td data-testidnavire=<?php echo $row["ID"] ?> id="TENavire-<?php echo $row["ID"] ?>"><?php echo $row["TE"] ?></td>

        <td class="controleTd">
            <span class="btnControl btnControlDelete" data-testidnavire=<?php echo $row["ID"] ?> id="delete-Navire-<?php echo $row["ID"] ?>"><i class="icon-TRASH "></i></span>
            <span class="btnControl btnControlSave disabled" data-testidnavire=<?php echo $row["ID"] ?> id="save-Navire-<?php echo $row["ID"] ?>"><i class="icon-SAVE "></i></span>
            <span class="btnControl btnControlCancel hidden" data-testidnavire=<?php echo $row["ID"] ?> id="cancel-Navire-<?php echo $row["ID"] ?>"><i class="icon-CLOSE "></i></span>
            <span class="btnControl btnControlConfirm hidden" data-testidnavire=<?php echo $row["ID"] ?> id="confirm-Navire-<?php echo $row["ID"] ?>"><i class="icon-CHECK "></i></span>
        </td>
    </tr>

    <script>
        $(`#delete-Navire-<?php echo $row["ID"] ?>`).off("click").on('click', deleteNavire)
        $(`#cancel-Navire-<?php echo $row["ID"] ?>`).off("click").on('click', cancelDeletionNavire)
        $(`#confirm-Navire-<?php echo $row["ID"] ?>`).off("click").on('click', confirmDeletionNavire)
        $(`#save-Navire-<?php echo $row["ID"] ?>`).off("click").on('click', saveUpdateNavire)

        $(`#NomNavire-<?php echo $row["ID"] ?>`).off("click").on('click', editResultNavire)
        $(`#TypeNavire-<?php echo $row["ID"] ?>`).off("click").on('click', editResultNavire)
        $(`#PavillonNavire-<?php echo $row["ID"] ?>`).off("click").on('click', editResultNavire)
        $(`#CSNavire-<?php echo $row["ID"] ?>`).off("click").on('click', editResultNavire)
        $(`#MMSINavire-<?php echo $row["ID"] ?>`).off("click").on('click', editResultNavire)
        $(`#OMINavire-<?php echo $row["ID"] ?>`).off("click").on('click', editResultNavire)
        $(`#LongueurNavire-<?php echo $row["ID"] ?>`).off("click").on('click', editResultNavire)
        $(`#JaugeBrutNavire-<?php echo $row["ID"] ?>`).off("click").on('click', editResultNavire)
        $(`#NombreEquipageNavire-<?php echo $row["ID"] ?>`).off("click").on('click', editResultNavire)
        $(`#TENavire-<?php echo $row["ID"] ?>`).off("click").on('click', editResultNavire)
    </script>

<?php
endforeach;
?>