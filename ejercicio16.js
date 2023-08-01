/*
Enunciado Ejercicio 16
Dada una cadena de texto,devolver cuantas vocales 
(a,e,i,o,u) tiene.

*/

function vocales(texto){
    let coincidencias = texto.match(/[aeiou]/gi);

    return coincidencias ? coincidencias.length : 0;
}

console.log(vocales("caanbaca"));