/*
Enunciado Ejercicio  43
Dado un array de numeros , sacar la media de todos ellos
*/

function laMedia(numeros){

    let suma = numeros.reduce((valorAcumulado, numeroActual)=>{
        return valorAcumulado + numeroActual;
    });

    let media = Math.floor(suma / numeros.length);

    return media;
}

console.log(laMedia([20,40,50,60,1,2,3]));
