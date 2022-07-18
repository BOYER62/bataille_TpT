const player = document.getElementById('player');
const optionHero = document.getElementById('selectHeros');
const optionVehicule = document.getElementById('selectVehicule')
const heroImg = document.getElementById("heroImg");
const vehiculeImg = document.getElementById("vehiculeImg");
const requestURLHeros = './asset/json/heros.json';
const requestURLPlayer = './asset/json/player.json';
const requestPlayer = new XMLHttpRequest();
const requestURLVehicule = './asset/json/vehicule.json';
const requestVehicule = new XMLHttpRequest();
const life = document.getElementById('life');
const attack = document.getElementById('attack');
const def = document.getElementById('defence');
const defVehicule = document.getElementById('defVehicule');


optionHero.addEventListener('change', function()
{
    const requestHeros = new XMLHttpRequest();
    requestHeros.open('GET', requestURLHeros);
    requestHeros.responseType = 'json';
    requestHeros.send();
    requestHeros.onload = function(){
    const jsonHero = requestHeros.response;
    heroImg.src=`../images/Chara/${jsonHero[index]['img']}`;
    life.innerHTML = `life : ${jsonHero[index]['life']}`;
    attack.innerHTML = `attack : ${jsonHero[index]['attack']}`;
    def.innerHTML = `defence : ${jsonHero[index]['def']}`;
    }
    const index = optionHero.selectedIndex; 
})

optionVehicule.addEventListener('change', function()
{
    const requestVehicule = new XMLHttpRequest();
    requestVehicule.open('GET', requestURLVehicule);
    requestVehicule.responseType = 'json';
    requestVehicule.send();
    requestVehicule.onload = function(){
    const jsonVehicule = requestVehicule.response;
    vehiculeImg.src=`../images/Spaceship/${jsonVehicule[index]['img']}`;
    defVehicule.innerHTML = `defence : ${jsonVehicule[index]['def']}`;
    }
    const index = optionVehicule.selectedIndex; 
})

requestPlayer.open('GET', requestURLPlayer);
requestPlayer.responseType = 'json';
requestPlayer.send();
requestVehicule.open('GET', requestURLVehicule);
requestVehicule.responseType = 'json';
requestVehicule.send();

// optionHero.addEventListener('change', function()
// {
//     requestHeros.onload = function(){
//         const jsonHero = requestHeros.response;
//         console.log(jsonHero);
//         switch(jsonHero){
//             case jsonHero[0]['name_hero'] :
//                 nameImg.src=`../images/Chara/${jsonHero[0]['img']}`;
//                 console.log(optionHero.options[optionHero.selectedIndex].text);    
//         }
// }
// requestPlayer.onload = function(){
//     const jsonPlayer = requestPlayer.response;
//     console.log(jsonPlayer);
// }
// requestVehicule.onload = function(){
//     const jsonVehicule = requestVehicule.response;
//     console.log(jsonVehicule);
// }

// // recupaire le nom du hero dans la liste deroulante
  
//     //console.log(jsonHero[0]["name_hero"]);
// });



