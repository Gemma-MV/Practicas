let frase = new String(prompt('Indique una frase, por favor.'));
let palabras = frase.split(" ");
let letra = "a";
let contador = 0;

function comprobar(frase) {
    for (let i = 0; i < palabras.length; i+=2) {
        for (let j = 0; j < palabras[i].length; j++) {
            if (palabras[i][j] === 'a') {
                contador++;
            }
        }
    }
    return contador;
}
comprobar();
alert('La letra ' + letra + ' aparece ' + contador + ' veces');