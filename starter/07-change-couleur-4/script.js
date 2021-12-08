/*
EXERCICE 6 : Change couleur (4) - v1
Quand on clique sur un des boutons radio, la couleur de fond de la page change dans la couleur choisie
Version 1  : une fonction par bouton radio
	À faire après pour préparer la version 2 : 
		(1) un alert dans une fonction pour voir à quoi correspond e.target
		(2) un alert dans chaque fonction pour voir à quoi correspond e.target.value
*/

(function(){
    const oChangeCouleur = {
        init(){
            const aBtns = document.querySelectorAll('input');
            const eBody = document.body;

            for (const eBtn of aBtns) {
                eBtn.addEventListener('click', (event)=>{
                    eBody.style.backgroundColor = eBtn.value;
                });
            }

            const eSurpriseBtn = document.querySelector('#boutonCouleur');
            eSurpriseBtn.addEventListener('click', (event)=>{
                eBody.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
            });
        }
    }
oChangeCouleur.init();
})();


