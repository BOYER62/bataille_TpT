
// select option hero for select on home link on eventListener
function hero(){
    let myRequest = new Request(requestURLHeros);       
    
    fetch(myRequest)
    .then(function(response) {
        if(response.ok) {
            response.json().then(function(responseThen) {
            
                const index = optionHero.selectedIndex;
                console.log(index);
                const jsonHero = responseThen;
                heroImg.src=`../images/Chara/${jsonHero[index]['img']}`;
                life.innerHTML = `life : ${jsonHero[index]['life']}`;
                attack.innerHTML = `attack : ${jsonHero[index]['attack']}`;
                def.innerHTML = `defence : ${jsonHero[index]['def']}`;
            
                console.log(responseThen);    
            });
        } else {
            console.log('Mauvaise réponse du réseau');
        }
    })
    .catch(function(error) {
      console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
    });
}       

function vehicule(){
    let myRequest = new Request(requestURLVehicule);       
    
    fetch(myRequest)
    .then(function(response) {
        if(response.ok) {
            response.json().then(function(responseThen) {
            
                const index = optionVehicule.selectedIndex;
                const jsonVehicule = responseThen;
                vehiculeImg.src=`../images/Spaceship/${jsonVehicule[index]['img']}`;
                def.innerHTML = `defence : ${jsonVehicule[index]['def']}`;
                console.log(responseThen);    
            });
        } else {
            console.log('Mauvaise réponse du réseau');
        }
    })
    .catch(function(error) {
      console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
    });
}

