// Modifier le color et margin de p
var pEle = document.querySelector('p')
pEle.style.color = 'red'
pEle.style.margin = "50px"

//prop css composée
pEle.style.backgroundColor = "black"
pEle.style.fontFamily = "Arial"

//acceder au style d'un element
var par = document.getElementsByTagName('p')
for (el of par) {
    if (el.style.color) {
        console.log(el.style.color)
    } else {
        console.error(`no color for this ${el} `)
    }
}

//bon fct pour acceder au style d'ele getComputedStyle
const para = getComputedStyle(document.getElementById('para'))
console.log(para.color)
console.log(para.fontStyle)