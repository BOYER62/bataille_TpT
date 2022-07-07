<?php
include_once './Manager.php';

class heros {

    // Attributes
    private $nomHeros;
    private $vie;
    private $attaque;
    private $gif;

    // Constructor
    public function __construct($nomHeros = 'Coulson', $vie=300, $attaque= 1, $gif="coulson.gif")
    {
        $this -> setNomHeros($nomHeros);
        $this -> setVie($vie);
        $this -> setAttaque($attaque);
        $this -> setGif($gif);

    }

    // Getters
    public function getNomHeros(){
        return $this-> nomHeros;
    }
    public function getVie(){
        return $this-> vie;
    }
    public function getAttaque(){
        return $this-> attaque;
    }
    public function getGif(){
        return $this-> gif;
    }

    // Setters
    public function setNomHeros($nomHeros)
    {
        $this->nomHeros = $nomHeros;
    }
    public function setVie($vie)
    {
        $this->vie = $vie;
    }
    public function setattaque($attaque)
    {
        $this-> attaque = $attaque;
    }
    public function setgif($gif)
    {
        $this->gif = $gif;
    }

    // Methods
    public function initHeros(){
        
    }
}
