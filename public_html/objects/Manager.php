<?php
include_once './objects/player.php';

class manager {

    // Attributes
    private $bdd;
    
    // Constructor
    public function __construct(PDO $db)
    {
        $this->setBdd($db);
    }

    // Getters

    // Setters
    public function setBdd(PDO $db)
    {
        $this->bdd = $db;
    }

    // Methods
    public function createTable(){

        $sql = $this -> bdd -> prepare ("CREATE TABLE IF NOT EXISTS `bataille`.`player` ( 
            `id` INT NOT NULL AUTO_INCREMENT , 
            `name_player` VARCHAR(50) NOT NULL , 
            `level` INT NOT NULL ,  
            PRIMARY KEY (`id`)) ENGINE = InnoDB;");

        $sql->execute();

        $sql = $this -> bdd -> prepare ("CREATE TABLE IF NOT EXISTS `bataille`.`vehicule` ( 
            `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
            `name_vehicule` VARCHAR(50) NOT NULL , 
            `def` INT NOT NULL ,
            `img` VARCHAR (50) NOT NULL
            )");

        $sql->execute();

        $sql = $this -> bdd -> prepare ("CREATE TABLE IF NOT EXISTS `bataille`.`hero` ( 
            `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
            `name_hero` VARCHAR(50) NOT NULL , 
            `life` INT NOT NULL ,
            `attack` INT NOT NULL,
            `img` VARCHAR (50) NOT NULL,
            `def` INT NOT NULL ,
            `crit` INT NOT NULL
            )");

        $sql -> execute();
    }

    public function initHeros(){
        $heros =[
            ['name_hero'=>'hulk',
            'life'=>200,
            'attack' => 50,
            'def' => 10,
            'crit' => 10,
            'img' => 'hulk-intocrouch.gif'
            ],
        
            ['name_hero' => 'captain',
            'life'=>150,
            'attack' => 35,
            'def' => 10,
            'crit' => 10,
            'img' => 'hulk-intocrouch.gif'
            ],
    
            ['name_hero' => 'black pantere',
            'life' => 225,
            'attack' => 25,
            'def' => 10,
            'crit' => 10,
            'img' => 'hulk-intocrouch.gif',
            ],
    
            ['name_hero' => 'hawkeye',
            'life' => 50,
            'attack' => 10,
            'def' => 10,
            'crit' => 10,
            'img' => 'hulk-intocrouch.gif'
            ],
    
            ['name_hero' => 'iron man',
            'life' => 100,
            'attack' => 30,
            'def' => 10,
            'crit' => 10,
            'img' => 'hulk-intocrouch.gif   '
            ],
        ];
    
        foreach($heros as $value){
               
            $sql = $this->bdd->prepare("
            INSERT INTO `hero` 
            (`name_hero`, `life` , `attack` , `def` , `img`, `crit`) 
            VALUES 
            (:nameHeros, :life,  :attack , :def , :img , :crit)
            ");
            
            // Secure
            $sql->bindValue(":nameHeros", $value['name_hero'], PDO::PARAM_STR);
            $sql->bindValue(":life", $value['life'], PDO::PARAM_INT);
            $sql->bindValue(":attack", $value['attack'], PDO::PARAM_INT);
            $sql->bindValue(":def", $value['def'], PDO::PARAM_INT);
            $sql->bindValue(":img", $value['img'], PDO::PARAM_STR);
            $sql->bindValue(":crit", $value['crit'], PDO::PARAM_INT);
            
            $sql->execute();        
        }
}

public function initVehicule(){
    $vehicule =[
        ['name_vehicule'=>'Ford Mustang GT350R',
        'def' => 10,
        'img' => 'hulk-intocrouch.gif'
        ],
    
        ['name_vehicule' => 'Chevrolet Corvette Z06',
        'def' => 10,
        'img' => 'hulk-intocrouch.gif'
        ],
    ];

    foreach($vehicule as $value){
           
        $sql = $this->bdd->prepare("
        INSERT INTO `vehicule` 
        (`name_vehicule`, `def` , `img`) 
        VALUES 
        (:nameVehicule, :def , :img)
        ");
        
        // Secure
        $sql->bindValue(":nameVehicule", $value['name_vehicule'], PDO::PARAM_STR);
        $sql->bindValue(":def", $value['def'], PDO::PARAM_INT);
        $sql->bindValue(":img", $value['img'], PDO::PARAM_STR);
                
        $sql->execute();        
    }
}
    public function create($player)
    {
        if (get_class($player) == "player"){
            $sql = $this -> bdd -> prepare("INSERT INTO `player` 
            (`id`, `name_player`, `level`) 
            VALUES 
            (:id, :namePlayer, :level)");

            $sql -> bindValue(":id", $player->getId(),PDO::PARAM_INT);
            $sql -> bindValue(":namePlayer", $player->getNamePlayer(), PDO::PARAM_STR);
            $sql -> bindValue(":level", $player->getLevel(), PDO::PARAM_INT);
            $sql -> execute();
        }
    }

    public function read($reload)
    {
        switch($reload)
        {
            case 'heros' :
                $sql = $this -> bdd -> prepare ("SELECT * FROM `hero`");
                $sql -> execute();
                $heros = $sql->fetchAll(PDO::FETCH_ASSOC);
                
                if (count($heros) == 0){
                    $this -> initHeros();
                }
                return $heros;
                break;
            case 'vehicule' :
                $sql = $this -> bdd -> prepare ("SELECT * FROM `vehicule`");
                $sql -> execute();
                $vehicule = $sql->fetchAll(PDO::FETCH_ASSOC);
                if (count($vehicule) == 0){
                    $this -> initVehicule();
                }
                return $vehicule;
                break;
            case 'player' :
                $sql = $this -> bdd -> prepare ("SELECT * FROM `player`");
                $sql -> execute();
                $player = $sql->fetchAll(PDO::FETCH_ASSOC);
                return $player;
                break;
            case 'default' :
                echo 'lecture';
                break;
        }
    }

    public function update($perso)
    {
        // if Warrior
        // ...

        // elseif Wizard
        // ...

        // elseif Ark
        // ...

        // else unknown object
        // ...
    }

    public function delete($perso)
    {
        // if Warrior
        // ...

        // elseif Wizard
        // ...

        // elseif Ark
        // ...

        // else unknown object
        // ...
    }
}
