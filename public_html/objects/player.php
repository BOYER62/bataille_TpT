<?php
class player {

    //attributs
    private $id;
    private $namePlayer;
    private $level;
    private $hero_id;
    private $vehicule_id;


    //constructor
    public function __construct($id=0, $namePlayer = "Olivier", $level=0)
    {
        $this -> setId($id);
        $this -> setNamePlayer($namePlayer);
        $this -> setLevel($level);
    }

    //getter
    public function getId()
    {
        return $this->id;
    }
    public function getNamePlayer()
    {
        return $this->namePlayer;
    }
    public function getLevel()
    {
        return $this->level;
    }
    public function getHeroId()
    {
        return $this->heroId;
    }
    public function getVehiculeId()
    {
        return $this->vehiculeId;
    }

    //setter
    public function setId($id)
    {
        $this -> id = $id;
    }
    public function setNamePlayer($namePlayer)
    {
        $this -> namePlayer = $namePlayer;
    }
    public function setLevel($level)
    {
        $this -> level = $level;
    }

    public function hydrate($player)
    {
        $this -> setNamePlayer($player['name_player']);
        $this -> setLevel($player['level']);
    }
}
?>