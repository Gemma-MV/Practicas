// Asignar nombres a elementos de objetos pasados por parámetro
function imprime ([ saludo, hora ]) {
    console.log(`${saludo}, buenos ${hora}`);
}
imprime("hola", "dias"); //Quita los [] y explica lo que pasa

let misConocimientos = ['variables', 'operadores', 'estructuras de control', 'funciones'];
    let aprendido = ['spread', 'local storage'];
    let misConocimientosAmpliados = [...misConocimientos, ...aprendido, 'otra cosa más'];
    console.log(misConocimientosAmpliados);