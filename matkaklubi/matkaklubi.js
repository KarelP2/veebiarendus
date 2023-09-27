const matkadElement = document.getElementById('matkad')
matkadElement.innerHTML = ''

const matk1 = {
    nimetus: 'Jalgsimatk Soomaal',
    pildiUrl: './assets/2.jpg',
    kirjeldus: 'Varakevadine matk Soomaal. Näeme linde, loomi ja kalu'
}

const matk2 = {
    nimetus: 'Jalgsimatk Pärnumaal',
    pildiUrl: './assets/5.jpg',
    kirjeldus: 'Avastame Pärnumaad'
}

const matk3 = {
    nimetus: 'Rännak mägedes',
    pildiUrl: './assets/6.jpg',
    kirjeldus: 'Avastame kõrguseid'
}


const matkad = [matk1, matk2, matk3]


function valjastaMatk(matk) {
    console.log(`
    <h3>
        Matk ${matk.nimetus}
    </h3>
 `)
    let matkmall = `
    <div class="col-md-4 card">
        <img src="${matk.pildiUrl}" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">${matk.nimetus}</h5>
            <p>
                ${matk.kirjeldus}
            </p>
            <a href="#" class="btn btn-primary">Registreeru</a>
        </div>

    </div>
`
matkadElement.innerHTML += matkmall
}

valjastaMatk(matk1)
valjastaMatk(matk2)

//valjastaMatk(matk1)
//valjastaMatk(matk2)

matkad.forEach(valjastaMatk)


