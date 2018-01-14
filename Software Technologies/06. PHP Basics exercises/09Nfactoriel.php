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
$sum = 1;
if(isset($_GET['num'])){
    for($i = 1; $i<=$_GET['num']; $i++){
       $sum*=$i;
    };
    echo $sum;
}
?>
</body>
</html>