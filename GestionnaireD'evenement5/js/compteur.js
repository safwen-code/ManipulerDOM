var compteur = 0;

function clic() {
    compteur++
    document.getElementById('compteurClics').textContent = compteur
    console.log(compteur)
}

document.getElementById('clic').addEventListener('click', clic)

document.getElementById('desactiver').addEventListener('click', () => {
    document.getElementById('clic').removeEventListener('click', clic)
})