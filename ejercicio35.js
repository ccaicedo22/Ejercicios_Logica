/*
Enunciado Ejercicio  35
Dado un array,crear otro con el primer y el ultimo elemento del original
*/

function primeroYultimo(numeros){
    let nuevos_elementos = [];
    nuevos_elementos.push(numeros[0],numeros[numeros.length - 1]);


    return nuevos_elementos;
}

console.log(primeroYultimo([100,200,300,780]));

