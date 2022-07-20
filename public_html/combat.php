<?php
include_once './objects/player.php';
include_once './objects/Manager.php';
include_once './settings/db.php';

echo 'coucou';

print_r($_POST);
?>
<input type="hidden" value="<?php echo $_POST['player'] ?>" id="player">

<?php
//traitement des données     
$playerOne = new player($namePlayer = $_POST['player'], $level = 0 , $hero_id=$_POST['selectHero'], $vehicule_id=$_POST['selectVehicule']);
$manager = new manager($db);
$manager = $manager -> create($playerOne);

$manager = new manager($db);
$player = $manager->read('player');
$jsonPlayer = json_encode($player);
file_put_contents('./asset/json/player.json', $jsonPlayer);


// script combat
echo '<script type="text/javascript" src="./asset/combat.js"></script>';