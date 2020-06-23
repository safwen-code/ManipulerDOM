//console.log(document.body.childNodes[5].childNodes[1])

// selectione un element par son balise getElementsByTagName
var titreEle = document.getElementsByTagName('h2');
console.log(titreEle[0])
console.log(titreEle.length)

// selectionner un element selon leur class getElementsByClassName
var marvieElement = document.getElementsByClassName('merveilles')
for (let i = 0; i < marvieElement.length; i++) {
    console.log(marvieElement[i])
}

// selectionner un element selon leur id getElementById
var testid = document.getElementById('antiques')
console.log(testid)

// slection un element par son selecteur css ou querySelectorAll
console.log(document.getElementById('antiques').getElementsByClassName('existe'))
console.log(document.querySelectorAll('#antiques > .existe'))

// quelque exemple querySlectorAll
console.log(document.querySelectorAll('p'))
console.log(document.querySelectorAll('#contenu p').length)
console.log(document.querySelectorAll('.existe').length)

// obtenir le contenue html des element ou un element innerHtML
console.log(document.getElementById('contenu').innerHTML)

// text contexuel
console.log(document.getElementById('contenu').textContent)

// les Attribut getAttribute
console.log(document.querySelector('a').getAttribute('href'))

//Certains attributs sont directement accessibles sous la forme de propriétés. 
// C'est notamment le cas pour les attributs id, href et value
console.log(document.querySelector("ul").id)
console.log(document.querySelector('a').href)

//On peut vérifier la présence d'un attribut sur un élément grâce à la méthode hasAttribute
if (document.querySelector("a").hasAttribute('target')) {
    console.log('have a target')
} else {
    console.log("haven't any target")
}

// les classes
//une balise peut posséder plusieurs classes. 
// La propriéte classList permet de récupérer la liste des classes d'un élément du DOM
var classes = document.getElementById('antiques').classList
console.log(classes.length)
console.log(classes[0])

//la possibilité de tester la présence d'une classe dans un élément en appelant la méthode
//  contains sur la liste des classes

if (document.getElementById("antiques").classList.contains("merveilles")) {
    console.log("L'élément identifié par antiques possède la classe merveille")
} else {
    console.log("l'ele identifié par antiques ne posséede pas la class mervielle")
}

// autre test 
if (document.getElementById('nouvelles').classList.contains('fuck you')) {
    console.log('fuck you existe dans id nouvelles')
} else {
    console.error('no class with this name')
}