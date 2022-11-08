<!-- OK Le 28/05/2022   -->
<!-- FILE Charged By Updating Data Base Called By GETSorties(XMLHttpRequest) -->

<?php
include("../../../php/connectDb.php");

$query = "select * from navires";
$resultMoyens = mysqli_query($connect, $query);

foreach ($resultMoyens as $row) :
?>
    <tr id="Navire-<?php echo $row["ID"] ?>" Style="cursor:pointer" class=" active-row">
        <td> <?php echo $row["Nom"] ?> </td>
        <td> <?php echo $row["Type"] ?> </td>
        <td> <?php echo $row["Pavillon"] ?> </td>
        <td> <?php echo $row["CS"] ?> </td>
        <td> <?php echo $row["MMSI"] ?> </td>

        <td> <?php echo $row["OMI"] ?> </td>
        <td> <?php echo $row["Longueur"] ?> </td>
        <td> <?php echo $row["JaugeBrut"] ?> </td>
        <td> <?php echo $row["NombreEquipage"] ?> </td>
        <td> <?php echo $row["TE"] ?> </td>
    </tr>

    <script>
        $(`#Navire-<?php echo $row["ID"] ?>`).off("click").on('click', copyDataNavireSurnav)
    </script>

<?php
endforeach;
?>