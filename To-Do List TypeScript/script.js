"use strict";
const botonAbrirDialogo = document.querySelector(".boton-nueva-tarea");
const dialogo = document.querySelector(".dialogo-tarea");
const fondoNegro = document.querySelector(".fondo-negro");
if (botonAbrirDialogo) {
    botonAbrirDialogo.addEventListener("click", (event) => {
        if (dialogo) {
            if (dialogo.style.transform == 'translate(-50%, -50%) scale(1)') {
                // OCULTAR
                dialogo.style.transform = 'translate(-50%, -50%) scale(0)';
                dialogo.style.visibility = 'hidden';
                if (fondoNegro) {
                    fondoNegro.style.opacity = '0';
                    fondoNegro.style.visibility = 'hidden';
                }
            }
            else {
                // MOSTRAR
                dialogo.style.transform = 'translate(-50%, -50%) scale(1)';
                dialogo.style.visibility = 'visible';
                if (fondoNegro) {
                    fondoNegro.style.opacity = '1';
                    fondoNegro.style.visibility = 'visible';
                }
            }
        }
    });
}
if (fondoNegro) {
    fondoNegro.addEventListener("click", (event) => {
        if (fondoNegro.style.opacity = '1') {
            // MOSTRAR
            if (dialogo) {
                dialogo.style.transform = 'translate(-50%, -50%) scale(0)';
                dialogo.style.visibility = 'hidden';
            }
            fondoNegro.style.opacity = '0';
            fondoNegro.style.visibility = 'hidden';
        }
    });
}
