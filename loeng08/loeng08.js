let tervitusElement
let nimi

tervitusElement = document.getElementById('tervitus')
nimi = prompt('Sisesta enda nimi')


tervitusElement.innerHTML = '<h2>' + 'Tere' + nimi + '</h2>'
