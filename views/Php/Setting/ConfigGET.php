<!-- OK Le 28/05/2022   -->
<!-- FILE Charged By Updating Data Base Called By GETSorties(XMLHttpRequest) -->



<?php
include("../../../php/connectDb.php");

$query = "select * from config";
$resultMoyens = mysqli_query($connect, $query);
foreach ($resultMoyens as $row) :
?>

    <div class="input-field cl3">
        <label for="<?php echo $row["confKey"] ?>"><?php echo $row["description"] ?></label>
        <input id="<?php echo $row["confKey"] ?>" class="colorInput" type="color" value="<?php echo $row["confValue"] ?>" />
    </div>

<?php

endforeach;

?>



<div style="align-items: end;  width:590px;  flex-direction: row;" class="input-field" cl2>

    <label style="display: inline-block; visibility:hidden">Pour Ajouter :</label>
    <button id="CONFinitColor" type="button" style="transform:translateX(100px) ;display: inline-block;  width:100px; height:42px; margin:8px">
        <span class="btnText">Init</span>
    </button>

    <label style="display: inline-block; visibility:hidden">Pour Ajouter :</label>
    <button id="CONFresetColor" type="button" style="transform:translateX(50px) ;display: inline-block;  width:100px; height:42px; margin:8px">
        <span class="btnText">Reset</span>
    </button>

    <label style="display: inline-block;  visibility:hidden">Pour Ajouter :</label>
    <button type="submit" style="display: inline-block; width:100px; height:42px; margin:8px">
        <span class="btnText">Apply</span>
    </button>
</div>