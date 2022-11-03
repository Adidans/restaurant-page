const content = document.getElementById('content')

function createHeader(){
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
    home.id = 'home'
    home.classList.add('home')
    let aboutUs = document.createElement('p')
    aboutUs.id = 'aboutUs'
    aboutUs.textContent = 'PAR MUMS'
    aboutUs.classList.add('link')
    let menu = document.createElement('p')
    menu.textContent = 'ĒDIENKARTE'
    menu.classList.add('link')
    menu.id = 'menu'
    let contacts = document.createElement('p')  
    contacts.textContent = 'KONTAKTI'
    contacts.classList.add('link')
    contacts.id = 'contacts'
    links.appendChild(home)  
    links.appendChild(aboutUs)  
    links.appendChild(menu)  
    links.appendChild(contacts)  
    header.appendChild(logo)
    header.appendChild(links)

    content.appendChild(header)
}

export {createHeader}