let palabras = ['manzanas', 'peras', 'platanos', 'kiwis', 'cerezas']; 

function burbuja(palabras) {
    let longitud = palabras.length;
    for (let i = 0; i < longitud - 1; i++) {
        for (let j = 0; j < longitud - 1 - i; j++) {
            if (palabras[j] > palabras[j + 1]) {
                let temp = palabras[j];
                palabras[j] = palabras[j + 1];
                palabras[j + 1] = temp;
            }
        }
    }
    return console.log(palabras);
}
burbuja();