/*
Enunciado Ejercicio 5
¿Cuanto es el x por ciento de  x numero?

Ejemplos:
tantoPorCiento(20,100)  //Devuelve: 20
tantoPorCiento(43,897)  //Devuelve: 385.71
*/

function tantoPorCiento(porcentaje,numero){
    let operacion = (numero * (porcentaje/100));
    let resultado = `El ${porcentaje}% de ${numero} es: ${operacion}`

    return resultado;
}

console.log(tantoPorCiento(43,897));