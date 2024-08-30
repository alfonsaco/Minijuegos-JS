const area=document.getElementById("area-pulsar");
const contador=document.getElementById("contador");

const reset=document.querySelector(".reset");
const mensaje=document.getElementById("mensaje");

let cont=0;
let estado=false;

// Juego contador clicks
area.addEventListener("click", function() {
    if(cont == 0) {
        estado=true;
        cont++;
        contador.textContent=cont;
        setTimeout(() => {
            estado=false;

            mensaje.classList.add("aparecer-mensaje");
            mensaje.querySelector("p").innerHTML=`TOTAL CLICKS: <span>${cont}</span> <br>
                                                  CLICKS POR SEGUNDO: <span>${cont/5}</span>`;
        }, 100);
    } else {
        if(estado != false) {
            cont++;
            contador.textContent=cont;
        }
    }
});

// Resetear juego
reset.addEventListener("click", function() {
    cont=0;
    contador.textContent=cont;

    mensaje.classList.remove("aparecer-mensaje");

});