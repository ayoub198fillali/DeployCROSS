
<?php
include("./connectDb.php");



$l = $_GET['login'];
$p = $_GET['pass'];

$passwordAdmin = password_hash($p, PASSWORD_DEFAULT);
$query = "insert into admins (ID,Login ,Password) values(
    null, '$l', '$passwordAdmin')";

if (mysqli_query($connect, $query)) {
    print($l);
    print($passwordAdmin);
    print('success');
} else
    echo mysqli_error($connect);
