<?php
class player {

    //attributs


    //constructor
    public function __construct($namePlayer = "Olivier", $level=0)
    {
        $this -> setNamePlayer($namePlayer);
        $this -> setLevel($level);
    }

    //getter
    public function getNamePlayer()
    {
        return $this->getNamePlayer();
    }
    public function getLevel()
    {
        return $this->getLevel();
    }

    //setter
    public function setNamePlayer($namePlayer)
    {
        $this -> setNamePlayer = $namePlayer;
    }
    public function setLevel($level)
    {
        $this -> setLevel = $level;
    }

    public function hydrate($player)
    {
        $this -> setNamePlayer($player['name_player']);
        $this -> setLevel($player['level']);
    }
}
?>