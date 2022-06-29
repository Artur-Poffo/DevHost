// slide
let img = document.getElementById("image-home");
let radio1 = document.getElementById("radio1");
let radio2 = document.getElementById("radio2");
let radio3 = document.getElementById("radio3");
let circle = document.getElementsByClassName('circle-home')[0]

function slide() {
  if (radio1.checked) {
    circle.style.backgroundImage = "url(./assets/home1.svg)"
  }

  if (radio2.checked) {
    circle.style.backgroundImage = "url(./assets/home2.svg)"
  }

  if (radio3.checked) {
    circle.style.backgroundImage = "url(./assets/home3.svg)"
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