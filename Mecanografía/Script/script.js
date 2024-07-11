const teclas=document.querySelectorAll(".playable");
console.log(teclas);

// Para iniciar una tecla al cargar la página
window.addEventListener("DOMContentLoaded", function() {
    let random=(Math.round(Math.random()*(teclas.length-1)));
    teclas[random].classList.add("tecla-pulsar");
    // Set para evitar repetidos
    let noRepetidas=new Set();

    // Juego de las teclas
    window.addEventListener("keydown", function(event) {
        noRepetidas.add(random);
        // En caso de que se acierte:
        if(event.key.toUpperCase() === teclas[random].getAttribute("data-tecla")) {
            teclas[random].classList.remove("tecla-pulsar");

            do {
                random=(Math.round(Math.random()*(teclas.length-1)));
            } while(noRepetidas.has(random));

            noRepetidas.clear();
            teclas[random].classList.add("tecla-pulsar");
        }
    });
});


// Aviso (me aburro)
document.querySelector(".teclado").addEventListener("click", function() {
    alert("SOLO ESTÁ PERMITIDO JUGAR CON LAS TECLAS, NO VALE CLICKAR");
});
