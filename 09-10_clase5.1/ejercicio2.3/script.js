function construir(cantidad) {
    let cadena = "";
    
    for (let i = 0; i < cantidad; i++) {
        switch (i%3) {
            case 0:
                cadena = cadena + "*";
                break;
            case 1:
                // += es la forma abreviada para la concatenacion de: ej: cadena = cadena + "*";
                cadena += "+";
                break;
            case 2:
                cadena += "_";
                break;
        }
    }
        let etiqueta = document.createElement("p");
        let contenido = document.createTextNode(cadena);
        etiqueta.appendChild(contenido);
        document.body.appendChild(etiqueta);
}
construir(parseInt(prompt('Indique la cantidad de simbolos que quiere añadir.')));