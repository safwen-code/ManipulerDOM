//Ajouter un gestionnaire to evenment
function clic() {
    console.log('clicked')
}
var btnEvent = document.getElementById('bouton')
    //ajouter gestionnaire au evenement click
btnEvent.addEventListener('click', clic)

// autre exemple
var btnJareb = document.getElementById('bouton1')
btnJareb.addEventListener('click', () => {
    console.log('nej7et sa7bi')
})

//supprision de gestionnaire au envenement
btnEvent.removeEventListener('click', clic)

//ajouter un gestionnaire affiche le cible et le nom d'evenement
document.getElementById('bouton1').addEventListener('click', (e) => {
    console.log(`l'evenement de type :${e.type} et le cible est: ${e.target.textContent}`)
})

//Gestion d'evenement les plus courant
//Appuie d'un touche de clavier keypress
//String.fromChar Code permet de traduire 
//cette valeur en une chaîne représentant le caractère
document.addEventListener('keypress', (e) => {
    console.log('vous avez clicker sur : ' + String.fromCharCode(e.charCode))
    console.log("even de type " + e.type)
})

//keyCode
function key(e) {
    console.log('evenement clavie : ' + e.type + 'touche' + e.keyCode)
}
// Gestion de l'appui et du relâchement d'une touche du clavier
document.addEventListener("keydown", key);
document.addEventListener("keyup", key);

//click sur un boutonn de souris
function clcikButton(code) {
    var button = 'inconnue'

    switch (code) {
        case 0:
            button = 'gauche';
            break;
        case 1:
            button = "droit";
            break;
        case 2:
            button = "haute";
            break;
        default:
            return button
    }
}

function souris(e) {
    console.log('evenment de souris ' + e.type + "bouton " + clcikButton(e.button) +
        'x: ' + e.clientX + 'y: ' +
        e.clientY)
}
document.addEventListener('click', souris)

//gestion de la fin de chargement de page
window.addEventListener('load', () => {
    console.log("la page est loaded")
})

// Propagation d'evenement
//first step click sur le document
document.addEventListener('click', () => {
        console.log('gestionnaire de document')
    })
    // second step click sur la paragraphe
document.getElementById('para').addEventListener('click', () => {
        console.log('gestionnaire de paragraphe')
    })
    // third step click sur button
document.getElementById('propa').addEventListener('click', (e) => {
    console.log("gestionnaire de bouton")
    e.stopPropagation() //arreter le propagationd'evenement
})

//Modifier le comportement par defaut en cas d'evenement preventDefault
// click sur le lien interdit
document.getElementById('interdit').addEventListener('click', (e) => {
    e.preventDefault() // anuller la navigation sur l'autre lien
    console.log('continuer plustart a consulter le cours')

})