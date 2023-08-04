/*
Enunciado Ejercicio  42
Dado dos numeros, sacar un numero aleatorio entre ellos.
*/


function aleatorio(minimo,maximo){
        return Math.round(Math.random()*(maximo - minimo)+ minimo);
}


console.log(aleatorio(1,100))