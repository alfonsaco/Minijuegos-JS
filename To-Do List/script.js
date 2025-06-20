const contenedorTareas=document.querySelector(".div-tareas");
const boton=document.querySelector("button");
const input=document.querySelector("input");
const tareas=document.querySelectorAll(".div-tareas .tarea");
let hora=new Date();

// Función agregar tareas
function agregarTarea(texto, contenedor) {
    const nuevaTarea=document.createElement("div");
    nuevaTarea.className='tarea';

    nuevaTarea.innerHTML=`<p>${texto}</p>
                        <i class="fa-solid fa-trash-can"></i>`;
    contenedor.appendChild(nuevaTarea);

    // Eliminar la tarea
    nuevaTarea.querySelector("i").addEventListener("click", function() {
        contenedor.removeChild(nuevaTarea);
    });
}

boton.addEventListener("click", function() {
    if(input.value != '') {
        let texto=input.value;
        agregarTarea(texto,contenedorTareas);

        input.value='';
    }
});

// Para que se agregue la tarea solo con pulsar la tecla "Enter"
window.addEventListener("keydown", function(e) {
    if(e.key == 'Enter') {
        if(input.value != '') {
            let texto=input.value;
            agregarTarea(texto,contenedorTareas);
    
            input.value='';
        }
    }
});