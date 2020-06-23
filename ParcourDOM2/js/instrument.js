// afficher les information sur les lien

function infoLien() {
    var cibleLien = document.getElementsByTagName('a')
    var lenglien = cibleLien.length
    console.log(lenglien)
    if (lenglien > 0) {
        console.log(document.querySelector('a').href)
        console.log(cibleLien[lenglien - 1].href)
    }
}

infoLien()

const possede = (id, classes) => {
    var inst = document.getElementById(id)
    if (inst !== null) {
        console.log(inst.classList.contains(classes))
    } else {
        console.error("no classes for this id")
    }
}

possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur