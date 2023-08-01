/*
Enunciado Ejercicio 14
Dado un string y un numero, repetir el string tantas veces
como el numero indique

Ejemplos:
repiteme("carlos",2)

//Devuelve
carloscarlos
*/

function repiteme(texto,numero){
    let resultado = "";

    for(let i =0 ;i< numero; i++){
        resultado += texto;
    }
    return resultado;
}

console.log(repiteme("carlos",8));