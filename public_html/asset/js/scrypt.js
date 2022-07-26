const player = document.getElementById('player');
const optionHero = document.getElementById('selectHeros');
const optionPlayer = document.getElementById('selectPlayer');
const optionVehicule = document.getElementById('selectVehicule');
const heroImg = document.getElementById("heroImg");
const vehiculeImg = document.getElementById("vehiculeImg");
const requestURLHeros = './asset/json/heros.json';
const requestURLPlayer = './asset/json/player.json';
const requestURLVehicule = './asset/json/vehicule.json';
const life = document.getElementById('life');
const attack = document.getElementById('attack');
const def = document.getElementById('defence');
const defVehicule = document.getElementById('defVehicule');

optionHero.addEventListener('change', function()
{  
    hero();
});


optionVehicule.addEventListener('change', function()
{
    vehicule();
});


optionPlayer.addEventListener('change', function()
{
    let myRequest = new Request(requestURLPlayer);       
    
    fetch(myRequest)
    .then(function(response) {
        if(response.ok) {
            response.json().then(function(responseThen) { 

                responseThen.forEach (function(value) {

                    if (value['name_player'] == affiche("selectPlayer")){

                        player.value = optionPlayer.value;

                        optionHero.value =  [value['hero_id']];
                        hero();

                        optionVehicule.value =  [value['vehicule_id']];
                        vehicule();
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
});





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
