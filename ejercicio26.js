/*
Enunciado Ejercicio  26
Dado un numero , mostrar la serie de fibonacci.
la serie de fibonacci es un orden de numeros donde cada numero es la suma de los dos anteriores.
*/

function fib(numero){
    let serie = [0,1];

    for(let i=2;i<=numero;i++){
        serie.push(serie[i - 1]+ serie[i - 2]);
    }

    return [serie , serie[numero]];
}

console.log(fib(10));