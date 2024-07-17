// Espera a que se cargue completamente el DOM antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function () {
    // Obtén una referencia al contenedor de la cuadrícula de bloques
    const cuadricula = document.querySelector('.cuadricula');

    // Obtén una referencia al elemento donde se mostrará el nombre del bloque
    const nombresBorde = document.querySelector('.nombresBorde');

    // Agrega un event listener para el evento 'mouseover' en la cuadrícula
    cuadricula.addEventListener('mouseover', function (event) {
        // Verifica si el elemento sobre el cual ocurrió el evento es una imagen
        if (event.target.tagName === 'IMG') {
            // Obtiene el valor del atributo 'data-bloque' del elemento padre de la imagen
            const dataBloque = event.target.parentElement.getAttribute('data-bloque');

            // Establece el contenido del elemento 'nombresBorde' con el valor obtenido
            nombresBorde.textContent = dataBloque;
        }
    });

    // Agrega un event listener para el evento 'mouseout' en la cuadrícula
    cuadricula.addEventListener('mouseout', function () {
        // Borra el contenido del elemento 'nombresBorde' cuando el mouse sale de la imagen
        nombresBorde.textContent = '';
    });
});
