<?php

//fonction pour mieux afficher le contenu d'un tableau
function vd($var)
{
    echo "<pre>";
    var_dump($var);
    echo "</pre>";
}
?>

<!-- ENNONCE EXO ALGORITHME
function triangle(x, y, z) retourne le nombre de triangle possible en fonction des paramètres (sans les doublons)
Chaque paramètre corresponds a la taille d'une coté du triangle. 
Un triangle ne peut pas etre plat -->

<?php

function triangle($x, $y, $z)
{

    //  J'initialise le compteur de triangle
    $nbTriangle = 0;

    //  Je range les paramètres dans un tableau pour pouvoir "travailler" dessus
    $arrayTriangle = array($x, $y, $z); //vd($arrayTriangle);

    // Je note le nombre de combinaison possible
    $nbCombinaison = $x * $y * $z;     //echo $nbCombinaison;

    // Combien de fois mes paramètres vont se répéter dans ma combinaison 
    $xRepetition = $nbCombinaison / $x;
    $yRepetition = $nbCombinaison / $y;
    $zRepetition = $nbCombinaison / $z;

    //J'initialise la création des 3 colonnes qui comprendront la liste des chiffres. L'objectif est d'ensuite combiner chacune de ses colonnes sur la même key pour ressortir 1 combinaison par ligne 
    $first_col = array();
    $second_col = array();
    $third_col = array();

    //Je crée la première colonne
    $j = 0;
    for ($i = 1; $i <= $x; ++$i) {
        //Je répète x selon la propabilité de retrouver x dans ma combinaison
        $first_bloc_repet = array_fill($j, $xRepetition, $i);
        //il y a autant de ligne qu'il y a de combinaison
        $j += $xRepetition;
        //la première colonne sera un tableau qui comprendra tous les "blocs" de même valeur
        $first_col = array_merge($first_col, $first_bloc_repet);
    }
    //vd($first_col);

    //Je répète z selon la propabilité de retrouver z dans ma combinaison
    $third_bloc_repet = range(1, $zRepetition, [1]);
    //Je crée la troisième colonne
    for($i=1; $i <= $z; ++$i){
    $third_col = array_merge($third_col, $third_bloc_repet);
    };
    //vd($third_col);

    //Je crée un tableau qui regroupe mes 3 colonnes
    $listCombinaison = array($first_col, $second_col, $third_col);
    //vd($listCombinaison);
    
    //Je teste mon code en parcourant mon tableau multi-dimensionnel $listCombinaison 
    //echo $listCombinaison[0][1]; //return 1 

    //Pour créer une combinaison, je récupère la value [i] de chaque sous-tableau ($table) de $listCombinaison
    $table1 = $listCombinaison[0];
    $table2 = $listCombinaison[1];
    $table3 = $listCombinaison[2];

    echo "Voici la liste des combinaisons : <br>";
    for($i = 0; $i <= $nbCombinaison - 1; $i++){
    $uneCombinaison = $table1[$i] . /*$table2[$i] .*/ $table3[$i];
    echo $uneCombinaison . '<br>';
    };
    
    //COMPARATIF ??

    // Je récupère le plus long segment du triangle
    $maxSegment = max($arrayTriangle); // echo '<br><p>Le plus long côté vaut : ' . $maxSegment . '<br>';
    // J'extraie le $maxSegment et crée un nouveau tableau
    unset($arrayTriangle[array_search($maxSegment, $arrayTriangle)]);
    $shortestSegmentArray = $arrayTriangle;
    // Je calcule la somme des côtés les plus courts du triangle
    $sumSegments = array_sum($shortestSegmentArray); //var_dump($sumSegments);
    // Je vérifie que les paramètres renseignés créent un triangle et que $maxSegment != $sumSegment pour que la condition Triangle Plat retourne true
    if ($maxSegment < $sumSegments && $maxSegment != $sumSegments) {
        echo "Le nombre de triangle réalisable selon les paramètres est : " . $nbTriangle += 1;
    };
}

triangle(2, 3, 4);

?>

<!-- NOTE PERSONNELLE :
Condition d'un triangle plat 
1. Le triangle est constructible si :
    > le plus grand côté est + petit que la somme des 2 autres côtés du triangle, je peux construire un triangle.
2. Le triangle sera plat si : 
    > le plus grand côté est égal à la somme des 2 autres. -->

<!-- TO DO pêle-mêle
La fonction prend en input les dimensions d'un triangle et retourne en output le nombre de triangle réalisable selon ces dimensions 
Une combinaison = x y z
Plusieurs combinaisons = une itération de x y z
Les paramètres se répétent selon un patern > essayer de le reproduire en code php avec des boucles for
Un pattern = 1 tableau
Essayer de faire coincider les key de chaque tableau
Joindre les values de chaque tableau pour créer une combinaison
Vérifier si la combinaison remplie les conditions pour être un triangle et est != triangle plat
Vérifier si les dimensions du triangle exite déjà (reproduit un même triangle)
S'il est nouveau, alors on incrémente le compteur de triangle
 -->




