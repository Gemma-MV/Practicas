let valor = () => {
    let letra = prompt('Indique una letra: ');
    switch (letra) {
        case "a":
            alert('El valor de a es 7');
            break;
        case "b":
            alert('El valor de b es 9');
            break;
        case "c":
            alert('El valor de c es 101');
            break;
        default:
            alert('Se ha equivocado de letra');
    }
};
valor();