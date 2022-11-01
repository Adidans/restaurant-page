const content = document.getElementById('content')

function createHome(){
    let header = document.createElement('div')
    header.classList.add('header')
    let logo = document.createElement('img')
    logo.src = '../imgs/logo.png'
    logo.classList.add('logo')
    let links = document.createElement('div')
    links.classList.add('links')
    let home = document.createElement('p')
    home.textContent = 'SĀKUMS'
    home.classList.add('link')
    let aboutUs = document.createElement('p')
    aboutUs.textContent = 'PAR MUMS'
    aboutUs.classList.add('link')
    let menu = document.createElement('p')
    menu.textContent = 'ĒDIENKARTE'
    menu.classList.add('link')
    let contacts = document.createElement('p')  
    contacts.textContent = 'KONTAKTI'
    contacts.classList.add('link')
    links.appendChild(home)  
    links.appendChild(aboutUs)  
    links.appendChild(menu)  
    links.appendChild(contacts)  
    header.appendChild(logo)
    header.appendChild(links)
    let main = document.createElement('div')
    main.classList.add('main')
    let heroLogo = document.createElement('img')
    heroLogo.src = '../imgs/hero-logo.png'
    heroLogo.classList.add('hero-logo')
    main.appendChild(heroLogo)
    content.appendChild(header)
    content.appendChild(main)
}

export {createHome}