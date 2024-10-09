let usuario;
let clave;
let usuarioCorrecto = "admin";
let claveCorrecta = "1234";
let contador = 0;

do {
    usuario = prompt('Indique su usuario: ');
    contador++;
    clave = prompt('Indique su contraseña: ');
    contador++;
} while (usuario != usuarioCorrecto && contador <3 || clave != claveCorrecta && contador <3);

if (contador == 3) {
    alert('Incorrecto');
} else {
    alert('Correcto');
}