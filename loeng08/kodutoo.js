let tervitusElement
let nimi




tervitusElement = document.getElementById('tervitus')
nimi = prompt('Sisesta enda lemmikvärv')

if (nimi == 'roheline') {
    tervitusElement.innerHTML = 'See on minu lemmikvärv'
}

if (nimi != 'roheline') {
    tervitusElement.innerHTML = 'See ei ole minu lemmikvärv'
}



