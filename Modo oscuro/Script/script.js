document.addEventListener("DOMContentLoaded", function() {
    const divIconos=document.querySelector(".div-iconos");
    const sol=document.getElementById("sun");
    const luna=document.getElementById("moon");


    divIconos.addEventListener("click", function() {
        // Animación luna y sol
        luna.classList.toggle("ocultar-luna");
        sol.classList.toggle("mostrar-sol");
        // Cambiar modo
        document.body.classList.toggle("dark-mode");

        // Condiciones para que en el caso de que se haya pulsado en el botón (se agrega la clase dark-mode al body),
        // se ponga por defecto esa clase al entrar en la página
        if(document.body.classList.contains("dark-mode")){
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });

    // En caso de que esté habilitado, se añaden las clases
    if(localStorage.getItem("darkMode") == "enabled"){
        luna.classList.add("ocultar-luna");
        sol.classList.add("mostrar-sol");
        // Cambiar modo
        document.body.classList.add("dark-mode");
    }
});