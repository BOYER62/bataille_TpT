// Variables
const heroImg = document.getElementById("heroImg");
const vehiculeImg = document.getElementById("vehiculeImg");
const requestURLHeros = './asset/json/heros.json';
const requestURLPlayer = './asset/json/player.json';
const requestPlayer = new XMLHttpRequest();
const requestURLVehicule = './asset/json/vehicule.json';
const requestVehicule = new XMLHttpRequest();
let attack;
let def;
let defVehicule;




function afficher(){
    let namePlayer = document.getElementById("player").value;
    return namePlayer;
    console.log(namePlayer); 
}

// recupereration des donées des deux équipes
    requestPlayer.open('GET', requestURLPlayer);
    requestPlayer.responseType = 'json';
    requestPlayer.send();
    requestPlayer.onload = function(){
        const jsonPlayer = requestPlayer.response;
        console.log(jsonPlayer);

        let teamOne = [];
        let teamTwo = [];

        let namePlayer = document.getElementById("player").value;

        jsonPlayer.forEach (function($value) {
            if ($value['name_player'] == namePlayer){
                teamOne.push($value['id'],$value['name_player'],$value['level'],$value['hero_id'],$value['vehicule_id']);
                console.log(teamOne);
            }
        });
    }
    //const index = optionVehicule.selectedIndex; 


// recuperer le player crée avec le dernier id dans las bdd




// recuperer le perso choisi et ajouter 4 perso suivant  stocker dans un array 


// choisir les 5 autre dans un autre array 





// lancement du combat

// notes 
// check le vaisseau. Si le vaisseau et le premier alors la team opposée aura l'autre 
// gestion affichage en fonction du hero 
