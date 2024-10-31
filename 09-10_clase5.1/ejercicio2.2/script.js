//let cantidad = parseInt(prompt('Indique la cantidad de guiones que quiere añadir.'));

function construir(cantidad) {
    let cadena = "";
    
    for (let i = 0; i < cantidad; i++) {
        cadena += "_ ";
    }
        let etiqueta = document.createElement("p");
        let contenido = document.createTextNode(cadena);
        etiqueta.appendChild(contenido);
        document.body.appendChild(etiqueta);
}
construir(parseInt(prompt('Indique la cantidad de guiones que quiere añadir.')));