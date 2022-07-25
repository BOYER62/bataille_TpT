<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bataille tour par tour</title>

    <link rel="stylesheet" href="./asset/css/combat.css">
</head>
<body>

<?php
include_once './objects/player.php';
include_once './objects/heros.php';
include_once './objects/Manager.php';
include_once './settings/db.php';


?>
<input type="hidden" value="<?php echo $_POST['player'] ?>" id="player">
<input type="hidden" value="<?php echo $_POST['teamOneNumber'] ?>" id="teamOneNumber">
<input type="hidden" value="<?php echo $_POST['teamTwoNumber'] ?>" id="teamTwoNumber">

<?php
//traitement des données     
$playerOne = new player($namePlayer = $_POST['player'], $level = 0 , $hero_id=$_POST['selectHero'], $vehicule_id=$_POST['selectVehicule']);
$manager = new manager($db);
$manager = $manager -> create($playerOne);

$manager = new manager($db);
$player = $manager->read('player');
$jsonPlayer = json_encode($player);
file_put_contents('./asset/json/player.json', $jsonPlayer);
?>

<div class="battle">
    <div class="teamOne">
        <div class="slots">
            <img class="slot slot1" src="" alt="slot1">
            <img class="slot slot2" src="" alt="slot2">
            <img class="slot slot3" src="" alt="slot3">
            <img class="slot slot4" src="" alt="slot4">
            <img class="slot slot5" src="" alt="slot5">
        </div>
        <div id="imgVaisseauTeamOne" class="imgVaisseauTeamOne"><img src="" alt=""></div>
    </div>
    
    <div class="teamTwo">
        <div class="slots">
            <img class="slot slot6 reverse" src="" alt="slot6">
            <img class="slot slot7 reverse" src="" alt="slot7">
            <img class="slot slot8 reverse" src="" alt="slot8">
            <img class="slot slot9 reverse" src="" alt="slot9">
            <img class="slot slot10 reverse" src="" alt="slot10">
        </div>
        <div id="imgVaisseauTeamTwo" class="imgVaisseauTeamTwo reverse"><img src="" alt=""></div> 
    </div>
</div>
<button><img src="./images/misc/attack-icon-18.jpg" alt="startFight"></button>
<div class="battleDetails">
    <!--text deroulement-->
</div>




<script type="text/javascript" src="./asset/js/function.js"></script>
<script type="text/javascript" src="./asset/js/combat.js"></script>
</body>
</html>