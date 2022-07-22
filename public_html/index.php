<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bataille tour par tour</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="./asset/css/style.css">
</head>
<body>
    <?php

// use function PHPSTORM_META\type;

        include_once './settings/db.php';
        include_once './objects/heros.php';
        include_once './objects/player.php';
        include_once './objects/Manager.php';

        // database initialization with seed values
        $manager = new manager($db);
        $manager->createTable();

        // recovery of values ​​for the initialization of the game
        $heros = $manager->read('heros');
        $jsonHeros = json_encode($heros);
        file_put_contents('./asset/json/heros.json', $jsonHeros);
        $vehicule = $manager->read('vehicule');
        $jsonVehicule = json_encode($vehicule);
        file_put_contents('./asset/json/vehicule.json', $jsonVehicule);
        $player = $manager->read('player');
        $jsonPlayer = json_encode($player);
        file_put_contents('./asset/json/player.json', $jsonPlayer);

        // $joueurOne = new player(0, 'tatas', 0);

        // $manager = new manager($db);
        // $manager -> create($joueurOne);
        // $manager -> read($joueurOne); 
        
        // while(($heros[0]['life'] >0) and ($heros[1]['life'] > 0))
        // {
        //     $heros[0]['life'] = $heros[0]['life']-random_int(0,$heros[0]['attack']);
            
        //     $heros[1]['life'] = $heros[1]['life']-random_int(0,$heros[1]['attack']);
        // }
        ?>
    <div class="container">
        <div class="row">
            <div class="col-4 teamOne">
                <form action="combat.php" method="POST" name="valide">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control player" id="player" value="" name="player" placeholder="Nom de joueur">
                        <label for="player">New Joueur</label>
                    </div>

                    <!-- select joueur déjà existant --> 
                    <div class="displayHeroSelect">
                        <div class="form-group">
                            <label for="heros" class="form-label mt-4">Choisi t'on héros</label>
                            <select class="form-select" id="selectHeros" name="selectHero">
                                <?php
                                foreach($heros as $value)
                                {
                                    ?>
                                        <option class="nameHero" value="<?php echo $value['id']; ?>">
                                            <?php echo $value['name_hero']; ?>
                                        </option>
                                    <?php
                                    }
                                    ?>
                            </select>
                        </div>
                    </div>
                    <div class="displayStatImageAboutHero">
                        <div>
                            <p>
                                Stats of this character :
                            </p>
                            <p id="life">
                                Life : <?php echo $heros[0]['life']; ?>
                            </p>
                            <p id="attack">
                                Attack : <?php echo $heros[0]['attack']; ?>
                            </p>
                            <p id="defence">
                                Defence : <?php echo $heros[0]['def']; ?>
                            </p>
                        </div>
                        <div>
                            <?php echo '<img id="heroImg" src="./images/Chara/'.$heros[0]['img'].'" alt="hulk">'; ?>
                        </div>
                    </div>
                    <div class="selectPlayerOnTeam">
                        <div>
                            <label for="teamOneNumber">Team One</label>
                            <select class="form-select" name="teamOneNumber" id="teamOneNumber">
                                <option value="1" selected>1</option>
                                <option value="2" >2</option>
                                <option value="3" >3</option>
                                <option value="4" >4</option>
                                <option value="5" >5</option>
                            </select>
                        </div>
                        <div>
                            <label for="teamOneNumber">Team Two</label>
                            <select class="form-select" name="teamTwoNumber" id="teamTwoNumber">
                                <option value="1" selected>1</option>
                                <option value="2" >2</option>
                                <option value="3" >3</option>
                                <option value="4" >4</option>
                                <option value="5" >5</option>
                            </select>
                        </div>
                    </div>
            </div>
            <div class="col-4 center" id="center">
                <button type="submit" class="btn btn-primary">Lunch</button>
            </div>
            <div class="col-4 teamTwo">
                <label for="vehicule" class="form-label mt-4">Choisi t'on vehicule</label>
                <select class="form-select" id="selectVehicule" name="selectVehicule">
                    <?php
                    foreach($vehicule as $value)
                    {
                    ?>
                        <option class="nameVehicule" value="<?php echo $value['id']; ?>">
                            <?php echo $value['name_vehicule']; ?>
                        </option>
                    <?php
                    }
                    ?>
                </select>
                
                <div class="imgVaisseau">
                    <?php echo '<img id="vehiculeImg" src="./images/Spaceship/'.$vehicule[0]['img'].'" alt="vehicule">'; ?>
                </div>
                <div>
                    <p>
                        Stats of this character :
                    </p>
                    <p id="defVehicule">
                        defence : <?php echo $vehicule[0]['def']; ?>
                    </p>
                </div>
            </div>
                    </form>
        </div>
    </div>
    <script type="text/javascript" src="./asset/js/function.js"></script>
    <script type="text/javascript" src="./asset/js/scrypt.js"></script>
</body>
</html>