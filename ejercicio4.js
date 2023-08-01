/*
Enunciado Ejercicio 4
Dada una cadena de texto,darle la vuelta e invertir el orden
de sus caracteres, sin usar metodos propios del Lenguaje,
solo estructuras de control.

Ejemplos:
invertir('hola')  //Devuelve: "aloh"
invertir('carlos')  //Devuelve: "solrac"
invertir('andres')  //Devuelve: "serdna"
*/

//primera solucion
// function invertir(texto){
//     let invertido ="";

//     for (let letra of texto){ //el for of saca los valores 
//         invertido = letra + invertido;
        
//     }
//     return invertido;
// } 


//segunda solucion
function invertir(texto){
    return texto.split("").reverse().join('');
}

console.log("texto invertido:",invertir("carlos"))