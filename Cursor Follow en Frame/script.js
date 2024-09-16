const frame=document.querySelector(".frame");
const cursorFollow=document.getElementById("cursor-follow")

window.addEventListener("mousemove", function(e) {
    const posicion=frame.getBoundingClientRect();
    let x=e.clientX-posicion.left;
    let y=e.clientY-posicion.top;
    // Resto 10 para cuadrarlo con el tamaño del cursor (20px)
    cursorFollow.style.transform=`translateY(${y-10}px) translateX(${x-10}px)`;
});