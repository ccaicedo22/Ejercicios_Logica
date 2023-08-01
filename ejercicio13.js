/*
Enunciado Ejercicio 13
Dado un array,dividirlo en tantos sub-arrays como sea necesario
basandonos en un numero que indique su tamaño

Dividirlo en arrays de X elementos.

Ejemplos:
dividirArray([7,8,9,10],2)

//Devuelve
[[7,8],[9,10]]
*/


function dividirArray(arreglo_principal , numero_elementos){

    let arreglos = [];

    for( let elemento of arreglo_principal){

        let ultimo = arreglos[arreglos.length-1];

        if(!ultimo || ultimo.length === numero_elementos){
            arreglos.push([elemento]);
        }else{
            ultimo.push(elemento);
        }
    }
    return arreglos;

}

console.log(dividirArray([7,8,9,10,5,5,6,8],2));