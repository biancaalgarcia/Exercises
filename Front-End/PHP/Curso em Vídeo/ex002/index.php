<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP_ROUND_HALF_DOWN</title>
</head>
<body>
    <h1>
        <?php 
            date_default_timezone_set('America/Sao_Paulo');
            echo "Hoje é dia " . date("d/M/y");
            echo " e a data é " . date("G:i:s T")
        ?>
    </h1>
</body>
</html>