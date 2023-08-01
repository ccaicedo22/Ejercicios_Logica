/*
Enunciado Ejercicio  28
Dado un numero , devolver su factorial
el factorial de un numero es la multiplicacion de todos los numeros
hasta llegar a el.
*/

function factorial(numero){
    let resultado = 1;

    for(let i=1;i<=numero;i++){
        resultado *= i;
    }
    return resultado;
}

console.log(factorial(5));