// Variables
// const heroImg = document.getElementById("heroImg");
// const vehiculeImg = document.getElementById("vehiculeImg");
const requestURLHeros = './asset/json/heros.json';
const requestURLPlayer = './asset/json/player.json';
const requestURLVehicule = './asset/json/vehicule.json';
const slot = document.querySelectorAll(".slot");
const imgVaisseauTeamOne = document.getElementById("vaisseauOne");
const imgVaisseauTeamTwo = document.getElementById("vaisseauTwo");
const battleDetails = document.getElementById('battleDetails');
const startFight = document.getElementById('startFight');
const imgVictoryTeamOne = document.getElementById('imgVictoryTeamOne');
const imgVictoryTeamTwo = document.getElementById('imgVictoryTeamTwo');
let attack;
let def;
let defVehicule;
let teamOne = [];
let teamTwo = [];


// recupereration des donées du perso choisi
let myRequestPlayer = new Request(requestURLPlayer);       
    
fetch(myRequestPlayer)
.then(function(response) {
    if(response.ok) {
        response.json().then(function(responseThen) {   
            let valueHero;
            
            responseThen.forEach (function(value) {
                if (value['name_player'] == affiche("player")){
                    valueHero = [value['hero_id'], value['level']];
                    return valueHero;
                }
            });


            // get vehicule from player and enable this 
            let myRequestVehicule = new Request(requestURLVehicule);
            
            fetch(myRequestVehicule)
            .then(function(response) {
                if(response.ok) {
                    response.json().then(function(responseThen) {   

                        responseThen.forEach (function(value) {
                            console.log('forech vehicule');
                            if (value['id'] ==  affiche("selectVehicule")){
                                imgVaisseauTeamOne.src = './images/Spaceship/' + value['img'];
                            } else {
                                imgVaisseauTeamTwo.src = './images/Spaceship/' + value['img'];
                            }
                        });
                    });
                } else {
                    console.log('Mauvaise réponse du réseau');
                }
            })
            .catch(function(error) {
            console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
            });
           

            // recupereration des données du perso team
            let myRequestHeros = new Request(requestURLHeros);   

            fetch(myRequestHeros)
            .then(function(response) {
                if(response.ok) {
                    response.json().then(function(responseThen) {   
                        
                        // variables get size of teams 
                        let maxPlayerTeamOne = affiche("teamOneNumber"); // nombre de player choisir pour la team 1 
                        let maxPlayerTeamTwo = affiche("teamTwoNumber"); // nombre de player choisir pour la team 2
                        // variables counter
                        let a = 0;
                        let b = 0;
                        let c = 0;
                        let d = 5;

                        //création des deux équipes
                        responseThen.forEach (function(value) {
                            if (value['id'] == valueHero[0]){
                                teamOne.push(
                                    {
                                    'id':value['id'],
                                    'name_hero':value['name_hero'],
                                    'life':value['life'],
                                    'attack':value['attack'],
                                    'def':value['def'],
                                    'img':value['img'],
                                    'img_attack':value['img_attack'],
                                    'img_crit':value['img_crit']
                                    });

                                    slot[c].src = './images/Chara/' + value['img'];
                                    console.log(slot[c]);
                                    b++;
                                    c++;
                                return teamOne;
                            }
                        });

                        responseThen.forEach (function(value) {
                            
                            // integration dans la teamOne du player choisi ou créé
                            if (value['id'] == valueHero[0]){
                                console.log('je suis le perso choisi mais je suis déjà dans le tableau');
                            } else {
                                // integration des autres players ou héros
                                if (a < maxPlayerTeamTwo){
                                    teamTwo.push(
                                        {
                                        'id':value['id'],
                                        'name_hero':value['name_hero'],
                                        'life':value['life'],
                                        'attack':value['attack'],
                                        'def':value['def'],
                                        'img':value['img'],
                                        'img_attack':value['img_attack'],
                                        'img_crit':value['img_crit']
                                    });
                                        slot[d].src = './images/Chara/' + value['img'];
                                        console.log(slot[d]);
                                        a++;
                                        d++;
                                    return teamTwo;
                                } else if(b < maxPlayerTeamOne){
                                    teamOne.push(
                                        {
                                        'id':value['id'],
                                        'name_hero':value['name_hero'],
                                        'life':value['life'],
                                        'attack':value['attack'],
                                        'def':value['def'],
                                        'img':value['img'],
                                        'img_attack':value['img_attack'],
                                        'img_crit':value['img_crit']
                                        });
                                        slot[c].src = './images/Chara/' + value['img'];
                                        console.log(slot[c]);
                                        b++;
                                        c++;
                                    return teamOne;
                                }
                            }
                        });
                        

                        console.log(teamOne);
                        console.log(teamTwo);

                        startFight.addEventListener('click', function(){
                            fight();
                        });
                       
                    });
                } else {
                    console.log('Mauvaise réponse du réseau');
                }
            })
            .catch(function(error) {
            console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
            });
        });
    } else {
        console.log('Mauvaise réponse du réseau');
    }
})
.catch(function(error) {
console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
});

  
    

 
    //const index = optionVehicule.selectedIndex; 


