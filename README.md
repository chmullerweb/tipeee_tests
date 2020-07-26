# Tests Techniques

Tests techniques réalisés dans le cadre d'un recrutement pour un stage de 6 mois en Développement Web Fullstack Vue.js / PHP / Node.js / HTML / CSS

## Note

Pour lire le fichier triangle.php, connectez-vous à votre serveur local

### TEST 1

- Créer un function PHP, qui prend en paramètre 3 nombres (function triangle(x, y, z)
- Chaque paramètre correspond à la taille d'un coté du triangle.  
- La fonction doit retourner le nombre de triangle possible en fonction des paramètres, sans les doublons.
- Un triangle ne peut pas être plat
- Attention de pas faire de brut force 

Exemple  :
function triangle(2, 2, 3) 

Taille possible
1 1 1 => ok 
1 1 2 => échec (triangle plat)
1 1 3 => échec (triangle plat)  
1 2 1 => échec (triangle plat)   
1 2 2 => ok
1 2 3 => échec (triangle plat) 
2 1 1 => échec (triangle plat) 
2 1 2 => ok mais pareil que 1 2 2
2 1 3 => échec (triangle plat) 
2 2 1 => ok mais pareil que 1 2 2 
2 2 2 => ok
2 2 3 => ok

Return => 4


### TEST 2

- Créer un composant vue.js, pour la gestion de tâches 
- Suivre les vidéos framework et le TP TodoList (https://www.grafikart.fr/formations/vuejs)   
- Faire en plus des tâches, des sous tâches, un peu comme des commentaires de commentaires.


## Lecture et Inspiration

* Style Css pour la todolist : http://todomvc.com/examples/vue/
* Chaine YT : https://www.youtube.com/c/learncodeacademy/featured
* Cours et Tutos : https://www.grafikart.fr/tutoriels/vuejs

