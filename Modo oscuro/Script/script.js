const divIconos=document.querySelector(".div-iconos");
const sol=document.getElementById("sun");
const luna=document.getElementById("moon");

divIconos.addEventListener("click", function() {
    luna.classList.toggle("ocultar-luna");
    sol.classList.toggle("mostrar-sol");
});