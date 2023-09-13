var imagenes = [
  "resources/images/a1.jpg",
  "resources/images/a2.jpg",
  "resources/images/a3.jpg",
  "resources/images/a4.jpg",
];
document.Imagen.src = imagenes[0];

var SliderDerecha = document.querySelector(".slider-der");
var SliderIzquierdo = document.querySelector(".slider-izq");

var count = 0;

function movDerecha() {
  count++;
  if (count > imagenes.length - 1) {
    count = 0;
  }
  document.Imagen.src = imagenes[count];
}
var intervalo = setInterval(movDerecha, 5000);

SliderDerecha.addEventListener("click", function () {
  clearInterval(intervalo);
  movDerecha();
  intervalo = setInterval(movDerecha, 5000);
});

function movIzquierda() {
  count--;
  if (count < 0) {
    count = imagenes.length - 1;
  }
  document.Imagen.src = imagenes[count];
}

SliderIzquierdo.addEventListener("click", function () {
  clearInterval(intervalo);
  movIzquierda();
  intervalo = setInterval(movDerecha, 5000);
});
