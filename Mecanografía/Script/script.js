const teclas=document.querySelectorAll(".playable");
const contador=document.querySelector(".puntos h1");

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

            contador.innerHTML++;
        } else {
            contador.innerHTML--;
        }

        if(contador.innerHTML > 0) {
            contador.style.color='rgb(53, 141, 53)';
        } else if(contador.innerHTML==0) {
            contador.style.color='#464646';
        } else {
            contador.style.color='brown';
        }
    });
});



// Aviso (me aburro)
document.querySelector(".teclado").addEventListener("click", function() {
    alert("SOLO ESTÁ PERMITIDO JUGAR CON LAS TECLAS, NO VALE CLICKAR");
});
