/*
Enunciado Ejercicio 8
Dado un numero entero, inviertelo y devuelve de nuevo el entero

Ejemplos:
invertirNumero(67) //Devuelve: 76

*/

function invertirNumero(numero){
    let invertido = parseInt(
                        numero
                        .toString()
                        .split('') //convierte en un arreglo ,cada caracter del numero
                        .reverse() // invierte los valores
                        .join('') //une por medio de un critero en este caso ninguno
                    ) * Math.sign(numero);
    return invertido;
}

console.log("Numero invertido:",invertirNumero(67));