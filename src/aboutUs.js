const content = document.getElementById('content')

function createAboutUs(){
    // let header = document.createElement('div')
    // header.classList.add('header')
    // let logo = document.createElement('img')
    // logo.src = '../imgs/logo.png'
    // logo.classList.add('logo')
    // let links = document.createElement('div')
    // links.classList.add('links')
    // let home = document.createElement('p')
    // home.textContent = 'SĀKUMS'
    // home.classList.add('link')
    // home.id = 'home'
    // let aboutUs = document.createElement('p')
    // aboutUs.id = 'aboutUs'
    // aboutUs.textContent = 'PAR MUMS'
    // aboutUs.classList.add('link')
    // aboutUs.classList.add('aboutUs')
    // let menu = document.createElement('p')
    // menu.textContent = 'ĒDIENKARTE'
    // menu.classList.add('link')
    // menu.id = 'menu'
    // let contacts = document.createElement('p')  
    // contacts.textContent = 'KONTAKTI'
    // contacts.classList.add('link')
    // contacts.id = 'contacts'
    // links.appendChild(home)  
    // links.appendChild(aboutUs)  
    // links.appendChild(menu)  
    // links.appendChild(contacts)  
    // header.appendChild(logo)
    // header.appendChild(links)

    let aboutUsDiv = document.createElement('div')
    aboutUsDiv.classList.add('aboutUs')
    let aboutUsTitle = document.createElement('h1')
    aboutUsTitle.textContent = 'PAR'
    aboutUsTitle.classList.add('aboutUsTitle')
    let aboutUsSpan = document.createElement('span')
    aboutUsSpan.textContent = ' mums'
    aboutUsSpan.classList.add('aboutUsSpan')
    aboutUsTitle.appendChild(aboutUsSpan)
    aboutUsDiv.appendChild(aboutUsTitle)

    let aboutUsContent = document.createElement('div')
    aboutUsContent.classList.add('aboutUsContent')
    let aboutUsText = document.createElement('div')
    let p1 = document.createElement('p')
    aboutUsText.appendChild(p1)
    p1.textContent = 'Veidojot Grilbāru & restorānu PARKS, vēlējāmies jelgavniekiem, kā arī pilsētas viesiem radīt vietu, kur satikties, baudīt gardu ēdienu, atspirdzinošus dzērienus, sirsnīgu viesmīlību, pozitīvu un nesteidzīgu atmosfēru.'
    let p2 = document.createElement('p')
    aboutUsText.appendChild(p2)
    p2.textContent = 'Pie mums varēsi nobaudīt gan klasiskas garšas, gan kaut ko neierastāku. Veidojot ēdienkarti, šefpavārs galvenokārt izvēlas produktus un sastāvdaļas, kuras iegūtas tieši Latvijā. Runā, ka pie mums var nogaršot arī vienus no labākajiem burgeriem!'
    let p3 = document.createElement('p')
    aboutUsText.appendChild(p3)
    p3.textContent = 'Esam arī ģimenei draudzīgs restorāns. Mūsu mazajiem viesiem mums ir plašs bērnu spēļu stūrītis – mājiņa, dažādi ēdieni īpaši bērniem kā arī pārtinamie galdiņi pašiem mazākajiem.'
    let p4 = document.createElement('p')
    aboutUsText.appendChild(p4)
    p4.textContent = 'Banketu zālē piedāvājam rīkot seminārus, kooperatīvus pasākumus, svinēt svētkus un īpašus notikumus!'
    aboutUsText.classList.add('aboutUsText')
    aboutUsContent.appendChild(aboutUsText)

    let aboutUsImg = document.createElement('img')
    aboutUsImg.src = '../imgs/about-us-img.jpeg'
    aboutUsContent.appendChild(aboutUsImg)

    aboutUsDiv.appendChild(aboutUsContent)
    content.appendChild(aboutUsDiv)
}

export {createAboutUs}