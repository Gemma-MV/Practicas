let usuario 
let clave 
let usuarioCorrecto = "admin";
let claveCorrecta = "1234";
let contador = 0

do {
    usuario = prompt('Indique su usuario: ');
    contador++;
} while (usuario != usuarioCorrecto && contador <3);
alert('Usuario correcto');

do {
    clave = prompt('Indique su contraseña: ');
    contador++;
} while (clave != claveCorrecta && contador <3);
alert('Contraseña correcta');