
function crearCeldas(texto) {
    let nodoTd = document.createElement('td');
    let nodoText = document.createTextNode(texto);
    nodoTd.appendChild(nodoText);
    return nodoTd;
}

function crearFila(datosTds) {
    let nodoTr = document.createElement('tr');
    for (let i = 0; i < datosTds.length; i++) {
        nodoTr.appendChild(crearCeldas(datosTds[i]));
    }
    return nodoTr;
}

function crearTabla(datosTrs) {
    let nodoTable = document.createElement('table');
    for (let i = 0; i < datosTrs.length; i++) {
        nodoTable.appendChild(crearFila(datosTrs[i]));
    }
    return nodoTable;
}

const datosTrs = [['a', 'b', 'c', 'd'], ['e', 'f', 'g', 'h', 'j']];
document.body.appendChild(crearTabla(datosTrs));