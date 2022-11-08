<?php
// include("./connectDb.php");
// $query = "select * from admins";
// $resultMoyens = mysqli_query($connect, $query);
// foreach ($resultMoyens as $row) :
//     if ($row['Login'] === $_POST['login'] and $row['Password'] === $_POST['password']) {
//         print "succes";
//         break;
//     }
// endforeach;


include("./connectDb.php");

$query = "select * from admins";
$resultMoyens = mysqli_query($connect, $query);


foreach ($resultMoyens as $row) :

    if ($row['Login'] === $_POST['login'] and password_verify($_POST['password'], $row['Password'])) {
        print "succes";
        // print($_GET['password'] . "        " . $row['Password']);
        break;
    }
endforeach;

// $passwordAdmin = password_hash("admin", PASSWORD_DEFAULT);
// $query = "insert into admins (ID,Login ,Password) values(
//     null, 'this', '$passwordAdmin')";

// if (mysqli_query($connect, $query)) {
//     echo 'success';
// } else
//     echo mysqli_error($connect);
