const player = document.getElementById('player');
const optionHero = document.getElementById('selectHeros');
const nameImg = document.getElementById("nameImg");
const jsonHero = fetch('./asset/json/heros.json');
const jsonVehicule = fetch('./asset/json/vehicule.json');
const jsonPlayer = fetch('./asset/json/player.json');

// recupaire le nom du hero dans la liste deroulante
optionHero.addEventListener('change', function()
{
    nameImg.src="../images/ironMan.gif";
    console.log(optionHero.options[optionHero.selectedIndex].text);    
});



