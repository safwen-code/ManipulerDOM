var h = document.head; // La variable h contient l'objet head du DOM
console.log(h);


var b = document.body; // La variable h contient l'objet body du DOM
console.log(b)


// les type de noeud  : nodeType
// document.ELEMENT_NODE pour un nœud "élément" (balise HTML)
// document.TEXT_NODE pour un noeud textuel

if (document.body.nodeType === document.ELEMENT_NODE) {
    console.log('body un noeud element')
} else {
    console.log('body un noeud textuel')
}

// acceder au child de node par childNode
// exemple : acceder au preimierchild de body
console.log(document.body.childNodes[0])

// exemple : acceder au deuxiemchild de body
console.log(document.body.childNodes[1])

//afficher les noeud enfant de corp body with for
for (let i = 0; i < document.body.childNodes.length; i++) {
    console.log(document.body.childNodes[i])
}

//parentNode qui renvoie son nœud parent sous la forme d'un objet DOM.
console.log("test parentNode")
console.log(document.parentNode) // me donne null : document acunne node parent
console.log("2 eme testparent node")
var h = document.body.childNodes[1]
console.log(h.parentNode) // affiche le body