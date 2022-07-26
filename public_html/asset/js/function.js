
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
                if (teamOne.length > 1) {       
                    slot[slotTeamOne].src = '';
                    soundDeath.play();
                } else{
                    slot[slotTeamOne].src = '';
                    soundDeath.play();
                    console.log('Team one Perdu donc la team Two a gagné');
                    imgVictoryTeamTwo.classList.remove('hidden');
                    soundBattleOne.pause();
                    soundBattleTwo.pause();
                    soundVictory.play();
                    returnHome.classList.remove('hidden');
                }
            }
        });
        teamTwo.forEach(function(value){
            if (obj.name_hero == value['name_hero']){

                console.log(obj.name_hero +' est mort');

                let slotTeamTwo = teamTwo.length + 4;
                console.log(slotTeamTwo);
                if (teamTwo.length > 1) { 
                slot[slotTeamTwo].src = '';
                soundDeath.play();
                } else {
                    slot[slotTeamTwo].src = '';
                    soundDeath.play();
                    console.log('team Two lose donc la team One a gagné');
                    imgVictoryTeamOne.classList.remove('hidden');
                    soundBattleOne.pause();
                    soundBattleTwo.pause();
                    soundVictory.play();
                    returnHome.classList.remove('hidden');
                }
            }
        });
    return false;
    }
}


 // lancement du combat
 async function fight(){
                                            
    if (getRandomInt(2) == 1){
        while (teamOne.length != 0 && teamTwo.length != 0){

           

            let testIdTeamOne = getRandomInt(teamOne.length);
            let testIdTeamTwo = getRandomInt(teamTwo.length);

            let attackTeamOne = getRandomInt(teamOne[testIdTeamOne]['attack']);
            let attackTeamTwo = getRandomInt(teamTwo[testIdTeamTwo]['attack']);


            if (getRandomInt(101) > 90 ) {

                 // joueur 2 attack
            teamOne[testIdTeamOne]['life'] = teamOne[testIdTeamOne]['life'] - teamTwo[testIdTeamTwo]['attack'];
            if (teamOne[testIdTeamOne]['life'] <= 0) {
                battleDetails.innerHTML += '<div class="fight">' + teamTwo[testIdTeamTwo]['name_hero'] + ' <img src="./images/iconsBattle/attack.png"> <img src="./images/iconsBattle/crit.png"> ' + teamTwo[testIdTeamTwo]['attack'] + ' sur ' + teamOne[testIdTeamOne]['name_hero'] + ', il est <img src="./images/iconsBattle/dead.png"></div>';
            } else {
                battleDetails.innerHTML += '<div class="fight">' + teamTwo[testIdTeamTwo]['name_hero'] + ' <img src="./images/iconsBattle/attack.png"> <img src="./images/iconsBattle/crit.png"> ' + teamTwo[testIdTeamTwo]['attack'] + ' sur ' + teamOne[testIdTeamOne]['name_hero'] + ', il lui reste ' + teamOne[testIdTeamOne]['life'] + ' <img src="./images/iconsBattle/life.png"></div>';
            }
            battleDetails.scrollTop = battleDetails.scrollHeight;

            // remplace l'img du hero qui attack par le gif attack pendant 2 sec 
            slot[testIdTeamTwo + 5].src = './images/Chara/crit/' + teamTwo[testIdTeamTwo]['img_crit'];    
            await sleep(5000);
            slot[testIdTeamTwo + 5].src = './images/Chara/' + teamTwo[testIdTeamTwo]['img'] ;

            } else {

            // joueur 2 attack
            teamOne[testIdTeamOne]['life'] = teamOne[testIdTeamOne]['life'] - attackTeamTwo;
            if (teamOne[testIdTeamOne]['life'] <= 0){
                battleDetails.innerHTML += '<div class="fight">' + teamTwo[testIdTeamTwo]['name_hero'] + ' <img src="./images/iconsBattle/attack.png"> ' + attackTeamTwo + ' sur ' + teamOne[testIdTeamOne]['name_hero'] + ', il est <img src="./images/iconsBattle/dead.png"></div>';
            } else {
                battleDetails.innerHTML += '<div class="fight">' + teamTwo[testIdTeamTwo]['name_hero'] + ' <img src="./images/iconsBattle/attack.png"> ' + attackTeamTwo + ' sur ' + teamOne[testIdTeamOne]['name_hero'] + ', il lui reste ' + teamOne[testIdTeamOne]['life'] + ' <img src="./images/iconsBattle/life.png"></div>';
            }
            battleDetails.scrollTop = battleDetails.scrollHeight;
            
            // remplace l'img du hero qui attack par le gif attack pendant 2 sec 
            slot[testIdTeamTwo + 5].src = './images/Chara/attack/' + teamTwo[testIdTeamTwo]['img_attack'];
            await sleep(2000);
            slot[testIdTeamTwo + 5].src = './images/Chara/' + teamTwo[testIdTeamTwo]['img'] ;
            }

        if (getRandomInt(101) > 90 ) {

            //joueur 1 attack
            teamTwo[testIdTeamTwo]['life'] = teamTwo[testIdTeamTwo]['life'] - teamOne[testIdTeamOne]['attack'];
            if ( teamTwo[testIdTeamTwo]['life'] <= 0){
                battleDetails.innerHTML += '<div class="fight">' + teamOne[testIdTeamOne]['name_hero'] + ' <img src="./images/iconsBattle/attack.png"> <img src="./images/iconsBattle/crit.png">'  + teamOne[testIdTeamOne]['attack'] + ' sur ' + teamTwo[testIdTeamTwo]['name_hero'] + ', il est <img src="./images/iconsBattle/dead.png"></div>';
            } else {
                battleDetails.innerHTML += '<div class="fight">' + teamOne[testIdTeamOne]['name_hero'] + ' <img src="./images/iconsBattle/attack.png"> <img src="./images/iconsBattle/crit.png">'  + teamOne[testIdTeamOne]['attack'] + ' sur ' + teamTwo[testIdTeamTwo]['name_hero'] + ', il lui reste ' + teamTwo[testIdTeamTwo]['life'] + ' <img src="./images/iconsBattle/life.png"></div>';
            }
            battleDetails.scrollTop = battleDetails.scrollHeight;

            slot[testIdTeamOne].src = './images/Chara/crit/' + teamOne[testIdTeamOne]['img_crit'];
            await sleep(5000);
            slot[testIdTeamOne].src = './images/Chara/' + teamOne[testIdTeamOne]['img'] ;

        } else {

            //joueur 1 attack
            teamTwo[testIdTeamTwo]['life'] = teamTwo[testIdTeamTwo]['life'] - attackTeamOne;
            if ( teamTwo[testIdTeamTwo]['life'] <= 0){
                battleDetails.innerHTML += '<div class="fight">' + teamOne[testIdTeamOne]['name_hero'] + ' <img src="./images/iconsBattle/attack.png"> '  + attackTeamOne + ' sur ' + teamTwo[testIdTeamTwo]['name_hero'] + ', il est <img src="./images/iconsBattle/dead.png"></div>';
            } else {
                battleDetails.innerHTML += '<div class="fight">' + teamOne[testIdTeamOne]['name_hero'] + ' <img src="./images/iconsBattle/attack.png"> '  + attackTeamOne + ' sur ' + teamTwo[testIdTeamTwo]['name_hero'] + ', il lui reste ' + teamTwo[testIdTeamTwo]['life'] + ' <img src="./images/iconsBattle/life.png"></div>';
            }
            battleDetails.scrollTop = battleDetails.scrollHeight;

            slot[testIdTeamOne].src = './images/Chara/attack/' + teamOne[testIdTeamOne]['img_attack'];
            await sleep(2000);
            slot[testIdTeamOne].src = './images/Chara/' + teamOne[testIdTeamOne]['img'] ;
        }


            teamOne = teamOne.filter(filterByLife);      
            console.log('Tableau teamOne filtré', teamOne);

            teamTwo = teamTwo.filter(filterByLife);      
            console.log('Tableau teamTwo filtré', teamTwo); 
            removeEmptySlot();
        }
    } else {
        console.log('else');

        while (teamOne.length != 0 && teamTwo.length != 0){

            await sleep(2000);

            let testIdTeamOne = getRandomInt(teamOne.length);
            let testIdTeamTwo = getRandomInt(teamTwo.length);

            let attackTeamOne = getRandomInt(teamOne[testIdTeamOne]['attack']);
            let attackTeamTwo = getRandomInt(teamTwo[testIdTeamTwo]['attack']);

            if (getRandomInt(101) > 90 ) {

                   //joueur 1 attack
                   teamTwo[testIdTeamTwo]['life'] = teamTwo[testIdTeamTwo]['life'] - teamOne[testIdTeamOne]['attack'];
                   if (teamTwo[testIdTeamTwo]['life'] <= 0 ){
                       battleDetails.innerHTML += '<div class="fight">' + teamOne[testIdTeamOne]['name_hero'] + ' <img src="./images/iconsBattle/attack.png"> <img src="./images/iconsBattle/crit.png"> '  + teamOne[testIdTeamOne]['attack'] + ' sur ' + teamTwo[testIdTeamTwo]['name_hero'] + ', il est <img src="./images/iconsBattle/dead.png"></div>';
                   } else {
                       battleDetails.innerHTML += '<div class="fight">' + teamOne[testIdTeamOne]['name_hero'] + ' <img src="./images/iconsBattle/attack.png"> <img src="./images/iconsBattle/crit.png"> '  + teamOne[testIdTeamOne]['attack'] + ' sur ' + teamTwo[testIdTeamTwo]['name_hero'] + ', il lui reste ' + teamTwo[testIdTeamTwo]['life'] + ' <img src="./images/iconsBattle/life.png"></div>';
                   }
                   battleDetails.scrollTop = battleDetails.scrollHeight;

                   slot[testIdTeamOne].src = './images/Chara/crit/' + teamOne[testIdTeamOne]['img_crit'];
                   await sleep(5000);
                   slot[testIdTeamOne].src = './images/Chara/' + teamOne[testIdTeamOne]['img'] ;

            } else {

                //joueur 1 attack
                teamTwo[testIdTeamTwo]['life'] = teamTwo[testIdTeamTwo]['life'] - attackTeamOne;
                if (teamTwo[testIdTeamTwo]['life'] <= 0 ){
                    battleDetails.innerHTML += '<div class="fight">' + teamOne[testIdTeamOne]['name_hero'] + ' <img src="./images/iconsBattle/attack.png"> '  + attackTeamOne + ' sur ' + teamTwo[testIdTeamTwo]['name_hero'] + ', il est <img src="./images/iconsBattle/dead.png"></div>';
                } else {
                    battleDetails.innerHTML += '<div class="fight">' + teamOne[testIdTeamOne]['name_hero'] + ' <img src="./images/iconsBattle/attack.png"> '  + attackTeamOne + ' sur ' + teamTwo[testIdTeamTwo]['name_hero'] + ', il lui reste ' + teamTwo[testIdTeamTwo]['life'] + ' <img src="./images/iconsBattle/life.png"></div>';
                }
                battleDetails.scrollTop = battleDetails.scrollHeight;

                slot[testIdTeamOne].src = './images/Chara/attack/' + teamOne[testIdTeamOne]['img_attack'];
                await sleep(2000);
                slot[testIdTeamOne].src = './images/Chara/' + teamOne[testIdTeamOne]['img'] ;
            }

            if (getRandomInt(101) > 90 ) {
           
                // joueur 2 attack
                teamOne[testIdTeamOne]['life'] = teamOne[testIdTeamOne]['life'] - teamTwo[testIdTeamTwo]['attack'];
                if (teamOne[testIdTeamOne]['life'] <= 0){
                    battleDetails.innerHTML += '<div class="fight">' + teamTwo[testIdTeamTwo]['name_hero'] + ' <img src="./images/iconsBattle/attack.png"> <img src="./images/iconsBattle/crit.png"> '  + teamTwo[testIdTeamTwo]['attack'] + ' sur ' + teamOne[testIdTeamOne]['name_hero'] + ', il est <img src="./images/iconsBattle/dead.png"></div>';
                } else {
                    battleDetails.innerHTML += '<div class="fight">' + teamTwo[testIdTeamTwo]['name_hero'] + ' <img src="./images/iconsBattle/attack.png"> <img src="./images/iconsBattle/crit.png"> '  + teamTwo[testIdTeamTwo]['attack'] + ' sur ' + teamOne[testIdTeamOne]['name_hero'] + ', il lui reste ' + teamOne[testIdTeamOne]['life'] + ' <img src="./images/iconsBattle/life.png"></div>';
                }
                battleDetails.scrollTop = battleDetails.scrollHeight;

                slot[testIdTeamTwo + 5].src = './images/Chara/crit/' + teamTwo[testIdTeamTwo]['img_crit'];
                await sleep(5000);
                slot[testIdTeamTwo + 5].src = './images/Chara/' + teamTwo[testIdTeamTwo]['img'] ;

            } else {

                // joueur 2 attack
                teamOne[testIdTeamOne]['life'] = teamOne[testIdTeamOne]['life'] - attackTeamTwo;
                if (teamOne[testIdTeamOne]['life'] <= 0){
                    battleDetails.innerHTML += '<div class="fight">' + teamTwo[testIdTeamTwo]['name_hero'] + ' <img src="./images/iconsBattle/attack.png"> '  + attackTeamTwo + ' sur ' + teamOne[testIdTeamOne]['name_hero'] + ', il est <img src="./images/iconsBattle/dead.png"></div>';
                } else {
                    battleDetails.innerHTML += '<div class="fight">' + teamTwo[testIdTeamTwo]['name_hero'] + ' <img src="./images/iconsBattle/attack.png"> '  + attackTeamTwo + ' sur ' + teamOne[testIdTeamOne]['name_hero'] + ', il lui reste ' + teamOne[testIdTeamOne]['life'] + ' <img src="./images/iconsBattle/life.png"></div>';
                }
                battleDetails.scrollTop = battleDetails.scrollHeight;

                slot[testIdTeamTwo + 5].src = './images/Chara/attack/' + teamTwo[testIdTeamTwo]['img_attack'];
                await sleep(2000);
                slot[testIdTeamTwo + 5].src = './images/Chara/' + teamTwo[testIdTeamTwo]['img'] ;
            }


            teamOne = teamOne.filter(filterByLife);      
            console.log('Tableau teamOne filtré', teamOne);

            teamTwo = teamTwo.filter(filterByLife);      
            console.log('Tableau teamTwo filtré', teamTwo);  
            removeEmptySlot();
        }
    }
}


async function returnHomeAndHealing(){
    soundhealing.play();
    await sleep(4100);
    window.location = 'index.php';
}

function removeEmptySlot(){
    let g = 5 - teamOne.length;
    let i = 4;

    while (g > 0){
  
        slot[i].classList.add('hidden');
        i--;
        g--;

    }
    let h = 5 - teamTwo.length;
    let j = 9;

    while (h > 0){

        slot[j].classList.add('hidden');
        j--;
        h--;

    }

}