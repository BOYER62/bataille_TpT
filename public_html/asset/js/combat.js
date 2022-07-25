// Variables
// const heroImg = document.getElementById("heroImg");
// const vehiculeImg = document.getElementById("vehiculeImg");
const requestURLHeros = './asset/json/heros.json';
const requestURLPlayer = './asset/json/player.json';
const requestURLVehicule = './asset/json/vehicule.json';
const slot = document.querySelectorAll(".slot");
const imgVaisseauTeamOne = document.getElementById("imgVaisseauTeamOne");
const imgVaisseauTeamTwo = document.getElementById("imgVaisseauTeamTwo");
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
                    console.log(value['vehicule_id']);

                    //recuperer id_vaiseau du player
                    imgVaisseauTeamOne.src = './images/Spaceship/' + value['vehicule_id'];
                    return valueHero;
                }
            });
           

            // recupereration des données du perso team Two
            let myRequestHeros = new Request(requestURLHeros);   

            fetch(myRequestHeros)
            .then(function(response) {
                if(response.ok) {
                    response.json().then(function(responseThen) {   
                        
                        // variables get size of teams 
                        let maxPlayerTeamOne = affiche("teamOneNumber"); // 2 est l'équivalent du nombre de player choisir pour la team 1 
                        let maxPlayerTeamTwo = affiche("teamTwoNumber"); // 2 est l'équivalent du nombre de player choisir pour la team 2
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
                                    'def':value['def']
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
                                        'def':value['def']
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
                                        'def':value['def']
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






                       


                        // lancement du combat
                        if (getRandomInt(2) == 1){
                            while (teamOne.length != 0 && teamTwo.length != 0){

                                let testIdTeamOne = getRandomInt(teamOne.length);
                                let testIdTeamTwo = getRandomInt(teamTwo.length);

                                let attackTeamOne = getRandomInt(teamOne[testIdTeamOne]['attack']);
                                let attackTeamTwo = getRandomInt(teamTwo[testIdTeamTwo]['attack']);

                                // joueur 2 attack
                                teamOne[testIdTeamOne]['life'] = teamOne[testIdTeamOne]['life'] - attackTeamTwo;
                                console.log(teamTwo[testIdTeamTwo]['name_hero'] + ' attack de ' + attackTeamTwo + ' sur ' + teamOne[testIdTeamOne]['name_hero'] + ' il lui reste ' + teamOne[testIdTeamOne]['life'] );

                                //joueur 1 attack
                                teamTwo[testIdTeamTwo]['life'] = teamTwo[testIdTeamTwo]['life'] - attackTeamOne;
                                console.log(teamOne[testIdTeamOne]['name_hero'] + ' attack de ' + attackTeamOne + ' sur ' + teamTwo[testIdTeamTwo]['name_hero'] + ' il lui reste ' + teamTwo[testIdTeamTwo]['life'] );

                                function filterByLife(obj) {
                                    console.log(obj.life);
                                    // Si c'est un nombre
                                    if (obj.life > 0 ) {
                                    return true;
                                    } else {
                                    console.log('false');
                                    return false;
                                    }
                                }
                                
                                teamOne = teamOne.filter(filterByLife);
                                console.log('Tableau teamOne filtré', teamOne);

                                teamTwo = teamTwo.filter(filterByLife);
                                console.log('Tableau teamTwo filtré', teamTwo);
                                
                            }
                        } else {
                            console.log('else');

                            while (teamOne.length != 0 && teamTwo.length != 0){

                                let testIdTeamOne = getRandomInt(teamOne.length);
                                let testIdTeamTwo = getRandomInt(teamTwo.length);

                                let attackTeamOne = getRandomInt(teamOne[testIdTeamOne]['attack']);
                                let attackTeamTwo = getRandomInt(teamTwo[testIdTeamTwo]['attack']);

                                //joueur 1 attack
                                teamTwo[testIdTeamTwo]['life'] = teamTwo[testIdTeamTwo]['life'] - attackTeamOne;
                                console.log(teamOne[testIdTeamOne]['name_hero'] + ' attack de ' + attackTeamOne + ' sur ' + teamTwo[testIdTeamTwo]['name_hero'] + ' il lui reste ' + teamTwo[testIdTeamTwo]['life'] );
                                // joueur 2 attack
                                teamOne[testIdTeamOne]['life'] = teamOne[testIdTeamOne]['life'] - attackTeamTwo;
                                console.log(teamTwo[testIdTeamTwo]['name_hero'] + ' attack de ' + attackTeamTwo + ' sur ' + teamOne[testIdTeamOne]['name_hero'] + ' il lui reste ' + teamOne[testIdTeamOne]['life'] );

                                function filterByLife(obj) {
                                    console.log(obj.life);
                                    // Si c'est un nombre
                                    if (obj.life > 0 ) {
                                    return true;
                                    } else {
                                    console.log('false');
                                    return false;
                                    }
                                }
                                
                                teamOne = teamOne.filter(filterByLife);      
                                console.log('Tableau teamOne filtré', teamOne);

                                teamTwo = teamTwo.filter(filterByLife);      
                                console.log('Tableau teamTwo filtré', teamTwo);  
                                
                            }
                        }
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


// notes 
// check le vaisseau. Si le vaisseau et le premier alors la team opposée aura l'autre 
// gestion affichage en fonction du hero 
