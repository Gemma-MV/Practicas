function darEnlace() {
    let parrafo = document.getElementsByTagName('p')[2];
    alert(parrafo.getElementsByTagName('a').length);
}
darEnlace();