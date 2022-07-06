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

        $sql = $this -> bdd -> prepare ("CREATE TABLE IF NOT EXISTS `bataille`.`joueur` ( 
            `Id` INT NOT NULL AUTO_INCREMENT , 
            `nomJoueur` VARCHAR(50) NOT NULL , 
            `vie` INT NOT NULL , 
            `attaque` INT NOT NULL , 
            `level` INT NOT NULL,
            `gif` VARCHAR(50) NOT NULL , 
            PRIMARY KEY (`Id`)) ENGINE = InnoDB;");

        $sql->execute();

        $sql = $this -> bdd -> prepare ("CREATE TABLE IF NOT EXISTS `bataille`.`vehicule` ( 
            `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
            `nomVehicule` VARCHAR(50) NOT NULL , 
            `defence` INT NOT NULL ,
            `image` VARCHAR (50) NOT NULL
            )");

        $sql->execute();

        $sql = $this -> bdd -> prepare ("CREATE TABLE IF NOT EXISTS `bataille`.`heros` ( 
            `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
            `nomHeros` VARCHAR(50) NOT NULL , 
            `vie` INT NOT NULL ,
            `attaque` VARCHAR (50) NOT NULL,
            `gif` VARCHAR (50) NOT NULL
            )");

        $sql -> execute();
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
