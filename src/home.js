const content = document.getElementById('content')

function createHome(){
    let main = document.createElement('div')
    main.classList.add('main')
    let heroLogo = document.createElement('img')
    heroLogo.src = '../imgs/hero-logo.png'
    heroLogo.classList.add('hero-logo')
    main.appendChild(heroLogo)
    content.appendChild(main)
}

export {createHome}