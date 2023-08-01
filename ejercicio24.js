/*
Enunciado Ejercicio  24
Dado un array de enteros  y un numero , detectar si esa lista de numeros es una 
permutacion del 1 al numero aportado

En este caso una permutacion es una secuencia de numeros en orden
sin que falte ninguno entre ellos

*/

function permutacion(secuencia ,numero){

    for(let i=0;i< numero;i++){

        if(secuencia.indexOf(i+1)<0){
            return false;
        }

    }
    return true;
}



console.log(permutacion([1,2,3,4,5],5));