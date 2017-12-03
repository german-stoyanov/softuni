<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>

</head>
<body>
<form>
    N: <input type="text" name="num1" />
    M: <input type="text" name="num2" />
    <input type="submit" />
</form>
<ul>
    <?php
    if (isset($_GET['num1'])&&isset($_GET['num2'])){
        echo "<ul>";
        for ($i = 1; $i<=$_GET['num1']; $i++){

            echo "<li>List $i";
            echo "<ul>";
            for ($j = 1; $j<=$_GET['num2']; $j++){
                echo "<li>Element $i.$j";
                echo "</li>";
            };
            echo "</ul>";
            echo "</li>";


        };
        echo "</ul>";
    };
    ?>
</ul>
</body>
</html>