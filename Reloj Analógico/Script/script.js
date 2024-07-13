const segundos=document.getElementById("segundos");

setInterval(() => {
    let hoy=new Date();

    let gradosSeg=hoy.getSeconds()*6;

    segundos.style.rotate=(hoy.getSeconds()*6)+'deg';


}, 1000);