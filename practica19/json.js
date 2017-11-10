  datos ={
    "nombre":"Daniel",
    "apellido":"Aguilera",
    "edad":20,
    "matricula":4300
}
function nombre(){
  document.getElementById("texto").innerHTML = datos.nombre;
}

function app(){
  document.getElementById("texto").innerHTML = datos.apellido;
}

function edad(){
  document.getElementById("texto").innerHTML = datos.edad;
}

function mat(){
  document.getElementById("texto").innerHTML = datos.matricula;
}

function numprimo(){
  var valor = document.getElementById("valor").value;
  var NumPrimo = true;
  for (var i = 1; i < valor; i++) {
    if(valor/i == Math.round(valor/i) && i!=1 && i!=valor){
      NumPrimo=false;
      break;
    }
  }
  if(NumPrimo)
  console.log(valor+" es Primo");
  else
    console.log(valor+" no es primo");
}

function calcularimg(){
  var random = Math.floor((Math.random()*3)+1);
  console.log(random);
  if(random==1){
    document.getElementById('foto2').src = "img/piedra.png";
    document.getElementById('foto2').name = "piedra";
  }else if(random==2){
    document.getElementById('foto2').src = "img/papel.png";
    document.getElementById('foto2').name = "papel";
  }else{
    document.getElementById('foto2').src = "img/tijera.png";
    document.getElementById('foto2').name = "tijera";
  }
}

function piedra() {
  calcularimg();
  document.getElementById('foto').src = "img/piedra.png";
  document.getElementById('foto').name = "piedra";
  ganador();
}

function papel() {
  calcularimg();
  document.getElementById('foto').src = "img/papel.png";
  document.getElementById('foto').name = "papel";
  ganador();
}
function tijera() {
  calcularimg();
  document.getElementById('foto').src = "img/tijera.png";
  document.getElementById('foto').name = "tijera";
  ganador();
}
