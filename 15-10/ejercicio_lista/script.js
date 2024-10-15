//Creamos los arrays que contendran los textos
const array_DL = [
    ['Red Telefónica Conmutada (RTC)', 'La línea telefónica de toda la vida. Para acceder a Internet es necesario un módem.'],
    ['Red Digital de Servicios Integrados (RDSI)', 'Una línea telefónica especial. Para acceder a Internet es necesario un módem RDSI.'],
    ['Línea de Abonado Digital Asimétrica (ADSL)', 'Se basa en la conversión de una línea RTC en una línea de alta velocidad. Para acceder a Internet es necesario un módem ADSL'],
    ['Fibra Óptica', 'Una línea de fibra óptica. Normalmente la fibra óptica no llega hasta el usuario final, por lo que el término más apropiado es Fibra híbrida coaxial.']
];

// Creamos el nodo DD y DT
function crear_nodo(tipo, texto) {
    let nodo;
    let nodoTexto = document.createTextNode(texto);
    if (tipo == 'dt') {
        nodo = document.createElement('dt');
    } else {
        nodo = document.createElement('dd');
    }
    nodo.appendChild(nodoTexto);
    return nodo;
}

function crearDL(datos) {
    let nodoDL = document.createElement('dl');
    for (let i = 0; i < datos.length; i++) {
        nodoDL.appendChild(crear_nodo('dt', datos[i][0]));
        nodoDL.appendChild(crear_nodo('dd', datos[i][1]));
    }
    return nodoDL;
}
document.body.appendChild(crearDL(array_DL));