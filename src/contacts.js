const content = document.getElementById('content')
import mapSvg from '../imgs/map.svg'
import phoneSvg from '../imgs/phone.svg'
import emailSvg from '../imgs/email.svg'

function createContacts(){

    let contactsDiv = document.createElement('div')
    contactsDiv.classList.add('contactsDiv')
    let map = document.createElement('iframe')
    map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2193.239447737973!2d23.72113461612189!3d56.65294152967491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46ef2545e8be53ad%3A0x2a453aa1bb84593a!2zUGFya3MsIEdyaWxixIFycyAmIHJlc3RvcsSBbnM!5e0!3m2!1slv!2slv!4v1667429130843!5m2!1slv!2slv"

    let contactsInfo = document.createElement('div')
    contactsInfo.classList.add('contactsInfo')

    let email = document.createElement('div')
    email.classList.add('contact')
    let emailIco = document.createElement('img')
    emailIco.src = emailSvg
    emailIco.classList.add('icon')
    email.appendChild(emailIco)
    let emailText = document.createElement('p')
    emailText.textContent = "lietvediba@mitavasrestorani.lv"+"\n"+"banketi@restoransparks.lv"
    emailText.classList.add('contactsText')
    email.appendChild(emailText)
    contactsInfo.appendChild(email)

    let phone = document.createElement('div')
    phone.classList.add('contact')
    let phoneIco = document.createElement('img')
    phoneIco.src = phoneSvg
    phoneIco.classList.add('icon')
    phone.appendChild(phoneIco)
    let phoneText = document.createElement('p')
    phoneText.textContent = "Rezervācijām\n(+371) 20118881"
    phoneText.classList.add('contactsText')
    phone.appendChild(phoneText)
    contactsInfo.appendChild(phone)

    let location = document.createElement('div')
    location.classList.add('contact')
    let locationIco = document.createElement('img')
    locationIco.src = mapSvg
    locationIco.classList.add('icon')
    location.appendChild(locationIco)
    let locationText = document.createElement('p')
    locationText.textContent = "Kr. Barona iela 3 - 1A,\nJelgava, LV–3001"
    locationText.classList.add('contactsText')
    location.appendChild(locationText)
    contactsInfo.appendChild(location)

    contactsDiv.appendChild(map)
    contactsDiv.appendChild(contactsInfo)

    content.appendChild(contactsDiv)
}


export {createContacts}