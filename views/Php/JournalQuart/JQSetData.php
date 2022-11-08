<?php
include("../../../php/connectDb.php"); // $connect = new PDO("mysql:host=localhost; dbname=testing", "root", "");

//Collect Data
$date = mysqli_real_escape_string($connect, $_GET["date"]);
$dataGlobal = mysqli_real_escape_string($connect, $_GET["dataGlobal"]);
$events = mysqli_real_escape_string($connect, $_GET["events"]);

//Process Data
$dataGlobal = explode("!*!", $dataGlobal);
$events = explode("!;!", $events);

// Insert Data 
$queryDelete = "delete from journaldequart WHERE DATE = '${date}'";
mysqli_query($connect, $queryDelete);
$queryInsert =
    "insert into journaldequart (DATE, OFP, OFR, OFG, TECH, Q1, Q2, Q3, Q4, Q5, Q6) VALUES 
    ('$date', '$dataGlobal[0]','$dataGlobal[1]','$dataGlobal[2]', '$dataGlobal[3]','$dataGlobal[4]',
     '$dataGlobal[5]', '$dataGlobal[6]', '$dataGlobal[7]', '$dataGlobal[8]', '$dataGlobal[9]')
";
$testIsertData = mysqli_query($connect, $queryInsert);

//Insert Events
if ($testIsertData) {
    $queryInsertDelete = "delete from eventsjq WHERE dateJQ = '${date}'";
    mysqli_query($connect, $queryInsertDelete);

    mysqli_query($connect, "ALTER TABLE eventsjq AUTO_INCREMENT = 1;");
    $flag = true;
    if ($events[0] != "")
        for ($i = 0; $i < count($events); $i++) {
            // echo (' ******************' . $events[$i]);

            $valueArr = explode("!,;", $events[$i]);
            $queryInsert2 = " insert into eventsjq (ID, Quart, Date, Heure,description, dateJQ) VALUES (null, '$valueArr[0]', '$valueArr[1]', '$valueArr[2]','$valueArr[3]', '$date');";
            $test3 = mysqli_query($connect, $queryInsert2);
            if (!$test3) {
                $flag = false;
                echo 'error test3';
                echo mysqli_error($connect);
                break;
            }
        }
} else {
    echo 'error test 2';
    echo mysqli_error($connect);
}


if ($flag)
    echo ("success");
