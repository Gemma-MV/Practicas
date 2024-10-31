function construir(cantidad) {
    let cadena = "";
    
    for (let i = 0; i < cantidad; i++) {
        cadena += "*";
        for (let j = 0; j < i; j++) {
            let etiqueta = document.createElement("p");
            let contenido = document.createTextNode(cadena);
            etiqueta.appendChild(contenido);
            document.body.appendChild(etiqueta);
        }
    }
}
construir(parseInt(prompt('Indique la cantidad de guiones que quiere añadir.')));


/*

function construir(cantidad) {
    let cadena = "";
    
    for (let i = 0; i < cantidad; i++) {
        
        for (let j = 0; j <= i; j++) {
            cadena += "*";
            
        }
        let etiqueta = document.createElement("p");
            let contenido = document.createTextNode(cadena);
            etiqueta.appendChild(contenido);
            document.body.appendChild(etiqueta);
        cadena = "";
    }
}
construir(parseInt(prompt('Indique la cantidad de guiones que quiere añadir.')));
*/ 