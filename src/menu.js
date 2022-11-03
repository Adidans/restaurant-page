const content = document.getElementById('content')

function createMenu(){

    let menuDiv = document.createElement('div')
    menuDiv.classList.add('menu')
    let menuTitle = document.createElement('h1')
    menuTitle.textContent = 'PARKS'
    menuTitle.classList.add('menuTitle')
    let menuSpan = document.createElement('span')
    menuSpan.textContent = ' ēdienkarte'
    menuSpan.classList.add('menuSpan')
    menuTitle.appendChild(menuSpan)
    menuDiv.appendChild(menuTitle)

    let menuText = document.createElement('p')
    menuText.textContent = 'Grilbārs & restorāns PARKS vari nobaudīt gan klasiskas garšas un pārbaudītas vērtības, gan kaut ko neierastāku un netradicionālāku. Veidojot ēdienkarti, šefpavārs galvenokārt izvēlas vietējos un sezonālos produktus. Mūsu ēdienkartes iedvesmas avots ir ne tikai latviešu virtuve, bet arī cittautu pavārmākslas tendences. Gardi paēdis cilvēks - laimīgs cilvēks!'
    menuText.classList.add('menuText')
    menuDiv.appendChild(menuText)

    let menuButton = document.createElement('a')
    menuButton.classList.add('menuButton')
    menuButton.textContent = 'APLŪKOT ĒDIENKARTI'
    menuButton.addEventListener('click',() => {
        window.open('../dist/menu.pdf', '_blank');
    })
    menuDiv.appendChild(menuButton)


    content.appendChild(menuDiv)
}

export {createMenu}