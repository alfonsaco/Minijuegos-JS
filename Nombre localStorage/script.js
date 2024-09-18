let nombre=localStorage.getItem("nombreLocal") ? localStorage.getItem("nombreLocal") : '';

// Agregar el nombre al cargar la página
if(localStorage.getItem("nombreLocal")) {
    document.querySelector("h1").textContent += ' ' + localStorage.getItem("nombreLocal");
}

document.querySelector("button").addEventListener("click", function() {
    nombre=document.querySelector("input").value;
    localStorage.setItem("nombreLocal", nombre);
});