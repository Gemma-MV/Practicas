function darEnlace() {
    let enlaces = document.getElementsByTagName('a');
    let contador = 0;
    let atributo = "http://prueba/";
    for (let i = 0; i < enlaces.length; i++) {
        if (enlaces[i].href == atributo) {
            contador++;
        }
    }
    alert("Hay " + contador + " enlaces que llevan el atributo: " + atributo);
}
darEnlace();