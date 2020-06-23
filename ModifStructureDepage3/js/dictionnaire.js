// Liste des mots du dictionnaire
var mots = [{
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];

var dlEle = document.createElement('dl')

mots.forEach(el => {
    var dtEle = document.createElement('dt')
    var strong = document.createElement('strong')
    strong.textContent = el.terme;
    console.log(strong)
    var ddEle = document.createElement('dd')
    ddEle.textContent = el.definition
    console.log(ddEle)
    dlEle.appendChild(dtEle)
    dtEle.appendChild(strong)
    dtEle.appendChild(ddEle)
})

var test = document.getElementById('contenu').appendChild(dlEle)

console.log(test.innerText)