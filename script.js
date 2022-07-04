// slide
let img = document.getElementById("image-home");
let radio1 = document.getElementById("radio1");
let radio2 = document.getElementById("radio2");
let radio3 = document.getElementById("radio3");
let circle = document.getElementsByClassName('circle-home')[0]

setInterval(slide, 2000)

function slide() {

  if (radio1.checked) {
    circle.style.backgroundImage = "url(./assets/home2.svg)"
    radio2.checked = 'checked'
  } else if (radio2.checked) {
    circle.style.backgroundImage = "url(./assets/home3.svg)"
    radio3.checked = 'checked'
  } else if (radio3.checked) {
    circle.style.backgroundImage = "url(./assets/home1.svg)"
    radio1.checked = 'checked'
  }

}
//fim slide

// menu mobile
let menu = document.getElementsByClassName('menu-mobile')[0]
let mobilelist = document.getElementsByClassName('mobile-list')[0]

menu.addEventListener('click', () => {
  menu.classList.toggle('change')
  mobilelist.classList.toggle('open')
})
//fim menu mobile

//fechar menu
let links = document.querySelectorAll('.navlink')

function removemenu() {
  menu.classList.remove('change')
  mobilelist.classList.remove('open')
}
//fim fechar menu

//ocultar menu no scroll
let nav = document.getElementsByClassName('navbar')[0]
let ultimaposiçao = 0


document.addEventListener('scroll', () => {
  let atualposiçao = window.scrollY

  if(atualposiçao > ultimaposiçao) {
    nav.classList.add('hidden')
  } else {
    nav.classList.remove('hidden')
  }

  ultimaposiçao = atualposiçao

})

//fim ocultar menu no scroll