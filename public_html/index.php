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
        include_once './Objects/Manager.php';
        
        $manager = new manager($db);
        $manager->createTable();
        $heros =[
        ['nomHeros'=>'hulk',
        'vie'=>200,
        'attaque' => 50
        ],

        ['nomHeros' => 'captain',
        'vie'=>150,
        'attaque' => 35
        ],

        ['nomHeros' => 'black pantere',
        'vie' => 225,
        'attaque' => 25
        ],

        ['nomHeros' => 'hawkeye',
        'vie' => 100,
        'attaque' => 30
        ],
    ];

    print_r($heros);
    ?>
</body>
</html>