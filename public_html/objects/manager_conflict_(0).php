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

        $sql = $this->bdd->prepare ("CREATE TABLE IF NOT EXISTS`bataille`.`joueur` ( 
            `id` INT NOT NULL PRIMARY KEY, 
            `joueur` VARCHAR(50) NOT NULL , 
            `life` INT NOT NULL , 
            `defence` INT NOT NULL 
            ) ENGINE = InnoDB"); 
        $sql->execute();

        $sql = $this->bdd->prepare ("CREATE TABLE IF NOT EXISTS `bataille`.`vehicul` ( 
            `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
            `vehicul` VARCHAR(50) NOT NULL , 
            `life` INT NOT NULL , 
            `defence` INT NOT NULL 
            ) ENGINE = InnoDB");
        $sql->execute();
    }

    public function create($perso)
    {
        if (get_class($perso) == "Warrior") {

            $sql = $this->bdd->prepare("
                INSERT INTO `warrior` 
                (`life`, `def`, `sword`) 
                VALUES 
                (:life, :def, :sword)
            "); // var_dump($sql);

            // Secure
            $sql->bindValue(":life", $perso->getLife(), PDO::PARAM_INT);
            $sql->bindValue(":def", $perso->getDef(), PDO::PARAM_INT);
            $sql->bindValue(":sword", $perso->getSword(), PDO::PARAM_INT);

            $sql->execute();

        }

        // elseif Wizard
        // ...

        // elseif Archer
        // ...

        // else unknown object
        // ...
    }

    public function read($perso)
    {
        echo '<pre>';
        print_r($perso);
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
