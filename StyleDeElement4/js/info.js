var styleEle = getComputedStyle(document.getElementById('contenu'))
    // console.log(styleEle)
var ulEle = document.createElement('ul')
var lang = document.createElement('li')

lang.textContent = "langeur" + styleEle.height
console.log(lang)

var haut = document.createElement("li")
haut.textContent = "hauteur" + styleEle.haut
console.log(haut)

ulEle.appendChild(lang)
ulEle.appendChild(haut)
console.log(ulEle)
var text = document.createTextNode("notre defferent params")
console.log(text)
document.getElementById('infos').appendChild(text)
document.getElementById('infos').appendChild(ulEle)