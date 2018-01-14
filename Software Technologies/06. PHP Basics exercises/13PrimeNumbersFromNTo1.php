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
if(isset($_GET['num'])){
    $num = intval($_GET['num']);
    for($i = $num; $i>=1; $i--){
        $sum = 0;
        for ($j = 1; $j<=$i; $j++){
            if ($i%$j==0){
                $sum++;
            }
        }
        if ($sum<=2){
            echo "$i ";
        }
    };
}
?>
</body>
</html>