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

