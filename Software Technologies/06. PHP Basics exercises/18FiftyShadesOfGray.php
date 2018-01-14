<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>
    <style>
        div {
            display: inline-block;
            margin: 5px;
            width: 20px;
            height: 20px;
        }
    </style>
</head>
<body>

<?php
$currentGray = 0;
for ($row = 1; $row <=5; $row++, $currentGray++){
    for ($col = 1; $col <= 10; $col++){
        echo "<div style=\"background-color: rgb($currentGray, $currentGray, $currentGray)\"></div>";
        $currentGray+=5;
    }
    echo "<br>";
}
?>

</body>
</html>