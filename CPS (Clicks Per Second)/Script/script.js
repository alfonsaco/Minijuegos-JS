const area=document.getElementById("area-pulsar");
const contador=document.getElementById("contador");

const reset=document.querySelector(".reset");
const mensaje=document.getElementById("mensaje");

let cont=0;
let estado=false;

const segundos=document.querySelectorAll("#segundos div");
let tiempo=10;
let booleanTiempo=true;
console.log(segundos)

// Se usarán 10s por defecto
segundos[2].classList.add("segundo-activo");

segundos.forEach(seg => {
    seg.addEventListener("click", function() {
        segundos.forEach(s => {
            s.classList.remove("segundo-activo");
        });
        seg.classList.add("segundo-activo");
        
        if(booleanTiempo == true) {
            tiempo=seg.textContent;
        }
    })
});


// Juego contador clicks
area.addEventListener("click", function() {
    booleanTiempo=false;
    if(cont == 0) {
        estado=true;
        cont++;
        contador.textContent=cont;
        setTimeout(() => {
            estado=false;
            booleanTiempo=true;

            mensaje.classList.add("aparecer-mensaje");
            mensaje.querySelector("p").innerHTML=`TOTAL CLICKS: <span>${cont}</span> <br>
                                                  CLICKS POR SEGUNDO: <span>${cont/tiempo}</span>`;
        }, (tiempo*1000));
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