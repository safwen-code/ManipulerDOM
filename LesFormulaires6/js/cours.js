//saisir le valeur de notre input
var inputEle = document.getElementById('pseudo')
console.log(inputEle)
inputEle.value = "give me name"


//focus and blur exemple :inputEle.focus()
// afficher un message textuel pour  input
inputEle.addEventListener('focus', () => {
        document.getElementById('aidePseudo').textContent = 'entrer votre nom please'
    })
    //Supprimer un message textuel
inputEle.addEventListener('blur', () => {
    document.getElementById('aidePseudo').textContent = ''
})
inputEle.focus()

//case a cocher true false   change
var chek = document.getElementById('confirmation')
console.log(chek)
chek.addEventListener('change', (e) => {
    console.log('demande de comfirmation : ' + e.target.checked)
})

// radio connaitre le type 
var radType = document.getElementsByName('abonnement')
console.log(radType)
for (let i = 0; i < radType.length; i++) {
    radType[i].addEventListener('change', (e) => {
        console.log('le type de dormule choisie est : ' + e.target.value)
    })
}

//List déroulante
document.getElementById('nationalite').addEventListener('change', (e) => {
    console.log('le code de nationalitée : ' + e.target.value)
})

//form acceder a notre champ a partir une propriéte elements
var form = document.querySelector("form")
console.log(form)
console.log('le nbrs du champs dans notre form est : ' + form.elements.length)
console.log(form.elements[0].name)
console.log(form.elements.mdp.type)
console.log(form.elements.courriel.name + " de type : " + form.elements.courriel.type)

//soumission du formulaire
//afficher de tous les données saisir ou choisir
form.addEventListener('submit', (e) => {
    var pseudo = form.elements.pseudo.value
    var mdp = form.elements.mdp.value
    var courriel = form.elements.courriel.value
    console.log('vs avz choisi ' + pseudo + ' de motpasse ' + mdp + ' et de courriel ' + courriel)
    if (form.elements.confirmation.checked) {
        console.log("Vous avez demandé une confirmation d'inscription par courriel");
    } else {
        console.log("Vous n'avez pas demandé de confirmation d'inscription par courriel");
    }
    switch (form.elements.abonnement.value) {
        case 'abonewspromo':
            console.log('vs avz une abonnement newlettre')
            break;
        case 'abonews':
            console.log('vs avz une abonnement abonews')
            break;
        case 'aborien':
            console.log('vs avz une abonnement aborien')
            break;
        default:
            console.log('vs avz aucune abonnement')
    }
    switch (form.elements.nationalite.value) {
        case 'FR':
            console.log('vs avz choisie france')
            break;
        case 'BE':
            console.log('vs avz choisie belge')
            break;
        case 'SUI':
            console.log('vs avz choisie suise')
            break;
        case 'XX':
            console.log('vs avz choisie suise')
            break;
        default:
            console.log('aucun choix')
    }

    e.preventDefault()
})


//Validation pendant le saisir exemple password input
// Vérification de la longueur du mot de passe saisi
document.getElementById("mdp").addEventListener("input", function(e) {
    var mdp = e.target.value; // Valeur saisie dans le champ mdp
    var longueurMdp = "faible";
    var couleurMsg = "red"; // Longueur faible => couleur rouge
    if (mdp.length >= 8) {
        longueurMdp = "suffisante";
        couleurMsg = "green"; // Longueur suffisante => couleur verte
    } else if (mdp.length >= 4) {
        longueurMdp = "moyenne";
        couleurMsg = "orange"; // Longueur moyenne => couleur orange
    }
    var aideMdpElt = document.getElementById("aideMdp");
    aideMdpElt.textContent = "Longueur : " + longueurMdp; // Texte de l'aide
    aideMdpElt.style.color = couleurMsg; // Couleur du texte de l'aide
});

//validation a la fin de saisie
// document.getElementById('courriel').addEventListener('blur', (e) => {
//     var testValidation = ""
//     if (e.target.value.indexOf('@') === -1) {
//         testValidation = "address invalide"
//     }
//     var aideCourriel = document.getElementById('aideCourriel')
//     aideCourriel.textContent = testValidation

// })

//Prmier pas avec regex
var reg = /@/
console.log(reg.test('')) //affiche false
console.log(reg.test('@')) // affiche true
console.log(reg.test('safwen@gmail.com')) // affiche true

//validation de notre courriel avec regex
document.getElementById('courriel').addEventListener("blur", (e) => {
    // Correspond à une chaîne de la forme xxx@yyy.zzz
    var regexCourriel = /.+@.+\..+/;
    var testCouriel = ""
    if (!regexCourriel.test(e.target.value)) {
        testCouriel = "validatiopn error"
    } else {
        testCouriel = "bien my Friend"
    }
    document.getElementById('aideCourriel').textContent = testCouriel
})