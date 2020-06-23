//repeter une action a interval réguliare
var copt = document.getElementById('compteur')

function dimunerCompteur() {
    var compteur = Number(copt.textContent)
    copt.textContent = compteur - 1
}
setInterval(dimunerCompteur, 1000)

//anuller une action repeter
var compt = document.getElementById('compteur')

function stoperCompteur() {
    var compteur = Number(compt.textContent)
    if (compteur > 1) {
        compt.textContent = compteur - 1
    } else {
        clearInterval(intervalId)
        document.getElementById('titre').textContent = 'boom'
            // Modification du titre au bout de 2 secondes
        setTimeout(function() {
            titre.textContent = "Tout est cassé :(";
        }, 2000)
    }
}
var intervalId = setInterval(stoperCompteur, 1000)


//annimer des element dans votre page
var bloc = document.getElementById("bloc");
var vitesse = 7; // Valeur du déplacement en pixels

// Déplace le bloc sur sa gauche
function deplacerBloc() {
    // Conversion en nombre de la position gauche du bloc (valeur de la forme "XXpx")
    var xBloc = parseFloat(getComputedStyle(bloc).left);
    // Déplacement du bloc
    bloc.style.left = (xBloc + vitesse) + "px";
    // Demande au navigateur d'appeler deplacerBloc dès que possible
    requestAnimationFrame(deplacerBloc);
}
requestAnimationFrame(deplacerBloc); // Début de l'animation