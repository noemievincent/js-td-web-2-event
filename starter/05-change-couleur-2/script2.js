/*
SOURCE : https://github.com/oc-courses/javascript-web/tree/gh-pages/chapitre_5/js
*/
/*
EXERCICE 5bis : Change couleur (2) - Colorie la page en fonction des touches pressées
- Change la couleur de fond du body lorsque l'utilisateur appuie sur une des touches
    R (rouge), J (jaune), V (vert) ou B (bleu),
    que ce soit en minuscules ou en majuscules
    et affiche le message 'Touche … non gérée' s'il presse une autre touche.
- Méthode : Cette fois, JS ne fait qu'appliquer une classe sur le body, c'est CSS qui se charge de le styler.
- PRESSÉ ? : tu peux repartir du code de la version précédente, il n'y a qu'une modification mineure à opérer.
*/
const eBody = document.body;
document.addEventListener('keypress', (event)=> {
    let eKey = String.fromCharCode(event.charCode);
    eKey = eKey.toUpperCase();
    if (eKey === 'B'){
        eBody.setAttribute('class', 'blue' );
    }
    else if (eKey === 'V'){
        eBody.setAttribute('class', 'green' );
    }
    else if (eKey === 'J'){
        eBody.setAttribute('class', 'yellow' );
    }
    else if (eKey === 'R'){
        eBody.setAttribute('class', 'red' );
    }
});