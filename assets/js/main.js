let sliderInner=document.querySelector('.slider--inner');

let imagenes=sliderInner.querySelectorAll('img');

let cartaActual = imagenes[indiceCartaActual];

var formInicio = document.getElementById("form-start");

var seccionInicio = document.getElementById("home");

var seccionCartas = document.getElementById("cartas");

let index=1;

var indiceCartaActual = 0;

formInicio.addEventListener("submit", function(event) {
    event.preventDefault();

    //var nombre = document.getElementById("name").value;
    seccionInicio.classList.remove("section-visible");
    seccionCartas.classList.add("section-visible");

    barajarCartas();
    cargarCarta();
});

function cargarCarta() {

  cartaActual = imagenes[indiceCartaActual];
  
  progreso(); 
}

setInterval(function(){

    let percentage=index*-90;

    sliderInner.style.transform="translateX("+percentage+"%)";

    index++;

    if(index > (imagenes.length-1)){
        index=0;
    }

    progreso();

},3000);

function progreso(){
    const progressBar = document.querySelector('.progress-bar');
    
    let progress = 0;
    
    const intervalId = setInterval(() => {
      progress += 33.33;
      progressBar.style.width = `${progress}%`;
      
      if (progress >= 100) {
        clearInterval(intervalId);
      }
    }, 500);
}

function barajarCartas() {
  var cartas = [imagenes];
  for (var i = cartas.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = cartas[i];
    cartas[i] = cartas[j];
    cartas[j] = temp;
  }
  imagenes.innerHTML = cartas;
  return cartas;
}

