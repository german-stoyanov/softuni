<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>

</head>
<body>
<form>
    N: <input type="text" name="num" />
    <input type="submit" />
</form>
<?php
if (isset($_GET['num'])){
    $firstnum = 1;
    $secondnum = 1;
    for ($i = 1; $i<=$_GET['num']; $i++){
        if ($i<=2){
            echo "1 ";
        }
        else {
            $sum = $secondnum + $firstnum;
            $firstnum = $secondnum;
            $secondnum = $sum;
            echo "$sum ";
        }
    };

}
?>
</body>
</html>