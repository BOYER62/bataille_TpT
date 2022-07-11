<?php

class heros {

    // Attributes
    private $nameHeros;
    private $life;
    private $attack;
    private $img;
    private $def;
    private $crit;

    // Constructor
    public function __construct($nameHeros = 'Coulson', $life=300, $attack= 1, $img="coulson.gif", $def=1, $crit=1)
    {
        $this -> setNameHeros($nameHeros);
        $this -> setLife($life);
        $this -> setAttack($attack);
        $this -> setimg($img);
        $this -> setDef($def);
        $this -> setCrit($crit);


    }

    // Getters
    public function getNameHeros(){
        return $this-> nameHeros;
    }
    public function getLife(){
        return $this-> life;
    }
    public function getAttack(){
        return $this-> attack;
    }
    public function getImg(){
        return $this-> img;
    }
    public function getDef(){
        return $this-> def;
    }
    public function getCrit(){
        return $this-> crit;
    }

    // Setters
    public function setNameHeros($nameHeros)
    {
        $this->nameHeros = $nameHeros;
    }
    public function setLife($life)
    {
        $this->life = $life;
    }
    public function setattack($attack)
    {
        $this-> attack = $attack;
    }
    public function setImg($img)
    {
        $this->img = $img;
    }
    public function setDef($def)
    {
        $this->def = $def;
    }
    public function setCrit($crit)
    {
        $this->crit = $crit;
    }

    // Methods
    public function hydrate($heros)
    {
        $this -> setNameHeros($heros['name_heros']);
        $this -> setLife($heros['life']);
        $this -> setAttack($heros['attack']);
        $this -> setImg($heros['img']);
        $this -> setDef($heros['def']);
        $this -> setCrit($heros['crit']);
    }
    
}
