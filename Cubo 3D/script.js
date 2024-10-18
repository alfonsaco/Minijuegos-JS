// Inputs
const inputX=document.querySelector(".rotateX");
const inputY=document.querySelector(".rotateY");
const inputZ=document.querySelector(".rotateZ");

// Botón
const botonRotar=document.querySelector("button");

// Cubo
const cubo=document.querySelector(".cubo");

botonRotar.addEventListener("click", function() {
    cubo.style.transform=`rotateX(${inputX.value}deg) rotateY(${inputY.value}deg) rotateZ(${inputZ.value}deg)`;
});

window.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        cubo.style.transform=`rotateX(${inputX.value}deg) rotateY(${inputY.value}deg) rotateZ(${inputZ.value}deg)`;
    }
});