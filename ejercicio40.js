/*
Enunciado Ejercicio  40
Dado un array de numeros , devolver el valor mas bajo y el mas alto
*/

function altoBajo(numeros){
    let ordenados = numeros.sort((a,b)=> a - b);

    return {
        bajo: ordenados[0],
        alto: ordenados[ordenados.length - 1]
    }



}


console.log(altoBajo([20,10,5,2,1,59,87,52]))