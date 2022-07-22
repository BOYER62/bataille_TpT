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
