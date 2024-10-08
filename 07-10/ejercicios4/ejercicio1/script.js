let n1 = parseInt(prompt('Indique el primer numero: '));
let num2 = parseInt(prompt('Indique el segundo numero: '));
let num3 = parseInt(prompt('Indique el tercer numero: '));

function mayor(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        alert('El primer numero es menor');
    } else {
        if (num1 < num2 && num2 < num3) {
            alert('El segundo numero es menor');
        } else {
            alert('El ultimo numero es menor');
        }
    }    
}

mayor(n1, num2, num3);