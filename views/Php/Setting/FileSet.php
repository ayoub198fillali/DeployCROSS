<?php

$targetfolder = "../../../DATA/" . $_POST["FileGrp"] . "/";
if (!file_exists($targetfolder)) {
    mkdir($targetfolder, 0777, true);
}

$targetfolder = $targetfolder . basename($_FILES['file']['name']);

if (move_uploaded_file($_FILES['file']['tmp_name'], $targetfolder)) {
} else {

    echo "Problem uploading file";
}
