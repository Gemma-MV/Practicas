(function () {
    alert("Hola usuario, le vamos a pedir los siguientes datos: ");
  })();

let frase = prompt('Indique una frase por favor: ');
let letra = prompt('Indique una letra por favor: ');
let contador = 0;

function contar(frase, letra, contador) {
    for (let i = 0; i < frase.length; i++) {
        if(frase[i] == letra){
            contador++;
        }
    }
    return alert('La letra ' + letra + ' aparece ' + contador + ' veces');
}
contar (frase, letra, contador);