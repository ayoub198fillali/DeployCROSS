<?php
error_reporting(0); // or @ before the request line

$host = "localhost:3306";
$user = "root";
$password = "root";
$database =  (!isset($_COOKIE['databaseFlagJs'])) ? "aienggarde" : $_COOKIE['databaseFlagJs'];


// $database = "";
// if (!isset($_COOKIE['databaseFlag'])) {
//   $database = 'aienggarde';
// } else
// $database = $_COOKIE['databaseFlag'];

$connect = mysqli_connect($host, $user, $password, $database);

if (mysqli_connect_errno()) {
  die("error 56412");
  // die("err 56412 " . mysqli_connect_error());
}
