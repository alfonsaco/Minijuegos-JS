const divIconos=document.querySelector(".div-iconos");
const sol=document.getElementById("sun");
const luna=document.getElementById("moon");

divIconos.addEventListener("click", function() {
    // Animación luna y sol
    luna.classList.toggle("ocultar-luna");
    sol.classList.toggle("mostrar-sol");
    // Cambiar modo
    document.body.classList.toggle("dark-mode");
});