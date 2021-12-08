/*
SOURCE : https://github.com/oc-courses/javascript-web/tree/gh-pages/chapitre_5/js
*/
/*
EXERCICE 5 : Change couleur (2) - Colorie la page en fonction des touches pressées
- Change la couleur de fond du body lorsque l'utilisateur appuie sur une des touches
    R (rouge), J (jaune), V (vert) ou B (bleu),
    que ce soit en minuscules ou en majuscules
    et affiche le message 'Touche … non gérée' s'il presse une autre touche.
- Méthode : utilise un switch pour gérer les différents cas de touches
*/

document.addEventListener('keypress', (event)=> {
    let eKey = String.fromCharCode(event.charCode);
    eKey = eKey.toUpperCase();
    if (eKey === 'B'){
        document.querySelector('body').style.backgroundColor = 'blue';
    }
    else if (eKey === 'V'){
        document.querySelector('body').style.backgroundColor = 'green';
    }
    else if (eKey === 'J'){
        document.querySelector('body').style.backgroundColor = 'yellow';
    }
    else if (eKey === 'R'){
        document.querySelector('body').style.backgroundColor = 'red';
    }
})


/* 
N.B. La méthode de récupération de la touche pressée dans le tutoriel est dépréciée et plus compliquée (on récupère le code de la touche et puis il faut encore y appliquer une fonction pour transformer ce code en lettre) :
var touche = String.fromCharCode(e.charCode); // Récupération de la touche pressée
touche = touche.toUpperCase(); // Pour gérer indifféremment minuscules et majuscules
 => il existe une méthode plus directe, voir documentation : 
 https://developer.mozilla.org/fr/docs/Web/API/KeyboardEvent
*/