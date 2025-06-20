// Lista de tareas
type Tarea = {
    nombre: string,
    color: string
}
let tareas: Tarea[] = [];

// Abrir o cerrar formulario
const botonAbrirDialogo = document.querySelector(".boton-nueva-tarea") as HTMLDivElement | null;
const dialogo = document.querySelector(".dialogo-tarea") as HTMLDivElement | null;
const fondoNegro = document.querySelector(".fondo-negro") as HTMLDivElement | null;

if(botonAbrirDialogo) {
    botonAbrirDialogo.addEventListener("click", (event: MouseEvent) => {
        if(dialogo) {
            if(dialogo.style.transform == 'translate(-50%, -50%) scale(1)') {
                // OCULTAR
                dialogo.style.transform = 'translate(-50%, -50%) scale(0)'
                dialogo.style.visibility='hidden';

                if(fondoNegro) {
                    fondoNegro.style.opacity='0';
                    fondoNegro.style.visibility='hidden';
                }
                
            } else {
                // MOSTRAR
                dialogo.style.transform = 'translate(-50%, -50%) scale(1)'
                dialogo.style.visibility='visible';

                if(fondoNegro) {
                    fondoNegro.style.opacity='1';
                    fondoNegro.style.visibility='visible';
                }
            }
        }
    });
}

if(fondoNegro) {
    fondoNegro.addEventListener("click", (event: MouseEvent) => {
        if(fondoNegro.style.opacity='1') {
            // MOSTRAR
            if(dialogo) {
                dialogo.style.transform = 'translate(-50%, -50%) scale(0)'
                dialogo.style.visibility='hidden';
            }
   
            fondoNegro.style.opacity='0';
            fondoNegro.style.visibility='hidden';
        }
    });
}

// Botón guardar
const btnGuardar = document.querySelector(".btnGuardar") as HTMLDivElement | null;
const descripcion = document.getElementById("descripcion") as HTMLInputElement | null;

// Colores
let color: string = "";
const colores = document.querySelectorAll<HTMLDivElement>(".colores > div");

// Colorear borde
function borrarColores() : void {
    colores.forEach(c1 => {
        c1.style.border='1px solid #474747';
    });
}
if(colores) {
    colores.forEach(c => {
        c.addEventListener("click", (event: MouseEvent) => {
            borrarColores();

            c.style.border='2px solid #474747';

            if(c) {
                color = c.getAttribute("data-color") ?? "";
            }
        });
    });
}

if(btnGuardar) {
    btnGuardar.addEventListener("click", (event: MouseEvent) => {
        if(descripcion) {
            let textoDescripcion: string = descripcion.value;
            
            if(textoDescripcion != "" && textoDescripcion != null && color != "") {
                tareas.push({nombre: textoDescripcion, color: color});
                nuevaTarea(textoDescripcion, color);
                
                color="";
                descripcion.value="";
                borrarColores();

                if(dialogo) {
                    dialogo.style.transform = 'translate(-50%, -50%) scale(0)'
                    dialogo.style.visibility='hidden';
                }

                if(fondoNegro) {
                    fondoNegro.style.opacity='0';
                    fondoNegro.style.visibility='hidden';
                }
            }
        }
    });
}

function nuevaTarea(nombre: string, color: string) : void {
    const div = document.createElement("div");
    div.className = "tarea-nueva";
    div.style.backgroundColor=color;
    div.innerHTML = `
        <p>${nombre}</p>
        <i class="fa-solid fa-trash"></i>`

    const borrarTarea = div.querySelector("i");
    borrarTarea?.addEventListener("click", () => {
        div.remove();
    })

    const contenedorTareas=document.querySelector(".contenedor > div") as HTMLDivElement | null;
    contenedorTareas?.appendChild(div);
}