<?php


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

        $sql = $this -> bdd -> prepare ("CREATE TABLE IF NOT EXISTS `bataille`.`heros` ( 
            `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
            `name_heros` VARCHAR(50) NOT NULL , 
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
            ['name_heros'=>'hulk',
            'life'=>200,
            'attack' => 50,
            'def' => 10,
            'crit' => 10,
            'img' => 'hulk-intocrouch.gif'
            ],
        
            ['name_heros' => 'captain',
            'life'=>150,
            'attack' => 35,
            'def' => 10,
            'crit' => 10,
            'img' => 'hulk-intocrouch.gif'
            ],
    
            ['name_heros' => 'black pantere',
            'life' => 225,
            'attack' => 25,
            'def' => 10,
            'crit' => 10,
            'img' => 'hulk-intocrouch.gif',
            ],
    
            ['name_heros' => 'hawkeye',
            'life' => 50,
            'attack' => 10,
            'def' => 10,
            'crit' => 10,
            'img' => 'hulk-intocrouch.gif'
            ],
    
            ['name_heros' => 'iron man',
            'life' => 100,
            'attack' => 30,
            'def' => 10,
            'crit' => 10,
            'img' => 'hulk-intocrouch.gif   '
            ],
        ];
    
        foreach($heros as $value){
            var_dump($value);
               
            $sql = $this->bdd->prepare("
            INSERT INTO `heros` 
            (`name_heros`, `life` , `attack` , `def` , `img`, `crit`) 
            VALUES 
            (:nameHeros, :life,  :attack , :def , :img , :crit)
            "); // var_dump($sql);
            
            // Secure
            $sql->bindValue(":nameHeros", $value['name_heros'], PDO::PARAM_STR);
            $sql->bindValue(":life", $value['life'], PDO::PARAM_INT);
            $sql->bindValue(":attack", $value['attack'], PDO::PARAM_INT);
            $sql->bindValue(":def", $value['def'], PDO::PARAM_INT);
            $sql->bindValue(":img", $value['img'], PDO::PARAM_STR);
            $sql->bindValue(":crit", $value['crit'], PDO::PARAM_INT);
            
            $sql->execute();        
        }
}

    public function create($player)
    {
        //if (get_class($player) == "player"){
            print_r('if ok');
            $sql = $this -> bdd -> prepare("INSER INTO 'player' 
            ('name_player', 'level') 
            VALUES 
            (:namePlayer, :level)");
            
            $sql -> bindValue(":namePlayer", $player->getNamePlayer(), PDO::PARAM_STR);
            $sql -> bindValue(":level", $player->getLevel(), PDO::PARAM_INT);
            $sql -> execute();
        //}
    }

    public function read($player)
    {
        echo '<pre>';
        print_r($player);
        echo '</pre>';
        // var_dump($perso);
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
