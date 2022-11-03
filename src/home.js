const content = document.getElementById('content')
import logoImg from '../imgs/logo.png'
import heroBg from '../imgs/hero-bg.jpeg'
import heroLogoImg from '../imgs/hero-logo.png'

function createHome(){
    let main = document.createElement('div')
    main.classList.add('main')
    let heroLogo = document.createElement('img')
    heroLogo.src = heroLogoImg
    heroLogo.classList.add('hero-logo')
    main.appendChild(heroLogo)
    content.appendChild(main)
}

export {createHome}