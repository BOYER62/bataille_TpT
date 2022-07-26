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
<input type="hidden" value="<?php echo $_POST['selectVehicule'] ?>" id="selectVehicule">


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
            <img class="slot slot1" src="">
            <img class="slot slot2" src="">
            <img class="slot slot3" src="">
            <img class="slot slot4" src="">
            <img class="slot slot5" src="">
        </div>
        <div id="imgVaisseauTeamOne" class="imgVaisseauTeamOne reverse"><img id="vaisseauOne" src="" alt=""></div>
        <div class="imgVictoryTeamOne hidden" id="imgVictoryTeamOne">
        </div>
    </div>
    
    
    <div class="teamTwo">
        <div class="slots">
            <img class="slot slot6 reverse" src="">
            <img class="slot slot7 reverse" src="">
            <img class="slot slot8 reverse" src="">
            <img class="slot slot9 reverse" src="">
            <img class="slot slot10 reverse" src="">
        </div>
        <div id="imgVaisseauTeamTwo" class="imgVaisseauTeamTwo"><img id="vaisseauTwo" src="" alt=""></div> 
        <div class="imgVictoryTeamTwo hidden" id="imgVictoryTeamTwo" >
        </div>
    </div>
</div>
<button id="returnHome" class="returnHome hidden"><img src="./images/misc/returnHome.gif" alt="return Home"></button>
<audio controls src="./media/fightOne.mp3" id="soundBattleOne" class="hidden"></audio>
<audio controls src="./media/fightTwo.mp3" id="soundBattleTwo" class="hidden"></audio>
<audio controls src="./media/victory.mp3" id="soundVictory" class="hidden"></audio>
<audio controls src="./media/returnHome.mp3" id="soundhealing" class="hidden"></audio>
<audio controls src="./media/death.mp3" id="soundDeath" class="hidden"></audio>
<button id="startFight"><img src="./images/misc/attack-icon-18.jpg" alt="startFight"></button>
<div class="battleDetails" id="battleDetails">
    <!--text deroulement-->
</div>




<script type="text/javascript" src="./asset/js/function.js"></script>
<script type="text/javascript" src="./asset/js/combat.js"></script>
</body>
</html>