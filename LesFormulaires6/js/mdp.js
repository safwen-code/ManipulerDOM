var form = document.querySelector('form')
console.log(form)
console.log(form.elements.mdp1)
console.log(form.elements.mdp2)

form.addEventListener('submit', (e) => {
    var mdp1 = form.elements.mdp1.value
    console.log(mdp1)
    var mdp2 = form.elements.mdp2.value
    console.log(mdp2)
    var message = "Mots de passe OK";
    if (mdp1 === mdp2) {
        if (mdp1.length >= 6) {
            var regexMdp = /\d+/;
            if (!regexMdp.test(mdp1)) {
                message = "Erreur : le mot de passe ne contient aucun chiffre";
            }
        } else {
            message = "Erreur : la longueur minimale du mot de passe est de 6 caractères";
        }
    } else {
        message = "Erreur : les mots de passe saisis sont différents";
    }
    var info = document.getElementById('infoMdp')
    info.textContent = message
    console.log(info)
    e.preventDefault()

})