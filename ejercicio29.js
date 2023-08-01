/*
Enunciado Ejercicio  29
Dado un numero , indicar si es un numero capicua o no.
los numeros capicua se leen igual de izquierda a derecha y viceversa

Ejemplos:
capi(2002); //Devuelve: true
capi(2014); //Devuelve: false

*/

function capi(numero){
    let procesado = parseInt(numero
                    .toString()
                    .split('')
                    .reverse()
                    .join('')
    );
            return numero === procesado;          
}  

console.log(capi(2002));