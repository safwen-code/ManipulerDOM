// function enfant(noeud, indice) {
//     if (noeud.nodeType === document.ELEMENT_NODE) {
//         if ((indice >= 0) && (indice < noeud.childNodes.length)) {
//             console.log(noeud.childNodes[indice]);
//         } else {
//             console.error("Indice incorrect");
//         }
//     } else {
//         console.error("Type de noeud incorrect");
//     }
// }

const enfant = (noeud, indice) => {
    if (noeud.nodeType === document.ELEMENT_NODE) {
        if ((indice >= 0) && (indice < noeud.childNodes.length)) {
            console.log(noeud.childNodes[indice])
        } else {
            console.error("indice incorrect")
        }
    } else {
        console.log("il est de type textuel")
    }
}

// Doit afficher le noeud h1
enfant(document.body, 1);

// Doit afficher l'erreur "Indice incorrect"
// L'indice demandé est négatif
enfant(document.body, -1);

// Doit afficher l'erreur "Indice incorrect"
// Le noeud body a moins de 9 noeuds enfants
enfant(document.body, 8);

// Doit afficher l'erreur "Type de noeud incorrect"
// Le premier noeud enfant de body est textuel et n'a donc pas d'enfants
enfant(document.body.childNodes[0], 0);