const content = document.getElementById('content')
import aboutUsJpeg from '../imgs/about-us-img.jpeg'

function createAboutUs(){

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
    aboutUsImg.src = aboutUsJpeg
    aboutUsContent.appendChild(aboutUsImg)

    aboutUsDiv.appendChild(aboutUsContent)
    content.appendChild(aboutUsDiv)
}

export {createAboutUs}