const segundos=document.getElementById("segundos");
const minutos=document.getElementById("minutos");
const horas=document.getElementById("horas");
// Reloj
setInterval(() => {
    let hoy=new Date();

    segundos.style.rotate=(hoy.getSeconds()*6)+'deg';
    minutos.style.rotate=(hoy.getMinutes()*6)+'deg';
    horas.style.rotate=(hoy.getHours()*30)+'deg';

}, 1000);

// For para crear los números
const cifras=document.getElementById("cifras");

let grados=0;
for (let i = 0; i < 12; i++) {
    cifras.innerHTML+='<div class="numero" style="rotate: '+grados+'deg"</div>';
    grados+=30;
}