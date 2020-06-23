// Liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];



for (el of journaux) {
    var lienElt = document.createElement("a");
    lienElt.textContent = el;
    lienElt.href = el;
    // Ajoute un lien
    document.getElementById("contenu").appendChild(lienElt);
    // Ajoute une balise <br>
    document.getElementById("contenu").appendChild(document.createElement("br"));
}