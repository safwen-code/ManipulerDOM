// modifier le contenue a notre page ajoutant une nouvell li au ul 'language'
document.getElementById('langages').innerHTML += '<li id= "c">c+++</li>'
    // ajoutant p a notre div contenu
document.getElementById('contenu').innerHTML += '<p > hello word</p>'
    // suppression de contenue de ul langages
    // document.getElementById("langages").innerHTML = ""

//modifier de contenue textuel d'element textContent
document.querySelector('h1').textContent += " programmation"

// setAttribute permet de définir la valeur de l'un des attributs d'un élément.
// Elle prend en paramètres le nom et la valeur de cet attribut

document.querySelector("h1").setAttribute("id", "titer")
    //modifier l'element directement sous la form de propritée
document.querySelector('h1').id = "test"
document.querySelector('a').href = "https://openclassrooms.com/"

// Les classes classList pour ajouter ou supp du class de DOM
// add pour ajouter remove pour supprimer
var test = document.querySelector('h2')
test.classList.remove('second')
test.classList.add('work')
console.log(test)

//Ajouter element createElement
var python = document.createElement('li') // cree ele li
python.id = "python" // creer identifiant d'element
python.textContent = "intro python" //cree le contenue textuel
var added = document.getElementById("langages").appendChild(python) // insertion de nouveau element
console.log(added)

//creation d'un noeud textuel createTextNode

var ruby = document.createElement('li') //creer ele li
ruby.id = "ruby" //creer identifiant d'element
ruby.appendChild(document.createTextNode('ruby')) //creer le contenue textuel
var test = document.getElementById('langages').appendChild(ruby) //insertion de nouvel element
console.log(test)

//Ajouter un noeud avant un autre noeud insertBefore
var perl = document.createElement('li') // creer ele
perl.id = "perl" //creer identifiant
perl.textContent = "Perl" // creeer le contenue textuel
var test = document.getElementById('langages').insertBefore(perl,
        document.getElementById('php')
    ) // Ajout du nouvel élément avant l'identifiant identifié par "php"
console.log(test)

//choix de la position exact de noeud insertAdjacentHTMl
//insertAdjacentHTMl prend 2parameter la postion el le texthtml
// beforebegin: avant l'élément existant lui-même.
// afterbegin: juste à l'intérieur de l'élément existant, avant son premier enfant.
// beforeend: juste à l'intérieur de l'élément existant, après son dernier enfant.
// afterend: après l'élément existant lui-même
var js = document.getElementById('langages')
    .insertAdjacentHTML("afterbegin", '<li id="js">java script</li>')

//remplacer un noeud exsistant replaceChild
var react = document.createElement('li')
react.id = "react"
react.textContent = "react"
var test = document.getElementById("langages")
    .replaceChild(react, document.getElementById('cpp'))
console.log(test)

//Spprimer un noeud exsistant removeChild
var csharp = document.getElementById('langages')
    .removeChild(document.getElementById('csharp'))
console.log(csharp)


// Conclusion
// Les propriétés innerHTML,textContent et classList ainsi que la méthodes et setAttribute 
// permettent de modifier les informations d'un élément du DOM

// La création d'un nouveau noeud s'effectue avec 
// les méthodes createTextNode pour un noeud textuel et createElement pour un élément.

// La méthode appendChild permet d'insérer un nouveau noeud comme dernier enfant d'un élément du DOM.

// Les méthodes insertBefore et insertAdjacentHTML
// offrent des possibilités alternatives pour ajouter  du contenu

// On peut remplacer un noeud existant avec la méthode replaceChild ou 
// le supprimer avec removeChild