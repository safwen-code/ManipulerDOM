// ajouter un element au debut
var js = document.getElementById('langages')
    .insertAdjacentHTML("afterbegin", '<li id="javascript">javascript</li>')
    //modifier le contenue textuel de noeud h1
var h1 = document.querySelector('h1')
    .textContent += " Programmation"
console.log(h1)

//ajouter un li apres php
var c = document.getElementById('langages')
    .innerHTML += '<li id="C">C</li>'
console.log(c)
    // Ajouter un element createElement
var py = document.createElement('li')
py.id = 'python';
py.textContent = "into python"
var ajouter = document.getElementById('langages')
    .appendChild(py)
console.log(ajouter)
    //creation d'un noeud textuel createTextNode
var ruby = document.createElement('li')
ruby.id = "ruby"
ruby.appendChild(document.createTextNode('intro Ruby'))
var test = document.getElementById('langages')
    .appendChild(ruby)
console.log(test)
    // modier le class de h1
var test = document.querySelector('h1')
test.classList.remove('debut')
test.classList.add('titer')
console.log(test)

// ajouter id au h1
var test = document.querySelector('h1').id = 'titre'
console.log(test)

// Ajouter une paragraphe avec un lien

var p = document.createElement('p')
p.id = "paragraphe"
console.log(p)
var lien = document.createElement('a')
lien.href = 'https://fr.wikipedia.org/wiki/Liste_de_langages_de_programmation'
lien.textContent = "List"
p.appendChild(document.createTextNode('voici le lien'))
p.appendChild(lien)
p.appendChild(document.createTextNode('plus complete'))
console.log(p)
var test = document.getElementById('contenu')
    .appendChild(p)