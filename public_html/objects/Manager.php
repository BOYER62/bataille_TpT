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
            `hero_id` INT NOT NULL ,
            `vehicule_id` INT NOT NULL ,
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
            `def` INT NOT NULL ,
            `img` VARCHAR (50) NOT NULL ,
            `img_attack` VARCHAR (50) NOT NULL ,
            `img_crit`  VARCHAR (50) NOT NULL
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
                'img' => 'hulk-stand.gif',
                'img_attack' => 'hulk-attack.gif',
                'img_crit' => 'hulk-crit.gif'
                ],
            
                ['name_hero' => 'captain',
                'life'=>150,
                'attack' => 35,
                'def' => 10,
                'crit' => 10,
                'img' => 'captain-america-stand.gif',
                'img_attack' => 'captain-america-attack.gif', 
                'img_crit' => 'captain-america-crit.gif'
                ],
        
                ['name_hero' => 'thanos',
                'life' => 225,
                'attack' => 25,
                'def' => 10,
                'crit' => 10,
                'img' => 'thanos-stand.gif',
                'img_attack' => 'thanos-attack.gif', 
                'img_crit' => 'thanos-crit.gif'
                ],
        
                ['name_hero' => 'spider man',
                'life' => 50,
                'attack' => 10,
                'def' => 10,
                'crit' => 10,
                'img' => 'Spiderman-stand.gif',
                'img_attack' => 'spiderman-attack.gif', 
                'img_crit' => 'spiderman-crit.gif'
                ],
        
                ['name_hero' => 'iron man',
                'life' => 100,
                'attack' => 30,
                'def' => 10,
                'crit' => 10,
                'img' => 'Iron-man-stand.gif',
                'img_attack' => 'iron-man-attack.gif', 
                'img_crit' => 'iron-man-crit.gif'
                ],

                ['name_hero' => 'psylocke',
                'life' => 80,
                'attack' => 8,
                'def' => 9,
                'crit' => 10,
                'img' => 'psylocke-stand.gif',
                'img_attack' => 'psylocke-attack.gif', 
                'img_crit' => 'psylocke-crit.gif'
                ],

                ['name_hero' => 'magneto',
                'life' => 90,
                'attack' => 20,
                'def' => 10,
                'crit' => 10,
                'img' => 'Magneto-stand.gif',
                'img_attack' => 'magneto-attack.gif', 
                'img_crit' => 'magneto-crit.gif'
                ],

                ['name_hero' => 'Dr doom',
                'life' => 70,
                'attack' => 12,
                'def' => 14,
                'crit' => 10,
                'img' => 'Dr-doom-stand.gif',
                'img_attack' => 'drdoom-attack.gif', 
                'img_crit' => 'doom-crit.gif'
                ],

                ['name_hero' => 'wolverine',
                'life' => 100,
                'attack' => 22,
                'def' => 7,
                'crit' => 10,
                'img' => 'wolvie-stand.gif',
                'img_attack' => 'wolvie-attack.gif', 
                'img_crit' => 'wolvie-crit.gif'
                ],

                ['name_hero' => 'blackheart',
                'life' => 130,
                'attack' => 20,
                'def' => 20,
                'crit' => 10,
                'img' => 'blackheart-stand.gif',
                'img_attack' => 'blackheart-attack.gif', 
                'img_crit' => 'black-crit.gif'
                ],
            ];
        
            foreach($heros as $value){
                
                $sql = $this->bdd->prepare("
                INSERT INTO `hero` 
                (`name_hero`, `life` , `attack` , `def` , `img`, `img_attack`, `img_crit`) 
                VALUES 
                (:nameHeros, :life,  :attack , :def , :img , :imgAttack, :imgCrit)
                ");
                
                // Secure
                $sql->bindValue(":nameHeros", $value['name_hero'], PDO::PARAM_STR);
                $sql->bindValue(":life", $value['life'], PDO::PARAM_INT);
                $sql->bindValue(":attack", $value['attack'], PDO::PARAM_INT);
                $sql->bindValue(":def", $value['def'], PDO::PARAM_INT);
                $sql->bindValue(":img", $value['img'], PDO::PARAM_STR);
                $sql->bindValue(":imgAttack", $value['img_attack'], PDO::PARAM_STR);
                $sql->bindValue(":imgCrit", $value['img_crit'], PDO::PARAM_STR);
                
                $sql->execute();        
            }
    }
    public function initVehicule(){
        $vehicule =[
            ['name_vehicule'=>'vehicule_one',
            'def' => 10,
            'img' => 'vehicule_One.png'
            ],
        
            ['name_vehicule' => 'vehicule_two',
            'def' => 10,
            'img' => 'Ship_1-removebg-preview.png'
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
    public function create($player){
        $sql = $this -> bdd -> prepare("INSERT INTO `player` 
        (`name_player`, `level`, `hero_id`, `vehicule_id`) 
        VALUES 
        (:namePlayer, :level, :hero_id, :vehicule_id)");

        //$sql -> bindValue(":id", $player->getId(),PDO::PARAM_INT);
        $sql -> bindValue(":namePlayer", $player->getNamePlayer(), PDO::PARAM_STR);
        $sql -> bindValue(":level", $player->getLevel(), PDO::PARAM_INT);
        $sql -> bindValue(":hero_id", $player-> getHeroId(), PDO::PARAM_INT);
        $sql -> bindValue(":vehicule_id", $player-> getVehiculeId(), PDO::PARAM_INT);

        $sql -> execute();
    }

    public function read($reload){
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

    public function update($player)
    {

        $sql = $this -> bdd -> prepare("UPDATE `player` SET `level`=':level' WHERE 'name_Player'=$player->setNamePlayer()"); 

        //$sql -> bindValue(":id", $player->getId(),PDO::PARAM_INT);
        $sql -> bindValue(":level", $player->getLevel(), PDO::PARAM_INT);

        
        $sql -> execute();
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
