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


 // lancement du combat
 async function fight(){
                                            
    if (getRandomInt(2) == 1){
        while (teamOne.length != 0 && teamTwo.length != 0){

            await sleep(2000);

            let testIdTeamOne = getRandomInt(teamOne.length);
            let testIdTeamTwo = getRandomInt(teamTwo.length);

            let attackTeamOne = getRandomInt(teamOne[testIdTeamOne]['attack']);
            let attackTeamTwo = getRandomInt(teamTwo[testIdTeamTwo]['attack']);

            // joueur 2 attack
            teamOne[testIdTeamOne]['life'] = teamOne[testIdTeamOne]['life'] - attackTeamTwo;

            battleDetails.innerHTML += '<div class="fight">' + teamTwo[testIdTeamTwo]['name_hero'] + ' attack de ' + attackTeamTwo + ' sur ' + teamOne[testIdTeamOne]['name_hero'] + ' il lui reste ' + teamOne[testIdTeamOne]['life'] + '</div>';

            // remplace l'img du hero qui attack par le gif attack pendant 2 sec 

            slot[testIdTeamTwo + 5].src = './images/Chara/attack/' + teamTwo[testIdTeamTwo]['img_attack'];
            
            await sleep(2000);

            slot[testIdTeamTwo + 5].src = './images/Chara/' + teamTwo[testIdTeamTwo]['img'] ;

        // console.log(teamTwo[testIdTeamTwo]['name_hero'] + ' attack de ' + attackTeamTwo + ' sur ' + teamOne[testIdTeamOne]['name_hero'] + ' il lui reste ' + teamOne[testIdTeamOne]['life'] );

            //joueur 1 attack
            teamTwo[testIdTeamTwo]['life'] = teamTwo[testIdTeamTwo]['life'] - attackTeamOne;

            battleDetails.innerHTML += '<div class="fight">' + teamOne[testIdTeamOne]['name_hero'] + ' attack de ' + attackTeamOne + ' sur ' + teamTwo[testIdTeamTwo]['name_hero'] + ' il lui reste ' + teamTwo[testIdTeamTwo]['life'] + '</div>';

            slot[testIdTeamOne].src = './images/Chara/attack/' + teamOne[testIdTeamOne]['img_attack'];
            
            await sleep(2000);

            slot[testIdTeamOne].src = './images/Chara/' + teamOne[testIdTeamOne]['img'] ;

            // console.log(teamOne[testIdTeamOne]['name_hero'] + ' attack de ' + attackTeamOne + ' sur ' + teamTwo[testIdTeamTwo]['name_hero'] + ' il lui reste ' + teamTwo[testIdTeamTwo]['life'] );

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

            battleDetails.innerHTML += '<div class="fight">' + teamOne[testIdTeamOne]['name_hero'] + ' attack de ' + attackTeamOne + ' sur ' + teamTwo[testIdTeamTwo]['name_hero'] + ' il lui reste ' + teamTwo[testIdTeamTwo]['life'] + '</div>';

            slot[testIdTeamOne].src = './images/Chara/attack/' + teamOne[testIdTeamOne]['img_attack'];
            
            await sleep(2000);

            slot[testIdTeamOne].src = './images/Chara/' + teamOne[testIdTeamOne]['img'] ;

            // console.log(teamOne[testIdTeamOne]['name_hero'] + ' attack de ' + attackTeamOne + ' sur ' + teamTwo[testIdTeamTwo]['name_hero'] + ' il lui reste ' + teamTwo[testIdTeamTwo]['life'] );

            // joueur 2 attack
            teamOne[testIdTeamOne]['life'] = teamOne[testIdTeamOne]['life'] - attackTeamTwo;

            battleDetails.innerHTML += '<div class="fight">' + teamTwo[testIdTeamTwo]['name_hero'] + ' attack de ' + attackTeamTwo + ' sur ' + teamOne[testIdTeamOne]['name_hero'] + ' il lui reste ' + teamOne[testIdTeamOne]['life'] + '</div>';

            slot[testIdTeamTwo + 5].src = './images/Chara/attack/' + teamTwo[testIdTeamTwo]['img_attack'];
            
            await sleep(2000);

            slot[testIdTeamTwo + 5].src = './images/Chara/' + teamTwo[testIdTeamTwo]['img'] ;

            // console.log(teamTwo[testIdTeamTwo]['name_hero'] + ' attack de ' + attackTeamTwo + ' sur ' + teamOne[testIdTeamOne]['name_hero'] + ' il lui reste ' + teamOne[testIdTeamOne]['life'] );

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
}
