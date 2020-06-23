// var test = document.body.childNodes[1].childNodes[3];
// console.log(test)

// var test1 = document.querySelector('#cible')
// console.log(test1)

// var test = document.getElementsByTagName('li')[1]
// console.log(test)

// var test = document.getElementById('cible')
// console.log(test)

var farine = document.createElement('li')
farine.id = 'farine'
farine.textContent = 'farine'
var test = document.getElementById('courses').appendChild(farine)
console.log(test)