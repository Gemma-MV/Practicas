let frase = prompt('Por favor, indique una frase.');

function invertir(frase) {
    let palabras = frase.split(" ");
    let palabrasInvertidas = palabras.reverse();
    let fraseInvertida = palabrasInvertidas.join(" ");
    return fraseInvertida;
}
invertir(frase);
alert('Cadena invertida: ' + invertir(frase));