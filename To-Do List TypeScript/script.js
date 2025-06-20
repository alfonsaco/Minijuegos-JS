"use strict";
let tareas = [];
// Abrir o cerrar formulario
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
// Botón guardar
const btnGuardar = document.querySelector(".btnGuardar");
const descripcion = document.getElementById("descripcion");
// Colores
let color = "";
const colores = document.querySelectorAll(".colores > div");
// Colorear borde
function borrarColores() {
    colores.forEach(c1 => {
        c1.style.border = '1px solid #474747';
    });
}
if (colores) {
    colores.forEach(c => {
        c.addEventListener("click", (event) => {
            var _a;
            borrarColores();
            c.style.border = '2px solid #474747';
            if (c) {
                color = (_a = c.getAttribute("data-color")) !== null && _a !== void 0 ? _a : "";
            }
        });
    });
}
if (btnGuardar) {
    btnGuardar.addEventListener("click", (event) => {
        if (descripcion) {
            let textoDescripcion = descripcion.value;
            if (textoDescripcion != "" && textoDescripcion != null && color != "") {
                tareas.push({ nombre: textoDescripcion, color: color });
                nuevaTarea(textoDescripcion, color);
                color = "";
                descripcion.value = "";
                borrarColores();
                if (dialogo) {
                    dialogo.style.transform = 'translate(-50%, -50%) scale(0)';
                    dialogo.style.visibility = 'hidden';
                }
                if (fondoNegro) {
                    fondoNegro.style.opacity = '0';
                    fondoNegro.style.visibility = 'hidden';
                }
            }
        }
    });
}
function nuevaTarea(nombre, color) {
    const div = document.createElement("div");
    div.className = "tarea-nueva";
    div.style.backgroundColor = color;
    div.innerHTML = `
        <p>${nombre}</p>
        <i class="fa-solid fa-trash"></i>`;
    const borrarTarea = div.querySelector("i");
    borrarTarea === null || borrarTarea === void 0 ? void 0 : borrarTarea.addEventListener("click", () => {
        div.remove();
    });
    const contenedorTareas = document.querySelector(".contenedor > div");
    contenedorTareas === null || contenedorTareas === void 0 ? void 0 : contenedorTareas.appendChild(div);
}
