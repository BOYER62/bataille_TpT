<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bataille tour par tour</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="./asset/style.css">
</head>
<body>
    <?php

use function PHPSTORM_META\type;

        include_once './settings/db.php';
        include_once './objects/heros.php';
        include_once './objects/player.php';
        include_once './objects/Manager.php';

        // database initialization with seed values
        $manager = new manager($db);
        $manager->createTable();

        // recovery of values ​​for the initialization of the game
        $heros = $manager->read('heros');
        $vehicule = $manager->read('vehicule');
        $player = $manager->read('player');

        $joueurOne = new player(100,'toto', 0);

        // ----------------------------------ne fonctionne pas
        $manager = new manager($db);
        $manager -> create($joueurOne);
        $manager -> read($joueurOne); 
        echo $heros[0]['life'].' heros 1 </br>'.$heros[1]['life'].' hero 2';
        while(($heros[0]['life'] >0) and ($heros[1]['life'] > 0))
        {
            $heros[0]['life'] = $heros[0]['life']-random_int(0,$heros[0]['attack']);
            print_r('hero 1 : '.$heros[0]['life']);
            echo '</br>';
            $heros[1]['life'] = $heros[1]['life']-random_int(0,$heros[1]['attack']);
            print_r('hero 2 : '.$heros[1]['life']);
            echo '</br>';

        }
        // ----------------------------------voir demain
        ?>
    <div class="container">
        <div class="row">
            <div class="col-4 teamOne">
                <form action="" method="$_GET">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="player" placeholder="Nom de joueur">
                        <label for="player">Joueur</label>
                    </div>
                    <div class="form-group">
                        <label for="heros" class="form-label mt-4">Choisi t'on héros</label>
                        <select class="form-select" id="selectHeros">
                            <?php
                            foreach($heros as $value)
                            {
                                    ?>
                                    <option>
                                        <?php echo $value['name_heros']; ?>
                                    </option>
                                <?php
                                }
                            ?>
                        </select>
                    </div>
                    <div>
                        <?php echo '<img src="./images/'.$heros[0]['img'].'" alt="hulk">'; ?>
                    </div>
                </form>
            </div>
            <div class="col-4"></div>
            <div class="col-4 teamTwo">

            </div>
        </div>
    </div>
</body>
</html>