// Constantes de las 4 teclas
const dcha=document.getElementById('dcha');
const izq=document.getElementById('izq');
const up=document.getElementById('arriba');
const down=document.getElementById('abajo');

// Función, con la cual haremos que se active el :active del CSS al pulsar la tecla
window.addEventListener("keydown", funcionesTeclas);
function funcionesTeclas(event) {
    if(event.key=="ArrowRight"){
        dcha.classList.add("active-style");
    }
    if(event.key=="ArrowLeft"){
        izq.classList.add("active-style");
    }
    if(event.key=="ArrowUp"){
        up.classList.add("active-style");
    }
    if(event.key=="ArrowDown"){
        down.classList.add("active-style-down");
    }
}

// Funcioón para eliminar el :active al dejar de presionar la tecla
window.addEventListener("keyup", eliminarFuncionesTeclas);
function eliminarFuncionesTeclas(event) {
    if(event.key=="ArrowRight"){
        dcha.classList.remove("active-style");
    }
    if(event.key=="ArrowLeft"){
        izq.classList.remove("active-style");
    }
    if(event.key=="ArrowUp"){
        up.classList.remove("active-style");
    }
    if(event.key=="ArrowDown"){
        down.classList.remove("active-style-down");
    }
}