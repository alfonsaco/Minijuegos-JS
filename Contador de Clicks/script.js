let botonContador=document.getElementById('contador');
let contadorNumeros=document.getElementById('numeros');

// Función para sumar números en el contador
botonContador.addEventListener("click", sumaNumeros);
function sumaNumeros() {
   contadorNumeros.value=parseInt(contadorNumeros.value)+1;
}

let botonResultado=document.getElementById('botonResultado');

botonResultado.addEventListener("click", mostrarResultado);
function mostrarResultado() {
   Swal.fire("NÚMERO TOTAL DE CLICKS\n"+contadorNumeros.value);
   contadorNumeros.value=0;
}