const tiempo=document.getElementById("cronometro");
const horas=document.getElementById("horas");
const minutos=document.getElementById("min");
const segundos=document.getElementById("seg");
const miliseg=document.getElementById("milseg");
// Botones
const play=document.querySelector(".fa-play");
const pause=document.querySelector(".fa-pause");
const reset=document.querySelector(".fa-redo-alt");
// Contadores
let contMil=0;
let contSeg=0;
let contMin=0;
let contHoras=0;
// Booleano para evitar que el contador se ejecute varias veces a la vez
let unoALaVEz=true;

play.addEventListener("click", function() {
    if(unoALaVEz==true) {

        // Lo metemos todos en un mismo intervalo
        let crono=setInterval(() => {
            contMil+=10;

            if(contMil>=1000) {
                contMil=0;
                contSeg++;

                if(contSeg>=60) {
                    contSeg=0;
                    contMin++;

                    if(contMil>=60) {
                        contMil=0;
                        contHoras++;

                        if(contHoras>=24) {
                            contHoras=0;
                        }
                    }
                }
            }

            if(contMil <= 9) {
                miliseg.innerHTML="00"+contMil;
            }  else if(contMil <= 99) {
                miliseg.innerHTML="0"+contMil;
            } else {
                miliseg.innerHTML=contMil;
            }
            
            if(contSeg <= 9) {
                segundos.innerHTML="0"+contSeg;
            } else {
                segundos.innerHTML=contSeg;
            }

            if(contMin <= 9) {
                minutos.innerHTML="0"+contMin;
            } else {
                minutos.innerHTML=contMin;
            }

            if(contHoras <= 9) {
                horas.innerHTML="0"+contHoras;
            } else {
                horas.innerHTML=contHoras;
            }

        }, 10);

        unoALaVEz=false;

        // Pausar
        pause.addEventListener("click", function() {
            clearInterval(crono);

            unoALaVEz=true;
        });

        // Resetear
        reset.addEventListener("click", function() {
            clearInterval(crono);
            contMil=0;
            miliseg.innerHTML="000";
            contSeg=0;
            segundos.innerHTML="00";
            contMin=0;
            minutos.innerHTML="00";
            contHoras=0;
            horas.innerHTML="00";

            unoALaVEz=true;
        });
    }
});

