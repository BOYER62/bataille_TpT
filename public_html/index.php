<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bataille tour par tour</title>
</head>
<body>
    <?php
        include_once './settings/db.php';
        include_once './objects/heros.php';
        include_once './objects/Manager.php';
        
        $manager = new manager($db);
        $manager->createTable();
        $heros =[
        ['nameHeros'=>'hulk',
        'life'=>200,
        'attack' => 50,
        'def' => 10,
        'crit' => 10,
        'img' => 'hulk-intocrouch.gif'
        ],
    
        ['nameHeros' => 'captain',
        'life'=>150,
        'attack' => 35,
        'def' => 10,
        'crit' => 10,
        'img' => 'hulk-intocrouch.gif'
        ],

        ['nameHeros' => 'black pantere',
        'life' => 225,
        'attack' => 25,
        'def' => 10,
        'crit' => 10,
        'img' => 'hulk-intocrouch.gif',
        ],

        ['nameHeros' => 'hawkeye',
        'life' => 50,
        'attack' => 10,
        'def' => 10,
        'crit' => 10,
        'img' => 'hulk-intocrouch.gif'
        ],

        ['nameHeros' => 'iron man',
        'life' => 100,
        'attack' => 30,
        'def' => 10,
        'crit' => 10,
        'img' => 'hulk-intocrouch.gif   '
        ],
    ];
    
    foreach($heros as $key => $value){
        $manager = new manager($db);
        $manager -> initHeros($value);
    }

    ?>
</body>
</html>