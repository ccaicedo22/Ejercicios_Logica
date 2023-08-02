/*
Enunciado Ejercicio  32
Dado un array de numeros ,devolver el array con sus numeros elevados al cuadrado
(numero multipicado por si mismo)

el array debe eliminar cualquier contenido que no sea numerico
*/
function alCuadrado(numeros){

    let numeros_cuadrados = numeros
        .filter(numero => typeof numero ==="number")
        .map(numero => Math.pow(numero,2));


    return numeros_cuadrados;
}


console.log(alCuadrado([12,56,77,"hola"]));