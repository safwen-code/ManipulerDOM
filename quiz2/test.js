var div = document.getElementById('div')
console.log(div)
div.addEventListener('click', () => {
    console.log('click sur un div element')
})
var span = document.getElementById('span')
console.log(span)
span.addEventListener('click', () => {
    console.log('click sur span element')
})

document.getElementById('input').addEventListener('input', () => {
    console.log('coucou')
})

// traiter un objet en chaine el l'inverse
var avion = [{
    marc: "tunisiare",
    matricule: "2508"
}]
console.log(avion)
    // Transforme l'objet JavaScript en chaîne de caractères JSON
var test = JSON.stringify(avion)
console.log(test)
    // Transforme la chaîne de caractères JSON en objet JavaScript
console.log(JSON.parse(test))
var test1 = JSON.parse(test)
var div = document.getElementById('avion')
avion.forEach(element => {
    div.textContent = element
});