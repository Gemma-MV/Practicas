const operaciones = (num1, num2) => {
    let suma = parseFloat(num1) + parseFloat(num2);
    let resta = num1 - num2;
    return [suma, resta];
};