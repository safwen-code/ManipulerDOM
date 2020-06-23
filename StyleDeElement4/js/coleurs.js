 var cloStyle = prompt('donner un color')
 var backStyle = prompt('donner un background color')
 var divEl = document.getElementsByTagName('div')
 for (el of divEl) {
     el.style.color = cloStyle
     el.style.backgroundColor = backStyle
 }