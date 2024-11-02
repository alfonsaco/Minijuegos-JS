const contenedor = document.querySelector("main");

let tablero = Array(16).fill().map(() => Array(16).fill(0));

let contBomba = 0;
let ponerBomba = 0;

// AÑADIR BOMBAS AL TABLERO
for (let i = 0; i < tablero.length; i++) {
    for (let e = 0; e < tablero.length; e++) {
        if (contBomba < 25) {
            ponerBomba = Math.round(Math.random() * 10);
            if (ponerBomba == 1) {
                tablero[i][e] = -1;
                contBomba++;
            }
        }
    }
}

// AÑADIR NUMEROS AL TABLERO
for (let i = 0; i < tablero.length; i++) {
    for (let e = 0; e < tablero.length; e++) {
        if (tablero[i][e] != -1) {
            // Celda izquierda
            if (e > 0 && tablero[i][e - 1] === -1) {
                tablero[i][e]++;
            }

            // Celda derecha del elemento
            if (e < tablero[i].length - 1 && tablero[i][e + 1] === -1) {
                tablero[i][e]++;
            }

            // Celda de arriba
            if (i > 0 && tablero[i - 1][e] === -1) {
                tablero[i][e]++;
            }

            // Celda de abajo
            if (i < tablero.length - 1 && tablero[i + 1][e] === -1) {
                tablero[i][e]++;
            }

            // Celda arriba izquierda
            if (i > 0 && e > 0 && tablero[i - 1][e - 1] === -1) {
                tablero[i][e]++;
            }

            // Celda arriba derecha
            if (i > 0 && e < tablero[i].length - 1 && tablero[i - 1][e + 1] === -1) {
                tablero[i][e]++;
            }

            // Celda abajo derecha
            if (i < tablero.length - 1 && e < tablero[i].length - 1 && tablero[i + 1][e + 1] === -1) {
                tablero[i][e]++;
            }

            // Celda abajo izquierda
            if (i < tablero.length - 1 && e > 0 && tablero[i + 1][e - 1] === -1) {
                tablero[i][e]++;
            }
        }
    }

}


// IMPRIMIR TABLERO
let cadena = '';
for (let i = 0; i < tablero.length; i++) {
    for (let e = 0; e < tablero.length; e++) {
        cadena += tablero[i][e] + " ";
    }
    cadena += '\n';
}
console.log(cadena);

// CREAR TABLERO EN EL HTML
tablero.forEach((fila, y) => {
    fila.forEach((celda, x) => {
        const divCelda = document.createElement("div");
        divCelda.classList.add("celda");

        if (celda === -1) {
            divCelda.classList.add("bomba");
        } else if (celda === 1) {
            divCelda.classList.add("uno");
            divCelda.textContent = '1';
        } else if (celda === 2) {
            divCelda.classList.add("dos");
            divCelda.textContent = '2';
        } else if (celda === 3) {
            divCelda.classList.add("tres");
            divCelda.textContent = '3'
        } else if (celda === 4) {
            divCelda.classList.add("cuatro");
            divCelda.textContent = '4';
        }

        contenedor.appendChild(divCelda);
    });
});