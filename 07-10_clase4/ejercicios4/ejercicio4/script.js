let usuario, clave; // Se pueden declarar 2 variables en un solo let
const USUARIO_CORRECTO = "admin";
const CLAVE_CORRECTO = "1234";
let contador = 0;

do {
    // El do es el bucle que se repite
    usuario = prompt('Indique su usuario: ');
    clave = prompt('Indique su contraseña: ');
    if (usuario != USUARIO_CORRECTO || clave != CLAVE_CORRECTO) {
        contador++;
        alert('Datos incorrectos. ' + 'Quedan ' + (3 - contador) + ' intentos.');
    }
} while ((usuario != USUARIO_CORRECTO || clave != CLAVE_CORRECTO) && contador <3);
// El while es el comparador que se tiene que cumplir para que se repita el bucle
if (contador <3) {
    alert('Datos correctos');
}