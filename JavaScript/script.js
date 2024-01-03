
// para el menu hamburguesa
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

// para boton del h1 principal
const button = document.querySelector(".onda-boton");

button.addEventListener("click", drawRipple);

function drawRipple(event) {
  const x = event.clientX - event.target.offsetLeft;
  const y = event.clientY - event.target.offsetTop;

  const ripples = document.createElement("span");
  ripples.style.left = x + "px";
  ripples.style.top = y + "px";

  this.appendChild(ripples);

  setTimeout(() => {
    ripples.remove();
  }, 1000);
}

// para el footer
document.getElementById("year").innerHTML = new Date().getFullYear();


//para el scroll top
var btn = $('#scroll-Top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});