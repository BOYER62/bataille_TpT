const player = document.getElementById('player');
const optionHero = document.getElementById('selectHeros');
const nameImg = document.getElementById("nameImg");
const requestURLHeros = './asset/json/heros.json';
const requestHeros = new XMLHttpRequest();
const requestURLPlayer = './asset/json/player.json';
const requestPlayer = new XMLHttpRequest();
const requestURLVehicule = './asset/json/vehicule.json';
const requestVehicule = new XMLHttpRequest();

requestHeros.open('GET', requestURLHeros);
requestHeros.responseType = 'json';
requestHeros.send();
requestPlayer.open('GET', requestURLPlayer);
requestPlayer.responseType = 'json';
requestPlayer.send();
requestVehicule.open('GET', requestURLVehicule);
requestVehicule.responseType = 'json';
requestVehicule.send();
requestHeros.onload = function(){
    const jsonHero = requestHeros.response;
    console.log(jsonHero);
}
requestPlayer.onload = function(){
    const jsonPlayer = requestPlayer.response;
    console.log(jsonPlayer);
}
requestVehicule.onload = function(){
    const jsonVehicule = requestVehicule.response;
    console.log(jsonVehicule);
}

// recupaire le nom du hero dans la liste deroulante
optionHero.addEventListener('change', function()
{
  
    // switch(jsonHero){
    //     case jsonHero[0]['name_hero'] :
    //         nameImg.src=`../images/Chara/${jsonHero[0]['img']}`;
    //         console.log(optionHero.options[optionHero.selectedIndex].text);    
    // }
    console.log('test2');
    console.log(jsonPlayer);
});



