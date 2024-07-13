window.addEventListener("DOMContentLoaded", function() {
    const horas=document.getElementById("horas");
    const minutos=document.getElementById("minutos");
    const segundos=document.getElementById("segundos");

    // Reloj
    setInterval(() => {
        let hoy=new Date();

        if(hoy.getSeconds() < 10) {
            segundos.innerHTML="0"+hoy.getSeconds();
        } else {
            segundos.innerHTML=hoy.getSeconds();
        }

        if(hoy.getMinutes() < 10) {
            minutos.innerHTML="0"+hoy.getMinutes();
        } else {
            minutos.innerHTML=hoy.getMinutes();
        }

        if(hoy.getHours() < 10) {
            horas.innerHTML="0"+hoy.getHours();
        } else {
            horas.innerHTML=hoy.getHours();
        }
    }, 1000);
});