// recupère la value d'un élément
function affiche(param){
    param = document.getElementById(param).value;
    console.log(param);
    return param; 
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
// function randomise 
function getRandomInt(max) {
    result = (Math.floor(Math.random() * max)); 
    // console.log(result);
    return result;
}

// sleep for animations
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function filterByLife(obj) {
    console.log(obj.life);
    // Si c'est un nombre
    if (obj.life > 0 ) {
    return true;
    } else {
        teamOne.forEach(function(value) {
            if (obj.name_hero == value['name_hero']){
                
                console.log(obj.name_hero +' est mort');

                let slotTeamOne = teamOne.length - 1;
                if (teamOne.length != 0) {       
                    slot[slotTeamOne].src = '';
                } else{
                    console.log('Team one Perdu donc la team Two a gagné');
                    imgVictoryTeamTwo.classList.remove('hidden');
                }
            }
        });
        teamTwo.forEach(function(value){
            if (obj.name_hero == value['name_hero']){

                console.log(obj.name_hero +' est mort');

                let slotTeamTwo = teamTwo.length + 4;
                console.log(slotTeamTwo);
                if (teamTwo.length != 0) { 
                slot[slotTeamTwo].src = '';
                } else {
                    console.log('team Two lose donc la team One a gagné');
                    imgVictoryTeamOne.classList.remove('hidden');
                }
            }
        });
    return false;
    }
}


 // lancement du combat
 async function fight(){
                                            
    if (getRandomInt(1) == 0){
        while (teamOne.length != 0 && teamTwo.length != 0){

            await sleep(500);

            let testIdTeamOne = getRandomInt(teamOne.length);
            let testIdTeamTwo = getRandomInt(teamTwo.length);

            let attackTeamOne = getRandomInt(teamOne[testIdTeamOne]['attack']);
            let attackTeamTwo = getRandomInt(teamTwo[testIdTeamTwo]['attack']);

            // joueur 2 attack
            teamOne[testIdTeamOne]['life'] = teamOne[testIdTeamOne]['life'] - attackTeamTwo;

            battleDetails.innerHTML += '<div class="fight">' + teamTwo[testIdTeamTwo]['name_hero'] + ' attack de ' + attackTeamTwo + ' sur ' + teamOne[testIdTeamOne]['name_hero'] + ' il lui reste ' + teamOne[testIdTeamOne]['life'] + '</div>';

            // remplace l'img du hero qui attack par le gif attack pendant 2 sec 

            slot[testIdTeamTwo + 5].src = './images/Chara/attack/' + teamTwo[testIdTeamTwo]['img_attack'];
            
            await sleep(500);

            slot[testIdTeamTwo + 5].src = './images/Chara/' + teamTwo[testIdTeamTwo]['img'] ;

        // console.log(teamTwo[testIdTeamTwo]['name_hero'] + ' attack de ' + attackTeamTwo + ' sur ' + teamOne[testIdTeamOne]['name_hero'] + ' il lui reste ' + teamOne[testIdTeamOne]['life'] );

            //joueur 1 attack
            teamTwo[testIdTeamTwo]['life'] = teamTwo[testIdTeamTwo]['life'] - attackTeamOne;

            battleDetails.innerHTML += '<div class="fight">' + teamOne[testIdTeamOne]['name_hero'] + ' attack de ' + attackTeamOne + ' sur ' + teamTwo[testIdTeamTwo]['name_hero'] + ' il lui reste ' + teamTwo[testIdTeamTwo]['life'] + '</div>';

            slot[testIdTeamOne].src = './images/Chara/attack/' + teamOne[testIdTeamOne]['img_attack'];
            
            await sleep(500);

            slot[testIdTeamOne].src = './images/Chara/' + teamOne[testIdTeamOne]['img'] ;

            // console.log(teamOne[testIdTeamOne]['name_hero'] + ' attack de ' + attackTeamOne + ' sur ' + teamTwo[testIdTeamTwo]['name_hero'] + ' il lui reste ' + teamTwo[testIdTeamTwo]['life'] );

  
            teamOne = teamOne.filter(filterByLife);      
            console.log('Tableau teamOne filtré', teamOne);

            teamTwo = teamTwo.filter(filterByLife);      
            console.log('Tableau teamTwo filtré', teamTwo); 

        }
    } else {
        console.log('else');

        while (teamOne.length != 0 && teamTwo.length != 0){

            await sleep(500);

            let testIdTeamOne = getRandomInt(teamOne.length);
            let testIdTeamTwo = getRandomInt(teamTwo.length);

            let attackTeamOne = getRandomInt(teamOne[testIdTeamOne]['attack']);
            let attackTeamTwo = getRandomInt(teamTwo[testIdTeamTwo]['attack']);

            //joueur 1 attack
            teamTwo[testIdTeamTwo]['life'] = teamTwo[testIdTeamTwo]['life'] - attackTeamOne;

            battleDetails.innerHTML += '<div class="fight">' + teamOne[testIdTeamOne]['name_hero'] + ' attack de ' + attackTeamOne + ' sur ' + teamTwo[testIdTeamTwo]['name_hero'] + ' il lui reste ' + teamTwo[testIdTeamTwo]['life'] + '</div>';

            slot[testIdTeamOne].src = './images/Chara/attack/' + teamOne[testIdTeamOne]['img_attack'];
            
            await sleep(500);

            slot[testIdTeamOne].src = './images/Chara/' + teamOne[testIdTeamOne]['img'] ;

            // console.log(teamOne[testIdTeamOne]['name_hero'] + ' attack de ' + attackTeamOne + ' sur ' + teamTwo[testIdTeamTwo]['name_hero'] + ' il lui reste ' + teamTwo[testIdTeamTwo]['life'] );

            // joueur 2 attack
            teamOne[testIdTeamOne]['life'] = teamOne[testIdTeamOne]['life'] - attackTeamTwo;

            battleDetails.innerHTML += '<div class="fight">' + teamTwo[testIdTeamTwo]['name_hero'] + ' attack de ' + attackTeamTwo + ' sur ' + teamOne[testIdTeamOne]['name_hero'] + ' il lui reste ' + teamOne[testIdTeamOne]['life'] + '</div>';

            slot[testIdTeamTwo + 5].src = './images/Chara/attack/' + teamTwo[testIdTeamTwo]['img_attack'];
            
            await sleep(500);

            slot[testIdTeamTwo + 5].src = './images/Chara/' + teamTwo[testIdTeamTwo]['img'] ;

            // console.log(teamTwo[testIdTeamTwo]['name_hero'] + ' attack de ' + attackTeamTwo + ' sur ' + teamOne[testIdTeamOne]['name_hero'] + ' il lui reste ' + teamOne[testIdTeamOne]['life'] );
            
            
            teamOne = teamOne.filter(filterByLife);      
            console.log('Tableau teamOne filtré', teamOne);

            teamTwo = teamTwo.filter(filterByLife);      
            console.log('Tableau teamTwo filtré', teamTwo);  



        }
    }
}
