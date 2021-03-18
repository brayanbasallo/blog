const buttonNav = document.querySelector('.button-nav')
const parts = document.querySelectorAll('.part')
const navLinks = document.querySelectorAll('.nav-links')
const imgPre = document.querySelectorAll('.img-pre')
const imgDestacada = document.querySelector('.imagen-destacada')
const close = document.querySelector('.close')


const imgActive = document.querySelector('.img-active')

for (let i = 0; i < imgPre.length; i++) {
    imgPre[i].addEventListener('click', () => {
        location.hash = "#destacada"
        imgDestacada.style.display = 'block';
        imgActive.src = imgPre[i].firstElementChild.src;
    })
}

for (let i = 0; i < navLinks.length; i++) {
    addEvent(navLinks[i])
}
buttonNav.addEventListener('click', function () {
    toggleNavBar()
})
window.onload = () => {
    const scroll = addEventListener('scroll', function () {
        scrollBar(this.scrollY)
    })
}
close.addEventListener('click', () => {
    location.hash = "#desing"
    imgDestacada.style.display = 'none'
})

/**
 * Esta  función se encarga de agregar un evento a algunos elementos del dom
 * @paran element recibe un elemento del dom
 * */
function addEvent(elementDom) {
    elementDom.addEventListener('click', function () {
        toggleNavBar()
    })
}
/*
* se encarga de detectar cuando el scroll se encuentra en la misma posición que la del
* elemento del dom
* */
function scrollBar(scroll) {
    let x = 1
    for (let i = 0; i < parts.length; i++) {
        if (i !== parts.length - 1) {
            if (scroll >= parts[i].offsetTop && scroll <= parts[x].offsetTop) {
                addStyle(i)
            } else if (scroll >= parts[3].offsetTop) {
                addStyle(x)
            }
            x++
        }
    }
}
/*
* se encarga de limpiar y agregar una clase a algún elemento del dom
* @param numeric indice del elemento a cambiar
*/
function addStyle(index) {
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove('active-nav-link')
    }
    navLinks[index].classList.add('active-nav-link')
}
/*
* agrega o quita clases de algún elemento del dom
* */
function toggleNavBar() {
    buttonNav.classList.toggle('button-nav-active')
    const nav = document.querySelector('.nav')
    nav.classList.toggle('nav-active')
}