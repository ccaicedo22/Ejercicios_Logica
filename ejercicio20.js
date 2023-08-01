/*
Enunciado Ejercicio  20
Dado dos cadenas de texto,crear un algoritmo que compruebe
si son anagramas entre si.

Ejemplos:
anagramas('Riesgo'.'Sergio') //Devuelve: true
anagramas('carlos'.'andres') //Devuelve: false

*/


function limpiarTexto(texto){
    return texto
            .replace(/[^\w]/gi,'')
            .toLowerCase()
            .split('')
            .sort()
            .join('')
    
    ;

}

function anagramas(texto1 ,texto2){
    return limpiarTexto(texto1) === limpiarTexto(texto2);
}

console.log(anagramas("Riesgo","SerGio"));