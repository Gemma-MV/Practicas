// Las funciones recursivas se suelen iniciar con un if
function fact(n) {
    if(n == 1){
        return 1;
    }else{
        return n * fact(n-1);
    }
}

const numero = 5;
fact(numero);
console.log(fact(numero));

function fibo(pos) {
    if (pos == 1 || pos == 2) {
        return 1;
    } else {
        return fibo(pos-1) + fibo(pos-2);
    }
}

const fiboPos = 3;
fibo(fiboPos);
console.log(fact(fiboPos));

//Ejercicio funcion recursiva con array
const recurArray = [5, 1, 24, 16];

function maxArray(arr, pos, max) {
    if (pos < arr[pos]) {
        return 1;
    } else {
        return n * maxArray-1;
    }
}
maxArray(recurArray);
console.log(maxArray(recurArray));