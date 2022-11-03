import { createHome } from "./home.js";
import { createAboutUs } from "./aboutUs.js";
import {createMenu} from "./menu.js"
import {createContacts} from "./contacts.js"
import {createHeader} from "./header.js"

createHeader()
createHome()

const links = document.querySelectorAll('.link')
const content = document.getElementById('content')
const home = document.getElementById('home')
const aboutUs = document.getElementById('aboutUs')
const menu = document.getElementById('menu')
const contacts = document.getElementById('contacts')


links.forEach(link  =>{
    link.addEventListener('click', () =>{
        if(link.id == 'home'){
            menu.classList.remove('menu')
            contacts.classList.remove('contacts')
            aboutUs.classList.remove('aboutUs')
            home.classList.add('home')
            content.removeChild(content.lastChild)
            createHome();
        }
        else if(link.id == 'aboutUs'){
            home.classList.remove('home')
            menu.classList.remove('menu')
            contacts.classList.remove('contacts')
            aboutUs.classList.add('aboutUs')
            content.removeChild(content.lastChild)
            createAboutUs();
        }
        else if(link.id == 'menu'){
            menu.classList.add('menu')
            contacts.classList.remove('contacts')
            aboutUs.classList.remove('aboutUs')
            home.classList.remove('home')
            content.removeChild(content.lastChild)
            createMenu();
        }
        else if(link.id == 'contacts'){
            menu.classList.remove('menu')
            contacts.classList.add('contacts')
            aboutUs.classList.remove('aboutUs')
            home.classList.remove('home')
            content.removeChild(content.lastChild)
            createContacts();
        }
    })
})