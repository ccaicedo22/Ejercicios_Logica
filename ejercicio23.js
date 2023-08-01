/*
Enunciado Ejercicio  23
Dado una cadena de texto,poner en mayuscula la primera letra de cada
palabra en la cadena y luego devolver la cadena.


Ejemplo:

enMayuscula('hola mundo') //Devuelve :  'Hola Mundo'

*/


function enMayuscula(texto){
    let resultado = "";

    for(letra in texto){

        if(texto[letra - 1] === " " || parseInt(letra)===0){
            resultado += texto[letra].toUpperCase();
        }else{
            resultado += texto[letra];
        }
    }
    return resultado;
}

console.log(enMayuscula("hola mundo camarada"));