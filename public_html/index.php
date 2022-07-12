<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bataille tour par tour</title>
</head>
<body>
    <?php
        include_once './settings/db.php';
        include_once './objects/heros.php';
        include_once './objects/player.php';
        include_once './objects/Manager.php';

        $manager = new manager($db);
        $manager->createTable();
        //$manager -> initHeros();
        $player = new player('steeven', 0);
        $player = new manager($db);
        $player -> create($player);
    ?>
</body>
</html>