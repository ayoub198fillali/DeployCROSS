<?php

$theFile = $_GET["theFile"];
if (unlink($theFile)) {
    echo "ok";
} else {
    // there was a problem deleting the file
}
