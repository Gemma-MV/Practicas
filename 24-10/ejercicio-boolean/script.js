let dato;
for (let i = 0; i < 6; i++) {
    dato = prompt('Indique un numero: ');
}

let bool1 = new Boolean([dato[0] > dato[2] && dato[1] < dato[3] && dato[4] == dato[5]]);

if (bool1) {
    console.log("Esta ordenado segun criterio");
} else {
    console.log("No esta ordenado segun criterio");
}