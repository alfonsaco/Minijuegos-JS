const tiempo=document.getElementById("cronometro");
const horas=document.getElementById("horas");
const minutos=document.getElementById("min");
const segundos=document.getElementById("seg");
let miliseg=tiempo.innerHTML.split(".")[1];

const play=document.querySelector(".fa-play");
const pause=document.querySelector(".fa-pause");
const reset=document.querySelector(".fa-redo-alt");
// Contadores
let contMil=0;
let contSeg=0;
let contMin=0;
let contHoras=0;

play.addEventListener("click", function() {
    // Milisegundos
    let milInt=setInterval(() => {
        contMil++;
        if(contMil <= 9) {
            miliseg.innerHTML="00"+contMil;
        }  else if(contMil <= 99) {
            miliseg.innerHTML="0"+contMil;
        } else {
            miliseg.innerHTML=contMil;
        }

        if(miliseg==59) {
            miliseg=-1;
        }
    }, 100);

    // Segundos
    let segInt=setInterval(() => {
        contSeg++;
        if(contSeg <= 9) {
            segundos.innerHTML="0"+contSeg;
        } else {
            segundos.innerHTML=contSeg;
        }

        if(contSeg==59) {
            contSeg=-1;
        }
    }, 1000);
    
    // Minutos
    let minInt=setInterval(() => {
        contMin++;
        if(contMin <= 9) {
            minutos.innerHTML="0"+contMin;
        } else {
            minutos.innerHTML=contMin;
        }

        if(contMin==59) {
            contMin=-1;
        }
    }, 60000);

    // Horas
    let horaInt=setInterval(() => {
        contHoras++;
        if(contHoras <= 9) {
            horas.innerHTML="0"+contHoras;
        } else {
            horas.innerHTML=contHoras;
        }

        if(contHoras==59) {
            contHoras=-1;
        }
    }, 36000000);


    pause.addEventListener("click", function() {
        clearInterval(segInt);
        clearInterval(minInt);
        clearInterval(horaInt);
    });

    reset.addEventListener("click", function() {
        clearInterval(segInt);
        contSeg=0;
        segundos.innerHTML="00";

        clearInterval(minInt);
        contMin=0;
        minutos.innerHTML="00";

        clearInterval(horaInt);
        contHoras=0;
        horas.innerHTML="00";
    });
});

