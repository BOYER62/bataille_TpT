// Variables
const heroImg = document.getElementById("heroImg");
const vehiculeImg = document.getElementById("vehiculeImg");
const requestURLHeros = './asset/json/heros.json';
const requestURLPlayer = './asset/json/player.json';
const requestURLVehicule = './asset/json/vehicule.json';
let attack;
let def;
let defVehicule;
let teamOne = [];
let teamTwo = [];



function afficher(){
    let namePlayer = document.getElementById("player").value;
    return namePlayer;
}

// recupereration des donées du perso choisi
let myRequestPlayer = new Request(requestURLPlayer);       
    
fetch(myRequestPlayer)
.then(function(response) {
    if(response.ok) {
        response.json().then(function(responseThen) {   
            let valueHero;
            let namePlayer = document.getElementById("player").value;
        
            responseThen.forEach (function(value) {
                if (value['name_player'] == namePlayer){
                    valueHero = [value['hero_id'], value['level']];
                    return valueHero;
                }
            });
           

            // recupereration des donées du perso team Two
            let myRequestHeros = new Request(requestURLHeros);   

            fetch(myRequestHeros)
            .then(function(response) {
                if(response.ok) {
                    response.json().then(function(responseThen) {   
                
                        let i = 0;
                    // let namePlayer = document.getElementById("player").value;
                
                    responseThen.forEach (function(value) {
                        if (value['id'] != valueHero[0] && check(i) == true){
                            teamTwo.push(
                                {
                                'id':value['id'],
                                'name_hero':value['name_hero'],
                                'life':value['life'],
                                'attack':value['attack'],
                                'def':value['def']
                                });
                            i++;
                            return teamTwo;
                        }
                        if (value['id'] == valueHero[0]){
                            teamOne.push(
                                {
                                'id':value['id'],
                                'name_hero':value['name_hero'],
                                'life':value['life'],
                                'attack':value['attack'],
                                'def':value['def']
                                });
                            i++;
                            return teamOne;
                        }
                        if (check(i) == false && teamOne.length < 2) {
                            teamOne.push(
                                {
                                'id':value['id'],
                                'name_hero':value['name_hero'],
                                'life':value['life'],
                                'attack':value['attack'],
                                'def':value['def']
                                });
                            i++;
                        } else {
                            i++;
                        }
                    });

                console.log(teamOne);
                console.log(teamTwo);

        
        if (getRandomInt(2) == 1){
  
            while((teamOne[2] >0) && (teamTwo[2] > 0)){
                   
                let testId = getRandomInt(2);

                // joueur 2 attack
                teamOne[testId]['life'] = teamOne[testId]['life'] -getRandomInt(teamTwo[testId]['attack']);
                console.log(teamOne);
                //joueur 1 attack
                teamTwo[testId]['life'] = teamTwo[testId]['life'] -getRandomInt(teamOne[testId]['attack']);
                console.log(teamTwo);
            }
        } else {
            console.log('else');

         while((teamOne[2] >0) && (teamTwo[2] > 0)){


             //joueur 1 attack
             teamTwo[testId]['life'] = teamTwo[testId]['life'] -getRandomInt(teamOne[testId]['attack']);
             console.log(teamTwo);
              // joueur 2 attack
              teamOne[testId]['life'] = teamOne[testId]['life'] -getRandomInt(teamTwo[testId]['attack']);
              console.log(teamOne);

            }
        }



        // check pair or impair number
        function check(number){
            if(number%2 == 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
         // function randomise attack
         function getRandomInt(max) {
            result = (Math.floor(Math.random() * max))+1; 
            console.log(result);
            return result;
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





// recuperer le player crée avec le dernier id dans las bdd




// recuperer le perso choisi et ajouter 4 perso suivant  stocker dans un array 


// choisir les 5 autre dans un autre array 





// lancement du combat

// notes 
// check le vaisseau. Si le vaisseau et le premier alors la team opposée aura l'autre 
// gestion affichage en fonction du hero 
