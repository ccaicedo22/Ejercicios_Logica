/*
Enunciado Ejercicio 18
Dado un numero,mostrar todos sus numeros divisores

*/

function divisor(numero , posible_divisor){

    if(numero%posible_divisor ===0){
        return posible_divisor;
    }
    return 0;
}

function mostrarDivisores(numero){

    for(let i=1;i<=numero;i++){
        let esDivisor = divisor(numero,1);

        if(esDivisor) console.log(esDivisor);

    }
}


console.log(mostrarDivisores(5))
