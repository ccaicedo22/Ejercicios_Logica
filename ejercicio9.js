/*
Enunciado Ejercicio 9
Dado dos arrays, devolver array con solo los elementos comunes entre ambos.

Ejemplos:
elementosComunes([4,5,6,7][7,8,9,7,5]) //Devuelve: [5,7]

*/

function elementosComunes(array1,array2){
    const filtrado = array1.filter(elemento => {
        return array2.includes(elemento)
        });
    
    return filtrado;

}

console.log("Elementos comunes:",elementosComunes([4,5,6,7],[7,8,9,7,5]));